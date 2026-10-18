# Fuente Vaqueros · continuidad de identidad visual

**Fecha:** 16/10/2026. **Rama de revisión**: `fuente-vaqueros-sin-azul-20261016`.

## Incidencia
El taller continuaba mostrando azul en secciones interiores debido a un juego de variables CSS independientes del resto del Aula y a dos reglas con colores azules fijos:
- `--teal:#497896`, `--accent:#b8d4ee`, `--light:#eaf1f6`.
- `.summary-grid strong` (`#376a77`) y `.num` (`#4f7d93`).
- También la portada usaba `--cover-accent:#b8d4ee`, `--cover-card:#193d48`, `--cover-line:#335b66`.

## Solución
Actualizar **solo** `fuente-vaqueros/index.html`, con fondo arena y verde profundo de la familia del Aula. Paleta de Fuente Vaqueros: verde principal `#246c53`, acento salvia `#b9dba9`, verde pálido `#edf5e9`, portada `#1b4136` y `#406e58`, texto destacado verde `#2f694b` y `#2e7254`. Se mantienen las seis pestañas/secciones, portada de identidad compartida, navegación y funcionalidades. No tocar hojas de estilo comunes ni módulos de Loja, REDCap y activos.

## Control de regresión
`node --test fuente-vaqueros/tests/paleta.test.mjs` verifica que no reaparezcan tonos azules saturados, que se conservan los colores acordados, contraste mínimo 4.5:1 en botones y titulares y las seis secciones. Integración en GitHub Actions para cambios futuros. Esta prueba estática no sustituye la revisión visual con navegador real a distintas anchuras.

**Despliegue:** fusionar a `main` y esperar a GitHub Pages solo con autorización expresa. Después comprobar las páginas interiores con caché actualizada y comprobar pantallas pequeñas.


## 18/10/2026 · Identificación del moderador

**Rectificación aportada por el usuario:** el moderador de la mesa-coloquio del 22/10/2026 es **Rubén**, persona vinculada al **área de Cultura del Ayuntamiento de Fuente Vaqueros**. El programa preparatorio inicial ya señalaba «Rubén»; la identificación diferente publicada el 17/10/2026 era errónea. Apellidos y cargo concreto aún no verificados: no inferirlos ni atribuírsele la Concejalía de Cultura. Cambios en portada, programa, relación de participantes y guion de moderación, con pruebas ajustadas. Esta corrección queda preparada en rama para revisión; no se fusiona ni despliega sin autorización expresa.
