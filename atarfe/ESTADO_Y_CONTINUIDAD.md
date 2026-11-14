## Armonización de presentaciones · 14/11/2026

Actualizada la demografía de la presentación de Atarfe con fuente IECA/SIMA: población, edad media y proporción de mayores de 65 años de 2025; variación 2014–2024; movimientos de 2024. Saldo natural: 158 − 107 = +51. Saldo migratorio: 1484 − 1077 = +407. La diapositiva de movimientos usa el mismo formato en los cuatro municipios y distingue movimientos anuales de variación decenal. Fuente: https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=18022, consulta 14/11/2026.

Retiradas las instrucciones de contrastar o validar colectivamente la lectura epidemiológica. Se conservan los datos sanitarios publicados con su fuente, periodo y base; las propuestas del taller se centran en participación y acción comunitaria. Los originales PDF/JSON del perfil y los informes se conservan sin cambios. Esta actualización afecta al material de presentación del Aula, no al expediente de Firebase.

## Revisión de preparación · 14/11/2026

26/11/2026, 11:00. Presentación del Perfil y priorización; cierre y sede por confirmar.

Referencia: Perfil 0.6-C1, 13/11/2026, en revisión técnica. PDF/JSON identificados en `materiales/perfiles-2026/referencias.json`. Las presentaciones anteriores se conservan como antecedentes. Preparado en rama; publicación pendiente. Esta revisión no modifica expedientes de COMPÁS ni registra validación.

# Atarfe — estado y continuidad

Actualizado: 10 de noviembre de 2026.

## Contenido del espacio
- `atarfe/index.html`: espacio del Plan Local de Salud de Atarfe (proceso, Perfil, priorización, herramientas).
- `atarfe/presentacion-perfil.html`: presentación de 17 diapositivas para el Grupo Motor del 10/11/2026.
- `atarfe/perfil/`: Perfil de Salud Local v0.5 (HTML, PDF, DOCX) con la estructura que reconoce COMPÁS (páginas de datos, siete apartados, referencias y anexos) y paquete `compas-profile-package/v1`. La v0.1 no seguía el modelo: COMPÁS no reconocía sus conclusiones y bloqueaba el guardado por vínculos inválidos.

## Fuentes (expediente R_ATARFE, leído completo el 09/11/2026)
- Certificado del acuerdo plenario de adhesión (28/11/2024); formulario de adhesión (12/03/2025); certificado de la Delegación.
- Proyecto de encuesta de salud 2025 (691 entrevistas; sustituido por el Monitor).
- Informe de la situación de salud (21/11/2025), Epidemiología del Distrito Granada-Metropolitano.
- Guiones del taller de impulso (27/02/2026).
- Monitor de bienestar socioemocional Atarfe 2026 (export REDCap 05/11/2026, 910 registros, 811 válidos).
- Localiza Salud: 17 fichas normalizadas (05/11/2026) y tabla de 20 registros aportada el 09/11/2026 (tres sin identificador).

## Hechos aportados por el usuario (09/11/2026)
- Grupo Motor constituido; no hay actas.
- Taller de impulso celebrado: Ayuntamiento, centro de salud, equipo directivo de salud mental comunitaria, asociaciones y ciudadanía.
- Monitor distribuido sobre todo en papel y por QR, en institutos y otros espacios; muestra no probabilística.
- Reunión posterior de presentación de resultados del Monitor.

## IBSE: corrección de escala
Las fórmulas del proyecto REDCap no compartían escala (Vínculo 0–75; Situación y Control 25–100). El Perfil usa la escala común 0–100 recalculada desde los ítems (COMPÁS, PR #112, fusionada y publicada el 10/11/2026: el expediente de Atarfe en COMPÁS muestra ya la escala común y los 20 recursos de Localiza Salud). Valores: total 62,2; Vínculo 72,4; Situación 60,3; Control 51,1; Persona 65,0.

## Monitor: edad y estratos (10/11/2026)
Un registro válido traía en el campo de edad el año de nacimiento (1993), por un error del diccionario de datos. Por decisión del responsable técnico se cuenta con 33 años (2026 − 1993). El Monitor se analiza por separado en menores de 16 (145 válidas, índice 67,6) y en 16 o más (666 válidas, índice 61,0); los 11 registros sin edad son cuestionarios incompletos. COMPÁS calcula los estratos desde el CSV (PR #114).

## Pendiente
- Validación técnica del Perfil y elección de conclusiones y recomendaciones.
- Carga del paquete y del PDF en COMPÁS (pestaña Perfil, ámbito Atarfe) y validación con la cuenta del responsable.
- Población, barrio, vivienda y empleo de cada sección censal; la renta por sección (INE ADRH, tabla 31025, 2024) ya está en el Perfil desde la v0.4.
- Validación de los 20 recursos de Localiza Salud; posible duplicado 61419/61585.
- Método de priorización (recomendado: por líneas estratégicas) y línea «Bienestar emocional y salud mental» del catálogo de COMPÁS.
