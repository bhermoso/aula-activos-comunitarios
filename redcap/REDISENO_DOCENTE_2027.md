# Propuesta curricular REDCap Básico y Avanzado 2027

> Revisión docente del 17/10/2026. **Publicado en el Aula el 18/10/2026, mediante PR #29 (fusión `4c7314f`). Pendiente de validación como programa institucional por Gesforma.** No modifica duración ni fechas anunciadas. La programación definitiva y los criterios de certificación requieren revisión y validación institucional; los diez PDF fueron regenerados y publicados.

## Decisión metodológica

**REDCap avanzado no equivale a memorizar sintaxis avanzada**. Progresar desde construir un instrumento correcto hasta diseñar, comprobar y gestionar proyectos de recogida de datos con varios instrumentos, seguimiento, encuestas e indicadores de calidad. La lógica, las funciones y los Action Tags siguen disponibles como herramientas para resolver problemas, con anexos consultables. Evaluar decisiones documentadas y pruebas verificables, no cantidad de expresiones.

No asumir que toda funcionalidad está habilitada en cualquier instalación REDCap: verificar versión, permisos, entorno institucional, opciones de encuestas, automatizaciones, módulos y política de datos. Trabajar únicamente con registros ficticios en la formación.

## Público y metodología

Profesionales de salud pública, atención primaria, enfermería, trabajo social, gestión sanitaria e investigación que diseñan y utilizan instrumentos de recogida de datos. Aprendizaje basado en caso progresivo (ejemplo: evaluación de hábitos de vida en servicios de salud), trabajo en parejas, comprobaciones por escenarios y documentación breve. El curso Básico no exige experiencia con REDCap. Para Avanzado se recomienda poder crear y probar un instrumento sencillo, definir variables y exportar datos con seguridad.

## Resultados de aprendizaje observables

| Básico: al finalizar, la persona puede… | Avanzado: al finalizar, la persona puede… |
| --- | --- |
| Definir finalidad, población, unidad de observación y variables antes de abrir REDCap | Elegir arquitectura de proyecto según objetivos, momentos de recogida, equipo y seguimiento |
| Construir, codificar y validar un instrumento | Coordinar varios instrumentos y decidir entre recogida transversal, eventos longitudinales e instrumentos repetibles |
| Distinguir formulario de captura y encuesta autoadministrada; activar y probar una encuesta cuando lo permita su rol | Planificar distribución, invitaciones, recordatorios y seguimiento evitando duplicidades y exposiciones indebidas |
| Añadir y probar una condición simple de visualización, con ayuda | Seleccionar condiciones, cálculos o Action Tags solo cuando aporten valor; depurar casos límite |
| Crear registros ficticios, revisar CSV y diccionario | Construir informes adecuados a roles, aplicar reglas de calidad y documentar correcciones |
| Reconocer identificadores, permisos mínimos y ciclo de desarrollo/producción | Validar el sistema con perfiles y escenarios, gestionar cambios, versiones y transición controlada a producción |

## REDCap Básico 2027 · 20 horas

**S1 presencial · 5 h — Del objetivo al primer instrumento**
- 09:00–09:20: bienvenida, accesos, objetivo del caso y pre-test.
- 09:20–10:05: proyecto, formulario, cuestionario, campo, registro y unidad de observación.
- 10:05–11:15: diseño, codificación, tipos, validaciones y diccionario.
- 11:15–11:45: descanso.
- 11:45–13:15: crear un instrumento breve y realizar 3 registros ficticios.
- 13:15–13:45: CSV, control visual de coherencia y correcciones.
- 13:45–14:00: cierre y tarea.

**T1 no presencial · 5 h — Completar y comprobar el instrumento**
Ampliar el formulario; completar notas y validaciones; probar cinco perfiles ficticios con fronteras y vacíos; entregar diccionario, casos de prueba y breve justificación. Evitar exportar datos reales. Evaluación (10 puntos): adecuación y coherencia de variables (3), codificación/validaciones (3), pruebas (3), documentación (1).

**S2 presencial · 5 h — Encuestas sencillas y utilización segura**
- 09:00–09:35: corrección de errores de diseño.
- 09:35–10:15: guardar registros, controles de estado, prueba en desarrollo.
- 10:15–11:15: privacidad, seudonimización, permisos básicos y exportaciones.
- 11:15–11:45: descanso.
- 11:45–12:35: convertir un instrumento en encuesta, URL de prueba, instrucciones y experiencia de respuesta.
- 12:35–13:15: condición sencilla de visualización (*branching*), vacíos y prueba positiva/negativa.
- 13:15–13:45: prueba cruzada por parejas y diccionario/versiones.
- 13:45–14:00: cierre.

**T2 no presencial · 5 h — Entrega funcional documentada**
Finalizar instrumento y encuesta de prueba si hay permisos, documentar barreras cuando no los haya; probar con otra persona; corregir problemas; entregar diccionario, tabla breve de incidencias, evidencia de prueba y ficha de finalidad/protección. Evaluación (10): instrumento (3), experiencia de respuesta/condición (2), protección de datos (2), prueba cruzada (2), documentación (1).

## REDCap Avanzado 2027 · 20 horas

**S1 presencial · 5 h — Arquitectura de proyectos y seguimiento**
- 09:00–09:30: caso y criterios de elección del diseño.
- 09:30–10:30: proyectos con varios instrumentos, registros, relaciones y momentos de recogida.
- 10:30–11:15: decidir entre evento longitudinal e instrumento repetible mediante casos.
- 11:15–11:45: descanso.
- 11:45–12:30: organización de trabajo por roles, DAG cuando procedan y flujo del dato.
- 12:30–13:20: taller de diseño y ensayo con registros ficticios.
- 13:20–13:45: automatizaciones, cálculos y expresiones **solo en un ejemplo pertinente**, usando guía de consulta.
- 13:45–14:00: checklist y trabajo 1.

**T1 no presencial · 5 h — Modelo y prueba de seguimiento**
Definir escenario, unidad de análisis, uno o varios instrumentos, calendario de recogida y estrategia de seguimiento. Construir una versión mínima en REDCap o explicar limitaciones de permisos. Probar rutas de captura, ausencias y duplicados. Entregar plano de arquitectura, diccionario, tabla de pruebas y decisión justificada. Rúbrica (10): adecuación de arquitectura (4), consistencia de identificadores/tiempos (2), pruebas (3), justificación (1). **No exigir un número mínimo de fórmulas**.

**S2 presencial · 5 h — Operación de encuestas, calidad y uso de la información**
- 09:00–09:35: evaluación cruzada de proyectos.
- 09:35–10:25: mecanismos de invitación y seguimiento de encuestas, anonimato y permisos.
- 10:25–11:15: informes para seguimiento del trabajo, filtros y cuadros básicos.
- 11:15–11:45: descanso.
- 11:45–12:35: validación y reglas de calidad, contradicciones y valores ausentes.
- 12:35–13:20: ensayar cambios, versiones y paso controlado a producción.
- 13:20–13:45: prueba transversal con distintos perfiles y exportación proporcionada.
- 13:45–14:00: cierre y entrega final.

**T2 no presencial · 5 h — Auditoría del proyecto y plan de uso**
Ejecutar casos de prueba con 3 perfiles ficticios y al menos un error introducido deliberadamente, revisar coherencia e informe, documentar incidencia/corrección y elaborar una ficha de puesta en marcha (permisos, datos, roles, versiones, contingencia). Rúbrica (10): operación (2), calidad (3), pruebas y trazabilidad (3), documentación (2).

## Sintaxis: secuencia y material de consulta

- **Básico:** entender `[fuma_actual] = '1'`, comprobar qué aparece y qué no, y distinguir código de etiqueta. No memorizar operadores.
- **Avanzado:** introducir operadores lógicos, referencias a checkbox, tratamiento de vacíos, cálculos y Action Tags cuando los exija el caso. Un anexo contiene plantillas comentadas y casos de frontera; no se exige escribir `if()` anidados como fin en sí mismo.
- **Acompañamiento:** ficha opcional `redcap/GUIA_SINTAXIS_DE_CONSULTA.md`; comprobar siempre la expresión real en el entorno REDCap institucional.

## Evaluación y certificación

Se mantiene de forma **provisional** la estructura publicada: 20% entrega 1, 20% entrega final y 60% post-test; asistencia >=80%, post-test >=5/10 y nota global >=5. **Revalidar con el programa institucional de Gesforma** antes de publicar estos porcentajes como definitivos. La rúbrica debe ponderar diseño justificado, funcionamiento, pruebas y tratamiento responsable del dato. La actividad con sintaxis no decide el aprobado.

## Dependencias y trabajos pendientes

1. Confirmar versión y capacidades del REDCap institucional (longitudinal, repetibles, invitaciones automatizadas, DAG, Data Quality, informes), además de disponibilidad de proyectos de práctica.
2. Validar el reparto de horas, los resultados de aprendizaje y el caso docente con la organización.
3. **Cumplido en rama:** diez PDF regenerados desde `materiales_2027.json`, reproducibles mediante `node redcap/generar_pdf_2027_node.mjs`, duplicados en las dos rutas originales. Lectura web en `material-2027.html`. Falta validación editorial de su contenido y revisión visual real del PDF.
4. Alinear pre/post-test, rúbricas, diccionario `plantilla_habitos_vida_diccionario.csv` y recursos de navegación.
5. Verificar navegación, enlaces, opciones de visualización, móvil y modo presentación. Las casillas del Aula guardan estado únicamente en el navegador; no constituyen seguimiento individual del alumnado.
6. No cambiar ni publicar otros módulos del Aula.

## Fuentes para contraste docente

- Manuales y vídeos oficiales REDCap: https://projectredcap.org/resources/
- Training materials REDCap: https://projectredcap.org/resources/videos/
- Documentación local del REDCap institucional y material original de los cursos, cuando esté disponible.

La presente es una **propuesta curricular ya publicada en el Aula**, por autorización expresa de 18/10/2026. Publicada no significa aprobada oficialmente por Gesforma ni verificada contra todas las funcionalidades del REDCap institucional.


## Ejecución del rediseño (17/10/2026)

Completados y publicados mediante PR #29 los itinerarios interactivos, diez PDF nuevos, lectura web, guía opcional de sintaxis y tests de correspondencia PDF-fuente. Las duraciones y fechas se mantienen sin acreditar que hayan sido autorizadas formalmente para Gesforma. No está auditada la compatibilidad con el REDCap institucional. Los archivos anteriores han sido sustituidos en `main` y GitHub Pages. Verificación: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39098373729 (despliegue completado con éxito). No se pudo comprobar desde este entorno la apertura directa de las páginas públicas.


### Plantilla de seguimiento 2027 · 17/10/2026

Incorporada en la PR #29 la plantilla docente `redcap/materiales/plantilla_seguimiento_2027_diccionario.csv`, con 15 campos y tres instrumentos técnicos (ficha inicial, hábitos y seguimiento). Está enlazada desde REDCap Avanzado y documentada en `redcap/PLANTILLA_SEGUIMIENTO_2027.md`. **Su importación no crea eventos longitudinales, repetición ni encuestas**: el alumnado debe elegir y configurar esa arquitectura según necesidad y permisos. Se amplía el test de regresión para vigilar la plantilla.
