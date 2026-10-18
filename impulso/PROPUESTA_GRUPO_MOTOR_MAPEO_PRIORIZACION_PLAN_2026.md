# Loja · Próxima sesión del Grupo Motor: mapeo, revisión de activos, priorización y Plan de Acción

**Documento de preparación — 18/10/2026. Estado: PROPUESTA, no convocatoria ni acuerdo aprobado.** La reunión siguiente no tiene en las fuentes consultadas una fecha ni duración oficiales. Este documento es específico de **Loja**: no mezclar con Fuente Vaqueros. No sustituye el acta de los órganos correspondientes, las verificaciones en Localiza Salud ni un Plan Local formalmente aprobado.

## 1. Lo que sabemos antes de la reunión

### Priorizaron en 2022: sí, hay un listado ordenado

El repositorio `bhermoso/compas-ng-renovado` (rama `master`, examinada el 18/10/2026, SHA `28e36f631a914f17b95d4ca693b0ccd7c3c6fdd4`) incluye, en `public/seeds/compas-ng-workspace-loja.json`, las **transcripciones documentales conservadas** de:
- `problemas priorizados y propuesta plan de accion.odt` (entrada `doc-prioritisation-loja-2022`): «Listado definitivo de problemas de salud/factores de riesgo por orden de priorización», **40 participantes y 26 problemas con orden y puntuación**.
- `Plan Acción Loja.odt` (entrada `doc-action-plan-loja-2022`): **borrador histórico** de Plan de Acción estructurado en «Vida Activa y Saludable» y «Medio Ambiente (físico y social)», con campos de zonas, colectivos, activos y propuestas.

Primeras prioridades del listado de 2022:
1. Sedentarismo.
2. Hábitos de alimentación no saludables.
3. Formación insuficiente sobre hábitos saludables.
4. Uso poco saludable de nuevas tecnologías.
5. Insuficiencia de alternativas de ocio juvenil.
6. Barreras arquitectónicas.
7. Hábitos cívicos y cuidado de lo público.
8. Problemas del entorno escolar.
9. Diversidad insuficiente de oferta deportiva.
10. Obesidad y sobrepeso.

**Distinción:** esta evidencia respalda que **hubo una priorización documentada**; falta cotejar los ODT originales, método de cálculo, cobertura de participantes, vigencia y acta de validación o aprobación institucional. No presentar el ranking de 2022 como prioridades de 2026 ni su propuesta de dos líneas como plan aprobado. La clasificación original no es directamente comparable, sin trabajo de equivalencias, con la papeleta de diez temáticas actual.

### Activos: fotografía histórica, no situación presente del portal

El expediente `impulso/expediente-loja-2026.md` recoge una **instantánea histórica** del inventario migrado a COMPÁS: **162 recursos**, **5 marcados como validados** y **157 pendientes**. Los cinco citados en esa presentación son Centro de Participación Activa de Loja, coro, taller de memoria, GRUSE de Centro de Salud de Loja y Punto Vuela. No deducir que hoy existan exactamente 157 pendientes **en Localiza Salud**: son plataformas/estados diferentes y todavía no se ha realizado la conciliación registro a registro con el sistema ministerial.

La nueva sesión no debe «repetir el diagnóstico»: debe recuperar esta memoria, verificar vigencias y completar aquello que se necesita para la decisión municipal.

## 2. Objetivos de la sesión

1. **Acordar el método y responsables del mapeo de activos**, combinando revisión sistemática **uno a uno de los recursos heredados** y procesos participativos territoriales, comunitarios y escolares.
2. **Revisar la priorización de 2022** y decidir si está vigente, si basta una deliberación del grupo motor o si se justifica nueva consulta a ciudadanía, con población y método definidos.
3. **Mostrar COMPÁS-NG Renovado**: prioridad temática (resultados informativos) y Gestor de Encuestas (generador de diccionario REDCap), aclarando qué funciona y qué requiere configuración externa.
4. **Acordar la ruta de formulación del Plan de Acción**: cuándo definir líneas estratégicas, grupos, objetivos e indicadores, sin confundir borrador técnico con aprobación.

## 3. Orden de trabajo propuesto (150 minutos, ajustable)

| Tiempo | Contenido | Decisión o producto |
| --- | --- | --- |
| 0–15 min | Reencuentro y documentación: 2022, prioridades, propuesta de líneas y fotografía histórica de activos | Acordar qué debe cotejarse y quién dispone de originales y actas |
| 15–45 min | Mapeo de activos como proceso: equipo, técnicas, ámbitos, participación, consentimiento y mantenimiento | Plan de mapeo con responsables, colectivos y calendario |
| 45–80 min | Taller de **validación de registros heredados**: mostrar listado real, columnas, criterios y tres casos de prueba; asignar lotes para auditoría individual | Procedimiento y equipos de revisión de cada recurso |
| 80–105 min | Priorización histórica: revisar 26 problemas y dos líneas propuestas; contrastar con evidencias recientes y brechas | Decisión de mantener, actualizar o consultar |
| 105–125 min | Demostración COMPÁS-NG: selección temática, Gestor de Encuestas, REDCap e importación CSV; límites de herramienta | Decisión motivada sobre consulta y su diseño |
| 125–145 min | Plan de Acción tentativo y matriz de estrategias EPVSA/ESCA; dos rutas según consulta ciudadana | Encargo de borrador o fecha de deliberación |
| 145–150 min | Responsables, plazos y acta | Acuerdos expresos y asuntos pendientes claramente separados |

**Si la reunión disponible es de 90 minutos**, reservar demostraciones para material previo, revisar solo casos modelo de validación y dejar el debate de líneas estratégicas para una sesión específica. **No** intentar revisar 157 registros uno por uno en una única reunión.

## 4. Mapeo: dos procesos complementarios, no equivalentes

### 4.1. Revisar uno a uno el inventario heredado (auditoría de existencias y carácter de activo)

**Preparación indispensable:** exportar los 162 registros históricos con identificadores; obtener, a través de persona autorizada, listado y estado **actual** correspondiente a Loja en Localiza Salud; reconciliar registros y posibles duplicados sin suponer equivalencias entre plataformas.

Para cada registro, conservar una fila con:
`id_origen`, `nombre`, `tipo`, `barrio_nucleo`, `fuente_fecha`, `vigente`, `persona_entidad_responsable` (en repositorio privado, no en Aula pública), `accesibilidad`, `coste_condiciones`, `beneficio_salud`, `evidencia_o_validacion_comunitaria`, `poblacion_uso`, `linea_plan`, `url_id_localizasalud`, `estado_localizasalud`, `decision`, `pendiente_de`, `verificador`, `fecha_revision`, `siguiente_revision`.

Decisiones posibles por fila, con motivo documentado:
- **Activo contrastado y apto para tramitar**: reunir criterios y evidencia; solicitar alta/modificación si no aparece en Localiza Salud, o intervención del perfil validador autorizado.
- **Recurso vigente, contribución a la salud aún no acreditada**: solicitar contraste con población usuaria/entidad y mantener como *pendiente*, sin fingir que sea un activo.
- **Dato insuficiente o duplicado**: recabar información/unificar referencia antes de publicar.
- **Inactivo o no apropiado**: no proponer como activo vigente; justificar baja/archivo o corrección del registro.

El mapa ministerial **distingue** recursos comunitarios, activos y actividades. Solo los **usuarios autorizados con permisos de validación** pueden validar altas en Localiza Salud; una propuesta no equivale a publicación/validación. Contrastar con los criterios publicados por Sanidad: competencia territorial, beneficio y ausencia de efectos perjudiciales, coste y condiciones de acceso, carácter privado y relación con prioridades del territorio. Registrar participación real y justificación. La comprobación de seguridad y calidad corresponde a las personas coordinadoras/validadoras competentes; no compartir credenciales. Fuentes oficiales: https://localizasalud.sanidad.gob.es/adminrecursos/main/ y https://localizasalud.sanidad.gob.es/maparecursos/manual/Como_subir_recursos_telematicamenteV2.pdf.

**Producto por lotes:** tabla conciliada, registros revisados con evidencia, incidencias y cola documentada para coordinador/a Localiza Salud. Fijar en la sesión la prioridad de revisión por antigüedad, demanda, uso real y posible relación con problemas priorizados; evitar que el número de recursos sustituyan la evaluación cualitativa.

### 4.2. Nuevos procesos de mapeo participativo

- **Entornos educativos y juventud:** paseos guiados, talleres con asociaciones de familias y grupos juveniles; valorar uso cotidiano y bienestar, sin geolocalización individual de menores.
- **Barrios, anejos y zonas rurales:** recorridos, talleres en sedes vecinales y contraste de accesibilidad real, horarios y barreras; evitar que el centro urbano monopolice el mapa.
- **Personas mayores, cuidados y redes de apoyo:** grupos de conversación, entidades y servicios que facilitan participación, actividad, apoyo mutuo y autonomía.
- **Vinculación sanitaria y social:** equipos de Atención Primaria, enfermería comunitaria, trabajo social, servicios sociales y asociaciones; documentar recomendaciones de activos que realmente se incorporan a prácticas.

Todo activo nuevo debe pasar por una ficha de contraste y un flujo de validación. El mapa se mantiene actualizado, no se entiende como entrega puntual.

## 5. Priorización: tres escenarios legítimos

### Escenario A — El Grupo Motor ratifica parcialmente el trabajo de 2022

Revisar problemas y orden, comprobar que siguen justificados con perfil de salud e información actual, recoger desigualdades por barrios/anejos y abrir propuestas para cuestiones que faltan. **No** revalidar automáticamente la puntuación ni presentar aprobación de 2022 sin acta.

### Escenario B — Repriorización deliberativa sin encuesta general

Contrastar la lista de 2022 con profesionales, organizaciones, grupos vecinales y participación representativa de la diversidad territorial. Registrar criterios explícitos: importancia, magnitud, gravedad, desigualdad, capacidad comunitaria y factibilidad; dejar trazabilidad de quién decide y límites de representación. Cerrar líneas en esta sesión solo si hay suficiente deliberación y competencia para hacerlo; en otro caso, llevar propuesta a próxima reunión.

### Escenario C — Nueva encuesta de priorización temática con REDCap

El repositorio `bhermoso/compas-ng-renovado` (rama `master`, SHA citado arriba) **ya implementa** diez temáticas en `src/domain/thematic-prioritisation/ThematicTopic.ts`, permite marcar **hasta cinco** y proporciona, dentro de `GESPanel.tsx`, «Descargar diccionario de priorización» para `papeleta_pri_tematica`. Temáticas actuales: alimentación; actividad física; bienestar emocional y salud mental; pantallas y redes; sueño; tabaco, vapeadores, alcohol y drogas; sexualidad; violencia de género; medioambiente y municipio; accidentes.

**Limitación crítica:** COMPÁS **no recoge votos directamente ni pone online la encuesta**. Genera un diccionario CSV REDCap para cargar en una instancia habilitada; es necesario configurar proyecto, permisos, encuesta, enlace/QR, aviso de privacidad, periodo y prueba de respuestas ficticias. Posteriormente se exporta CSV y COMPÁS puede importar resultados, filtrar formularios completos y presentar el *top 5* como **información para el Grupo Motor**, no como aprobación automática. La nueva consulta requiere comprobar que las diez categorías bastan: la priorización de Loja 2022 incluía **barreras arquitectónicas, ocio juvenil, precariedad laboral, exclusión social, entorno escolar, desigualdad y necesidades rurales**, temas no siempre distinguibles en la papeleta actual. Si se amplía/adapta, hay que revisar también el diccionario REDCap y el parser de importación antes de lanzarla; no prometer compatibilidad de un CSV modificado.

**Antes de autorizar la encuesta**, acordar: pregunta exacta, población objetivo, modo de selección, canales presenciales y digitales, accesibilidad, alcance territorial, representatividad/limitaciones, reducción de duplicidades, custodia y fecha de devolución. Evitar que una muestra por autoselección se presente como representativa de toda Loja. Conservar por separado resultados de 2022, resultados nuevos y decisión deliberativa. La PR #20 del Aula trata una **encuesta diferente**, la de sectores y actores; **no debe confundirse** con esta consulta temática ni reutilizarse sin diseño.

### Dos rutas para decidir líneas estratégicas

- **Si se acuerda realizar la consulta:** la sesión actual puede aprobar el proceso y encargar un **borrador técnico de líneas**, sin cerrarlas. Solo después de importar, revisar y deliberar sus resultados se propondrá la selección de líneas y su aprobación conforme al procedimiento local.
- **Si se decide no consultar:** la siguiente reunión del Grupo Motor puede revisar lista 2022 + perfil y activos, decidir las líneas y encargar las fichas de objetivos e indicadores. En la sesión actual podría cerrarse únicamente si la información, composición y tiempo son suficientes.

## 6. Correspondencia con estrategias andaluzas

**EPVSA 2024–2030**: cuatro líneas autonómicas y diez objetivos; en especial LE1, que trata hábitos, entornos y dinamización de activos, y OE 1.7, referido a recomendaciones de activos comunitarios. Los programas P01 (RELAS), P04 (activos), P03 (centros sanitarios), P06 (educativos), P08 (servicios sociales) y P15 (conocimiento) resultan útiles. También contempla alimentación, actividad física, sueño, bienestar emocional, sexualidad responsable y uso positivo de TRIC.

**ESCA 2026–2030**: cinco líneas orientadas a integrar salud comunitaria en planificación sanitaria, tres niveles de Atención Primaria, formación, investigación/innovación y visibilidad, con equidad y trabajo intersectorial. **No son automáticamente las líneas de un Plan Local municipal.** Deben traducirse a compromisos municipales, sanitarios y comunitarios acordados, sin atribuir al Ayuntamiento obligaciones exclusivamente sanitarias.

Referencias:
- EPVSA, aprobación y líneas: https://www.juntadeandalucia.es/organismos/transparencia/planificacion-evaluacion-estadistica/planes/detalle/474589.html
- EPVSA, programas P01 y P04: https://www.juntadeandalucia.es/organismos/presidenciasanidadyemergencias/areas/sanidad/planificacion/estrategia-promocion-vida-saludable-andalucia.html
- ESCA, marco y líneas: https://www.juntadeandalucia.es/organismos/transparencia/planificacion-evaluacion-estadistica/planes/detalle/613423.html

## 7. Borrador TENTATIVO de Plan de Acción local — no aprobado

Las cuatro líneas temáticas siguientes desarrollan los dos **macroámbitos del borrador de 2022** con una estructura más operativa. Los dos ejes instrumentales (gobernanza y activos) son transversales, no sustituyen la decisión sobre qué problemas de salud se abordarán. Los objetivos y los indicadores **son propuestas para deliberación**, no compromisos adquiridos.

| Línea estratégica provisional | Objetivo general provisional | Objetivos específicos (OE) propuestos | Indicadores propuestos (numerador / denominador cuando proceda) | Encaje orientativo |
| --- | --- | --- | --- | --- |
| **L1. Vida activa, alimentación y hábitos saludables** | Facilitar oportunidades equitativas de hábitos saludables a lo largo del ciclo vital. | **1.1** Aumentar oportunidades y accesibilidad de actividad física cotidiana. **1.2** Favorecer hábitos alimentarios saludables y abordaje de sueño/tabaco cuando la deliberación los priorice. | **I1** Nº actividades de vida activa mantenidas y participantes únicos por barrio/anejo. **I2** % participantes que aumentan días de actividad física frente a su propia línea base, entre quienes disponen de medida inicial y final; informar pérdidas de seguimiento. **I3** % actuaciones con acceso gratuito o asequible. | Prioridades 2022 1, 2, 9, 10; EPVSA LE1 / OE 1.1, 1.2, 1.3 y P01/P04; ESCA orientación comunitaria. |
| **L2. Bienestar emocional, convivencia y juventudes** | Fortalecer redes protectoras, bienestar emocional y entornos de ocio y relación saludables. | **2.1** Facilitar ocio participativo, vínculos y uso crítico de pantallas entre jóvenes. **2.2** Mejorar redes de apoyo e identificación temprana de necesidades de bienestar emocional desde recursos competentes. | **I4** Nº iniciativas cocreadas con participación juvenil y mantenidas durante el periodo. **I5** % participantes de actividades que refieren apoyo social o bienestar mejorado con instrumento adecuado y línea base propia. **I6** Nº derivaciones/acuerdos de cooperación comunitaria documentados, sin datos identificativos en la evaluación pública. | Prioridades 2022 4, 5, 8, 14, 25; EPVSA bienestar emocional y TRIC; ESCA trabajo con comunidad y agentes. |
| **L3. Entornos saludables, accesibilidad y movilidad segura** | Reducir barreras ambientales, urbanas y territoriales para la salud y la participación cotidiana. | **3.1** Identificar y abordar barreras arquitectónicas, de movilidad y seguridad con agentes competentes. **3.2** Favorecer espacios públicos, actividad comunitaria y condiciones ambientales que faciliten salud. | **I7** Nº barreras verificadas, priorizadas y resueltas / Nº barreras priorizadas con solución viable acordada. **I8** Nº espacios/rutas intervenidas, con valoración de accesibilidad antes y después. **I9** % propuestas vecinales con respuesta documentada en el plazo acordado. | Prioridades 2022 6, 12, 18–20; EPVSA entornos/P02; ESCA determinantes y participación. |
| **L4. Equidad territorial, envejecimiento y cuidados comunitarios** | Mejorar acceso a oportunidades de salud y redes de apoyo en grupos y territorios con mayores barreras. | **4.1** Identificar brechas de acceso entre núcleo urbano, barrios y anejos y acordar actuaciones. **4.2** Fortalecer autonomía, participación y apoyo a mayores y personas con necesidades de cuidados. | **I10** % barrios/anejos priorizados representados en actividades y mapeo, con denominador territorial acordado. **I11** Nº redes de apoyo activas con seguimiento y población destinataria definida. **I12** % acciones que incorporan análisis de equidad y medidas correctoras verificables. | Prioridades 2022 20, 23, 24; EPVSA curso de vida/activos y P08; ESCA equidad transversal. |

### Dos ejes transversales imprescindibles

| Eje | Objetivo general | Objetivos específicos | Indicadores de gestión |
| --- | --- | --- | --- |
| **T1. Mapeo, validación y dinamización de activos** | Convertir el inventario heredado y la identificación participativa en un mapa vivo, verificable y útil. | **T1.1** Auditar cada recurso del inventario histórico y distinguirlo del estado en Localiza Salud. **T1.2** Contrastar comunitariamente y tramitar, mediante personas autorizadas, las altas/cambios oportunos. **T1.3** Facilitar recomendaciones de activos pertinentes desde los servicios y agentes. | **IT1** Nº recursos históricos revisados con decisión/evidencia / Nº recursos únicos conciliados. **IT2** Nº activos publicados y vigentes en Localiza Salud con comprobación de ID/URL. **IT3** % activos registrados con fecha de revisión, acceso verificado y aportación participativa. **IT4** Nº recomendaciones documentadas de activos, sin identificar a usuarios en el informe colectivo. |
| **T2. Gobernanza, participación y evaluación** | Asegurar corresponsabilidad intersectorial, decisiones documentadas y seguimiento del plan. | **T2.1** Definir composición, funciones y actas del Grupo Motor. **T2.2** Incorporar sectores/barrios poco representados. **T2.3** Dotar cada actuación de ficha de responsables, calendario, recursos e indicadores. | **IT5** % acuerdos con responsable y fecha de revisión. **IT6** % actuaciones con línea base y evidencia de seguimiento. **IT7** Nº organizaciones y sectores efectivamente participantes, desglosados por tipo y territorio sin duplicación. |

**Fichas del Plan tras elegir líneas:** código/versión, problema o necesidad y fuente/periodo, activo local relacionado, población/territorio, objetivo general, objetivo específico, actividad, responsable y colaboradores, calendario, recursos, indicador (fórmula, fuente, periodicidad), línea base, meta acordada, desigualdades que se revisarán, estado de ejecución y evidencia. **No inventar líneas base ni fijar metas numéricas sin capacidad real ni acta.**

## 8. Acuerdos mínimos que deberían salir de la próxima sesión

| Decisión | Estado antes de reunión | A concretar en acta |
| --- | --- | --- |
| Responsable de exportar y conciliar inventario histórico y Localiza Salud | Pendiente | Persona/organismo, permisos, fecha de corte |
| Procedimiento y criterios de revisión de **cada recurso** | Propuesta anterior | Ficha, equipos de revisión, calendario y criterios de devolución |
| Procesos participativos de mapeo y ámbitos iniciales | Opciones no aprobadas | Colectivos, barrios/anejos, técnicas y responsables |
| Valor de la priorización histórica 2022 | Listado ordenado documentado, acuerdo institucional pendiente de verificación | Ratificar, actualizar o contrastar; cotejar acta y originales |
| Consulta ciudadana temática con COMPÁS/REDCap | Capacidad técnica parcial; sin encuesta pública habilitada | Si se lanza, modalidad, temas, población, responsable REDCap y plazos |
| Momento de selección de líneas estratégicas | Borrador TENTATIVO | Ahora tras deliberación, o después de consulta, o en reunión siguiente |
| Encargo de borrador de Plan de Acción | Pendiente | Autores, circuito de revisión y validación, fechas de entrega |
| Próxima reunión y devolución pública | Pendiente | Fecha, formato de acta, responsables de comunicar resultados |

## 9. Dependencias técnicas y límites

- **COMPÁS-NG Renovado**: existe herramienta temática de hasta cinco entre diez temas, generación de diccionario REDCap e importación de CSV de resultados; **no es una plataforma de recogida pública directa**. Sus expedientes en navegador no prueban sincronización municipal ni validación institucional.
- **REDCap**: antes de usarlo hay que configurar encuesta real institucional, autorización, formulario, versionado, prueba y privacidad. **No se ha generado enlace a encuesta real ni recopilado respuestas**. La PR #20 del Aula para la ficha de actores es distinta y sigue pendiente.
- **Localiza Salud**: estados de COMPÁS y portal ministerial deben compararse por ID real y fecha; no trasladar automáticamente «157 pendientes» a Localiza. Solo perfiles autorizados validan altas.
- **MTE/Plan de Acción de COMPÁS**: los borradores ayudan a redactar y mantener trazabilidad; no sustituyen decisión del Grupo Motor ni acta municipal. Las metas, seguimiento y compilación institucional requieren trabajo adicional.
- **Alcance de este documento**: preparación metodológica. Sin edición de datos de Loja, sin formularios reales, sin cambios en producción, sin actuaciones en otros municipios, sin nuevas cuentas ni credenciales.
