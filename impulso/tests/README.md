# Pruebas de seguridad de Firestore · encuesta de Loja
Las reglas pegadas en Firebase Console coinciden con `../firestore-loja.rules` de este repositorio. **El archivo del repositorio no publica reglas reales por sí solo.**

## 1. Zona de pruebas de reglas (Firebase Console)
1. En `Aula-Salud-Comunitaria → Cloud Firestore → (default) → Reglas`, conserva el texto del editor.
2. Abre **Zona de pruebas de reglas**. La simulación usa las reglas del editor, **incluidos cambios sin publicar**, no las reglas efectivamente desplegadas. <https://firebase.google.com/docs/firestore/security/get-started>
3. Para todas las pruebas utiliza **Sin autenticar** y la ruta `encuestas_loja_2026/prueba-reglas` (ruta de documento, no solo colección).
4. Comprueba: obtener documento → **Denegado**; listar colección → **Denegado**; modificar documento → **Denegado**; eliminar documento → **Denegado**.
5. Para la operación **Crear**, la simulación requiere datos de documento completos y un valor `createdAt` equivalente a `request.time`, que el cliente realmente aporta con `serverTimestamp()`. Si el simulador no permite representar esa igualdad, **un rechazo no demuestra que la regla de creación esté mal**. Utiliza las pruebas automatizadas con el emulador que siguen.
6. No confundas **Permitido** en el simulador con recepción real: hasta pulsar **Publicar** la web continuará sujeta a las reglas antiguas.

## 2. Pruebas automatizadas contra emulador (no tocan producción)
Requisitos en el equipo que ejecute las pruebas: Node.js 20+, Java compatible y conexión para instalar paquetes en la primera ejecución.

```bash
cd impulso/tests
npm install
cp ../firestore-loja.rules firestore-loja.rules
npx firebase-tools emulators:exec --project demo-loja-reglas --only firestore "npm test"
```

La copia de reglas se crea únicamente en el directorio de trabajo del emulador para cumplir sus restricciones de rutas; las reglas fuente permanecen en `impulso/firestore-loja.rules`.

El programa `firestore-loja.test.mjs` comprueba:
- Creación pública de propuestas válidas y categorías «Otro».
- Rechazo de «Otro» sin texto, campos extra, campos ausentes, longitudes, tipos incorrectos y marcas de tiempo del cliente.
- Rechazo de consulta, listado, edición, borrado, colecciones ajenas y datos personales de contacto.

**Protección de la prueba:** el script exige `FIRESTORE_EMULATOR_HOST` y usa el proyecto ficticio `demo-loja-reglas`, sin credenciales administrativas, para impedir escrituras accidentales a producción.

## 3. Prueba final real
Una vez validadas las reglas, protegido el servicio contra abuso y aprobado el tratamiento de datos:
- Publicar las reglas desde la consola Firebase.
- Desde `https://bhermoso.github.io/aula-activos-comunitarios/impulso/ficha.html`, enviar una propuesta ficticia.
- Verificar la confirmación y la existencia de su documento desde la consola administrativa.
- Borrar el documento ficticio desde consola administrativa.
- Repetir acceso público de lectura y actualización: debe ser rechazado.

Con las reglas actuales publicadas de cierre general `allow read, write: if false`, el envío real **continuará denegado** hasta que se publiquen estas reglas, aunque el simulador indique **Permitido**.
