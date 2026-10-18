/**
 * Genera los diez PDF en redcap/ y redcap/materiales/ desde
 * redcap/materiales_2027.json.
 * Ejecutar desde cualquier directorio: node redcap/generar_pdf_2027_node.mjs
 * Sin paquetes externos. No hace push ni despliega.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { makePdf } from './generar_pdf_2027.mjs';

const here=path.dirname(fileURLToPath(import.meta.url));
const source=JSON.parse(await readFile(path.join(here,'materiales_2027.json'),'utf8'));
await mkdir(path.join(here,'materiales'),{recursive:true});
for(const doc of source.docs){
  const generated=makePdf(doc);
  const bytes=Buffer.from([...generated.bytes].map(char=>char.charCodeAt(0)));
  const file=doc.id+'.pdf';
  await writeFile(path.join(here,file),bytes);
  await writeFile(path.join(here,'materiales',file),bytes);
  console.log(file,generated.pages+' páginas',bytes.length+' bytes');
}
