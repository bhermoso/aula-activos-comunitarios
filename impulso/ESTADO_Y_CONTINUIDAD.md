# Loja · Estado y continuidad del módulo dentro del Aula

**Revisión:** 16/10/2026, posterior a la celebración del taller.  
**Repositorio canónico:** `bhermoso/aula-activos-comunitarios`, rama `main`.  
**Ruta publicada:** `https://bhermoso.github.io/aula-activos-comunitarios/impulso/`.  
**Versión independiente:** `bhermoso/taller-reimpulso-loja`, fuera del mantenimiento futuro; conservar una copia antes de su eliminación voluntaria por el usuario.

## Arquitectura verificada
- `impulso/index.html`: portada y **ocho apartados** de la actividad, incluido itinerario; acceso desde la portada del Aula.
- `assets/proyeccion-loja.js` y `assets/proyeccion-loja.css`: modo Presentar, con visor del PDF original como parte de la intervención del epidemiólogo.
- `impulso/materiales/Presentacion_Loja_2026.pdf` (14 páginas) y `impulso/materiales/Presentacion_Loja.odp`: **archivos originales sin alterar**, transferidos como blobs binarios y verificados contra las cargas del usuario: Git blobs `e31e4df5d21de768d8aec7c58426dd76589b469c` y `bef447c62069221343466be98b91fad810f13479` respectivamente. No dependen de Google Drive.
- `impulso/ficha.html`: encuesta de actores y sectores con listas desplegables inclusivas, campos libres y opciones «Otro»; cliente Firestore `encuestas_loja_2026`. La intención propia de colaborar se recoge como booleano; **nombre/correo/teléfono desactivados** hasta determinar el responsable y la información de privacidad.
- `impulso/firebase-config.js`: configuración **pública web** de Firebase. Nunca incluir claves de servicio privadas.
- `impulso/firestore-loja.rules`: propuesta de reglas que deniega lecturas, actualizaciones y eliminaciones públicas y restringe creación a campos tipados y longitudes. **El archivo no modifica por sí solo la configuración real de Firebase**.
- `impulso/qr-ficha.svg`: QR apunta a `impulso/ficha.html`.
- `assets/aula-portadas.js` y `assets/aula-portadas.css`: diseño/navegación compartidos. Mantener compatibilidad con otros módulos.
- `impulso/expediente-loja-2026.md` y `impulso/GUIA_PONENTE_16-10-2026.md`: memoria documental y guion. Los datos históricos/propuestas requieren contrastar fuentes antes de tratarlos como acuerdos vigentes.

## Decisiones de cierre
1. El único módulo que se desarrolla es **Loja dentro del Aula**, no el repositorio independiente.
2. Se han retirado dos capas CSS contradictorias del itinerario, consolidando un estilo aislado y siete filas con contexto. Conservar los ocho apartados.
3. Las 14 diapositivas originales de Carlos del Moral se alojan localmente en PDF y ODP, evitando permisos privados de Google Drive.
4. La encuesta del QR **debe ser centralizada**, no `localStorage`. La versión de Firestore no confirma recepción salvo éxito del servidor. La colección está separada de otros municipios.
5. Se ha suprimido el aviso flotante que confundía el borrador de notas locales con la encuesta central. Los datos solo se confirman si Firestore acepta la propuesta. Por ahora no se admiten datos personales de contacto; falta custodio, retención e información completa de privacidad antes de habilitarlos.
6. No atribuir asistencia, organización, acuerdos ni resultados del evento sin acta o fuente verificable.

## Qué queda pendiente para considerar el cierre plenamente operativo
- **Firebase Console:** el usuario ha confirmado reglas globales `allow read, write: if false`, que bloquean toda recepción. Publicar las reglas para el **esquema ampliado de doce campos** tras revisar el proyecto; probar envío real, comprobación en consola y denegaciones de lectura y edición. Sin este paso, el envío fallará y el taller **no está cerrado funcionalmente**. Detalle: `impulso/FIREBASE_PENDIENTE.md`.
- **Protección antiabuso:** registrar/configurar App Check y comprobar su funcionamiento antes de habilitar enforcement; mientras tanto cualquier cliente podría intentar escribir propuestas válidas si las reglas permiten creación.
- **Privacidad:** confirmar responsable, plazo de conservación y políticas aplicables a respuestas y datos técnicos.
- **Revisión visual real:** recorrer portada, navegación, itinerario, modo Presentar, PDF, ODP, QR y móvil en GitHub Pages y una sesión privada. No basta con comprobar el código o una prueba local simulada.
- **Memoria del taller:** incorporar solo las conclusiones y acuerdos reales si se proporciona un acta; no reconstruirlos a partir del guion.
- **Repositorio independiente:** antes de borrar, copia local/ZIP y cotejo de materiales no migrados.

## Pruebas mínimas de aceptación
1. En PC a zoom 100 %, itinerario completo de siete momentos y acceso al detalle, sin superposiciones; navegación entre los ocho apartados.
2. PDF original de 14 páginas se abre sin inicio de sesión; ODP se puede descargar sin inicio de sesión; el modo Presentar incluye el visor original.
3. Móvil lee el QR y abre la ficha; botón de enviar habilitado cuando SDK web inicia; guardar un envío de prueba en `encuestas_loja_2026` con timestamp válido; solo entonces aparece confirmación.
4. Lectura/update/delete anónimos de la colección denegados. Datos por municipio separados.
5. Ninguna funcionalidad ni recurso de Fuente Vaqueros, el curso de Activos o REDCap alterado.

## Revisión de la ficha del 16/10/2026
Se amplió el formulario para no excluir actores por taxonomías cerradas: sectores (26 opciones), tipos de actor (13), ámbitos territoriales (7), texto libre contextual, opciones «Otro» y posibilidad de expresar interés personal en participar sin facilitar contactos. El aviso flotante relativo al almacenamiento exclusivo en navegador fue retirado. La ficha y las reglas deben desplegarse juntas; publicar reglas antiguas bloquearía el nuevo esquema. El cierre funcional de la recepción sigue sujeto a una prueba real desde una sesión externa.


## 18/10/2026 · Segunda sesión: planificar mapeo y priorización

Esta preparación es **una sesión independiente dentro del Aula**, no una intervención ni evolución del repositorio COMPÁS-NG.

**Material publicado en `main` mediante PR #34:** `sesion-2.html` y `SESION_2_MAPEO_Y_PRIORIZACION.md`, con acceso enlazado desde la portada del módulo `impulso/index.html`. Objetivos:
1. Organizar nuevos mapeos participativos, más la **revisión individual de todos los registros heredados** a partir del inventario conciliado; tramitar validaciones mediante los perfiles autorizados de Localiza Salud.
2. Recuperar la **priorización de 2022**, revisar la evidencia y decidir si realizar actualización deliberativa o nueva consulta. Mostrar la capacidad COMPÁS-NG/REDCap como opción, **sin implementar encuesta en esta intervención**.

**Contexto:** 2022 ya incluye un listado ordenado de 26 problemas con 40 participantes según transcripción ODT conservada en COMPÁS-NG Renovado; faltan original, procedimiento y ratificación documental. La fotografía 162/5/157 se refiere a activos registrados en el inventario COMPÁS histórico y no equivale a Localiza Salud actual. COMPÁS-NG (otro ámbito de desarrollo) tiene diez temas/hasta cinco elecciones, y genera un diccionario REDCap; no recoge votos públicos directamente.

**Fuera de alcance de sesión 2:** decidir ahora líneas estratégicas finales o desarrollar objetivos e indicadores del Plan de Acción. EPVSA/ESCA sirven para la **fase posterior**. No editar COMPÁS, no desplegar encuesta, no mezclar con Fuente Vaqueros ni modificar datos. **La publicación de la sesión 2 ha sido expresamente autorizada y se ha realizado.**

**Antes de cerrar propuesta:** organización debe confirmar fecha/duración, suministrar inventarios, documentos originales y disponer de perfiles de validación. La página es guía para la reunión y no acta de acuerdos adoptados.

### Materiales de aplicación para la sesión 2 · 18/10/2026

La propuesta se publicó mediante la **PR #34 fusionada en `main`** con material específico para los dos objetivos reales de la sesión:
- `ficha-revision-activos.html`: formulario **solo de impresión**, orientado a la decisión registro a registro, con avisos contextuales; **no almacena ni transmite** fichas.
- `plantilla_revision_recursos_loja.csv`: **cabecera con 20 campos, sin datos reales**; `GUIA_REVISION_INDIVIDUAL_ACTIVOS.md`: diccionario y simulación breve para aprender a revisar y asignar pendientes.
- `dinamica-priorizacion.html`: tabla de los **26 problemas de 2022** en orden histórico, con notación de puntuación transcrita y selectores provisionales para discutir vigencia; cuatro alternativas de método de priorización (revisión, consulta, mixta, aplazamiento), **sin recoger votos** ni producir un acuerdo.
- `sesion-2.html`: enlaces a ambos ejercicios; `SESION_2_MAPEO_Y_PRIORIZACION.md`: facilitación, agenda de 120 minutos, checklist e indicadores **de organización de sesión**, no del Plan Local.
- Pruebas `impulso/tests/sesion-2.test.mjs` ejecutadas en workflow específico, sin afectar la sesión inicial.

**Cautela oficial de Localiza Salud:** el formulario de alta corresponde a responsables de los recursos; la gestión/validación corresponde a perfiles autorizados. No se incluyen listados efectivos ni números actuales de la plataforma. Antes de utilizar la ficha para 100 % de recursos reales, obtener exportaciones, circuito de custodia y responsable de coordinación. **Publicado y autorizado:** commit `11dec09d579d936253e1fc42349b5aee0ddc2a99`; pruebas de módulo superadas. La página de sesión 2 puede abrirse desde la portada de Loja: https://bhermoso.github.io/aula-activos-comunitarios/impulso/sesion-2.html. Estado del despliegue: https://github.com/bhermoso/aula-activos-comunitarios/actions/runs/39157670427. Queda pendiente comprobación visual directa en navegador, originales 2022 e inventario real de Localiza Salud.
