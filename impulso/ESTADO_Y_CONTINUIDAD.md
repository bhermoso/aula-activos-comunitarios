
## Cambio previsto: migración de la encuesta a REDCap (16/10/2026)
**Rama de preparación; NO implantado aún en producción.** Por petición del usuario, se abandona el flujo de propuestas a Firestore en favor de una encuesta REDCap institucional. Se ha generado el diccionario principal `impulso/redcap/diccionario_loja_redcap.csv` (13 campos, sin contactos personales), junto con una versión ampliada con contacto `..._con_contacto_PENDIENTE.csv` (20 campos; NO activar sin revisión de privacidad). `impulso/ficha.html` pasa a ser el acceso estable a REDCap mediante `impulso/redcap/config-encuesta.js` y reutiliza el QR existente `impulso/qr-ficha.svg` (que seguirá siendo válido tras la activación). Se retiraron las referencias a recepción Firestore del itinerario/proyección. **Aún no existe URL de encuesta REDCap verificada, y la aplicación productiva continúa en el estado previo hasta autorización para publicar.** No afirmar que se hayan migrado respuestas de Firestore.

Decisiones pendientes: instancia REDCap institucional, permiso de creación de proyecto, importar y validar diccionario, convertir primer instrumento en encuesta, obtener enlace público, probar envío real, establecer privacidad y publicar la rama tras autorización. Las reglas reales de Firestore permanecen cerradas hasta nueva confirmación; no alterarlas para esta migración.

---

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
