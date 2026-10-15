# Firebase — integración en preparación

Proyecto previsto: `aula-salud-comunitaria`.

## Modelo de acceso
- Contenido público accesible sin inicio de sesión.
- Cada participante autenticado crea, lee, modifica y elimina **solo sus trabajos** en `users/{uid}/works/{workId}`.
- El administrador puede consultar y gestionar todos los trabajos **solo si** su token de Firebase Authentication incluye el *custom claim* `admin: true`.
- La condición de administrador **no** se determina por parámetros de URL, correos modificables en el cliente ni campos que pueda escribir el usuario.

## Antes de publicar
1. En Firebase Console, habilitar un proveedor de Firebase Authentication (p. ej., Google).
2. Activar Cloud Firestore y establecer región apropiada para los datos.
3. Registrar y verificar los dominios autorizados de Authentication, incluido `bhermoso.github.io`.
4. Identificar la cuenta de administración por UID de Firebase Authentication.
5. Desde un entorno privilegiado (Admin SDK; nunca desde el HTML de GitHub Pages) asignar el custom claim `admin: true` **exclusivamente** a ese UID.
6. Desplegar y probar `firestore.rules` mediante Firebase CLI y Emulator Suite, verificando aislamiento entre usuarios y acceso del administrador.
7. Integrar las fichas de ambos módulos con los métodos de guardado y recuperación; comunicar claramente los errores y conflictos de edición.
8. Revisar minimización de datos, aviso de privacidad, retención, exportación y borrado de información personal antes de uso con participantes.

### Precaución
Este directorio es una **propuesta no desplegada**: añadir el archivo de reglas a GitHub **no** cambia las reglas de seguridad de Firestore. No está activo ningún guardado en la web hasta completar los pasos anteriores.
