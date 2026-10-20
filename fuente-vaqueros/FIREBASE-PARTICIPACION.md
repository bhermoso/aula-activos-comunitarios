# Fuente Vaqueros — ficha QR conectada a Firebase

**Proyecto identificado:** `aula-salud-comunitaria` (indicado por la organización, 20-10-2026).

**Estado:** integración y Hosting aislado preparados en GitHub. **No está operativo ni desplegado:** faltan configuración pública de la aplicación web, App Check, habilitación de Firestore/Authentication, reglas comprobadas y creación del sitio específico de Hosting.

## Destino de las aportaciones

Colección Firestore: `procesos_locales/fuente-vaqueros-2026/aportaciones`.

Una aportación incluye sector, tipo, entidad, aporte, prioridad, observa, proceso, edicion, origen y `createdAt` del servidor. La web no solicita datos personales ni clínicos.

## Activar el proyecto

1. En [Firebase Console](https://console.firebase.google.com/project/aula-salud-comunitaria/settings/general), abrir **Configuración del proyecto → General → Tus aplicaciones**. Registrar o seleccionar una **aplicación web**. Copiar el bloque público `firebaseConfig` (en particular `apiKey`, `authDomain`, `projectId` y `appId`). No compartir cuentas de servicio ni secretos privados.
2. Sustituir los campos vacíos en `fuente-vaqueros/firebase-config.js`. `projectId` ya está fijado a `aula-salud-comunitaria`.
3. Activar **Cloud Firestore** y **Authentication → Método de acceso → Anónimo**.
4. Activar **App Check → aplicación web → reCAPTCHA v3**, registrar el dominio final de Hosting y configurar `FV_FIREBASE_APPCHECK_KEY` con la clave **pública** de sitio. Comprobar que funciona antes de activar enforcement en Cloud Firestore.
5. Integrar y publicar **solo la regla pertinente** de `fuente-vaqueros/firestore.rules.example`, conservando las reglas de las restantes aplicaciones del mismo Firebase. Testear la escritura anónima válida y denegar lectura pública. La consola o un entorno administrativo autenticado permitirán consultar los resultados.
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
- Generar entonces el QR con la URL verificada de Hosting y mostrarlo en la diapositiva «Práctica».

**Un QR es un acceso por enlace, no control de autorización.** Eliminar el enlace del Aula de la ficha no vuelve privado el repositorio público de GitHub Pages.
