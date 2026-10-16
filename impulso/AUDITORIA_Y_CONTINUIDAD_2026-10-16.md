# Auditoría y continuidad · Taller de Reimpulso de Loja (Aula)
**Fecha de corte:** 16-10-2026 (después de celebrarse el taller)  
**Repositorio canónico:** `bhermoso/aula-activos-comunitarios`, `main` en `b6a6aa84cd308a43aba0795373ecefb2ca2a22d3`.  
**Módulo mantenido:** `/impulso/`.  
**Repositorio independiente:** `bhermoso/taller-reimpulso-loja`, fuera del mantenimiento futuro por decisión del usuario.

## 1. Alcance y reglas
- Revisar y mejorar **solo** el Taller de Loja integrado en el Aula. No reconstruir otro taller ni preparar plantillas para otros municipios.
- No eliminar el repositorio independiente en esta intervención. Se identifica por su nombre y metadatos, pero su árbol y ramas no pudieron recuperarse mediante el conector. Antes de eliminarlo, guardar una copia y comprobar si conserva archivos originales no migrados. 
- No modificar contenidos del PDF ni del ODP del epidemiólogo. No inventar logotipos, resultados de participación, acuerdos ni datos epidemiológicos.
- No publicar modificaciones de interfaz ni cambiar las reglas de Firebase sin pruebas y autorización.

## 2. Mapa verificado del módulo (main)
- `impulso/index.html`: portada, navegación de **8 apartados**, itinerario previsto de 90 minutos, guion de Sergio, antecedentes y propuestas participativas.
- `impulso/ficha.html`: encuesta exploratoria voluntaria de sectores y actores, **solo localStorage**.
- `impulso/qr-ficha.svg`: QR; decodificado y verificado, conduce a `https://bhermoso.github.io/aula-activos-comunitarios/impulso/ficha.html`.
- `assets/proyeccion-loja.js`, `assets/proyeccion-loja.css`: presentación 16:9; incluye un visor de PDF original de Carlos dependiente de Google Drive.
- `assets/aula-portadas.js`, `assets/aula-portadas.css`: portada y navegación común con otros módulos. Preservar arquitectura.
- `impulso/expediente-loja-2026.md`, `impulso/GUIA_PONENTE_16-10-2026.md`, `impulso/ENCUESTA_SECTORES_ESTADO.md` y `impulso/IDENTIDAD_INSTITUCIONAL.md`: documentación de soporte.
- La última ejecución de GitHub Pages comprobada para `b6a6aa84` concluyó **success**. No constituye una prueba de renderizado en el navegador real.

## 3. Hallazgos y estado
| Prioridad | Hallazgo | Comprobación | Estado |
| --- | --- | --- | --- |
| Alta | El itinerario acumula estilos incompatibles y cambios de formato sucesivos. | En `index.html` coexisten `loja-itinerario-viewport`, `loja-itinerario-pantalla` y `loja-agenda-siete-filas`. | Pendiente de reparación validada |
| Alta | La presentación original de Carlos depende de enlaces a Drive con acceso restringido. | PDF y ODP no poseen permiso de lectura pública `anyone`; PDF compartido solo con personas concretas y ODP sin uso compartido. | No accesible universalmente |
| Alta | La actividad con QR no recoge propuestas para la organización. | La página `ficha.html` solo guarda `localStorage`. El QR se decodificó correctamente. | QR funcional; recogida central pendiente |
| Media | Conectar Firestore es una intervención separada. | PR #9 abierto, código/ejemplo de reglas y configuración del proyecto propuestos, **no integrados ni probados**. | No publicar ni anunciar respuestas recibidas |
| Media | Documentación de identidades desactualizada. | `IDENTIDAD_INSTITUCIONAL.md` todavía describe 3 imágenes y siglas que fueron retiradas de la portada. | Actualizar para reflejar solo denominaciones textuales |
| Media | Material preparado para la reunión, pero reunión ya celebrada. | Programa y guion hablan de intervenciones/propuestas previstas. | Conservar como programa histórico; falta acta o resultados reales |
| Media | Versión de revisión visual pendiente. | PR #16 abierto: consolida CSS y da mayor contenido a las filas; **no fusionado**. | Validar antes de integrar |
| Baja | Comprobación de eliminación del repositorio independiente. | No se hallaron referencias al nombre/dominio del repo independiente en búsquedas del código del Aula; su propio contenido no pudo inspeccionarse. | No afirmar migración íntegra sin copia |

## 4. Contenidos que se conservan
1. Apertura institucional.
2. Itinerario de 90 minutos.
3. Moderación de Sergio.
4. Antecedentes, RELAS y salutogénesis.
5. Actores y sectores (QR).
6. Estudios complementarios.
7. Mapeo en el entorno escolar.
8. Mapeo comunitario.

Los datos históricos del expediente deben seguir etiquetados como tales. El documento `expediente-loja-2026.md` califica expresamente como históricos/no verificados los 164 cuestionarios mencionados de 2020, los 40 participantes y 26 problemas en 2022 según presentación, y el inventario de 162 recursos (5 validados/157 pendientes) migrado desde COMPÁS NG. Las propuestas de los talleres no son por sí solas acuerdos adoptados.

## 5. Prioridades y criterios de aceptación
1. **Interfaz del itinerario:** una sola capa CSS, sin ocultar los siete momentos, lectura a 100 % en tamaños habituales, navegación móvil legible y sin cortes. Revisar por separado lectura normal y modo Presentar. No modificar otros módulos.
2. **Archivos originales:** incluir copias binarias **sin transformación** de PDF y ODP dentro del módulo o establecer permisos públicos explícitos en la fuente con autorización. Enlaces en caja de Carlos, sin visor invasivo. Comprobar acceso desde sesión privada/no autenticada y descarga.
3. **Encuesta:** usar Firestore solo después de verificar reglas de seguridad, recepción real, derechos de lectura privados, protección antiabuso y responsable/conservación. Mantener municipios segregados. No afirmar que un envío llega al equipo si sigue siendo local.
4. **Documentación:** corregir `IDENTIDAD_INSTITUCIONAL.md`; añadir resultados efectivos del taller únicamente con fuentes proporcionadas o acta verificada.
5. **Continuidad:** revisar y resolver o cerrar PR #16 (diseño) y #9 (Firebase) separadamente. Archivar/custodiar copia del repo independiente antes de borrarlo si conserva algún material no migrado.

**No se han modificado archivos de producción como parte de esta auditoría.**
