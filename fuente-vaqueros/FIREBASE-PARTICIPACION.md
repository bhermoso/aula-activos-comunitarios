# Fuente Vaqueros — participación mediante QR y Firebase

Estado: IMPLEMENTACIÓN PREPARADA; NO OPERATIVA hasta definir proyecto Firebase y desplegar.

## Contrato de datos
Collection: \`procesos_locales/fuente-vaqueros-2026/aportaciones\`.

Cada envío contiene: sector, tipo, entidad, aporte, prioridad, observa, proceso, edicion, origen y createdAt (serverTimestamp). No pedir teléfonos, nombres de personas físicas ni información clínica.

## Requisitos de Firebase
1. Elegir/crear un proyecto Firebase específico (o uno existente autorizado) y registrar una aplicación web. Obtener valores **públicos** del objeto firebaseConfig: apiKey, authDomain, projectId, appId.
2. Activar Cloud Firestore y Firebase Authentication con inicio de sesión **anónimo**.
3. Activar Firebase App Check con reCAPTCHA v3, registrar el dominio de Firebase Hosting y proporcionar clave **pública** del sitio; configurar enforcement de Cloud Firestore después de verificar.
4. Integrar las reglas de \`firestore.rules.example\` en las reglas existentes sin borrar las de otras aplicaciones; probar creación anónima con campos válidos y rechazo de lectura.
5. Configurar \`firebase-config.js\` del formulario y desplegar el **sitio de participantes independientemente del Aula**, preferentemente en Firebase Hosting. No compartir un QR antes de haber comprobado una escritura de prueba en Firestore y su lectura desde la consola.
6. Generar QR apuntando exclusivamente a la URL de Firebase Hosting de este formulario.

## Precauciones
- Un QR público no es control de acceso; evita enseñar la URL de la portada del Aula, pero no privatiza páginas de GitHub Pages ya públicas.
- La aplicación web Firebase contiene datos de configuración públicos; **nunca** insertar claves de cuentas de servicio, secretos o credenciales administrativas en GitHub.
- Los formularios deben confirmar escritura en Firestore; un mensaje local de «guardado» no demuestra recepción.
- Firestore no tiene aquí una vista pública de las respuestas: únicamente la organización con permisos de Firebase puede consultarlas.
- Pendiente: proyecto Firebase, configuración web pública, reCAPTCHA App Check y URL de Firebase Hosting. Hasta entonces el botón «Enviar» permanece deshabilitado.
