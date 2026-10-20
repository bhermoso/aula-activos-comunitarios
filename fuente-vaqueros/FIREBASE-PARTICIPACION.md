# Fuente Vaqueros — ficha QR conectada a Firebase

**Proyecto identificado:** `aula-salud-comunitaria` (indicado por la organización, 20-10-2026).

**Estado (20-10-2026):** configuración pública de la app web integrada; código de escritura en Firestore y Hosting aislado preparados. **No se ha confirmado recepción real ni desplegado la página de Firebase Hosting.** **Cloud Firestore `(default)` ya está creada y disponible en la región `nam5`, confirmado por la organización desde Firebase Console.** **Authentication anónimo habilitado** (confirmado en Firebase Console). Se ha revisado el texto íntegro de reglas proporcionado por la organización: contiene permisos para Compás y no contiene aún el permiso de Fuente Vaqueros. Falta **añadir la regla aditiva en Firebase Console y publicarla**, configurar App Check y crear/asociar el sitio independiente de Hosting. En la presentación, la práctica permanece pendiente de QR para evitar falsas recepciones.

## Destino de las aportaciones

Colección Firestore: `procesos_locales/fuente-vaqueros-2026/aportaciones`.

Una aportación incluye sector, tipo, entidad, aporte, prioridad, observa, proceso, edicion, origen y `createdAt` del servidor. La web no solicita datos personales ni clínicos.

## Activar el proyecto

1. **Completado:** configuración web pública recibida del responsable del proyecto y añadida a `fuente-vaqueros/firebase-config.js` (incluye `projectId: aula-salud-comunitaria`). No se almacenan credenciales administrativas.
2. **Confirmado:** existe Cloud Firestore `(default)` en `nam5`. **Pendiente:** comprobar que las reglas permiten crear documentos válidos en la colección indicada sin lectura pública.
3. **Confirmado:** Firebase Authentication → Método de acceso → Anónimo está habilitado. La ficha también verifica el inicio anónimo al cargarse, antes de permitir pulsar «Enviar».
4. Antes de difusión al público: **App Check → aplicación web → reCAPTCHA v3**, dominio final de Hosting, clave pública del sitio en `FV_FIREBASE_APPCHECK_KEY` y comprobar tokens válidos antes de activar enforcement en Firestore. El SDK puede intentar escritura sin App Check si la protección todavía no está activada; para la publicación al público, se recomienda protección antiabuso.
5. **Siguiente paso:** abrir Firebase Console → Firestore Database → Reglas, **conservar todas las reglas existentes de Compás** y pegar el único bloque `match /procesos_locales/...` de [`firestore.rules.example`](firestore.rules.example) justo antes del cierre final de `match /databases/{database}/documents`. Este archivo es un fragmento aditivo, **no** un juego completo de reglas; no copiarlo encima del contenido del editor. Pulsar Publicar. La nueva regla permitirá crear aportaciones de la ficha autenticada anónimamente sin habilitar lectura, modificación ni borrado de ellas. Probar después escritura válida y rechazo de lectura pública.
6. Crear un **nuevo sitio de Firebase Hosting** dedicado a la ficha. No desplegar sobre el sitio predeterminado del proyecto si aloja otros contenidos.

## Preparar el sitio separado sin publicar el Aula

Desde una terminal con Node, Firebase CLI y acceso autorizado al proyecto:

```bash
firebase login
firebase hosting:sites:create <ID-DE-SITIO-UNICO> --project aula-salud-comunitaria
firebase target:apply hosting fuente-vaqueros-participantes <ID-DE-SITIO-UNICO> --project aula-salud-comunitaria
firebase deploy --only hosting:fuente-vaqueros-participantes --project aula-salud-comunitaria
```

El `firebase.json` de la raíz usa expresamente el **target** `fuente-vaqueros-participantes` (no el Hosting predeterminado). Su paso previo genera `dist-fuente-vaqueros/` copiando únicamente `fuente-vaqueros/participar.html` como `index.html` y `fuente-vaqueros/firebase-config.js`. No publica la portada ni las otras páginas del Aula.

**Importante:** no ejecutar `firebase deploy --only hosting` sin target; podría desplegar un sitio distinto del deseado según la configuración y los permisos del proyecto.

## Verificaciones antes de imprimir el QR

- Abrir la URL final de Hosting desde un móvil; comprobar que no aparecen enlaces al Aula.
- Escribir una aportación de prueba sin datos personales y verificar su documento en Firestore.
- Confirmar que sin conexión no se muestra una falsa recepción.
- Comprobar que un usuario anónimo no puede leer respuestas ajenas.
- Generar entonces el QR con la URL verificada de Hosting y sustituir el marcador pendiente en la diapositiva «Práctica». La versión antigua que guardaba solo en localStorage fue desactivada en el Aula.

**Un QR es un acceso por enlace, no control de autorización.** Eliminar el enlace del Aula de la ficha no vuelve privado el repositorio público de GitHub Pages.
