# REDCap · guía de consulta de lógica y expresiones (2027)

> **Apoyo opcional** a REDCap Básico y Avanzado. No es un temario independiente ni una prueba de memorización. Probar cada ejemplo con datos ficticios y verificar compatibilidad con la versión REDCap institucional.

## Primer paso: decidir si hace falta lógica

Antes de escribir una condición, preguntar: ¿esa pregunta se aplica a toda la población?, ¿qué ocurrirá si el dato previo está vacío?, ¿sería suficiente mejorar el orden o las instrucciones? Una lógica correcta no compensa un diseño metodológico incorrecto.

## Básico · primera condición visual

Pregunta de selección única `fuma_actual` con valores `1, Sí | 0, No`. El campo `cig_dia` se mostrará solo cuando tenga sentido.

```text
[fuma_actual] = '1'
```

**Tres pruebas mínimas**: «Sí»: visible; «No»: oculto; sin respuesta: comprobar comportamiento y decidir si se necesita otra instrucción. El código de opción, y no su etiqueta, es lo que evalúa REDCap.

## Avanzado · patrones para consultar cuando hagan falta

| Necesidad | Patrón orientativo | Verificar |
| --- | --- | --- |
| Dos criterios | `[consentimiento] = '1' and [mayor_edad] = '1'` | Ambos presentes |
| Alternativas | `[canal] = '1' or [canal] = '2'` | Casos sin respuesta |
| Checkbox | `[barreras_af(2)] = '1'` | Código exacto de la opción |
| Campo cumplimentado | `[peso_kg] <> ''` | Vacíos/NA |
| Cálculo simple | `round([peso_kg]/(([talla_cm]/100)^2),1)` | Unidades, cero y ausencias |
| Fecha o puntuación | Usar funciones del constructor actual de REDCap | Precisión y ausencias |
| Control de calidad | Definir una condición cuya verdad indica un **error** | Probar un registro incorrecto |

Al combinar `and` y `or`, utilizar paréntesis explícitos. En una casilla múltiple, la referencia incluye el código: `[nombre_variable(codigo)]`. Los nombres de variables se escriben entre corchetes.

### Casos límite necesarios

- Dato previo vacío.
- Un valor igual al umbral (`=150`, no solo `<150` y `>150`).
- Respuestas contradictorias.
- Imposibilidad matemática (división por cero) y magnitudes incompatibles.
- Comportamiento del formulario como encuesta frente a captura por personal.

## Action Tags y cálculos: cuándo utilizarlos

Emplearlos por una necesidad demostrada (valor predeterminado, cálculo requerido, un campo de solo lectura, etc.), **no** por incluirlos en una rúbrica. No convertir ocultar visualmente un campo en una medida de control de acceso o protección de datos. Confirmar compatibilidad de cada anotación en el entorno disponible.

## Diagnóstico breve

1. ¿Nombre real de campo o texto de la pregunta?
2. ¿Código exacto de respuesta?
3. ¿Casilla múltiple o selección única?
4. ¿Comillas, paréntesis y corchetes?
5. ¿Se probó campo vacío y umbral?
6. ¿La regla se aplica al campo correcto?
7. ¿El resultado se confirma por una segunda persona?

## Referencias

- https://projectredcap.org/resources/
- Documentación de la instancia REDCap de la organización y pruebas en proyecto docente.

**Importante:** una expresión de ejemplo no sustituye la revisión del protocolo de recogida, el diccionario ni la verificación real.
