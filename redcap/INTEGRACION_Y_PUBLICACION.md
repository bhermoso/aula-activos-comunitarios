# Integración del Aula REDCap — Básico y Avanzado (2027)

Esta carpeta contiene el Aula REDCap con dos cursos, diez PDF docentes generados desde una fuente estructurada, recursos web imprimibles y un diccionario de prácticas. La página `index.html` es el catálogo de la plataforma con el acceso a los tres módulos existentes.

## Incluido
- REDCap Básico: cuatro unidades, sesiones, prácticas, casos y rúbricas.
- REDCap Avanzado: cuatro unidades centradas en arquitectura, seguimiento, encuestas, informes y control de calidad; la sintaxis se utiliza como herramienta de apoyo.
- Navegación por pantallas y unidades; presentación y cronómetro.
- Listas de comprobación que se guardan en el navegador local, **no en una cuenta de alumno**.
- Todos los documentos de apoyo del ZIP original y el diccionario CSV.

## Despliegue sin sobrescribir otros módulos
Desde un clon del repositorio `bhermoso/aula-activos-comunitarios`, copiar `redcap/` completo, incluida la carpeta `materiales/`, y actualizar la portada principal. El script `publicar_redcap.sh` realiza esto desde la carpeta del paquete; exige que Git esté instalado y que el usuario ya esté autenticado para hacer push.

## Pendiente para un aula con gestión de alumnado
- Vincular a un proyecto Firebase concreto y verificar su configuración de Authentication y Firestore.
- Diseñar y aplicar reglas de seguridad por participante y rol docente.
- Entregas, evaluación, recuperaciones, seguimiento y exportación de datos del alumnado.
- Verificar la publicación efectiva en GitHub Pages y comprobar enlaces tras el despliegue.

No se han fabricado cuentas ni datos de alumnado. No se envían respuestas ni resultados a Firebase desde el paquete estático.


## Rediseño docente 2027 · publicado en GitHub Pages el 18/10/2026

La PR #29, fusionada en `main` como `4c7314f02576c7978c65159875201171cc43caab`, incorporó las versiones revisadas de los cursos. El despliegue de GitHub Pages finalizó con éxito: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39098373729. Estas versiones están publicadas pero **no constan validadas institucionalmente por Gesforma**. Básico: instrumento sencillo, encuesta inicial, validaciones, privacidad y una condición guiada. Avanzado: elección de arquitectura transversal/longitudinal/repetible según el caso; varios instrumentos, seguimiento, invitaciones, informes y calidad.

**Materiales terminados en la rama:**
- `REDISENO_DOCENTE_2027.md`: competencias, sesiones, trabajos, rúbricas y decisiones.
- `materiales_2027.json`: fuente curricular de 10 materiales.
- `material-2027.html`: lectura accesible de cada guía, con impresión a PDF.
- `redcap/materiales/*.pdf` y duplicados de `redcap/*.pdf`: 10 nuevos PDF (2 programas y 8 guías), idénticos en ambas ubicaciones.
- `generar_pdf_2027.mjs` + `generar_pdf_2027_node.mjs`: generación reproducible desde JSON mediante `node redcap/generar_pdf_2027_node.mjs`.
- `GUIA_SINTAXIS_DE_CONSULTA.md` y `guia-sintaxis.html`: sintaxis opcional, no centrada en memorización.

**Control:** `node --test redcap/tests/redisenio.test.mjs`. Comprobar también lectura, impresión, navegación móvil, enlaces y coherencia con instancia REDCap institucional antes de integrar.

**Pendiente tras publicar:** validación formal de competencias, cronograma y evaluación por Gesforma; comprobación del REDCap institucional y diccionario de hábitos de vida; prueba de navegador real y móvil; valorar conservar PDF previos en archivo histórico. La publicación web y el éxito de CI no equivalen a validación docente ni verificación de todas las opciones del REDCap institucional. Los PDF nuevos son **material docente en revisión**, no programas oficiales aprobados. El seguimiento del alumnado no está implementado.

La publicación fue solicitada expresamente por el usuario el 18/10/2026. No se modificaron los otros módulos del Aula ni Firebase.


### Plantilla de seguimiento 2027 · 17/10/2026

Incorporada en la PR #29 la plantilla docente `redcap/materiales/plantilla_seguimiento_2027_diccionario.csv`, con 15 campos y tres instrumentos técnicos (ficha inicial, hábitos y seguimiento). Está enlazada desde REDCap Avanzado y documentada en `redcap/PLANTILLA_SEGUIMIENTO_2027.md`. **Su importación no crea eventos longitudinales, repetición ni encuestas**: el alumnado debe elegir y configurar esa arquitectura según necesidad y permisos. Se amplía el test de regresión para vigilar la plantilla.

## Corrección del asistente de tipos de campo · 18/10/2026

El aviso didáctico sobre seleccionar `Checkboxes` para una pregunta de respuesta única aparecía fijo incluso cuando el alumnado elegía otro tipo de campo. Se ha sustituido en una rama de corrección por un bloque contextual que muestra un consejo distinto para cada una de las siete opciones disponibles (texto corto, notas, cálculo, Sí/No, Radio Buttons, Drop-down, Checkboxes). El cambio de «Abierta» a «Entre opciones» borra el consejo anterior y reinicia la selección secundaria. Se añade accesibilidad con `aria-live`, estados `aria-pressed` y pruebas que simulan interacciones; el flujo de navegación del resto del aula no cambia.

Archivos: `redcap/index.html`, `redcap/tests/tipo-campo.test.mjs` y `.github/workflows/redcap-validacion.yml`. Este último ejecuta todas las pruebas del directorio `redcap/tests/`.

**Estado:** PR #32 fusionada con autorización expresa del usuario en `main`, commit `d4d07c0bcab28fc7c62f10a27042ea42d3cda4fb`. Las pruebas automatizadas de la rama y de `main` han superado la validación. Ejecución del despliegue de Pages: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39112667947. Sin validación visual directa en navegador. No afecta a otros módulos.
