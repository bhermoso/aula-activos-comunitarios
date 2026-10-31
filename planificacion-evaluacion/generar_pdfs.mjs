/**
 * Genera los PDF de planificacion-evaluacion/materiales/ desde materiales_2027.json.
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
