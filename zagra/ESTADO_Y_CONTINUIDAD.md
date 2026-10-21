# Zagra — Estado y continuidad

Actualizado: 21 de octubre de 2026.

## Propósito
Espacio territorial de Zagra en el Aula de salud comunitaria basada en activos.

Flujo: **priorización participativa → planificación y realización del mapeo de activos → registro provisional → contraste y, cuando proceda, alta oficial en Localiza Salud.**

## Estado comprobable del Aula
- `zagra/index.html`: cuaderno de líneas propuestas y registro provisional de activos.
- El registro permite clasificar personas/capacidades, organizaciones, redes, servicios, espacios, actividades y otros activos.
- El registro y las propuestas se almacenan exclusivamente en el navegador con las claves `aula-zagra-activos-v1` y `aula-zagra-prioridades-v1`.
- CSV exportable en `zagra-activos-inventario-provisional.csv`. La exportación es una copia del registro del navegador, no un envío a ninguna administración.
- No existe integración de escritura con Firestore/Firebase ni con Localiza Salud para este inventario.
- No se han creado prioridades ni activos reales de Zagra ni se han dado por aprobados acuerdos.
- No se guarda información personal de terceros; el formulario lo advierte.

## Enlaces externos y fases
- Localiza Salud, mapa: https://localizasalud.sanidad.gob.es/
- Localiza Salud, alta y gestión oficiales: https://localizasalud.sanidad.gob.es/adminrecursos/main/
- COMPÁS NG mejorado (repositorio: `bhermoso/compas-ng-renovado`): https://bhermoso.github.io/compas-ng-renovado/
- Fase Diagnóstico territorial: `?fase=repositorio`.
- Fase Priorización: `?fase=priorizacion`.
- COMPÁS tiene un cambio en `src/App.tsx` para admitir el parámetro de fase. **El enlace no selecciona ni crea automáticamente un ámbito municipal ni traslada registros**.
- No confundir esta aplicación con un mapa validado ni con el expediente territorial de COMPÁS.

## Tareas pendientes de contenido
1. Documentar participantes, fechas y situación real del proceso de Zagra a partir de las fuentes facilitadas.
2. Incorporar líneas priorizadas solo si existe deliberación y acuerdo acreditado.
3. Definir y aprobar criterios concretos de mapeo con el grupo, sin inventar prioridades.
4. Definir un procedimiento autorizado para consolidar datos de distintas sesiones o equipos si se necesita un registro compartido y persistente.
5. Contrastar los activos con la comunidad y las personas responsables antes de alta oficial o geolocalización pública.

## Precauciones
- El navegador almacena datos provisionalmente; limpiar caché, usar sesión privada u otro equipo puede hacerlos inaccesibles. Exportar CSV y evitar conservar datos en equipos ajenos.
- La confirmación de un activo no equivale a alta oficial.
- No asumir que COMPÁS ya contiene un expediente de Zagra.
