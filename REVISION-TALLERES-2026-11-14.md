# Revisión de los talleres de Alfacar, Atarfe, Loja y Zagra

Preparación del 14/11/2026 sobre `main` a28745b8ae2936fd9a7a4eb203caf05da6386c6a. Cambios en rama; no publicados y sin escritura en Firebase.

| Contenedor | Taller | Convocatoria |
|---|---|---|
| Alfacar | Impulso del II Plan Local de Salud | 19/11/2026, 11:00; máximo dos horas según programa anterior |
| Atarfe | Presentación del Perfil y priorización | 26/11/2026, 11:00; cierre y sede por confirmar |
| Loja (`impulso/`) | Priorización por líneas, objetivos e indicadores | 27/11/2026, 10:00–11:30 |
| Zagra | Priorización por líneas | Fecha y hora por confirmar |

## Qué cambia

- Alfacar: nombres y puestos actualizados en programa, coloquio y participantes. Seis participantes municipales/sanitarios/sociales aportados por la organización y los dos del Distrito del programa. Se retira la referencia a asistencia sin intervención por indicación posterior del usuario. Dos preguntas abiertas para cada uno de los ocho participantes, en el apartado Coloquio y en `alfacar/guion-preguntas-20261119.md`. La moderación elige según el diálogo; no se añaden ponencias ni prioridades automáticamente.
- Las cuatro presentaciones identifican su copia de referencia: Alfacar y Atarfe 0.6-C1, Loja 0.4-C1 y Zagra 0.2-C1, de 13/11/2026. Los PDF/JSON se copian sin alteración, con manifiesto SHA-256. El estado vigente se refiere al corte de COMPÁS comprobado el 13/11, no a una lectura en directo del Aula.
- Se actualizan conclusiones y recomendaciones seleccionadas, alcance de muestra voluntaria, declaración histórica de activos y frontera con decisiones del Grupo Motor. Se conserva el material anterior con aviso y enlace a la preparación revisada. El Word/HTML antiguo se identifica como antecedente, no como editable actual del PDF C1.
- Loja conserva la comparación ESdE para el encuentro, separada del perfil; se mantienen sus seis parejas España-Andalucía y las ausencias provinciales. Cambia únicamente la identidad del perfil de referencia en la comparación. Se conserva la convocatoria de 90 minutos.
- La hoja de Loja toma los originales C1 y sus huellas. Si encuentra en Firebase una sesión con otro perfil, ofrece descargar esa sesión y deja la hoja actual intacta. Se toma la versión remota como antecedente de concurrencia para un guardado posterior explícito. No se trasladan automáticamente acuerdos o vínculos a conclusiones que podrían haber cambiado de significado. El historial de Firebase conserva las versiones previas.

## Comprobaciones y límites

32 comprobaciones automáticas: integridad de los ocho originales, identidad municipal, fechas, participantes y preguntas, enlace local, sintaxis de navegación, seis pares ESdE contra sus CSV conservados, y tamaño de la sesión por debajo del límite de guardado. `git diff --check` correcto.

La comprobación visual no se pudo completar: Chromium de pruebas no pudo iniciarse por la restricción de sockets del proceso; el navegador compartido no alcanzó el servidor local y rechazó el protocolo de archivo. No se intentó eludir el bloqueo. Quedan pendientes proyección de todas las diapositivas, navegación visual en móvil e impresión, y prueba autenticada del ciclo de sesión de Loja sobre una versión de ensayo. Las pruebas estáticas no sustituyen esos controles.

Los perfiles siguen pendientes de aceptación técnica humana. En Atarfe, el campo `limitations` del JSON heredado conserva una formulación antigua sobre cuotas, aunque el cuerpo y R6 de C1 la distinguen de la selección probabilística. Esta revisión de talleres no cambia el original cargado: la presentación mantiene la distinción correcta y se registra la discrepancia para el próximo cotejo del paquete. En Alfacar siguen pendientes el diccionario participativo y las notas técnicas de fuente; Zagra conserva periodos sanitarios históricos. No se proclama validación ni actualización científica por el cambio de convocatoria.

No se modifican las PR antiguas de actores de Loja, las reglas de seguridad ni el expediente de otro municipio. La PR de Zagra #42 sigue siendo una propuesta histórica aparte; aquí se conservan las diapositivas de `main` y se revisa la preparación del próximo taller.
