# Segunda sesión presencial · Salud Comunitaria Basada en Activos
**Fecha:** 26 de octubre de 2026 · **Horario:** 9:00–13:00 · **Sede:** Sala Triangular, Distrito Sanitario.

## Estructura acordada

Se mantienen las franjas de `PLANIFICACIÓN SESIÓN 2.odt` facilitadas por la organización:

- 09:00–09:15: repaso y presentación.
- 09:15–10:00: incidencias, dudas y ejemplos en Localiza Salud, con uso exclusivo por parte del docente.
- 10:00–10:30: trabajo de cinco grupos de cinco personas.
- 10:30–11:30: desayuno.
- 11:30–12:30: plenario. Diez minutos para cada grupo (50 minutos) y diez minutos para intercambio conjunto.
- 12:30–13:00: conclusiones.

## Cinco encargos

**Grupos 1, 2 y 3: áreas temáticas**, no supuestos ficticios:

1. **Mapeo:** lectura crítica de metodología y decisiones abordadas en la primera sesión; sin diseñar de nuevo ni ejecutar un mapeo.
2. **Registro en Localiza Salud:** comprobaciones, incidencias, criterios, validación y propuestas de mejora, sin usar la aplicación (solo la utiliza el docente en la demostración conjunta).
3. **Difusión y recomendación:** circuitos sanitarios, intersectoriales y horizontales ciudadanos. Diraya se aborda solo cuando el procedimiento esté disponible.

**Grupos 4 y 5: supuestos para diseñar sesiones lideradas e impartidas por profesionales sanitarios del centro de salud (preferentemente enfermería comunitaria, con participación de la trabajadora social):**

4. **Sesión clínica:** profesionales sanitarios del centro de salud lideran e imparten una sesión clínica para formar al resto de profesionales de su unidad asistencial en la recomendación de los activos ya mapeados. La trabajadora social participa en la formación. El grupo diseña el encuentro, no registra ni recomienda pacientes reales.
5. **Sesión formativa para líderes asociativos:** profesionales sanitarios del centro de salud, preferentemente enfermería comunitaria con participación de la trabajadora social, **lideran, organizan e imparten** una formación sobre **cómo recomendar activos para la salud**. Las personas dirigentes y dinamizadoras del tejido asociativo aprenden a recomendar activos desde sus propias redes ciudadanas, a facilitar su acceso y a fomentar una **cultura de recomendación horizontal**. A diferencia del grupo 4, no es una sesión clínica: es formación comunitaria liderada e impartida por el equipo sanitario del centro de salud. **Ambas actividades son responsabilidad docente de profesionales sanitarios**; cambian los destinatarios y la forma posterior de recomendar. No se plantea el uso de Diraya por las asociaciones.

Cada grupo presenta el producto y lo defiende en el plenario, durante diez minutos.

## Materiales web

- `sesion-2.html`: cinco pantallas navegables, programa, encargos, guion, QR compartido para la ficha online y plenario.
- `ficha-sesion-2.html`: ficha móvil de cada grupo (selección de grupo o enlace con `?grupo=1` a `?grupo=5`). Los envíos confirmados se guardan en Firestore; muestra un código de recepción y permite descargar una copia de seguridad.
- `fichas-sesion-2.html`: cinco fichas imprimibles, individuales o juntas, cada una con su QR que preselecciona el grupo.
- `content/grupos-sesion-2.js`: única definición estructurada de los cinco encargos; la ficha online y las fichas impresas la comparten.
- `firebase-config.js`, `firestore.sesion-2.rules.example` y `FIREBASE-SESION-2.md`: configuración pública, regla aditiva de seguridad e instrucciones de activación.

## Relación con sesión 1

No se modifican sus páginas ni su itinerario. La nueva sesión se enlaza desde la portada del curso, la barra de navegación y el directorio de contenidos. La ficha móvil de la segunda sesión envía los datos a una colección propia en Firebase Firestore. El formulario permite además descargar una copia local como respaldo. Para que los envíos funcionen hay que publicar previamente la regla Firestore aditiva y comprobarlos en el proyecto `aula-salud-comunitaria`.

**Advertencias metodológicas:** identificación, registro, validación, difusión y recomendación son pasos distintos. No presumir que todo registro equivale a activo validado, ni que todo activo aparece en Diraya. Evitar datos personales en los ejemplos y materiales.

## Fuentes de la planificación

- Documento original: `PLANIFICACIÓN SESIÓN 2.odt` entregado por la organización el 21/10/2026.
- Aclaraciones posteriores de la organización: no diseñar de nuevo el mapeo; uso de Localiza Salud solo por el docente; tres grupos temáticos y dos supuestos; exposición obligatoria de diez minutos por grupo en el plenario.
