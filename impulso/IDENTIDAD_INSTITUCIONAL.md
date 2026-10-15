# Identidades gráficas · Taller de Loja (16-10-2026)

## Estado de la integración

Se ha incorporado en la **portada del taller** un bloque de cinco entidades/programas, separado de la navegación y el contenido RELAS. Los enlaces llevan a páginas institucionales de referencia y los textos alternativos/etiquetas hacen legible el conjunto sin imagen.

**Importante:** este bloque NO es una declaración de instituciones organizadoras, colaboradoras, asistentes o centros acreditados. Esa clasificación solo podrá cambiarse tras consultar convocatoria u otra documentación acreditativa.

## Inventario y trazabilidad

| Denominación | Representación en portada | Referencia | Validación pendiente |
|---|---|---|---|
| Ayuntamiento de Loja | Marca PNG remota provisional alojada en seeklogo.com | https://www.aytoloja.org/ | Reemplazar por archivo oficial del ayuntamiento, comprobar permisos y conservación local |
| Hospital de Alta Resolución de Loja | Identificador textual «HAR»; **no es un logotipo** | https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/todas-noticia/el-hospital-de-loja-cumple-15-anos-reforzando-su-capacidad-asistencial-y-tecnologica | Logotipo institucional oficial y atribución organizativa |
| Distrito Sanitario Granada–Metropolitano | Identificador textual «DAP»; **no es un logotipo** | https://www.dsgranada-metropolitano.org/noticias/el-distrito-granada-metropolitano-estrena-nuevo-logotipo | Obtener archivo de marca oficial |
| Centros Comprometidos contra la Violencia de Género | Imagen institucional remota de ACSA: https://www.sspa.juntadeandalucia.es/agenciadecalidadsanitaria/wp-content/uploads/2024/10/FC.png | https://www.sspa.juntadeandalucia.es/agenciadecalidadsanitaria/servicios/beltia/centros-comprometidos-contra-la-violencia-de-genero/ | Obtener distintivo autorizado y **no atribuirlo al hospital o distrito** sin prueba |
| Red Andaluza de Servicios Sanitarios y Espacios Libres de Humo (RASSELH) | Imagen remota de la Junta: https://www.juntadeandalucia.es/export/drupaljda/salud_5af95871e017a_hospitales_libres_humo.jpg | https://www.juntadeandalucia.es/organismos/presidenciasanidadyemergencias/areas/sanidad/salud-vida/adulta/paginas/red-andaluza-sselh.html | Obtener logotipo original y verificar pertenencia de centros, si se afirma |

El Centro de Salud de Loja figura integrado en el Distrito Metropolitano de Granada según el directorio del SAS: https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/el-sas/servicios-y-centros/informacion-por-centros/23800

## Arquitectura y uso

- No se incrustan imágenes en base64.
- Existen ahora **tres imágenes remotas**: una imagen municipal de un tercero pendiente de reemplazo y dos imágenes alojadas en webs oficiales (ACSA y Junta de Andalucía). Las etiquetas siguen siendo legibles si falla una imagen.
- Se priorizarán archivos SVG/PNG originales **locales** en `impulso/assets/logos/` una vez obtenidos y verificados. No inventar vectores, escudos o sellos.
- Los enlaces externos usan `rel="noopener noreferrer"` y abren una pestaña distinta.
- El bloque no se considera prueba de patrocinio ni de adhesión a redes.
- Se mantiene separado del taller de Fuente Vaqueros.

## Control previo al evento

1. Validar con organización el uso de las marcas, las instituciones representadas y su papel.
2. Sustituir el PNG provisional por el archivo oficial del Ayuntamiento.
3. Incorporar los originales del hospital y distrito, y verificar que las imágenes de las redes pueden reutilizarse en la presentación. **No convertir siglas tipográficas en logotipos falsos.**
4. Probar la visualización en el proyector y los enlaces.
5. Publicar solamente tras autorización expresa para fusionar con `main` y desplegar.

## Decisión de diseño

Familiaridad mediante tipografías, colores, retícula, paneles y accesibilidad del Aula; divergencia mediante la disposición de referencias institucionales y estructura de debate específica de Loja.
