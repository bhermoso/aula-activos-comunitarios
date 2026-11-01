/**
 * Genera la guía del profesorado en PDF desde guia_profesorado.json.
 * Ejecutar: node planificacion-evaluacion/profesorado/generar_guia.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { makePdf } from '../generar_pdf.mjs';
const here=path.dirname(fileURLToPath(import.meta.url));
const src=JSON.parse(await readFile(path.join(here,'guia_profesorado.json'),'utf8'));
const rev=src.revision.split('-').reverse().join('/');
for(const doc of src.docs){const g=makePdf(doc,rev);const bytes=Buffer.from([...g.bytes].map(c=>c.charCodeAt(0)));await writeFile(path.join(here,'guia_profesorado_del_dato_a_la_accion.pdf'),bytes);console.log('guia_profesorado_del_dato_a_la_accion.pdf',g.pages+' páginas');}
