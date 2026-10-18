# Loja · Plantilla operativa de revisión de recursos y posibles activos

**Uso:** hoja de trabajo para la segunda sesión y la revisión posterior **registro a registro** del inventario. El CSV adjunto contiene únicamente encabezados: **NO contiene recursos reales ni datos de Localiza Salud**. La hoja emplea `; ` como separador compatible con configuraciones regionales españolas y UTF-8 con BOM para facilitar la apertura en hojas de cálculo.

**Secuencia acordada antes de empezar a rellenar:** exportar o solicitar relación original, obtener con autorización listado vigente de Localiza Salud, preservar sus identificadores y fechar las comprobaciones. Ni los 162 registros históricos ni los 157 «pendientes» son cifras actuales confirmadas de Localiza Salud.

## 1. Diccionario de los campos

| Columna | Qué se registra |
|---|---|
| id_historico | ID de procedencia, no nombre libre si existe identificador original |
| id_localiza_salud | ID o URL de la ficha ministerial **verificada**; dejar vacío si no se conoce |
| fecha_consulta_localiza | Fecha exacta de contraste de la publicación o estado de solicitud |
| nombre_recurso, tipo_recurso | Denominación y categoría existente: organización, asociación, espacio, actividad, etc. |
| barrio_o_anejo | Ámbito territorial general, nunca geolocalización de personas usuarias |
| fuente_inventario | Registro, expediente, entidad responsable y versión consultada |
| vigencia | **sin verificar / vigente / inactivo / dato contradictorio** |
| fecha_contraste | Fecha de conversación, inspección de datos públicos o confirmación con responsable |
| contribucion_salud | Contribución plausible a la salud o bienestar, con justificación concreta |
| evidencia_comunitaria | Cómo se ha contrastado; fuente y fecha (acta/taller/grupo, sin datos personales) |
| participacion_contraste | **no contrastado / propuesto / confirmado participativamente / no procede**, sin dar por hecho una validación |
| acceso_horarios_coste_barreras | Horarios, coste, condiciones y accesibilidad física/digital/territorial |
| estado_en_localiza | **sin consultar / no localizado / publicado / solicitud pendiente / requiere corrección / desconocido**. No inferir publicación de ausencia en búsqueda; verificar con el perfil competente |
| resultado_revision | **sin revisar / recurso pendiente / activo contrastado / duplicado / inactivo / descartar propuesta** |
| motivo_revision | Argumentos y evidencias que justifican resultado |
| accion_pendiente | Contactar entidad responsable; contraste participativo; cotejar duplicados; comunicar corrección; solicitar registro; solicitar validación cuando proceda |
| equipo_responsable | **Rol o equipo**, no datos privados de contacto |
| fecha_limite, fecha_revision_siguiente | Plazo asignado y nueva fecha de seguimiento |

## 2. Procedimiento mínimo aplicable a TODOS los registros

1. **Identificar y deduplicar** entre inventario histórico y Localiza, conservando referencias de ambos.
2. **Verificar vigencia** y condiciones actuales con fuentes contrastables.
3. **Investigar si contribuye a salud y bienestar** y cómo lo reconoce/usa la comunidad; distinguir «recurso» de «activo identificado participativamente».
4. **Evaluar accesibilidad y equidad** (barrios, anejos, horarios, coste y barreras).
5. **Documentar decisión provisional** y la evidencia; asignar responsable y fecha del siguiente paso.
6. **Escalar a persona legitimada** las solicitudes de alta, modificación y validación en Localiza Salud; no iniciar trámites en nombre de un recurso sin autorización de su responsable. No confundir resultado del grupo con estado oficial de publicación.
7. **Revisar periódicamente** los registros; un recurso puede dejar de estar disponible.

## 3. Dinámica para la reunión (30 min)

**5 min:** explicar diferencias entre recurso, activo contrastado e inscripción validada en Localiza Salud.

**10 min:** dividirse en grupos y aplicar a **dos ejemplos didácticos** (no registros reales) una ficha de revisión: *un espacio comunitario existente con horarios/condiciones sin verificar* y *un taller que figura en un inventario antiguo pero cuya vigencia se desconoce*.

**10 min:** contrastar resultados y acordar un criterio común sobre evidencias suficientes y tipos de pendientes. Nadie «valida» oficialmente una ficha en el taller.

**5 min:** repartir por lotes el 100 % del inventario conciliado, responsables, fecha de devolución, seguimiento e intervención de los perfiles autorizados.

## 4. Circuito con Localiza Salud

La propia aplicación del Ministerio diferencia **persona responsable de un recurso**, que solicita alta/modificación/baja, y **usuarios validadores de la zona**, que gestionan solicitudes y publicación. Consultar la guía oficial y confirmar organización local: https://www.sanidad.gob.es/areas/promocionPrevencion/entornosSaludables/local/estrategia/dossier/docs/Responsables_Guiabreve.pdf y https://localizasalud.sanidad.gob.es/adminrecursos/main/.

**Almacenamiento:** no subir a esta página datos personales ni evidencias privadas; el CSV es plantilla de trabajo. La custodia de archivos reales, los accesos y el protocolo para compartirlos entre integrantes deberán acordarse fuera de la web pública del Aula.
