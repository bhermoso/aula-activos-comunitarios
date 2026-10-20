// Copia únicamente el formulario QR y su configuración pública.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const destination = path.join(root, 'dist-fuente-vaqueros');
fs.mkdirSync(destination, { recursive: true });
for (const [source, output] of [
  ['fuente-vaqueros/participar.html', 'index.html'],
  ['fuente-vaqueros/firebase-config.js', 'firebase-config.js']
]) {
  const src = path.join(root, source);
  if (!fs.existsSync(src)) throw new Error('Archivo no encontrado: ' + src);
  fs.copyFileSync(src, path.join(destination, output));
}
console.log('Formulario de Fuente Vaqueros preparado para Hosting aislado.');
