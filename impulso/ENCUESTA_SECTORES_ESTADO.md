# Encuesta exploratoria de actores y sectores · Loja
Fecha: 15 de octubre de 2026. Estado: **cliente de envío a Firestore integrado en preparación; RECEPCIÓN CENTRAL NO VERIFICADA hasta publicar reglas y probar un envío real**.

## Objetivo
Identificar, por tipos genéricos y sin nombres propios, los sectores y actores cuya participación convendría valorar para el reimpulso del I Plan Local de Salud de Loja. Las respuestas son propuestas; no constituyen acuerdos ni invitaciones.

## Preguntas
1. Sector que convendría incorporar (obligatorio, hasta 100 caracteres).
2. Tipo de entidad, colectivo o actor (obligatorio, hasta 130 caracteres).
3. Por qué sería importante contar con este sector (opcional, hasta 500).
4. Qué perspectiva o población ayudaría a representar (opcional, hasta 180).

En la interfaz no se pide nombre, correo ni teléfono, pero **la ausencia de esos campos no basta para garantizar el anonimato**. Advertir contra datos identificativos en texto libre.

## Modelo operativo pendiente
La nueva versión de `impulso/ficha.html` envía directamente a Firestore (`encuestas_loja_2026`) y solo confirma recepción tras la respuesta del servidor. **Hasta publicar/verificar las reglas de Firestore, la recepción colectiva NO está operativa.** La versión anterior únicamente utilizaba almacenamiento local; esos datos históricos no se migran automáticamente.

Para habilitar y verificar recepción:
- Proyecto web configurado: `aula-salud-comunitaria`. Queda confirmar Firestore habilitado y publicar la excepción documentada en `impulso/firestore-loja.rules` con acceso de administración.
- Colección exclusiva `encuestas_loja_2026`; validación de tipo, longitud y campos en reglas; lecturas públicas cerradas. Pendientes controles antiabuso y verificación de reglas efectivas en servidor.
- Establecer una política de conservación y acceso del equipo responsable.
- No registrar identificadores o metadatos innecesarios. Comprobar logs del alojamiento/proveedor.
- Verificar un envío real de prueba y su lectura administrativa antes de declarar el servicio disponible. La interfaz solo muestra «propuesta recibida» cuando `addDoc` devuelve éxito.
- Revisar información de privacidad e identificación de responsable antes de publicar.

## Interfaz
Una sola página sin menú ni enlaces al Aula. Botón «Añadir otra propuesta», confirmación y posibilidad de repetir o dejar la ficha en blanco. La participación es voluntaria.

## Diseño y estado tras la reunión
El itinerario consolidó sus estilos en un bloque aislado, con siete momentos, breve contexto y detalle desplegable. Se evita publicar métricas de funcionamiento no verificadas en navegadores reales. La ficha es un instrumento de continuidad de Loja, no una prueba de que las aportaciones se obtuvieron en la sesión del 16 de octubre.
