import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {Script} from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = file => readFileSync(path.join(root, file), 'utf8');
const page = read('impulso/priorizacion-2026.html');
const data = JSON.parse(read('impulso/materiales/perfil-2026/sesion-datos.json'));
const profileBytes = readFileSync(path.join(root, 'impulso/materiales/perfil-2026/Loja_PSL_renta_2024.json'));
const profile = JSON.parse(profileBytes);

test('La convocatoria conserva fecha, horario y un programa de noventa minutos', () => {
  assert.ok(page.includes('2026-11-27T10:00:00+01:00'));
  assert.ok(page.includes('10:00–11:30'));
  const minutes = [...page.matchAll(/data-minutes="(\d+)"/g)].map(match => Number(match[1]));
  assert.deepEqual(minutes, [5, 15, 20, 35, 15]);
  assert.equal(minutes.reduce((sum, value) => sum + value, 0), 90);
  assert.ok(page.indexOf('id="historia"') < page.indexOf('id="perfil"'));
  assert.ok(page.indexOf('id="perfil"') < page.indexOf('id="hoja"'));
});

test('La síntesis conserva los indicadores y la identidad del perfil de referencia', () => {
  assert.equal(data.profileSha256, createHash('sha256').update(profileBytes).digest('hex'));
  assert.deepEqual(data.results, profile.results);
  assert.deepEqual(data.findings, profile.findings);
  assert.equal(data.results.length, 97);
  assert.equal(data.history.length, 26);
  assert.deepEqual(data.history.map(item => Number(item.id)), Array.from({length: 26}, (_, index) => index + 1));
  assert.equal(data.income.length, 17);
  assert.equal(new Set(data.income.map(item => item.code)).size, 17);
  assert.ok(data.income.every(item => item.code.startsWith('18122')));
});

test('La cota estadística de Loja conserva su nota y carece de valor gráfico exacto', () => {
  const bounded = data.results.find(result => result.id === 'loja-renta-2024-1812203002-umbral');
  assert.equal(bounded.value, 'Cota publicada: 58,811');
  assert.equal(bounded.chartValue, undefined);
  assert.match(bounded.caution, /secreto estadístico/);
  assert.match(page, /cota de 58,811/);
  assert.ok(!read('impulso/presentacion-perfil.html').includes('58,8 %'));
});

test('La ficha recoge trazabilidad, objetivo, indicador y seguimiento', () => {
  for (const name of ['priority', 'conclusion', 'population', 'objective', 'reference', 'indicator', 'basis', 'baseline', 'target', 'source', 'assets', 'owner', 'pending']) assert.ok(page.includes(`name="${name}"`), name);
  const script = read('assets/loja-priorizacion.js');
  new Script(script);
  assert.ok(script.includes('aula-loja-session/v1'));
  assert.ok(script.includes("value.municipalityId !== 'loja'"));
  assert.ok(script.includes('checkedState(JSON.parse(await file.text()))'));
  assert.ok(!script.includes('innerHTML'));
});

test('Los enlaces locales y el acceso desde la portada son resolubles', () => {
  for (const match of page.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    if (/^(?:https?:|data:)/.test(match[1])) continue;
    assert.ok(existsSync(path.resolve(root, 'impulso', match[1].split(/[?#]/)[0])), match[1]);
  }
  assert.match(read('impulso/index.html'), /href="priorizacion-2026.html"/);
  assert.match(read('impulso/sesion-2.html'), /Abrir la preparación actualizada/);
});
