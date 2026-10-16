# Encuesta de actores y sectores · Loja

**Fecha de revisión:** 16/10/2026 · **Estado:** interfaz ampliada preparada para Firestore; recepción central pendiente de publicar reglas y probar escritura real.

## Propósito
Identificar de forma inclusiva sectores, servicios, entidades, movimientos, redes informales y perspectivas habitualmente no representadas en el proceso del I Plan Local de Salud de Loja. La encuesta acepta tanto tipos de actores como entidades concretas y ámbitos territoriales. **Una propuesta no equivale a invitación o acuerdo aprobado.**

## Estructura publicada del formulario
1. **Identificación**: sector desplegable (26 opciones, incluida «Otro sector»), tipo de actor (13 opciones, incluido «Otro tipo de actor»), nombre opcional de entidad/servicio/colectivo y ámbito geográfico (7 opciones, incluido «Otro ámbito»).
2. **Pertinencia**: capacidades, problemas que puede ayudar a abordar, voces que representaría y vínculo entre quien propone y el actor, con texto libre opcional.
3. **Participación voluntaria**: casilla para indicar interés propio en participar; no solicita identidad ni contacto. Los campos de nombre, correo y teléfono se dejan expresamente **desactivados** hasta documentar el responsable, finalidad, base jurídica, plazo de conservación y canales de derechos.

Las categorías integran atención sanitaria, salud pública, salud mental, cuidados, educación, vivienda, empleo, entornos, transportes, ruralidad, diversidad, actividad cultural/deportiva, administraciones, asociaciones, ciudadanía no organizada y redes informales. Las opciones «Otro» abren un campo obligatorio que impide que la clasificación sea un límite.

## Datos y protección
La colección prevista es `encuestas_loja_2026` de Firestore. Campos del esquema actual:
`sector`, `sectorOtro`, `tipo`, `tipoOtro`, `entidad`, `ambito`, `ambitoOtro`, `grupo`, `funcion`, `vinculo`, `participacion` (booleano) y `createdAt` (marca de tiempo del servidor).

- **Solo escritura:** ninguna lectura, actualización o borrado anónimo, ni campos de contacto personal, permitidos por la propuesta de reglas.
- La interfaz solo confirma recepción si `addDoc()` termina correctamente. Con reglas actuales `allow read, write: if false`, Firestore bloqueará los envíos. No afirmar que funciona hasta la prueba real.
- No es una garantía de anonimato: las entradas de texto libre podrían incluir datos personales; se muestra una advertencia para que no los aporten y hay que definir información de privacidad y controles antiabuso.
- El sistema no recupera propuestas que se hubieran conservado antes como borrador local.
- Las respuestas posteriores al encuentro del 16/10 no son resultados de aquella sesión.

## Requisitos para finalizar
1. Revisar las reglas reales vigentes y publicar la excepción de `impulso/firestore-loja.rules` preservando controles del resto del Aula.
2. Verificar al menos una escritura de prueba en consola, y denegaciones de lectura, update, delete y campos extra.
3. Definir y documentar responsable, conservación, ejercicio de derechos y uso previsto; configurar protección frente a abuso, App Check y cuotas antes de difusión amplia.
4. Solo después habilitar, si se aprueba, la recogida **opcional y consentida** de nombre/correo/teléfono propios, con su esquema y reglas separados o revisados. Nunca incorporar contactos de terceros sin legitimación.

La ficha está en `impulso/ficha.html` y el QR en `impulso/qr-ficha.svg`. El bloque de notas dentro de `impulso/index.html` sigue siendo un **borrador personal opcional**, claramente distinguido de la encuesta.
