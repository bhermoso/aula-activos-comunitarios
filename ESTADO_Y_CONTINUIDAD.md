# Aula de Salud Comunitaria Basada en Activos — estado y continuidad

> **FUENTE VAQUEROS · CONVOCATORIA CONFIRMADA 19/10/2026:** Taller del **22/10/2026, 10:30–12:00**, **Ayuntamiento de Fuente Vaqueros, Sala de audiovisuales (1.ª planta), Plaza del Doctor Pareja, 1**. La sede y el horario se mostrarán en portada, programa y ambas secciones de participantes de la PR #39. La siguiente sesión de priorización y planificación de mapeos mantiene fecha por acordar. No confundir ambos encuentros.

> **CORRECCIÓN OPERATIVA · 19/10/2026 · Fuente Vaqueros:** La trabajadora social de Salud Mental inicialmente prevista **no asistirá**. Se retira de los listados de participantes y del guion de la mesa-coloquio; quedan **6 participantes previstos** y **3 perspectivas del coloquio** (atención primaria, familias/AMPA y salud escolar), coordinadas por **Rubén García Martín, técnico de Cultura del Ayuntamiento**. La materia de bienestar emocional permanece en el diagnóstico histórico, sin una intervención asignada. Publicación de esta actualización pendiente de autorización.

> **ACTUALIZACIÓN FUENTE VAQUEROS · 19/10/2026:** **Rubén García Martín, técnico de Cultura del Ayuntamiento de Fuente Vaqueros**, es la persona designada para la moderación del taller del 22/10/2026, según indicación directa del usuario. Esta información completa y sustituye las referencias previas a «Rubén, apellidos pendientes»; no altera las personas invitadas ni su estado de confirmación.


> **ESTADO VIGENTE · 18/10/2026 · PUBLICADO:** el usuario autorizó y se fusionaron la **PR #36 (Loja, commit `62dd701c6d618302256d8bb79f694b5dcdc39858`)** y la **PR #37 (Fuente Vaqueros, commit `64d0e371e841c2014bc75bd75ccfc666752c9168`)**. Ambas agendas de segunda sesión contienen la misma secuencia: **1) recuperar/priorizar problemas, 2) seleccionar grandes líneas si procede, 3) PLANIFICAR EN ESA MISMA SESIÓN qué activos mapear, dónde, con quién, con qué técnica y quién coordina, 4) ejecutar posteriormente**. Si hay encuesta pendiente, las líneas y el mapeo diseñado son provisionales. **Agenda: 10 + 20 + 20 + 15 + 15 + 30 + 10 = 120 minutos.** Confirmar GitHub Pages y el acceso visual antes de dar por verificada la interfaz en navegador.
>
> **Accesos publicados por diseño:** `impulso/index.html` separa el taller histórico de Loja y la sesión de priorización/mapeo `impulso/sesion-2.html`; `fuente-vaqueros/index.html` conserva el taller del 22/10 y enlaza a `fuente-vaqueros/sesion-priorizacion-mapeo.html` para el trabajo futuro. Las matrices planifican mapeos; no ejecutan encuestas, no guardan datos ni registran activos. COMPÁS-NG permanece externo.
>
> **Cautelas:** PR #20 de migración de encuesta de actores de Loja sigue **abierta**, no fusionada. Puede solaparse con la navegación en `impulso/index.html` y `impulso/ficha.html`; comprobar conflictos antes de intervenir. Verificar ODT/actas y el estado real de Localiza Salud antes de atribuir aprobaciones o cantidades. **El contenido posterior al siguiente separador conserva decisiones históricas y estados intermedios que no deben leerse como instrucciones vigentes si contradicen este bloque.**

---


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
| **Loja: taller de impulso + priorización y planificación del mapeo** (`impulso/`) | **Sí, PR #36 publicada** | Itinerario con taller histórico separado y segunda sesión: priorización de líneas y planificación del mapeo por línea (ejecución posterior). Guía visual y navegación del Aula integradas | Conciliar PR #20 de actores; cotejar ODT y actas 2022; completar líneas y técnicas del Grupo Motor |
| **Fuente Vaqueros: impulso + sesión futura de priorización y planificación** (`fuente-vaqueros/`) | **Sí, PR #37 publicada** | El taller de impulso del 22/10 se preserva; nueva página separada prioriza grandes líneas y diseña mapeo por línea en la misma reunión; su ejecución será posterior | Verificar actas y Hanlon 2022, situación Localiza Salud, fecha y acuerdos del Grupo Motor |
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

Programa de 22/10/2026: títulos de los bloques primero, personas solo cuando están identificadas y su intervención está propuesta o confirmada. Se incluyen **6 participantes previstos tras la baja comunicada el 19/10/2026 y 17 personas/entidades invitadas**. **Carlos del Moral Campaña tiene confirmada su intervención sobre el informe de situación de salud**, según información directa del usuario del 17/10/2026; para las demás personas, la presencia en el listado por sí sola no acredita asistencia, ponencia ni participación en la mesa. Se completó el apellido **Carlos del Moral Campaña** con el programa de 2021. **Rectificación del 18/10, completada el 19/10/2026:** el moderador es **Rubén García Martín, técnico de Cultura del Ayuntamiento de Fuente Vaqueros**. El 18/10 constaba únicamente el nombre de pila; los apellidos y el puesto han sido facilitados ahora por el usuario. El documento preparatorio inicial citaba «Rubén». Se anula la atribución a otro nombre realizada el 17/10/2026. **La moderación está asignada; la composición de la mesa sí permanece pendiente de confirmar.**

**Mesa-coloquio:** el enfoque ya publicado es escuchar la experiencia y no examinar sobre RELAS. **Enfoque editorial publicado (17/10/2026):** tras la presentación **confirmada** del «Informe sobre la situación de salud de Fuente Vaqueros» a cargo de Carlos del Moral Campaña, escuchar tres miradas diferenciadas: atención primaria (Alicia Bellido González), familias/AMPA (María Martín Calvo) y salud escolar (Francisco J. Pigne Marín). La intervención específica desde trabajo social de Salud Mental fue retirada por indicación organizativa del 19/10/2026. **Rubén García Martín, técnico de Cultura del Ayuntamiento**, modera. La guía se adapta con una pregunta específica por perspectiva y repreguntas opcionales. Problemas de accesibilidad, uso frecuente de servicios y demandas emergentes son **ámbitos por explorar**, no hechos acreditados. La mesa no prioriza problemas ni solicita datos clínicos individuales. La revisión abarca también **los siete bloques del programa**, presentados con resumen visible y detalles plegables, y la documentación real del trabajo de 2022: 102 cuestionarios, 416 selecciones, clasificación de 33 problemas y ensayo de Hanlon sobre una tabla de 27 factores sin puntuación final acreditada. **PR #27 publicado:** https://github.com/bhermoso/aula-activos-comunitarios/pull/27, commit `f0f64ac`, despliegue Pages confirmado. **Rectificación posterior:** el bloque 03 se denomina «Informe sobre la situación de salud de Fuente Vaqueros», no «Indicadores de enfermedad». La intervención de Carlos está **confirmada**. Se retira cualquier descripción no respaldada sobre indicadores o tendencias y la falsa nota de confirmación pendiente; se ajustan también los PDF. El cambio se tramita en PR #28.

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
1. **Fuente Vaqueros antes del encuentro del 22/10/2026:** confirmar intervenciones y composición definitiva de la mesa (lugar y horario del taller del 22/10 ya confirmados); corregir expediente histórico hasta donde exista fuente; comprobar Localiza Salud; preparar presentación breve de Blas centrada en priorización + mapeo; validar que el coloquio escucha experiencias y no exige método.
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

El 18/10 el usuario confirmó el nombre de pila **Rubén** y su relación con el área de Cultura del Ayuntamiento, corrigiendo una identificación errónea del 17/10. **El 19/10 el usuario ha completado el dato: Rubén García Martín, técnico de Cultura del Ayuntamiento de Fuente Vaqueros.** Quedan superadas las advertencias de apellidos y cargo pendientes. Corrección restringida al módulo de Fuente Vaqueros y su documentación. Las personas propuestas para el coloquio y las confirmaciones previas de Carlos del Moral Campaña permanecen sin cambios. Publicado con autorización expresa mediante PR #31, fusión `71c7f51a513b316a444ab966cb51dc9cba341654`. GitHub Pages confirmó éxito: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39103552418.

## 18/10/2026 · Incidencia del asistente de tipos de campo REDCap Básico

El usuario detectó que el mensaje fijo «Error común: Sexo con Checkboxes...» no cambiaba al seleccionar otros tipos de campo en la unidad de diseño. Causa: aviso HTML estático fuera del asistente interactivo. **Corrección fusionada y publicada en `main`** mediante PR #32, commit `d4d07c0bcab28fc7c62f10a27042ea42d3cda4fb` (origen: rama `fix/redcap-asistente-tipos-aviso-dinamico-20261018`): siete consejos adaptados a la opción elegida, ocultación del aviso previo al modificar la pregunta principal, etiquetas ARIA, tests del asistente y ampliación del flujo de CI de REDCap. No afecta a REDCap Avanzado ni a otros módulos. La publicación fue expresamente autorizada por el usuario. Las pruebas en PR #32 y `main` terminaron correctamente. Registro de despliegue: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39112667947. La validación visual directa en navegador sigue pendiente.


## 18/10/2026 · Loja, segunda sesión del Grupo Motor: mapeo y priorización

**Alcance aclarado por el usuario:** se prepara dentro del **Aula de Salud Comunitaria Basada en Activos** una **segunda sesión de Loja**, distinta de la reunión del 16/10/2026. Sus objetivos son (1) **planificar el mapeo**: nuevos procesos participativos y revisión **uno por uno** de los recursos heredados pendientes, conciliando antes con el estado real en Localiza Salud; (2) **revisar la priorización de 2022 y decidir cómo actualizarla**, si procede. **NO** formular todavía las líneas estratégicas, objetivos ni indicadores del Plan Local de Salud: son una fase posterior a la priorización.

**Materiales incorporados a `main` y publicados en GitHub Pages mediante PR #34:** `impulso/sesion-2.html` (página propia de la segunda sesión, enlazada desde la portada de Loja), `impulso/SESION_2_MAPEO_Y_PRIORIZACION.md` (guion metodológico con ficha y acta), actualización de documentación de continuidad y test de regresión. Se respeta íntegramente el desarrollo de la sesión 1 y no se modifican otros módulos.

**Contexto documentado:** la transcripción de `problemas priorizados y propuesta plan de accion.odt` del expediente Loja de COMPÁS-NG Renovado señala **26 problemas ordenados y 40 participantes en 2022**; comprobar original y acta de acuerdos antes de ratificar. Los 162/5/157 recursos eran fotografía histórica migrada a COMPÁS, **no** inventario actual de Localiza Salud. COMPÁS-NG dispone de priorización temática (diez temas, máximo cinco) y generación de diccionario REDCap con importación posterior, **sin recogida pública propia**. COMPÁS se utiliza solo como **herramienta de referencia externa**; este trabajo no cambia su código ni crea encuestas.

**Pendientes:** inventario completo con ID, relación actual de Localiza Salud y perfiles con permisos de validación; documento ODT y acta 2022; organización de grupos y técnicas participativas; calendario y duración definitiva de sesión 2. **Publicación autorizada el 18/10/2026:** PR #34 fusionada en `main`, commit `11dec09d579d936253e1fc42349b5aee0ddc2a99`. La validación de funcionamiento real en navegador y los documentos originales de Loja siguen pendientes.

### Loja · PR #34, materiales prácticos de sesión 2 (18/10/2026)

Continuación del alcance exclusivo del Aula: incorporadas ficha HTML de revisión individual (`impulso/ficha-revision-activos.html`), plantilla CSV vacía, guía metodológica de criterios (`impulso/GUIA_REVISION_INDIVIDUAL_ACTIVOS.md`), dinámica HTML de contraste de las 26 prioridades de 2022 (`impulso/dinamica-priorizacion.html`) y enlaces desde la página independiente de sesión 2. Todas las herramientas muestran explícitamente que no guardan/envían datos ni validan registros en Localiza Salud; no se exponen datos personales, no se consultan recursos privados ni se ejecuta encuesta. La revisión del total del inventario se programa por lotes, no se hace durante la reunión. La prioridad se actualiza metodológicamente, no se vota de nuevo en este prototipo. Tests de alcance y seguridad ampliados, ver workflow de la PR #34. **Publicado con autorización expresa del usuario:** PR #34 fusionada, pruebas automáticas de sesión 2 superadas. Sitio: https://bhermoso.github.io/aula-activos-comunitarios/impulso/sesion-2.html. GitHub Pages: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39157670427. No afirmar comprobación visual directa desde navegador.

## 18/10/2026 · Rectificación de secuencia y separación visual de Loja (propuesta, NO publicada)

**Esta actualización sustituye el planteamiento de «mapeo + priorización» como tareas simultáneas** de la PR #34. El usuario aclara el orden: **1. Taller de impulso (16/10), 2. Priorización y elección de líneas estratégicas, 3. Mapeo únicamente de activos vinculados a esas líneas**. La auditoría completa del antiguo inventario (157 pendientes en una foto histórica de COMPÁS) **no pertenece al mapeo específico de este Plan**; el mantenimiento general del catálogo es otra tarea. Se conserva la priorización histórica 2022 (40 participantes, 26 problemas) como fuente pendiente de cotejar con originales y actas. Si se decide nueva encuesta, no seleccionar líneas definitivas hasta disponer y deliberar resultados. COMPÁS-NG sigue exclusivamente como contexto técnico externo; no se cambia ese repositorio.

**Cambio de diseño:** la raíz `impulso/index.html` será un **itinerario visual limpio** con entradas a `taller-impulso.html` (copia íntegra del primer taller sin la tarjeta invasiva de la sesión 2, con herramientas originales preservadas) y `sesion-2.html` (priorización y líneas), además de un tercer paso de mapeo diferido y no navegable. La raíz del Aula sigue enlazando a `impulso/`. Para compatibilidad con enlaces profundos a `impulso/#diagnostico`, `#ficha` y otros ocho apartados, el nuevo índice redirige a `taller-impulso.html#...`.

**Material revisado:** guion de segunda sesión; dinámica de 26 problemas con apartado condicionado de líneas; ficha y plantilla CSV que ahora exigen **línea seleccionada + pertinencia del recurso** (22 columnas, no 20). La ficha de recursos se conserva para la etapa posterior, no como actividad nuclear de la sesión 2. Quedan pendientes originales 2022, actas, acuerdo municipal y estados reales de Localiza Salud. **Cambios preparados en rama sin fusión ni despliegue; verificar CI y revisar visualmente antes de autorización de publicación.**

## 18/10/2026 · Auditoría de coherencia de agendas, páginas y dependencias · PR #36

El usuario advierte que un cambio metodológico debe activar **revisión transversal**. Se revisan: portada del Aula, portada de Loja, primer taller y su programa de 90 minutos, sesión 2 y su agenda de 120, dinámica de priorización (26 problemas), guía docente HTML, ficha individual y CSV para mapeo posterior, encuesta histórica de actores (sin tocar su envío Firestore), enlaces, navegación y documentación de continuidad. El programa del 16/10 se conserva como historia; solo se añade la distinción entre propuestas de entonces y actividades que podrán seleccionarse tras priorización. **La agenda 2 usa un bloque condicionado**: si se acuerda consulta, las líneas se seleccionan después de devolver resultados; si no se acuerda y hay evidencias suficientes, el Grupo Motor puede seleccionarlas con motivación. Ninguna de las rutas incluye ahora mapeo o auditoría de recursos de Localiza Salud.

Nuevo control automático: equivalencia de agenda HTML y Markdown (7 códigos, suman 120, mismo contenido y ruta condicionada), diferenciación de agendas históricas, alcance de fichas de activos, enlaces, navegación y guía HTML en lugar de texto plano. El rediseño queda en PR #36 **pendiente de autorización expresa para fusionar y publicar**. Dado que la PR #20 de REDCap para actores cambia `impulso/ficha.html` e `impulso/index.html`, comprobar divergencias antes de la integración. Sin modificación a COMPÁS-NG, REDCap principal, Fuente Vaqueros, producción o bases de datos.

### 18/10/2026 · Rectificación de agenda: planificar mapeos en la segunda sesión

**Instrucción vigente (supersede apartados previos incompatibles):** segunda sesión de Loja con dos fases consecutivas: **(1) revisar/priorizar problemas, resolver necesidad de consulta y seleccionar grandes líneas, o dejar propuestas condicionadas; (2) inmediatamente planificar por cada línea qué mapear, en qué territorio, con quién, mediante qué técnica y quién coordinará**. Duración orientativa **10 + 20 + 20 + 15 + 15 + 30 + 10 = 120 minutos**. El mapeo de campo y la revisión de recursos en Localiza Salud sí ocurren después de ratificar las líneas; si hay nueva encuesta, la matriz queda como hipótesis y no se inicia trabajo de campo. No se presupone que envejecimiento, pantallas, violencia de género o desigualdades en un barrio ERACIS sean líneas seleccionadas; son casos didácticos. Documento/página y nueva `impulso/matriz-planificacion-mapeo.html` sincronizados, con pruebas de agenda y navegación. Mantener registro de decisiones anteriores, pero no tratarlas como agenda vigente.

**No publicado:** todo permanece en PR #36 (borrador). Sigue abierta PR #20 con solapamientos en `impulso/index.html` y `impulso/ficha.html`, que debe reconciliarse antes de fusionar. No se altera COMPÁS-NG ni otros municipios.

## 18/10/2026 · Fuente Vaqueros: priorizar líneas antes de planificar los mapeos

La información aportada por el usuario indica que **no hay activos de Fuente Vaqueros registrados en Localiza Salud**; estado **comunicado, pendiente de verificación directa**. La ausencia en portal no demuestra ausencia de activos comunitarios. El expediente original de Fuente Vaqueros contiene 102 cuestionarios, 416 selecciones entre 33 problemas y Hanlon preparado para 27 factores sin resultado final aprobado localizado.

**Cambio preparado solo en rama separada** `feat/fuente-vaqueros-priorizacion-mapeo-20261018`: después del taller de impulso previsto para **22/10/2026**, nueva página `fuente-vaqueros/sesion-priorizacion-mapeo.html` y guion específico, con secuencia: **primero revisar/priorizar necesidades y grandes líneas, luego decidir en la misma sesión qué mapear, dónde, con quién y mediante qué técnica para esas líneas, después realizar trabajo de campo y posibles altas en Localiza Salud**. Si se aprueba encuesta, las líneas y la matriz de mapeo se mantienen provisionales hasta devolver resultados. Agenda propuesta **10+20+20+15+15+30+10=120 minutos**, fecha sin establecer. Integración en portada y Hoja de ruta de Fuente sin convertir el taller del 22 en sesión de priorización aprobada. Tests específicos nuevos; otros módulos intactos. Rubén García Martín (técnico de Cultura del Ayuntamiento) y confirmación de Carlos del Moral Campaña preservados.

**Dependencias:** cotejar estado actual del portal con perfil autorizado y verificar actas/resultados posteriores a abril 2022, coordinación del Grupo Motor y fecha futura. No confundir datos con Loja ni intervenir en COMPÁS-NG. **No hay autorización para fusión o despliegue** de esta rama; PR #36 de Loja sigue aparte.


## 18/10/2026 · Publicación autorizada de ambas sesiones

Fusionadas PR #36 y PR #37 con agendas de 120 minutos y planificación de mapeo **después** de seleccionar líneas, pero **dentro** de la segunda reunión. La colisión de continuidad se resolvió conservando datos de ambos municipios. Pruebas automatizadas positivas en ramas de PR. La página de Loja y la de Fuente Vaqueros no se han convertido en instrumentos de captación de datos; el trabajo de campo y la validación oficial son posteriores. La comprobación manual visual permanece pendiente.


## 19/10/2026 · Identidad completa del moderador de Fuente Vaqueros

**Confirmación del usuario:** Rubén García Martín, **técnico de Cultura** del Ayuntamiento de Fuente Vaqueros, moderará la mesa-coloquio del taller de impulso de 22/10/2026. Se armonizan la portada, programa, sección de participantes, guion de moderación, expediente y pruebas automatizadas; sin modificar los demás participantes ni el módulo de Loja. Las notas previas sobre apellidos pendientes pertenecen a una versión histórica ya superada. **Publicación no autorizada en esta intervención**; cambios en rama de revisión.


## 19/10/2026 · Baja comunicada en la mesa de Fuente Vaqueros

El usuario informa que la trabajadora social de Salud Mental inicialmente prevista **no asistirá** al taller del 22/10. Se actualizan el programa, las dos vistas de participantes, el guion de moderación, el expediente, recuentos, pruebas y continuidad; la mesa queda planteada con **3 perspectivas y 6 personas previstas**, sin variar las **17 invitaciones** ni la confirmación de Carlos del Moral Campaña. El bienestar emocional sigue como problema identificado en la consulta histórica y no se asigna ninguna pregunta a una cuarta persona ausente. La secuencia de priorización → elección de líneas → planificación de los mapeos no cambia. Los cambios permanecen en la PR #39 hasta publicación autorizada.


### 19/10/2026 · Horario y lugar del taller de Fuente Vaqueros

Confirmación directa del usuario para la cita del **22 de octubre de 2026**: **de 10:30 a 12:00**, **Ayuntamiento de Fuente Vaqueros — Sala de audiovisuales (1.ª planta), Plaza del Doctor Pareja, 1**. Aplicado a la portada, los siete bloques del programa (sin inventar tiempos individuales), ambas relaciones de participantes, datos generales, expediente, pruebas y continuidad. La nueva sesión de priorización y preparación de mapeos no tiene aún fecha/horario; no trasladar estos datos. PR #39 sigue en borrador, sin despliegue.
