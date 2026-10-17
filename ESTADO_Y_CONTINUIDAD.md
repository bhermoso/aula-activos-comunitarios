# Aula de Salud Comunitaria Basada en Activos — estado y continuidad

> **Corte de situación:** 17 de octubre de 2026. **Rama de producción:** `main`; SHA auditada: `4392d8e205193cc1c541846d972077b9ea2ba480`.
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

Programa de 22/10/2026: títulos de los bloques primero, personas solo cuando están identificadas y su intervención está propuesta o confirmada. Se incluyen **7 participantes previstos y 17 personas/entidades invitadas**; convocatoria ≠ asistencia, ponencia o puesto en la mesa. Se completó el apellido **Carlos del Moral Campaña** con el programa de 2021. **Actualización organizativa comunicada el 17/10/2026:** la moderación del taller estará a cargo de **Raúl**, con apellido aún pendiente de conocer e incorporar. El documento preparatorio inicial mencionaba «Rubén»; se conserva como dato histórico del expediente, pero no como identificación válida del moderador asignado para el encuentro de 2026. **La moderación está asignada; la composición de la mesa sí permanece pendiente de confirmar.**

**Mesa-coloquio:** el enfoque ya publicado es escuchar la experiencia y no examinar sobre RELAS. **Nueva revisión editorial pendiente de integración (17/10/2026):** pasar de los indicadores epidemiológicos agregados presentados por Carlos del Moral Campaña a cuatro miradas diferenciadas: atención primaria (Alicia Bellido González), familias/AMPA (María Martín Calvo), salud escolar (Francisco J. Pigne Marín) y salud mental/bienestar emocional desde trabajo social (Margarita Rut Goena Martínez, participación efectiva por confirmar). Raúl modera (apellidos aún pendientes). La guía se adapta con una pregunta específica por perspectiva y repreguntas opcionales. Problemas de accesibilidad, uso frecuente de servicios y demandas emergentes son **ámbitos por explorar**, no hechos acreditados. La mesa no prioriza problemas ni solicita datos clínicos individuales. La revisión abarca también **los siete bloques del programa**, presentados con resumen visible y detalles plegables, y la documentación real del trabajo de 2022: 102 cuestionarios, 416 selecciones, clasificación de 33 problemas y ensayo de Hanlon sobre una tabla de 27 factores sin puntuación final acreditada. **Rama/PR de revisión:** `fuente-mesa-vision-profesional-familias-20261017` / [PR #27](https://github.com/bhermoso/aula-activos-comunitarios/pull/27), sin publicación hasta autorización.

**Intervención propuesta de Blas Hermoso Rico:** (1) recuperar priorización trabajada en 2022 y decidir si precisa actualizarse mediante vía técnica, grupo motor, consulta ciudadana o combinación; (2) iniciar el mapeo participativo de activos orientado a las líneas prioritarias acordadas. La información aportada por el usuario sostiene que Fuente Vaqueros **no tiene activos registrados en Localiza Salud**; **no se verificó directamente el portal**, y cero registros no implica cero activos. La ficha del Aula guarda borradores en el navegador y **no registra** en Localiza Salud.

PR fusionados y publicados sobre Fuente Vaqueros: **#21** paleta, **#22** antecedentes y programa, **#23** primera guía de escucha, **#25** moderador Raúl, **#26** traslado de la trayectoria al bloque 02 del Programa. Se mantienen posteriores ajustes verdes `86434a0` y `4392d8e`. Último Pages de referencia anterior a esta propuesta: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39006512504. El presente cambio de mesa-coloquio **no** está publicado.

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
