# Planificación y evaluación en salud local · propuesta 2027

Curso de 20 horas (10 presenciales en 2 sesiones + 10 virtuales) sobre planificación y
evaluación de la promoción de la salud y la acción local en salud. Dirigido a
Enfermería Familiar y Comunitaria, trabajo social y medicina.

**Estado:** propuesta docente del 31/10/2026, pendiente de validación
institucional. Fechas, sede, acreditación y profesorado sin concretar.

## Fuente única

`materiales_2027.json` contiene todos los textos (programa, caso, dos sesiones presenciales,
dos bloques virtuales y bibliografía). Tras editarlo, ejecutar:

```bash
node planificacion-evaluacion/generar_pdfs.mjs
```

El script regenera los PDF de `materiales/` e incrusta el JSON en `index.html`
(`<script id="datos-curso">`). Así la página funciona aunque falle la petición
del JSON o se abra como archivo local. Si los datos incrustados faltan, la
página intenta cargar `materiales_2027.json`.

`generar_pdf.mjs` deriva de `redcap/generar_pdf_2027.mjs` (sin dependencias);
solo cambian cabecera, pie y notas.

## Herramientas integradas

`herramientas/checklist-planificacion.html` y `herramientas/checklist-evaluacion.html`
proceden de `bhermoso/CHECKLISTPLANIFICACION` (commit `b0b149b`) y
`bhermoso/CHECKLISTEVALUACION` (commit `ccf8fd7`), licencia MIT. Textos, ítems,
umbrales y JavaScript se conservan sin cambios. Solo se añaden dos líneas:

- `<link rel="stylesheet" href="aula-checklist.css">` antes de `</head>`, con la
  capa de estilo del Aula (verde profundo, papel claro, Georgia);
- una barra superior (`.aula-bar`) tras `<body>`, con «Volver al curso»,
  «Imprimir o guardar PDF» y «Aula · Inicio».

Para actualizar desde los originales: copiar de nuevo `index.html` y volver a
insertar esas dos líneas (están marcadas con comentarios «capa del Aula»).

## Aspecto del curso

La aplicación sigue el patrón del curso de REDCap del Aula: cabecera oscura,
barra lateral con sesiones numeradas y distintivos (presencial en verde
azulado, virtual en ocre), subapartados navegables, agenda como línea temporal
y controles «Anterior / Siguiente». Flechas del teclado para avanzar y modo
«Presentar» que oculta la barra lateral.

## Bases metodológicas

- COMPÁS NG (`bhermoso/compas-ng-renovado`): ciclo de seis etapas y regla de no
  mezcla, gramática del plan, principios de tiempo cero, responsable nominal,
  necesidades no priorizadas, distinción actuación/actividad/entrega/consolidación
  y separación entre actuaciones municipales y del sistema sanitario (ESCA).
- Listas de comprobación de planificación (44 ítems) y evaluación (33 ítems) de
  EpS grupal, B. R. Hermoso y J. Serrano, 2025.
- RAPS (`bhermoso/REGISTRO-PS`) como ejemplo de registro de actividad para el
  seguimiento de proceso.
- EPVSA 2024-2030 (4 líneas, 10 objetivos estratégicos, indicadores de contexto
  e impacto) y ESCA 2026-2030 (tres niveles de orientación comunitaria),
  comprobados en los PDF de `compas-ng-renovado/docs/source-material`.

## Cautelas

- El caso de trabajo es Zagra (Granada). Fuentes: expediente de Zagra en
  COMPÁS NG (`municipalities/zagra/`: priorización de 27/04/2017, inventario de
  activos, presentaciones del técnico de acción local), población INE 2025
  (`fixtures/population/zagra-population-2025.ts`) y síntesis del Perfil de
  Salud Local publicada en `zagra/presentacion-perfil.html` (borrador de
  26/10/2026, sin validar). No se reproducen nombres ni teléfonos del
  inventario de activos.
- La hoja de priorización de 2017 tiene incoherencias (escala 1-3 con valores de
  hasta 13, columnas de magnitud y dificultad idénticas, total sin fórmula
  documentada). El curso las presenta como material de análisis, sin
  corregirlas.
- El Plan de Acción de Zagra en COMPÁS adapta la estructura de cuatro bloques
  del Zaidín: es una propuesta técnica, no un acuerdo del Grupo Motor.
- Las listas de comprobación originales incluyen la frase «una buena
  planificación determina el 80 % del éxito del programa». No consta fuente para
  esa cifra y no se ha reproducido en el curso.
