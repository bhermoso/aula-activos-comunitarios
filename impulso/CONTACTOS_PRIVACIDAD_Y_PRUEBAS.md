# Contacto voluntario para la encuesta de Loja · diseño y garantías
**Estado:** IMPLEMENTADO EN CÓDIGO DE PRUEBAS, NO HABILITADO EN PRODUCCIÓN (16-10-2026).

## Quién gestiona
- **Destino y gestión operativa previstos:** Distrito Sanitario Granada–Metropolitano, por indicación del responsable del taller.
- **Responsable general de protección de datos:** Servicio Andaluz de Salud (SAS), según su [información oficial de privacidad](https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/el-sas/protecciondedatos). La unidad directiva, actividad de tratamiento concreta y adecuación de Firebase como infraestructura para datos identificativos requieren validación institucional, no se presumen.
- **Delegado de Protección de Datos del SAS:** `dpd.sspa@juntadeandalucia.es` (referencia oficial para consultas, no buzón de recepción de propuestas).
- **Finalidad propuesta:** contactar voluntariamente con una persona que se ofrece a participar en la continuidad del I Plan Local de Salud de Loja. No utilizar para publicidad, asistencia clínica ni cesión a terceros.

## Diseño de minimización
- La encuesta comunitaria de `encuestas_loja_2026` sigue siendo **sin nombre/correo/teléfono** y registra, cuando corresponda, la intención `participacion`.
- Si alguien marca interés en participar y la opción está aprobada/habilitada, se solicitan **su nombre y al menos uno entre correo o teléfono**; se requiere aceptación explícita de privacidad.
- Se prepara una colección separada `contactos_loja_2026`, no legible, actualizable o eliminable anónimamente; el documento comparte identificador de propuesta **solo para custodia administrativa**, sin mostrarlo públicamente.
- El SDK utiliza `writeBatch`: crea propuesta y contacto de forma atómica. Si falla cualquiera de los dos permisos, no confirma ningún envío.
- La captura de contacto está desactivada por defecto en `firebase-config.js` mediante `contactoHabilitado: false` y `privacidadContactoAprobada: false`. **Ambas** deben activarse tras validación y despliegue de las reglas. Las variables de frontend no son una barrera de seguridad: las reglas del servidor mantienen denegada la colección de contactos.

## Información y decisiones pendientes antes de activarla
1. Confirmación de la actividad de tratamiento, responsabilidad específica del SAS/Distrito, base jurídica y finalidad aprobada por la organización/DPD.
2. Responsable de la administración de Firestore y procedimiento de acceso seguro exclusivamente para personal autorizado del Distrito.
3. Plataforma y encargo de tratamiento/autorización institucional para guardar estos datos en Firebase; revisar ubicación del servicio, posible transferencia internacional y contratos aplicables.
4. Plazo de conservación concreto, procedimiento de supresión y retirada del consentimiento; información de privacidad a primer y segundo nivel.
5. Protección antiabuso App Check, cuotas y comprobaciones en servidor. Las reglas validadoras por sí solas no impiden envíos maliciosos.
6. Validación de reglas específicas de contacto en emulador; pruebas de escritura atómica, lectura pública denegada, rechazo de contacto sin consentimiento y rechazo de campos extra. No abrir contactos en consola de pruebas con datos reales.
7. Prueba administrativa de recepción con contactos ficticios una vez revisadas las garantías, eliminándolos al finalizar.

## Regla complementaria pendiente (NO COPIAR sin validación)
Añadir a las reglas de `impulso/firestore-loja.rules` **solo después de la aprobación**, dentro del mismo `match /databases/{database}/documents`:

```js
match /contactos_loja_2026/{id} {
  allow get, list, update, delete: if false;
  allow create: if request.resource.data.keys().hasAll([
      'nombre', 'correo', 'telefono', 'consentimiento',
      'finalidad', 'responsableOperativo', 'createdAt'
    ]) && request.resource.data.keys().hasOnly([
      'nombre', 'correo', 'telefono', 'consentimiento',
      'finalidad', 'responsableOperativo', 'createdAt'
    ])
    && request.resource.data.nombre is string
    && request.resource.data.nombre.size() > 0
    && request.resource.data.nombre.size() <= 120
    && request.resource.data.correo is string
    && request.resource.data.correo.size() <= 160
    && request.resource.data.telefono is string
    && request.resource.data.telefono.size() <= 25
    && (request.resource.data.correo.size() > 0 ||
        request.resource.data.telefono.size() > 0)
    && request.resource.data.consentimiento == true
    && request.resource.data.finalidad == 'contactar_participacion_loja'
    && request.resource.data.responsableOperativo == 'Distrito Sanitario Granada–Metropolitano'
    && request.resource.data.createdAt == request.time
    && existsAfter(/databases/$(database)/documents/encuestas_loja_2026/$(id))
    && getAfter(/databases/$(database)/documents/encuestas_loja_2026/$(id)).data.participacion == true
    && getAfter(/databases/$(database)/documents/encuestas_loja_2026/$(id)).data.createdAt == request.time;
}
```

**La colección de contacto continuará cerrada mientras esta excepción no esté autorizada en el servidor.**

## Limitación de pruebas
Una prueba de DOM con SDK simulado y comprobación del esquema del cliente no implica que el Firestore real acepte escrituras. El usuario confirmó que sus reglas vigentes siguen siendo `allow read, write: if false`. El estado **bloqueado** es deliberado hasta la aprobación.
