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

test('Programas revisados y PDF heredados señalados como anteriores', () => {
  assert.ok(html.includes('PDF de versión anterior (no actualizado)'));
  assert.ok(html.includes('pendientes de actualizar'));
  assert.ok(existsSync(path.join(root,'programas-2027.html')));
  assert.ok(existsSync(path.join(root,'REDISENO_DOCENTE_2027.md')));
});
