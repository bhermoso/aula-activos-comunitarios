# Aula de Salud Comunitaria Basada en Activos — estado y continuidad

> **Corte de situación:** 18 de octubre de 2026 (actualización de REDCap). **Rama de producción:** `main`; publicación REDCap fusionada en `4c7314f02576c7978c65159875201171cc43caab`.
> **Carácter:** documento de continuidad de referencia. Antes de intervenir, comprobar `main`, ramas/PR abiertos, despliegues y cualquier nueva documentación institucional. Las conclusiones del pasado no sustituyen una verificación actual.

## 1. Fuentes canónicas y normas de intervención
- Código: https://github.com/bhermoso/aula-activos-comunitarios
- Publicación: https://bhermoso.github.io/aula-activos-comunitarios/
- Arquitectura: portada raíz `index.html`; módulos `activos/`, `impulso/` (Loja), `fuente-vaqueros/` y `redcap/` (Básico y Avanzado).
- Portadas y navegación compartidas: `assets/aula-portadas.css` y `assets/aula-portadas.js`.
- **No** sobrescribir otros módulos ni mezclar datos entre municipios; primero auditar cambios recientes y preservar arquitectura y contenidos originales.
- **No** fusionar PR, publicar cambios, desplegar reglas Firebase ni tratar datos personales sin autorización expresa y salvaguardas documentadas.
- Distinguir siempre «publicado», «preparado en rama», «pendiente de contrastar» y «pendiente de autorización».
- Materiales históricos: evitar convertir propuestas, convocatorias y programas en actas o decisiones efectivamente adoptadas.

## 2. Módulos: situación verificable

| Módulo | Publicado | Funcionalidad y punto de avance | Pendiente |
| --- | --- | --- | --- |
| **Curso de Salud Comunitaria Basada en Activos 2026** (`activos/`) | Sí | Curso navegable con contenidos, mapeo y actividades | Auditoría sistemática docente, funcional, accesibilidad, enlaces y móvil; seguimiento del alumnado todavía no acreditado |
| **Taller de reimpulso de Loja** (`impulso/`) | Sí | Portada y ocho apartados, itinerario consolidado, PDF y ODP originales de Carlos del Moral disponibles; ficha web de actores y sectores basada en Firestore en producción | Migrar encuesta a REDCap de modo validado; verificar cualquier dato recibido; resultados reales del encuentro solo con acta |
| **Taller de impulso/reimpulso de Fuente Vaqueros** (`fuente-vaqueros/`) | Sí | Expediente 2021–2022 incorporado, siete bloques de programa, participantes e invitados, coloquio de escucha, hoja de ruta y ficha de activos; paleta verde revisada | Confirmaciones de programa y mesa, actualización histórica posterior a abril de 2022, comprobar Localiza Salud y preparar trabajo de campo de mapeo |
| **REDCap Básico 2027** (`redcap/`) | Sí | Curso con unidades, materiales y prácticas; listas de comprobación locales | Auditoría y sistema seguro de entrega, evaluación y seguimiento |
| **REDCap Avanzado 2027** (`redcap/`) | Sí | Unidades sobre reglas, cálculos y control de calidad, materiales y prácticas | Misma infraestructura de alumnado y auditoría |

La última publicación de `main` comprobada al redactar este archivo corresponde al SHA indicado arriba: GitHub Pages completó correctamente el despliegue. **Esto no equivale a auditoría exhaustiva de todos los enlaces ni a prueba de las funcionalidades que requieren servidor**.

## 3. Fuente Vaqueros: decisiones docentes y límites de evidencia
**Fuentes del expediente aportado:** archivo original `R FUENTE VAQUEROS.zip` (mantener fuera del repositorio público por firmas y otros datos). El índice/documento de trabajo está en `fuente-vaqueros/EXPEDIENTE_2021_2022_Y_PROGRAMA.md`. Ese documento de módulo **contiene frases históricas de «pendiente de publicar» ya obsoletas**; verificar contra `main` y PR antes de interpretarlas.

Hechos aportados por el expediente:
- Programa de impulso RELAS del **5/11/2021**; adhesión del Ayuntamiento a finales de 2021 mencionada por el cuestionario; **falta el acuerdo plenario fechado**.
- Informe histórico de situación de salud, consulta y grupo motor de 2022.
- Acta de reunión de **29/04/2022**: 102 cuestionarios revisados, actividad intergeneracional y preparación de priorización con método Hanlon.
- Descanso previsto en julio-agosto de 2022 y preocupación por continuidad a partir de septiembre. **No hay prueba en el expediente estudiado de fecha de paralización definitiva, priorización aprobada ni Plan Local aprobado**.
- Resultados históricos **no** extrapolables como situación epidemiológica actual de 2026.

Programa de 22/10/2026: títulos de los bloques primero, personas solo cuando están identificadas y su intervención está propuesta o confirmada. Se incluyen **7 participantes en la relación preparatoria y 17 personas/entidades invitadas**. **Carlos del Moral Campaña tiene confirmada su intervención sobre el informe de situación de salud**, según información directa del usuario del 17/10/2026; para las demás personas, la presencia en el listado por sí sola no acredita asistencia, ponencia ni participación en la mesa. Se completó el apellido **Carlos del Moral Campaña** con el programa de 2021. **Rectificación organizativa del 18/10/2026:** el moderador del taller es **Rubén**, vinculado al **área de Cultura del Ayuntamiento de Fuente Vaqueros** (apellidos y cargo específico pendientes de confirmar). El documento preparatorio inicial citaba «Rubén». Se anula la atribución a otro nombre realizada el 17/10/2026. **La moderación está asignada; la composición de la mesa sí permanece pendiente de confirmar.**

**Mesa-coloquio:** el enfoque ya publicado es escuchar la experiencia y no examinar sobre RELAS. **Enfoque editorial publicado (17/10/2026):** tras la presentación **confirmada** del «Informe sobre la situación de salud de Fuente Vaqueros» a cargo de Carlos del Moral Campaña, escuchar cuatro miradas diferenciadas: atención primaria (Alicia Bellido González), familias/AMPA (María Martín Calvo), salud escolar (Francisco J. Pigne Marín) y salud mental/bienestar emocional desde trabajo social (Margarita Rut Goena Martínez, participación efectiva por confirmar). Rubén modera (área de Cultura del Ayuntamiento; apellidos pendientes). La guía se adapta con una pregunta específica por perspectiva y repreguntas opcionales. Problemas de accesibilidad, uso frecuente de servicios y demandas emergentes son **ámbitos por explorar**, no hechos acreditados. La mesa no prioriza problemas ni solicita datos clínicos individuales. La revisión abarca también **los siete bloques del programa**, presentados con resumen visible y detalles plegables, y la documentación real del trabajo de 2022: 102 cuestionarios, 416 selecciones, clasificación de 33 problemas y ensayo de Hanlon sobre una tabla de 27 factores sin puntuación final acreditada. **PR #27 publicado:** https://github.com/bhermoso/aula-activos-comunitarios/pull/27, commit `f0f64ac`, despliegue Pages confirmado. **Rectificación posterior:** el bloque 03 se denomina «Informe sobre la situación de salud de Fuente Vaqueros», no «Indicadores de enfermedad». La intervención de Carlos está **confirmada**. Se retira cualquier descripción no respaldada sobre indicadores o tendencias y la falsa nota de confirmación pendiente; se ajustan también los PDF. El cambio se tramita en PR #28.

**Intervención propuesta de Blas Hermoso Rico:** (1) recuperar priorización trabajada en 2022 y decidir si precisa actualizarse mediante vía técnica, grupo motor, consulta ciudadana o combinación; (2) iniciar el mapeo participativo de activos orientado a las líneas prioritarias acordadas. La información aportada por el usuario sostiene que Fuente Vaqueros **no tiene activos registrados en Localiza Salud**; **no se verificó directamente el portal**, y cero registros no implica cero activos. La ficha del Aula guarda borradores en el navegador y **no registra** en Localiza Salud.

PR fusionados y publicados sobre Fuente Vaqueros: **#21** paleta, **#22** antecedentes y programa, **#23** primera guía de escucha, **#25** identificación del moderador, corregida posteriormente el 18/10/2026, **#26** traslado de la trayectoria al bloque 02 del Programa. Se mantienen posteriores ajustes verdes `86434a0` y `4392d8e`. Último Pages de referencia anterior a esta propuesta: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39006512504. El presente cambio de mesa-coloquio **no** está publicado.

### Ajuste de estructura de Fuente Vaqueros (publicado el 17/10/2026)

Se ha solicitado integrar todo el antiguo apartado independiente **«Punto de partida»** dentro de **Programa → bloque 02 «Trayectoria»**, eliminando la pestaña redundante. El cambio conserva contenido, fuentes y cautelas, mantiene un panel desplegable inicialmente abierto, pasa de seis a cinco pestañas y respeta enlaces antiguos `#contexto`. Cambio publicado mediante PR #26, commit `03394ca`, despliegue confirmado. No confundir con los cambios de contenidos del PR #27, aún pendientes de publicación.

## 4. Loja: encuesta — decisión vigente y conflicto entre código publicado y rama de trabajo
El programa, los ocho apartados, el itinerario y los originales PDF/ODP de la presentación de Carlos del Moral están publicados en `impulso/`. La encuesta de actores/sectores se preparó inicialmente con Firestore `encuestas_loja_2026`, con 26 sectores, 13 tipos de actor y campos de texto opcionales. Se cerró la recogida de nombre/teléfono/correo por falta de definición formal de privacidad.

**Problema:** reglas reales de Firestore comunicadas como `allow read, write: if false`. Ni la existencia del formulario ni un archivo de reglas en GitHub prueban recepción real. El PR **#19** contiene 16 pruebas de reglas (pendiente, sin fusionar). No afirmar que existan respuestas históricas almacenadas; la existencia y exportación **no están verificadas**.

**Última decisión de trabajo:** abandonar la solución Firestore/reCAPTCHA para la encuesta de Loja y **migrar a REDCap institucional**.
- PR **#20**, abierto y sin fusionar: diccionario REDCap base de **13 campos**; versión ampliada de **20 campos con contacto marcada PENDIENTE**; HTML de redirección a encuesta REDCap; configuración de URL inicialmente vacía; mantiene QR hacia la URL estable `impulso/ficha.html`.
- **Bloqueadores:** crear el proyecto real en el REDCap institucional, importar diccionario base, habilitar instrumento como encuesta, confirmar autodetección/autonumeración, obtener enlace público, probar envío ficticio, contrastar privacidad y verificar QR/móvil. **No hay URL de encuesta REDCap confirmada** ni se han migrado datos históricos.
- **No fusionar #20 sin enlace válido, pruebas y autorización expresa**. El sitio de producción conserva por ahora la ficha Firestore que puede no recibir respuestas.

En otra conversación se compararon las fichas de Loja y Fuente Vaqueros: Loja estructura sectores, actores, ámbitos e interés en participar; Fuente añade «cuestiones por contrastar» y vínculos a prioridades. La posible unificación metodológica es **propuesta provisional, no desarrollo aprobado ni implementado**. Cualquier instrumento común debe mantener configuración, datos y consentimiento separados por localidad. No iniciar una nueva vía Firebase para Loja sin revisar la decisión de REDCap.

Referencia histórica del módulo: `impulso/ESTADO_Y_CONTINUIDAD.md`, `impulso/FIREBASE_PENDIENTE.md`, `impulso/ENCUESTA_SECTORES_ESTADO.md`; **su tratamiento de Firestore quedó parcialmente superado por la posterior decisión REDCap** recogida en PR #20.

## 5. REDCap Básico y Avanzado 2027
La web `redcap/index.html` está publicada con unidades y materiales PDF, CSV y prácticas. Algunas listas de comprobación se guardan **solo en el navegador**, no en una cuenta individual. No presentar esto como un sistema de seguimiento docente implementado. Fuente: `redcap/INTEGRACION_Y_PUBLICACION.md`.

## 6. Sistema de alumnado y Firebase: estado transversal
- Proyecto Firebase de referencia `aula-salud-comunitaria`; su configuración efectiva de Authentication, Firestore y permisos **no se ha auditado por completo**.
- PR **#2**, abierto, prepara diseño de reglas por usuario autenticado y rol administrativo. No está integrado, no hay credenciales ni acceso a datos reales acreditados y no se ha desplegado un sistema de entregas/seguimiento.
- Pendientes: arquitectura de identificación, autenticación segura, entregas y corrección, recuperación, evaluación, permisos, protección de datos, almacenamiento de evidencias y pruebas de acceso por rol.
- No reutilizar la colección o datos municipales para expedientes del alumnado.

## 7. Prioridades y próximo paso recomendado
1. **Fuente Vaqueros antes del encuentro del 22/10/2026:** confirmar intervenciones, mesa, lugar y horario; corregir expediente histórico hasta donde exista fuente; comprobar Localiza Salud; preparar presentación breve de Blas centrada en priorización + mapeo; validar que el coloquio escucha experiencias y no exige método.
2. **Loja:** completar REDCap y QR mediante el PR #20, sin dar por funcional el formulario actual; conservar por separado eventuales datos históricos y verificar si existen.
3. **Auditoría del Aula en cinco módulos:** navegar todas las pantallas, comprobar enlaces, accesibilidad, móvil y materiales; priorizar errores antes de añadir funcionalidades.
4. **Gestión de alumnado:** revisar proyecto Firebase real y PR #2, acordar el esquema legal/técnico y hacer pruebas controladas antes de fusionar o desplegar.
5. **Continuidad:** revisar este documento en cada intervención sustancial y actualizar los archivos de módulo con estados reales. Evitar que los documentos digan «pendiente de publicar» después de publicar.

## 8. Método de trabajo en siguientes conversaciones
Antes de proponer cambios, comprobar `main` y PR abiertos; leer este archivo y el documento del módulo. Diferenciar fuente documental, supuesto o propuesta y resultado de pruebas reales. Hacer modificaciones aisladas en rama y PR, con test y revisión de archivos. **No fusionar, desplegar ni exponer respuestas privadas sin autorización expresa.** Registrar SHA, estado de Pages y próximos bloqueadores al terminar.


## 17/10/2026 · revisión REDCap Básico y Avanzado 2027 (propuesta)

La rama `redcap-redisenio-competencias-2027-20261017` replantea las competencias por nivel: Básico incorpora encuestas sencillas y condición guiada; Avanzado se centra en proyectos con múltiples instrumentos, seguimiento, diseño longitudinal/repetible según pertinencia, distribución y gestión de encuestas, informes, calidad y puesta en marcha. La sintaxis, cálculos y Action Tags se trasladan a uso justificado y guía opcional, sin evaluación de memorización. Fuente curricular: `redcap/REDISENO_DOCENTE_2027.md`; guía: `redcap/GUIA_SINTAXIS_DE_CONSULTA.md`; itinerarios imprimibles: `redcap/programas-2027.html`.

**Actualización 18/10/2026:** propuesta publicada con autorización expresa, PR #29 fusionada y Pages correcto. Continúan pendientes la validación institucional, pruebas directas de navegación y compatibilidad del REDCap local, pre/post-test y criterios de certificación. No se alteraron otros módulos.


### Ampliación del rediseño REDCap · 17/10/2026

Se completaron y publicaron mediante **PR #29**, las diez guías/programas PDF actualizadas en las dos rutas históricas; su fuente editable es `redcap/materiales_2027.json` y los scripts `generar_pdf_2027*.mjs`. El visor imprimible `redcap/material-2027.html` ofrece navegación y descarga desde el Aula de revisión. Se actualizaron títulos y accesos en `redcap/index.html` y se añadieron pruebas de correspondencia entre PDF y fuente. Se encuentran **publicadas, pendientes de validación institucional**. No presentar esos PDF como versiones oficiales aprobadas. Pendientes: cotejar contenido con organización/Gesforma e instancia institucional REDCap, comprobar navegadores y accesibilidad con navegador real, y ajustar diccionario de prácticas/pre-post-test. El sistema de seguimiento individual del alumnado continúa sin existir.


### Plantilla de seguimiento 2027 · 17/10/2026

Incorporada en la PR #29 la plantilla docente `redcap/materiales/plantilla_seguimiento_2027_diccionario.csv`, con 15 campos y tres instrumentos técnicos (ficha inicial, hábitos y seguimiento). Está enlazada desde REDCap Avanzado y documentada en `redcap/PLANTILLA_SEGUIMIENTO_2027.md`. **Su importación no crea eventos longitudinales, repetición ni encuestas**: el alumnado debe elegir y configurar esa arquitectura según necesidad y permisos. Se amplía el test de regresión para vigilar la plantilla.


## 18/10/2026 · REDCap 2027 publicado

El usuario autorizó expresamente publicación y despliegue. PR #29 fusionada en `main`, commit `4c7314f02576c7978c65159875201171cc43caab`, con ambas versiones de los cursos, diez PDF regenerados en sus dos rutas, lector web `redcap/material-2027.html`, programa `redcap/programas-2027.html`, guía de sintaxis y plantilla de seguimiento. Pruebas de REDCap en `main` superadas. GitHub Pages **finalizó correctamente**: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39098373729. Entrada pública: https://bhermoso.github.io/aula-activos-comunitarios/redcap/.

**Verificación limitada:** no fue posible abrir el sitio directamente desde este entorno; se confirma publicación por el resultado de Actions, pero no se afirma auditoría funcional en navegador. El plan docente sigue **pendiente de validación institucional (Gesforma)** y de cotejo con la versión/permisos del REDCap local, pre/post-test, accesibilidad y móvil. Se mantienen separados los módulos municipales, sin despliegue Firebase ni sistema individual de seguimiento de alumnado.


## 18/10/2026 · Rectificación de moderación de Fuente Vaqueros

El usuario confirma que el moderador del taller es **Rubén**, relacionado con el **área de Cultura del Ayuntamiento de Fuente Vaqueros**. Sustituye a la identificación errónea introducida el 17/10/2026. El nombre Rubén coincide con el programa preparatorio original. No constan apellidos ni cargo específico verificables, por lo que no deben completarse por inferencia. Corrección restringida al módulo de Fuente Vaqueros y su documentación. Las personas propuestas para el coloquio y las confirmaciones previas de Carlos del Moral Campaña permanecen sin cambios. Publicado con autorización expresa mediante PR #31, fusión `71c7f51a513b316a444ab966cb51dc9cba341654`. GitHub Pages confirmó éxito: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39103552418.

## 18/10/2026 · Incidencia del asistente de tipos de campo REDCap Básico

El usuario detectó que el mensaje fijo «Error común: Sexo con Checkboxes...» no cambiaba al seleccionar otros tipos de campo en la unidad de diseño. Causa: aviso HTML estático fuera del asistente interactivo. **Corrección fusionada y publicada en `main`** mediante PR #32, commit `d4d07c0bcab28fc7c62f10a27042ea42d3cda4fb` (origen: rama `fix/redcap-asistente-tipos-aviso-dinamico-20261018`): siete consejos adaptados a la opción elegida, ocultación del aviso previo al modificar la pregunta principal, etiquetas ARIA, tests del asistente y ampliación del flujo de CI de REDCap. No afecta a REDCap Avanzado ni a otros módulos. La publicación fue expresamente autorizada por el usuario. Las pruebas en PR #32 y `main` terminaron correctamente. Registro de despliegue: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39112667947. La validación visual directa en navegador sigue pendiente.


## 18/10/2026 · Loja, segunda sesión del Grupo Motor: mapeo y priorización

**Alcance aclarado por el usuario:** se prepara dentro del **Aula de Salud Comunitaria Basada en Activos** una **segunda sesión de Loja**, distinta de la reunión del 16/10/2026. Sus objetivos son (1) **planificar el mapeo**: nuevos procesos participativos y revisión **uno por uno** de los recursos heredados pendientes, conciliando antes con el estado real en Localiza Salud; (2) **revisar la priorización de 2022 y decidir cómo actualizarla**, si procede. **NO** formular todavía las líneas estratégicas, objetivos ni indicadores del Plan Local de Salud: son una fase posterior a la priorización.

**Materiales incorporados a `main` y publicados en GitHub Pages mediante PR #34:** `impulso/sesion-2.html` (página propia de la segunda sesión, enlazada desde la portada de Loja), `impulso/SESION_2_MAPEO_Y_PRIORIZACION.md` (guion metodológico con ficha y acta), actualización de documentación de continuidad y test de regresión. Se respeta íntegramente el desarrollo de la sesión 1 y no se modifican otros módulos.

**Contexto documentado:** la transcripción de `problemas priorizados y propuesta plan de accion.odt` del expediente Loja de COMPÁS-NG Renovado señala **26 problemas ordenados y 40 participantes en 2022**; comprobar original y acta de acuerdos antes de ratificar. Los 162/5/157 recursos eran fotografía histórica migrada a COMPÁS, **no** inventario actual de Localiza Salud. COMPÁS-NG dispone de priorización temática (diez temas, máximo cinco) y generación de diccionario REDCap con importación posterior, **sin recogida pública propia**. COMPÁS se utiliza solo como **herramienta de referencia externa**; este trabajo no cambia su código ni crea encuestas.

**Pendientes:** inventario completo con ID, relación actual de Localiza Salud y perfiles con permisos de validación; documento ODT y acta 2022; organización de grupos y técnicas participativas; calendario y duración definitiva de sesión 2. **Publicación autorizada el 18/10/2026:** PR #34 fusionada en `main`, commit `11dec09d579d936253e1fc42349b5aee0ddc2a99`. La validación de funcionamiento real en navegador y los documentos originales de Loja siguen pendientes.

### Loja · PR #34, materiales prácticos de sesión 2 (18/10/2026)

Continuación del alcance exclusivo del Aula: incorporadas ficha HTML de revisión individual (`impulso/ficha-revision-activos.html`), plantilla CSV vacía, guía metodológica de criterios (`impulso/GUIA_REVISION_INDIVIDUAL_ACTIVOS.md`), dinámica HTML de contraste de las 26 prioridades de 2022 (`impulso/dinamica-priorizacion.html`) y enlaces desde la página independiente de sesión 2. Todas las herramientas muestran explícitamente que no guardan/envían datos ni validan registros en Localiza Salud; no se exponen datos personales, no se consultan recursos privados ni se ejecuta encuesta. La revisión del total del inventario se programa por lotes, no se hace durante la reunión. La prioridad se actualiza metodológicamente, no se vota de nuevo en este prototipo. Tests de alcance y seguridad ampliados, ver workflow de la PR #34. **Publicado con autorización expresa del usuario:** PR #34 fusionada, pruebas automáticas de sesión 2 superadas. Sitio: https://bhermoso.github.io/aula-activos-comunitarios/impulso/sesion-2.html. GitHub Pages: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39157670427. No afirmar comprobación visual directa desde navegador.
