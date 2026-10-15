# Integración del Aula REDCap — Básico y Avanzado (2027)

Este paquete contiene una reproducción docente completa del Aula REDCap: `redcap/index.html`, diez PDF y un CSV. La página `index.html` es el catálogo de la plataforma con el acceso a los tres módulos existentes.

## Incluido
- REDCap Básico: cuatro unidades, sesiones, prácticas, casos y rúbricas.
- REDCap Avanzado: cuatro unidades, reglas, cálculos, pruebas y control de calidad.
- Navegación por pantallas y unidades; presentación y cronómetro.
- Listas de comprobación que se guardan en el navegador local, **no en una cuenta de alumno**.
- Todos los documentos de apoyo del ZIP original y el diccionario CSV.

## Despliegue sin sobrescribir otros módulos
Desde un clon del repositorio `bhermoso/aula-activos-comunitarios`, copiar `redcap/` completo, incluida la carpeta `materiales/`, y actualizar la portada principal. El script `publicar_redcap.sh` realiza esto desde la carpeta del paquete; exige que Git esté instalado y que el usuario ya esté autenticado para hacer push.

## Pendiente para un aula con gestión de alumnado
- Vincular a un proyecto Firebase concreto y verificar su configuración de Authentication y Firestore.
- Diseñar y aplicar reglas de seguridad por participante y rol docente.
- Entregas, evaluación, recuperaciones, seguimiento y exportación de datos del alumnado.
- Verificar la publicación efectiva en GitHub Pages y comprobar enlaces tras el despliegue.

No se han fabricado cuentas ni datos de alumnado. No se envían respuestas ni resultados a Firebase desde el paquete estático.
