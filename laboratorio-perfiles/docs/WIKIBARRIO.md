# WikiBarrio como capa territorial del Laboratorio — 2026-11-02

Sitio: https://www.wikibarrio.es/ (fuente complementaria externa, no afiliada).

## Datos y escala
WikiBarrio publica indicadores por **sección censal**, permite buscar direcciones y representa edificios en 3D. Buscar por calle **no** implica disponer de renta, enfermedades ni características socioeconómicas de una vivienda o una persona; los polígonos estadísticos corresponden a secciones censales.

Indicadores declarados por WikiBarrio:
- INE Censo Anual de Población: estructura demográfica, empleo y educación.
- INE ADRH: renta y distribución de ingresos.
- MIVAU SERPAVI: alquiler 2024 con supresión por bajo número de declaraciones y seccionado original 2021 vinculado al actual.
- Infoelectoral 2023: resultados agregados; fuera del núcleo científico-sanitario.
- OSM: puntos de interés y servicios; inventario colaborativo, sin certificación como activo local de salud.
- Catastro INSPIRE: edificios y plantas para representación 3D, no población por edificio.

## Flujo de integración propuesto
1. Una persona selecciona dirección/entorno en WikiBarrio y consulta la sección.
2. En el Laboratorio, el enlace territorial se basa en **código INE completo, año, geometría y fuente**. Validar correspondencia con las 17 secciones en Loja; nunca fusionar solo por los últimos cinco dígitos sin comprobar provincia y municipio.
3. Ingerir datos mediante fuentes oficiales con licencia y esquema documentados (INE/IECA/MIVAU/OSM); no afirmar acceso a una API pública de WikiBarrio sin verificarla.
4. Registrar año y escala de cada indicador y distinguir atributos territoriales de atributos individuales.
5. Para asociar recursos Localiza Salud, geocodificar direcciones con revisión humana y guardar trazabilidad. OSM muestra lugares, no activos locales automáticamente validados.
6. Emitir el mismo perfil canónico hacia el Aula y el paquete COMPÁS, con indicadores y fichas de sección. No sincronizar un iframe como sustituto del perfil institucional.

## Estado real
Enlace funcional agregado tanto al perfil editorial del Aula como al tab Perfil de COMPÁS. No hay API ni flujo automático comprobado entre WikiBarrio y los repositorios, ni extracción a Firebase. Evitar afirmar que ya existen.

## Próximas pruebas
- Verificar qué parámetros de URL permiten abrir Loja / sección específica, si la web los ofrece.
- Confrontar geometrías y año de referencia; tratar cambios de seccionado.
- Definir adaptadores a CSV/GeoJSON oficial con datos atribuidos, fechas y licencias.
- Probar acceso remoto/iframe en el navegador y accesibilidad móvil.
- Producir representación nativa y exportaciones del mismo conjunto canónico.
