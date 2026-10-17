import { readFileSync, existsSync } from 'node:fs';
import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const html = readFileSync(path.join(root, 'index.html'), 'utf8');
const js = html.match(/<script>([\s\S]*?)<\/script>/)?.[1] || '';
const coursesDef = js.slice(0, js.indexOf('const MATERIALES'));
const courses = vm.runInNewContext(coursesDef + '\nCOURSES;');

test('Se mantiene la estructura de dos cursos y 4 unidades por nivel', () => {
  assert.deepEqual(Array.from(courses, c => c.id), ['basico','avanzado']);
  for(const c of courses) {
    assert.deepEqual(Array.from(c.units,u=>u.id), ['s1','t1','s2','t2']);
    assert.ok(c.units.every(u=>u.slides.length>=3));
  }
});

test('Básico introduce encuesta y una condición elemental', () => {
  const t=courses[0].units.flatMap(u=>u.slides.map(s=>s.h)).join('\n');
  assert.match(t, /Encuestas básicas/);
  assert.match(t, /\[fuma_actual\] = '1'/);
  assert.match(t, /datos ficticios/i);
});

test('Avanzado trata arquitectura, seguimiento, encuestas y calidad', () => {
  const advanced=courses[1];
  const pages=advanced.units.flatMap(u=>u.slides.map(s=>s.h)).join('\n');
  for(const term of ['longitudinal','repetible','invitaciones','informes','calidad','datos ficticios']) assert.match(pages.toLowerCase(), new RegExp(term));
  assert.match(advanced.sub,/gestión y calidad/);
  assert.doesNotMatch(advanced.units[0].title,/sintaxis|action tags/i);
});

test('Sintaxis consultable y no cuota de fórmulas en rúbrica', () => {
  assert.ok(html.includes('guia-sintaxis.html'));
  assert.match(html, /El número de reglas no aporta puntos por sí mismo/);
  assert.ok(existsSync(path.join(root,'guia-sintaxis.html')));
  assert.ok(existsSync(path.join(root,'GUIA_SINTAXIS_DE_CONSULTA.md')));
});

test('Las diez guías 2027 tienen PDF en ambas ubicaciones y un original curricular', () => {
  const source = JSON.parse(readFileSync(path.join(root, 'materiales_2027.json'), 'utf8'));
  assert.equal(source.docs.length, 10);
  assert.equal(new Set(source.docs.map(d => d.id)).size, 10);
  const b = source.docs.filter(d => d.nivel === 'Básico'), a = source.docs.filter(d => d.nivel === 'Avanzado');
  assert.equal(b.length, 5); assert.equal(a.length, 5);
  assert.ok(existsSync(path.join(root, 'material-2027.html')));
  assert.ok(html.includes('PDF revisado de esta unidad'));
  assert.ok(html.includes('Leer en web e imprimir'));
  assert.ok(!html.includes('PDF de versión anterior (no actualizado)'));
  for (const doc of source.docs) {
    assert.ok(doc.sections.length >= 6, doc.id);
    const file = doc.id + '.pdf';
    const p1 = path.join(root, file), p2 = path.join(root, 'materiales', file);
    assert.ok(existsSync(p1), p1); assert.ok(existsSync(p2), p2);
    const x = readFileSync(p1), y = readFileSync(p2);
    assert.ok(x.subarray(0,8).toString('latin1').startsWith('%PDF-1.'), file);
    assert.ok(x.equals(y), 'Dos copias distintas: '+file);
    assert.ok(x.length > 3000, 'PDF demasiado pequeño: '+file);
    assert.ok(x.toString('latin1').includes('%%EOF'), 'PDF sin cierre: '+file);
  }
  assert.ok(existsSync(path.join(root,'programas-2027.html')));
  assert.ok(existsSync(path.join(root,'REDISENO_DOCENTE_2027.md')));
});

test('Los PDFs pueden regenerarse exactamente a partir del JSON', async () => {
  const {makePdf} = await import('../generar_pdf_2027.mjs');
  const data=JSON.parse(readFileSync(path.join(root,'materiales_2027.json'),'utf8'));
  for(const doc of data.docs){
    const generated=makePdf(doc);
    const bytes=Buffer.from([...generated.bytes].map(c=>c.charCodeAt(0)));
    const old=readFileSync(path.join(root,'materiales',doc.id+'.pdf'));
    assert.ok(bytes.equals(old),'PDF no reproducible: '+doc.id);
    const raw=generated.bytes;
    const marker=raw.lastIndexOf('startxref\n');
    const pos=parseInt(raw.slice(marker+10),10);
    assert.equal(raw.slice(pos,pos+5),'xref\n','xref inválido: '+doc.id);
  }
});
