#!/usr/bin/env bash
set -euo pipefail
# Uso: bash publicar_redcap.sh /ruta/al/clon/aula-activos-comunitarios
if [[ $# -ne 1 ]]; then echo 'Uso: bash publicar_redcap.sh /ruta/al/clon'; exit 2; fi
root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo="$(cd "$1" && pwd)"
[[ -d "$repo/.git" ]] || { echo 'El destino no es un clon Git'; exit 2; }
[[ -f "$repo/index.html" ]] || { echo 'No se reconoce la portada del Aula'; exit 2; }
cd "$repo"
[[ -z "$(git status --porcelain)" ]] || { echo 'Hay cambios locales: revise antes de publicar'; exit 2; }
[[ "$(git branch --show-current)" == 'main' ]] || { echo 'Cambie a la rama main antes de publicar'; exit 2; }
cp -a "$root/redcap" "$repo/"
# Conservamos la portada del repositorio, que ya contiene el acceso a REDCap.
if ! grep -q 'redcap/index.html' "$repo/index.html"; then
 echo 'Aviso: añada un enlace a ./redcap/index.html en la portada antes del despliegue.'
fi
git add redcap
if git diff --cached --quiet; then echo 'Sin cambios'; exit 0; fi
git commit -m 'Integrar REDCap Basico y Avanzado completos con materiales'
git push origin main
