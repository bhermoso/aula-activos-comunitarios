# Protocolo de entrega a COMPÁS

COMPÁS (repositorio `bhermoso/compas-ng-renovado`) cuenta con `ExternalProfileDashboard`. **Recibe**, guarda, revisa, versiona y valida documentos externos. No genera el Perfil.

El contrato conocido y vigente de paquete externo es `compas-profile-package/v1`, con: `schema`, `municipalityId`, `title`, `period`, `author`, `summary`, `text`, `results`, `findings`, `limitations`, `areas`. Cada resultado contiene `id`, `title`, `value`, `unit`, `source`, `page`, `period`, `caution`; puede contener `topic`, `scale`, `denominator`, `temporalContext`, `chartValue`, `comparison`.

Plan de transferencia:
1. Completar el perfil canónico externo (no duplicarlo dentro de COMPÁS).
2. Exportar paquete v1 y original PDF/DOCX (si están disponibles).
3. Abrir municipio correcto en COMPÁS y cargar juntos paquete y original.
4. Verificar persistencia en Firebase, revisión, referencias, indicadores y permisos.
5. Validar por acción humana. **No crear versiones activas ni alterar expedientes reales durante las pruebas del laboratorio.**

El enlace al atlas desde el tab de COMPÁS es actualmente un visor externo complementario, no una importación de perfil canónico, y no implica aprobación.
