# Encuesta de Loja: Firebase y verificación de recepción
**Fecha:** 16/10/2026 · **Estado: cliente preparado, recepción real pendiente de habilitación y prueba.**

## Qué está implementado
- `impulso/ficha.html` se conecta con el SDK web de Firebase v11.10.0 al proyecto `aula-salud-comunitaria`.
- Al enviar, utiliza `addDoc(collection(db, 'encuestas_loja_2026'), {...})` con `serverTimestamp()`.
- Solo muestra «Propuesta recibida y guardada» después de que la operación remota concluya correctamente.
- Si Firestore rechaza el envío, se mantiene el formulario cumplimentado, se muestra un error explícito y NO se informa falsamente de recepción.
- Registra únicamente `sector`, `sectorOtro`, `tipo`, `tipoOtro`, `entidad`, `ambito`, `ambitoOtro`, `grupo`, `funcion`, `vinculo`, `participacion` (booleano) y `createdAt`. No registra nombre, correo ni teléfono. **No equivale a garantía de anonimato**, porque hay textos libres.
- No se habilita lectura, actualización ni eliminación de respuestas desde el navegador.
- La información de Loja se mantiene en una colección propia, separada de Fuente Vaqueros y del resto del Aula.

## Paso imprescindible en Firebase Console
El usuario había indicado que las reglas vigentes del proyecto eran `allow read, write: if false` para todo. **Este repositorio no puede activar las reglas en el proyecto**: no existe en esta sesión una conexión de administración Firebase. No afirmar que la encuesta funciona hasta cumplir los pasos siguientes:

1. Abrir https://console.firebase.google.com/project/aula-salud-comunitaria/firestore/rules
2. Guardar copia de las reglas vigentes. Confirmar que no aparecieron otras reglas por cambios concurrentes.
3. Publicar la excepción de creación del esquema **ampliado** en `impulso/firestore-loja.rules`, incorporada a las reglas vigentes. Si siguen siendo solo el cierre general que el usuario acaba de confirmar (`allow read, write: if false`), puede utilizarse el archivo completo. **No utilizar la versión antigua del archivo**, pues sus cinco campos no coinciden con los doce actuales.
4. Verificar que existe Cloud Firestore en modo de producción, y el dominio de GitHub Pages puede cargar Firebase. Registrar/ajustar App Check cuando sea posible. **Sin App Check aplicado, una excepción pública de escritura puede sufrir envíos automatizados:** no constituye defensa suficiente el filtrado de campos.
5. Probar desde el Aula, en navegador externo/sesión privada, una propuesta de prueba sin datos reales e identificar el documento en `encuestas_loja_2026` desde la consola administrativa. Retirar luego la prueba con permisos administrativos (la interfaz pública no tiene acceso a borrados).
6. Probar un envío inválido, una lectura anónima y una actualización: deben rechazarse. Comprobar que el resto de bases/colecciones siguen cerradas a clientes públicos.
7. Documentar quién custodia las respuestas, el plazo de conservación, los derechos de protección de datos y el aviso de privacidad definitivo antes de anunciarlo a participantes. No recoger contactos propios hasta configurar su tratamiento lícito e información correspondiente.

## Comprobación de fallos
- Mensaje «El servidor todavía no permite recibir propuestas»: revisar reglas de Firestore, base de datos/estado y posible App Check aplicado.
- Mensaje «No se pudo confirmar el envío»: verificar conectividad y registros de la consola; **no suponer que el documento se grabó**.
- Botón «Envío no disponible»: revisar `impulso/firebase-config.js` y SDK de Firebase; la configuración web no es una clave privada.

## Estado editorial
El programa de la sesión del 16/10/2026 es histórico. La encuesta es un instrumento de continuidad posterior: no se presentarán aportaciones que lleguen después como resultados obtenidos durante la reunión.

**El cierre funcional queda condicionado a la publicación de las reglas y la prueba de escritura real.**
