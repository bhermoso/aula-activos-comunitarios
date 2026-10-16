# Encuesta de actores y sectores de Loja · migración a REDCap

**Estado (16/10/2026):** diccionario generado; `ficha.html` preparada como puerta de entrada; **proyecto REDCap, importación, URL pública y captura real sin verificar**.

## Archivos
- `diccionario_loja_redcap.csv`: diccionario base de **13 campos** para una encuesta sin nombre/correo/teléfono, con 26 sectores, 13 tipos de actor, siete ámbitos territoriales, vinculación, funciones, colectivos y disposición a colaborar. **Es el archivo recomendado para iniciar el proyecto.**
- `diccionario_loja_redcap_con_contacto_PENDIENTE.csv`: ampliación de **20 campos**, con nombre y correo/teléfono propios, de aparición condicional y marcados como identificadores. **NO IMPORTAR PARA PUBLICAR** hasta contar con autorización institucional, aviso RGPD definitivo, base jurídica, plazos de conservación y control de acceso.
- `config-encuesta.js`: enlace público REDCap. Vacío hasta comprobar que existe y funciona.
- `../ficha.html`: página de acceso estable para los QR del Aula; informa del estado pendiente y muestra el enlace cuando se añada a la configuración.
- `../qr-ficha.svg`: QR existente a `https://bhermoso.github.io/aula-activos-comunitarios/impulso/ficha.html`; **no cambia de destino**.

## Crear la encuesta (instrucciones para personal con acceso a REDCap)
1. En la instancia institucional autorizada de REDCap, **crear un proyecto nuevo y exclusivo de Loja**, llamado por ejemplo `Actores y sectores para el I Plan Local de Salud de Loja`. No utilizar un proyecto existente con registros ni el módulo docente REDCap 2027.
2. En la configuración del proyecto, activar el uso de encuestas y, si procede, la numeración automática de registros. La variable `record_id` debe ser la primera y la anotación `@HIDDEN-SURVEY` oculta su cumplimentación en la encuesta.
3. En **Data Dictionary / Diccionario de datos**, descargar primero la plantilla de la versión REDCap concreta, comparar las 18 cabeceras y cargar `diccionario_loja_redcap.csv` (UTF-8 con BOM). Revisar los avisos de validación antes de aplicar cambios.
4. En **Online Designer**, configurar `encuesta_actores_loja` como encuesta y completar título, instrucciones y confirmación de respuesta. La encuesta está diseñada para **una propuesta por envío**; permitir una nueva respuesta independiente si desean proponer más actores.
5. Probar en una instancia o proyecto de ensayo: las tres opciones `Otro` deben abrir campos obligatorios; el resto de campos abiertos son opcionales; comprobar permisos y exportaciones. Validar especialmente `@CHARLIMIT`, cabeceras y lógica condicional, que pueden diferir según versión REDCap.
6. Obtener la URL en **Survey Distribution Tools / Herramientas de distribución de encuestas → Public Survey Link / Enlace público**. REDCap ofrece además su propio **QR directo** a la encuesta.
7. Abrir esa URL en una sesión privada, sin iniciar sesión en REDCap, para comprobar que acepta un registro ficticio y que el equipo autorizado puede verlo. Eliminar la prueba conforme al procedimiento institucional.
8. Solo después completar `config-encuesta.js` con la **URL pública exacta**. Verificar que `../ficha.html` enlaza a REDCap y que el QR SVG existente llega a esa página. **No publicar una URL de proyecto, diseñador o participante privado como si fuera una URL pública.**
9. Tras autorización expresa, integrar la rama en `main`, comprobar GitHub Pages y retirar definitivamente las dependencias y referencias activas de Firebase del módulo Loja.

## Riesgos y custodia
- Responsable operativo previsto de las propuestas: Distrito Sanitario Granada–Metropolitano, según la decisión del taller. La identidad formal del responsable de tratamiento, información del SAS, acceso, conservación y despliegue de REDCap deben confirmarse conforme a sus procedimientos.
- La encuesta base **no solicita datos identificativos**, pero los campos libres podrían contener información personal: advertir de no introducirla. El acceso público a un cuestionario no equivale a anonimato absoluto.
- Ninguna respuesta de Firestore se ha verificado como guardada. No existe una migración automática ni se debe afirmar que los datos antiguos han sido transferidos. Las reglas de Firestore deben mantenerse cerradas hasta confirmar el destino y la conservación de los registros existentes, si los hubiera.
- Esta migración no afecta a Fuente Vaqueros ni a los cursos docentes REDCap Básico/Avanzado 2027.
- La propuesta de contacto voluntario del CSV ampliado es **un diseño pendiente**, no un consentimiento o autorización institucional obtenidos.
- El QR estable del Aula **no lleva directamente a REDCap** hasta que se configure la URL. Mientras tanto muestra un aviso sin permitir envíos; no distribuirlo como si la encuesta ya estuviese abierta.

## Pruebas de aceptación
- CSV de 18 columnas, nombres únicos y 13 campos base.
- Opciones: 26 sectores, 13 tipos, 7 ámbitos, 7 vínculos.
- Lógica `[sector]='26'`, `[tipo_actor]='13'`, `[ambito]='7'` con campos obligatorios condicionados.
- SIN SDK Firebase, escrituras Firestore ni simulación de recepción en `../ficha.html`.
- URL pública real y redirección/acceso comprobados tras importar la encuesta.
- QR escaneado en móvil y verificación de destino, página accesible y envío REDCap real.
