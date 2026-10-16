# Encuesta de actores y sectores · Loja
**Estado actual del cambio (16/10/2026):** transición de Firebase a REDCap preparada **en rama, pendiente de aprobación y publicación**.

## Diseño recomendado
El instrumento REDCap principal se importa desde `impulso/redcap/diccionario_loja_redcap.csv` y contiene 13 campos (incluido identificador automático y texto introductorio), con **26 sectores, 13 tipos de actor, 7 ámbitos y 7 tipos de vínculo**. Las opciones «Otro» despliegan un campo obligatorio libre. Se registra una propuesta por respuesta.

La versión `diccionario_loja_redcap_con_contacto_PENDIENTE.csv` amplía el diseño a 20 campos e incorpora contacto propio condicionado. **NO se utilizará en encuestas públicas** hasta que el SAS/Distrito apruebe el tratamiento de datos, responsables, información de privacidad y conservación.

## Publicación y enlace
- El QR estable `impulso/qr-ficha.svg` dirige a `impulso/ficha.html`. No se inventa una URL REDCap.
- `impulso/ficha.html` se convierte en una página de acceso a REDCap que no recoge datos ni utiliza Firebase; por defecto muestra «encuesta pendiente».
- Cuando REDCap facilite la URL pública, se verificará y se incluirá en `impulso/redcap/config-encuesta.js`.
- Tras autorización, el sitio podrá usar el mismo QR impreso sin necesidad de rediseñarlo. Para un QR **directo a REDCap**, debe generarse a partir de esa URL pública.

## Estado de los datos
El envío real a la antigua colección `encuestas_loja_2026` no se había verificado; no afirmar que hay respuestas migradas ni borrar datos existentes sin una revisión administrativa. No volver a publicar las reglas abiertas de Firestore para esta encuesta.

## Verificaciones exigidas
Importación REDCap sin errores, validación de «Otro», envío ficticio desde enlace público en sesión privada, acceso administrativo, QR escaneado en móvil, políticas institucionales de privacidad y revisión final en GitHub Pages. Detalles: `impulso/redcap/README.md`.
