# Encuesta exploratoria de actores y sectores · Loja
Fecha: 15 de octubre de 2026. Estado: **provisional, SIN recepción centralizada verificada**.

## Objetivo
Identificar, por tipos genéricos y sin nombres propios, los sectores y actores cuya participación convendría valorar para el reimpulso del I Plan Local de Salud de Loja. Las respuestas son propuestas; no constituyen acuerdos ni invitaciones.

## Preguntas
1. Sector que convendría incorporar (obligatorio, hasta 100 caracteres).
2. Tipo de entidad, colectivo o actor (obligatorio, hasta 130 caracteres).
3. Por qué sería importante contar con este sector (opcional, hasta 500).
4. Qué perspectiva o población ayudaría a representar (opcional, hasta 180).

En la interfaz no se pide nombre, correo ni teléfono, pero **la ausencia de esos campos no basta para garantizar el anonimato**. Advertir contra datos identificativos en texto libre.

## Modelo operativo pendiente
La página `impulso/ficha.html` permanece como borrador operativo: guarda datos únicamente en el navegador del usuario. **No es una encuesta colectiva aún**; la organización no recibe respuestas. Su QR publicado no debe anunciarse como sistema de recogida.

Para habilitar recepción:
- Verificar qué infraestructura pertenece al Aula (Firebase, formulario institucional u otra) y la autorización de uso.
- Crear colección exclusiva para Loja, sin mezclar municipios; control de abuso y duplicados, validación de longitud y contenido en servidor, y protección contra acceso público a respuestas.
- Establecer una política de conservación y acceso del equipo responsable.
- No registrar identificadores o metadatos innecesarios. Comprobar logs del alojamiento/proveedor.
- Verificar envíos reales de prueba y consulta del equipo gestor antes de cambiar el texto a «respuesta recibida».
- Revisar información de privacidad e identificación de responsable antes de publicar.

## Interfaz
Una sola página sin menú ni enlaces al Aula. Botón «Añadir otra propuesta», confirmación y posibilidad de repetir o dejar la ficha en blanco. La participación es voluntaria.

## Diseño
La vista `#itinerario` utiliza altura dinámica (100dvh), menú vertical repartido en ocho filas, siete tarjetas del programa en cuadrícula y detalle desplegable. No se altera el diseño de otros módulos ni se fuerza el zoom del navegador. Es preciso comprobar visualmente tamaños reales del equipo del taller antes de afirmar que no existe scroll.
