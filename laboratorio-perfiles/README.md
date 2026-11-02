# Laboratorio de Perfiles de Salud Local

Proyecto independiente en su lógica y contratos, alojado temporalmente en este repositorio hasta disponer de un repositorio propio. **No es un generador interno de COMPÁS**.

## Municipios y secuencia
1. **Loja**: piloto de contraste metodológico y diseño británico, 17 secciones censales, fuentes sanitarias de octubre 2026. [Abrir prototipo](../loja/perfil-piloto.html).
2. **Zagra**: segundo caso, municipio pequeño y menor estabilidad estadística. [Presentación existente](../zagra/presentacion-perfil.html).

## Principios innegociables
- Separar fuente, dato, interpretación, propuesta y decisión institucional.
- Fecha, ámbito, unidad, numerador, denominador y cautelas junto a cada indicador.
- No declarar significación estadística por color sin contraste e intervalos apropiados.
- No cartografiar resultados sanitarios en secciones sin denominadores y permisos adecuados.
- No sustituir resultados de los epidemiólogos con recálculos no validados.
- El laboratorio entrega **borradores revisables**, nunca valida técnicamente por sí solo.
- El perfil canónico deriva en navegador, PDF/DOCX y paquete para COMPÁS; sin conclusiones divergentes.

## Arquitectura
- `docs/CONTRATO.md`: gobernanza, revisión, trazabilidad y criterios de aceptación.
- `docs/INTEGRACION-COMPAS.md`: interfaz de entrega y relación con el tab.
- `municipios/loja/datos-secciones-2024.csv`: indicadores transcritos del anexo del perfil de Loja, para cotejo con INE.
- `municipios/loja/ESTADO.md`: incidencias documentadas y trabajo pendiente.
- `municipios/zagra/ESTADO.md`: segunda fase.
- Prototipo funcional heredado: `/loja/perfil-piloto.html`.

Fuentes de diseño: cuatro `Local Authority Health Profiles` facilitados por el usuario (Kensington and Chelsea / Barking and Dagenham, ediciones 2018 y 2019). No se incorporan a GitHub sin comprobar condiciones de distribución.

## Estado
Fase inicial: contrato y datos piloto existentes, interfaz interactiva inicial. La cartografía del INE está implementada como consulta bajo demanda, **no validada visualmente aún**. La integración anterior en COMPÁS es un visor del prototipo; no se ha cargado como perfil aprobado en Firebase.
