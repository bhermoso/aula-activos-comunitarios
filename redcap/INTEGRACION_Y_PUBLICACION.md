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


## Rediseño docente 2027 · rama de revisión · no publicado

La rama `redcap-redisenio-competencias-2027-20261017` reúne las versiones revisadas de los cursos. Básico: instrumento sencillo, encuesta inicial, validaciones, privacidad y una condición guiada. Avanzado: elección de arquitectura transversal/longitudinal/repetible según el caso; varios instrumentos, seguimiento, invitaciones, informes y calidad.

**Materiales terminados en la rama:**
- `REDISENO_DOCENTE_2027.md`: competencias, sesiones, trabajos, rúbricas y decisiones.
- `materiales_2027.json`: fuente curricular de 10 materiales.
- `material-2027.html`: lectura accesible de cada guía, con impresión a PDF.
- `redcap/materiales/*.pdf` y duplicados de `redcap/*.pdf`: 10 nuevos PDF (2 programas y 8 guías), idénticos en ambas ubicaciones.
- `generar_pdf_2027.mjs` + `generar_pdf_2027_node.mjs`: generación reproducible desde JSON mediante `node redcap/generar_pdf_2027_node.mjs`.
- `GUIA_SINTAXIS_DE_CONSULTA.md` y `guia-sintaxis.html`: sintaxis opcional, no centrada en memorización.

**Control:** `node --test redcap/tests/redisenio.test.mjs`. Comprobar también lectura, impresión, navegación móvil, enlaces y coherencia con instancia REDCap institucional antes de integrar.

**Pendiente antes de publicar:** validación de competencias, cronograma y evaluación por Gesforma; cotejo del diccionario CSV de hábitos de vida y la instalación institucional; prueba de navegador real; decidir si conservar PDF previos en archivo histórico. Los PDF nuevos son **material docente en revisión**, no programas oficiales aprobados. El seguimiento del alumnado no está implementado.

**Restricción:** no fusionar PR ni desplegar sin nueva autorización expresa. No se han modificado los otros módulos del Aula ni Firebase.


### Plantilla de seguimiento 2027 · 17/10/2026

Incorporada en la PR #29 la plantilla docente `redcap/materiales/plantilla_seguimiento_2027_diccionario.csv`, con 15 campos y tres instrumentos técnicos (ficha inicial, hábitos y seguimiento). Está enlazada desde REDCap Avanzado y documentada en `redcap/PLANTILLA_SEGUIMIENTO_2027.md`. **Su importación no crea eventos longitudinales, repetición ni encuestas**: el alumnado debe elegir y configurar esa arquitectura según necesidad y permisos. Se amplía el test de regresión para vigilar la plantilla.
