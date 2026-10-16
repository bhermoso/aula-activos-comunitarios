# Encuesta de actores/sectores: conexión Firebase pendiente

**Estado:** preparada para Firebase, NO conectada ni verificada. La configuración del proyecto no ha sido proporcionada ni se dispone de acceso a Firebase Console. No activar públicamente el envío ni afirmar que recoge respuestas hasta completar lo siguiente.

1. Verificar el proyecto de Firebase real (no dar por confirmado `aula-salud-comunitaria`).
2. Crear o verificar una aplicación web, Firestore y dominios autorizados. Copiar exclusivamente los valores públicos de firebaseConfig (apiKey de Firebase web NO es credencial administradora). Nunca almacenar claves privadas ni service account.
3. Configurar App Check con reCAPTCHA Enterprise; verificar desde el dominio GitHub Pages. Activar enforcement tras probar tráfico.
4. Incorporar `impulso/firebase-config.js` con `window.LOJA_FIREBASE_CONFIG = { firebaseConfig: {apiKey,authDomain,projectId,appId,...}, appCheckSiteKey:'...' }`. El archivo está intencionadamente ausente en la rama y no se simulan valores.
5. Revisar reglas existentes del proyecto antes de aplicarlas. **No reemplazar las reglas generales** por el ejemplo `firestore-loja.rules`: integrar solo la cláusula `match /encuestas_loja_2026/{id}` y comprobar que no existen patrones más amplios que permitan lectura, escritura o borrado. Las lecturas desde frontend han de estar denegadas. Considerar usar colección bajo /municipios/loja para escalabilidad, pero nunca mezclar respuestas de municipios.
6. Validar contra emulador y luego entorno conectado: escritura correcta, rechazo de lectura y actualización, rechazo de campos extra, límites y App Check. Hacer una prueba de envío en una sesión real y confirmar recepción desde consola con acceso gestor.
7. Definir responsable, retención, información de privacidad y política antiabuso. App Check reduce tráfico no autorizado pero no garantiza anonimato ni evita todos los envíos fraudulentos.

El cliente web conserva un botón de prueba deshabilitado sin configuración; **no da confirmaciones de recepción ficticias**. La presentación original del epidemiólogo y el QR no se modifican.
