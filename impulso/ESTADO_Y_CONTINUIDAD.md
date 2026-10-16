# Loja · Estado y continuidad del módulo dentro del Aula

**Revisión:** 16/10/2026, posterior a la celebración del taller.  
**Repositorio canónico:** `bhermoso/aula-activos-comunitarios`, rama `main`.  
**Ruta publicada:** `https://bhermoso.github.io/aula-activos-comunitarios/impulso/`.  
**Versión independiente:** `bhermoso/taller-reimpulso-loja`, fuera del mantenimiento futuro; conservar una copia antes de su eliminación voluntaria por el usuario.

## Arquitectura verificada
- `impulso/index.html`: portada y **ocho apartados** de la actividad, incluido itinerario; acceso desde la portada del Aula.
- `assets/proyeccion-loja.js` y `assets/proyeccion-loja.css`: modo Presentar, con visor del PDF original como parte de la intervención del epidemiólogo.
- `impulso/materiales/Presentacion_Loja_2026.pdf` (14 páginas) y `impulso/materiales/Presentacion_Loja.odp`: **archivos originales sin alterar**, transferidos como blobs binarios y verificados contra las cargas del usuario: Git blobs `e31e4df5d21de768d8aec7c58426dd76589b469c` y `bef447c62069221343466be98b91fad810f13479` respectivamente. No dependen de Google Drive.
- `impulso/ficha.html`: cliente web de encuesta `encuestas_loja_2026` en Firestore, sin campos de identidad y sin lectura pública de resultados.
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
5. Sin datos identificativos solicitados; advertencia sobre textos libres. Quedan pendientes custodio, retención y documentación completa de privacidad antes de un uso público sostenido.
6. No atribuir asistencia, organización, acuerdos ni resultados del evento sin acta o fuente verificable.

## Qué queda pendiente para considerar el cierre plenamente operativo
- **Firebase Console:** publicar las reglas de creación restringida tras revisar las reglas globales existentes; probar envío real, comprobación en consola y denegaciones de lectura y edición. Sin este paso, el envío fallará y el taller **no está cerrado funcionalmente**. Detalle: `impulso/FIREBASE_PENDIENTE.md`.
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
