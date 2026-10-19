# Fuente Vaqueros · estado y continuidad

> **LUGAR Y HORARIO CONFIRMADOS · 19/10/2026:** Taller de impulso del **22/10/2026**, **10:30–12:00**, en el **Ayuntamiento de Fuente Vaqueros, Sala de audiovisuales (1.ª planta), Plaza del Doctor Pareja, 1**. Se aplica a portada, programa, sección de participantes, ficha ampliada de participantes y expediente, sin inventar minutaje por bloque. La sesión posterior de priorización y planificación del mapeo aún no tiene fecha ni horario establecidos.

> **SITUACIÓN DE LA MESA · 19/10/2026:** la trabajadora social de Salud Mental previamente prevista **no acudirá** al taller del 22/10. Retirada de la relación de participantes y de la moderación. Quedan **6 personas previstas**, **17 invitaciones** y **3 perspectivas** para la mesa-coloquio (atención primaria, familias/AMPA y salud escolar), moderada por Rubén García Martín, técnico de Cultura del Ayuntamiento de Fuente Vaqueros. La composición y la asistencia de las restantes personas no se dan por confirmadas.

> **ACTUALIZACIÓN VIGENTE · 19/10/2026.** Moderación del taller del 22/10: **Rubén García Martín, técnico de Cultura del Ayuntamiento de Fuente Vaqueros** (identificación comunicada directamente por el usuario). Las menciones de «apellidos pendientes» de los antecedentes del 18/10 han quedado **superadas**. La composición de la mesa de participantes continúa sujeta a las confirmaciones ya indicadas.

> **ESTADO VIGENTE · PUBLICADO 18/10/2026 · PR #37.** El taller de impulso **previsto para el 22/10/2026** se conserva en `index.html`. Una **sesión posterior** de Grupo Motor está preparada en `sesion-priorizacion-mapeo.html`: primero revisar/priorizar problemas y elegir grandes líneas si existe base; después, en esa misma sesión, **planificar los mapeos** (qué activos, dónde, con quién, técnicas y coordinación); ejecución y posibles altas administrativas después. Agenda orientativa de 120 minutos: **10 + 20 + 20 + 15 + 15 + 30 + 10**. Si se prepara encuesta, líneas y planes son provisionales.
>
> **Dato comunicado, no comprobado en portal:** Fuente Vaqueros no tiene activos registrados en Localiza Salud, según el usuario. No confundir cero registros con cero activos existentes. El expediente histórico conserva 102 cuestionarios de 2022; falta verificar aprobación del resultado Hanlon. No se ha iniciado una encuesta real ni tramitado recursos. **Los apartados siguientes registran decisiones y ramas históricas**, no instrucciones pendientes de fusión o despliegue.

---

## Archivo histórico de identidad visual

# Fuente Vaqueros · continuidad de identidad visual

**Fecha:** 16/10/2026. **Rama de revisión**: `fuente-vaqueros-sin-azul-20261016`.

## Incidencia
El taller continuaba mostrando azul en secciones interiores debido a un juego de variables CSS independientes del resto del Aula y a dos reglas con colores azules fijos:
- `--teal:#497896`, `--accent:#b8d4ee`, `--light:#eaf1f6`.
- `.summary-grid strong` (`#376a77`) y `.num` (`#4f7d93`).
- También la portada usaba `--cover-accent:#b8d4ee`, `--cover-card:#193d48`, `--cover-line:#335b66`.

## Solución
Actualizar **solo** `fuente-vaqueros/index.html`, con fondo arena y verde profundo de la familia del Aula. Paleta de Fuente Vaqueros: verde principal `#246c53`, acento salvia `#b9dba9`, verde pálido `#edf5e9`, portada `#1b4136` y `#406e58`, texto destacado verde `#2f694b` y `#2e7254`. Se mantienen las seis pestañas/secciones, portada de identidad compartida, navegación y funcionalidades. No tocar hojas de estilo comunes ni módulos de Loja, REDCap y activos.

## Control de regresión
`node --test fuente-vaqueros/tests/paleta.test.mjs` verifica que no reaparezcan tonos azules saturados, que se conservan los colores acordados, contraste mínimo 4.5:1 en botones y titulares y las seis secciones. Integración en GitHub Actions para cambios futuros. Esta prueba estática no sustituye la revisión visual con navegador real a distintas anchuras.

**Despliegue:** fusionar a `main` y esperar a GitHub Pages solo con autorización expresa. Después comprobar las páginas interiores con caché actualizada y comprobar pantallas pequeñas.


## 18/10/2026 · Identificación del moderador

**Rectificación aportada por el usuario el 18/10/2026, completada el 19/10/2026:** el moderador de la mesa-coloquio del 22/10/2026 es **Rubén García Martín, técnico de Cultura del Ayuntamiento de Fuente Vaqueros**. El programa preparatorio inicial ya señalaba «Rubén»; la identificación diferente publicada el 17/10/2026 era errónea. El 18/10 aún no se habían confirmado los apellidos ni la función concreta; **el usuario los confirmó el 19/10**. No atribuirle la Concejalía de Cultura. Cambios en portada, programa, relación de participantes y guion de moderación, con pruebas ajustadas. Esta corrección queda preparada en rama para revisión; no se fusiona ni despliega sin autorización expresa.

## 18/10/2026 · Priorización previa a la planificación del mapeo

**Nuevo criterio docente comunicado por el usuario:** Fuente Vaqueros carece, según información aportada, de activos registrados en Localiza Salud. **No se ha contrastado directamente el recuento**; consignarlo como dato comunicado pendiente de comprobación. Esto no significa carencia de recursos comunitarios ni obliga a inventariar todo antes de priorizar.

Se propone la siguiente secuencia, paralela a Loja pero **sin transferir datos entre municipios**: **revisar la identificación y priorización 2022 → valorar nueva consulta → seleccionar grandes líneas estratégicas → planificar en la misma sesión qué mapear por línea, dónde, con quién, mediante qué técnicas y responsables → ejecutar y tramitar registros después**. En caso de consulta posterior, las líneas y el diseño del mapeo son hipótesis hasta deliberar resultados, sin comenzar trabajo de campo.

**Documentación concreta del municipio:** 102 cuestionarios y 416 selecciones entre 33 factores en 2022; tabla para aplicar Hanlon a 27 factores, sin constancia en el expediente del ranking Hanlon aprobado. Acta del 29/04/2022 y originales pendientes de cotejar/completar con decisiones posteriores. El taller de impulso **previsto para el 22/10/2026** conserva su programa y participantes; solo se precisa que su trabajo participativo es exploratorio y no un mapeo ya ejecutado.

**Archivos nuevos en rama `feat/fuente-vaqueros-priorizacion-mapeo-20261018`:** `sesion-priorizacion-mapeo.html` (sesión futura de 120 min, matriz por líneas imprimible y no persistente), `SESION_PRIORIZACION_Y_MAPEO.md` (guion docente) y `tests/priorizacion-mapeo.test.mjs`; `index.html` enlaza a esta fase y corrige instrucciones prematuras de mapeo. **No fusionado ni desplegado**; no publicar sin autorización. No modifica Loja ni COMPÁS-NG.

**Secuencia de agenda:** 10 apertura, 20 antecedentes 2022, 20 contraste, 15 decisión de consulta, 15 líneas, **30 planificación del mapeo por línea**, 10 cierre = 120 min. Casos de envejecimiento, pantallas, violencia de género y desigualdades: ilustrativos, no prioridades municipales elegidas. Seguridad especial para violencia de género y recursos confidenciales. Los formatos HTML son materiales de trabajo, no acuerdos ni registros oficiales.


## 19/10/2026 · Moderación identificada íntegramente

El usuario confirma: **Rubén García Martín, técnico de Cultura del Ayuntamiento de Fuente Vaqueros**. Se actualizan portada, programa, participantes, guion, expediente y pruebas sin cambiar el reparto de intervenciones ni los acuerdos metodológicos. Esta información deja sin efecto la indicación anterior de apellidos/cargo pendientes.


## 19/10/2026 · Rectificación transversal por baja de participante

La organización comunica que la trabajadora social de Salud Mental no vendrá. Se elimina su intervención prevista del programa, del listado duplicado de participantes, del guion de preguntas de Rubén García Martín y de las expectativas de cuatro perspectivas. **No se sustituye automáticamente por otra persona**. Quedan tres perspectivas propuestas y seis participantes previstos; las 17 invitaciones de entidades y personas se mantienen. El bienestar emocional continúa como aspecto histórico de salud, sin ponencia específica de la profesional ausente. Se comprueban tests, expediente, documentación de continuidad y la independencia de la posterior sesión de priorización/mapeo. Corrección incluida en PR #39, pendiente de autorización para su publicación.


## 19/10/2026 · Convocatoria: localización y franja horaria

El usuario comunica que el taller del 22/10 tendrá lugar en el **Ayuntamiento de Fuente Vaqueros, Sala de audiovisuales (1.ª planta), Plaza del Doctor Pareja, 1**, de **10:30 a 12:00**. Se han eliminado de las páginas del primer encuentro las etiquetas de sede y horario «por confirmar». Verificación transversal: portada, programa, información general y dos relaciones de participantes; no confundir el encuentro del 22/10 con la siguiente reunión del Grupo Motor aún por convocar. No se fija horario ficticio para los siete bloques; su reparto se acordará en el taller. Este cambio se incorpora a PR #39, aún no fusionada ni publicada.
