/**
 * Desde materiales_2027.json:
 *  1) genera los PDF de planificacion-evaluacion/materiales/;
 *  2) incrusta el JSON en index.html (<script id="datos-curso">), para que la
 *     página funcione sin depender de una petición adicional.
 * Ejecutar: node planificacion-evaluacion/generar_pdfs.mjs
 * Sin paquetes externos. No hace push ni despliega.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { makePdf } from './generar_pdf.mjs';

const here=path.dirname(fileURLToPath(import.meta.url));
const source=JSON.parse(await readFile(path.join(here,'materiales_2027.json'),'utf8'));
await mkdir(path.join(here,'materiales'),{recursive:true});
const rev=source.revision.split('-').reverse().join('/');
for(const doc of source.docs){
  const generated=makePdf(doc,rev);
  const bytes=Buffer.from([...generated.bytes].map(char=>char.charCodeAt(0)));
  await writeFile(path.join(here,'materiales',doc.id+'.pdf'),bytes);
  console.log(doc.id+'.pdf',generated.pages+' páginas',bytes.length+' bytes');
}
const htmlPath=path.join(here,'index.html');
const html=await readFile(htmlPath,'utf8');
const re=/(<script type="application\/json" id="datos-curso">)[\s\S]*?(<\/script>)/;
if(!re.test(html))throw new Error('No se encuentra <script id="datos-curso"> en index.html');
const safe=JSON.stringify(source).replace(/</g,'\\u003c');
await writeFile(htmlPath,html.replace(re,(_,a,b)=>a+safe+b));
console.log('index.html: datos incrustados',safe.length+' caracteres');
