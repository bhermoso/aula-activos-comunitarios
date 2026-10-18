# Plantilla de seguimiento REDCap 2027 · Avanzado

**Material de prácticas — no instrumento validado ni estudio clínico.** Emplear únicamente datos ficticios y proyectos de prueba habilitados por la organización.

## Qué contiene

Diccionario `materiales/plantilla_seguimiento_2027_diccionario.csv`: **15 campos** distribuidos entre tres instrumentos técnicos:
- `ficha_inicial`: identificador, fecha, edad, centro ficticio y decisión simulada de participación.
- `habitos`: actividad física, tabaco y barrera principal; solo dos condiciones de ejemplo, sencillas.
- `seguimiento`: fecha, estado de revisión, actividad física actual y nota operativa sin datos personales.

La finalidad es modelar y comprobar una recogida en dos momentos, no calcular puntuaciones complejas.

## Importante: qué NO configura el diccionario

Importar un diccionario de datos **no crea automáticamente** los eventos longitudinales, convierte formularios en repetibles, activa el modo encuesta, asigna participantes, concede permisos ni envía invitaciones. Esas decisiones se realizan en las opciones de configuración y organización del proyecto, de acuerdo con la versión de REDCap y autorizaciones disponibles.

## Ejercicio propuesto

1. Crear un proyecto **de pruebas** y confirmar que no contiene datos reales. Guardar un diccionario de respaldo antes de cambios.
2. Subir el CSV desde el diccionario de datos y comprobar el resultado. Elegir conscientemente entre proyecto clásico, eventos longitudinales y un instrumento repetible.
3. Si se escogen eventos fijos, definir basal y revisión a tres meses y vincular formularios según el diseño.
4. Si se escoge repetición, habilitar el instrumento indicado y comprobar cómo cambian los identificadores de instancia y las exportaciones.
5. Probar con P001 y P002 (identificadores ficticios), uno con revisión y otro sin ella. Comprobar que un seguimiento pendiente no equivale a cero.
6. Exportar los datos ficticios con las columnas necesarias y explicar cómo distinguir registros, eventos e instancias.
7. Documentar diseño seleccionado, inconvenientes, pruebas y correcciones.

**El objetivo no es activar todas las opciones posibles:** escoger la solución más sencilla y coherente con el protocolo.

## Validación institucional pendiente

Confirmar en el REDCap local la disponibilidad y los permisos de instrumentos repetibles, eventos longitudinales, encuestas, funciones de informes y exportaciones. No activar un proyecto real ni modificar roles sin autorización.

Referencias generales:
- https://projectredcap.org/resources/videos/
- https://help.redcap.ualberta.ca/help-and-faq/repeating-instruments-events
