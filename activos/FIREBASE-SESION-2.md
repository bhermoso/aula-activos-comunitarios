# Segunda sesión de activos · QR y entregas en Firebase

**Curso:** Salud Comunitaria Basada en Activos · **Fecha:** 26/10/2026

## Qué está preparado

- **Pantalla con QR:** `activos/sesion-2.html#ficha`
- **Ficha móvil:** `activos/ficha-sesion-2.html`
- **QR individuales por grupo:** en `activos/fichas-sesion-2.html`, seleccionan directamente los grupos 1–5 mediante `?grupo=1` … `?grupo=5`.
- **Destino de envíos:** Firebase `aula-salud-comunitaria`, colección `cursos/salud-comunitaria-activos-2026/sesion2_entregas`.
- **Recepción confirmada:** tras `addDoc` satisfactorio la web muestra confirmación y un código; ante error mantiene los textos en pantalla y ofrece respaldo descargable.
- **Privacidad:** no se incluyen datos clínicos ni se solicitan datos personales. El alumnado no puede leer respuestas ajenas mediante la ficha. Las lecturas administrativas se hacen desde Firebase Console con permisos del proyecto.
- **No hay lectura pública, actualización ni borrado en la regla de ejemplo**. Enviar una corrección crea otra aportación; conviene acordar una única persona remitente por grupo.

## Estado real: parte pendiente de publicar

El código de la ficha, los enlaces y los QR están en GitHub. **No se ha publicado ninguna regla en el proyecto Firebase ni se ha confirmado una escritura de extremo a extremo** desde este entorno. Hasta que no se haga, el envío puede fallar con `permission-denied`. No anunciar al alumnado que la recepción está operativa sin hacer una prueba.

## Activación en la consola Firebase (sin afectar Compás ni Fuente Vaqueros)

1. Abrir <https://console.firebase.google.com/project/aula-salud-comunitaria/firestore/rules>.
2. Revisar las reglas actuales; **no sustituirlas**. Dentro del bloque `service cloud.firestore { match /databases/{database}/documents { ... } }` añadir **solo** el bloque `match /cursos/salud-comunitaria-activos-2026/sesion2_entregas/{entregaId}` del archivo [`firestore.sesion-2.rules.example`](firestore.sesion-2.rules.example), al mismo nivel que los demás `match`.
3. Guardar/publicar las reglas tras comprobar que no se pierden los permisos existentes de Compás y Fuente Vaqueros.
4. Comprobar que **Firebase Authentication → Sign-in method → Anónimo** sigue habilitado en el proyecto.
5. En un navegador o móvil, visitar la [ficha online](https://bhermoso.github.io/aula-activos-comunitarios/activos/ficha-sesion-2.html), seleccionar grupo 1, introducir contenido *ficticio e identificado como prueba* y enviarlo.
6. Comprobar el aviso de confirmación y la existencia de un documento dentro de `cursos → salud-comunitaria-activos-2026 → sesion2_entregas` en la consola de Firestore. Borrar la prueba desde la consola con permisos administrativos cuando no sea necesaria.
7. Comprobar que la página pública no permite leer ni modificar las fichas de otros grupos.
8. Escanear en un dispositivo real tanto el QR común del programa como el QR impreso del grupo 4 y verificar que el destino es correcto y que el grupo 4 queda preseleccionado.
9. Configurar **App Check** para el dominio público del Aula (reCAPTCHA v3 o proveedor compatible), poner la clave pública en `window.ACTIVOS_APPCHECK_SITE_KEY` y comprobar la recepción de tokens **antes de habilitar enforcement**. Actualmente la clave de App Check figura como `null` y no está verificada.

El QR abre una página del Aula publicada en GitHub Pages, mientras que **las respuestas se envían a Firebase Firestore**. Si se desea alojar también el formulario en Firebase Hosting, crear un sitio/target independiente, verificar la URL final y **actualizar después todos los QR**. No cambiar el sitio por defecto del proyecto ni el target de Fuente Vaqueros.

## Esquema de una entrega

`grupoNumero` (1–5), `grupoId` (mapeo/registro/recomendacion/clinica/asociaciones), `respuestas`, `criterios`, `propuesta`, `exposicion`, `pregunta`, `curso`, `sesion`, `origen`, `createdAt`.

La ficha exige el grupo, la respuesta principal y el guion para la exposición. Las otras respuestas son opcionales; el alumnado solo puede crear un documento con el esquema permitido. El backend no guarda automáticamente lo que se está escribiendo antes de pulsar «Enviar».

## Administración

Para consultar todas las respuestas, usar la consola de Firebase con una cuenta de la organización que tenga permisos de Firestore. **No habilitar lectura anónima** para mostrar las fichas en la presentación. Si se construye una pantalla privada de revisión, debe tener autenticación y reglas específicas por identidad; ocultar un enlace no constituye una medida de seguridad.
