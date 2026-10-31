# Planificación y evaluación en salud local · propuesta 2027

Curso de 30 horas (15 presenciales + 15 no presenciales) sobre planificación y
evaluación de la promoción de la salud y la acción local en salud. Dirigido a
Enfermería Familiar y Comunitaria, trabajo social y medicina.

**Estado:** propuesta docente del 31/10/2026, pendiente de validación
institucional. Fechas, sede, acreditación y profesorado sin concretar.

## Fuente única

`materiales_2027.json` contiene todos los textos (programa, caso, tres sesiones,
tres trabajos y bibliografía). Tras editarlo, ejecutar:

```bash
node planificacion-evaluacion/generar_pdfs.mjs
```

El script regenera los PDF de `materiales/` e incrusta el JSON en `index.html`
(`<script id="datos-curso">`). Así la página funciona aunque falle la petición
del JSON o se abra como archivo local. Si los datos incrustados faltan, la
página intenta cargar `materiales_2027.json`.

`generar_pdf.mjs` deriva de `redcap/generar_pdf_2027.mjs` (sin dependencias);
solo cambian cabecera, pie y notas.

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
