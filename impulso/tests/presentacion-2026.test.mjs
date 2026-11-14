import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const root = new URL('../', import.meta.url);
const read = file => readFileSync(new URL(file, root), 'utf8');
const page = read('presentacion-perfil.html');
const comparison = JSON.parse(read('materiales/esde-2025/comparativa.json'));

test('La presentación conserva convocatoria, navegación y las tres escalas de fuentes', () => {
  assert.equal((page.match(/<section class="slide/g) ?? []).length, 26);
  for (const text of ['27 noviembre 2026', '10:00–11:30', 'ESdE 2025', 'Provincia de Granada', 'Imprimir / PDF', 'presentacion-trayectoria-2026.html']) assert.ok(page.includes(text), text);
  assert.ok(page.includes('No se calcula una tendencia entre fuentes heterogéneas'));
});

test('Las seis parejas España-Andalucía reproducen exactamente sus tablas oficiales', () => {
  assert.equal(comparison.metrics.length, 6);
  for (const metric of comparison.metrics) {
    const rows = read(`materiales/esde-2025/${metric.table}.csv`).replace(/^\uFEFF/, '').trim().split(/\r?\n/).slice(1).map(row => row.split(';'));
    for (const [territory, key] of [['Total', 'spain'], ['Andalucía', 'andalusia']]) {
      const row = rows.find(row => row[0] === 'AMBOS SEXOS' && row[1] === territory && row[2] === metric.category && (!metric.frequency || row[3] === metric.frequency));
      assert.ok(row, metric.id);
      assert.equal(metric[key], Number(row.at(-1).replace(',', '.')));
    }
    assert.equal(metric.granada, null);
    assert.equal(metric.loja, null);
  }
});

test('El perfil de origen conserva su huella y la comparación queda en el material de sesión', () => {
  const bytes = readFileSync(new URL('../materiales/perfiles-2026/loja/Loja_PSL_v0_4_C1_2026-11-13.json', root));
  assert.equal(comparison.profileSha256, createHash('sha256').update(bytes).digest('hex'));
  const session = JSON.parse(read('materiales/perfil-2026/sesion-datos.json'));
  assert.deepEqual(session.surveyComparison, comparison);
});

test('La propuesta prioriza por líneas y ofrece las tres opciones verificadas del catálogo', () => {
  for (const text of ['Proponemos deliberar y priorizar por líneas estratégicas', 'Envejecimiento saludable', 'Adicciones', 'Bienestar emocional y salud mental', 'Incluir, Modificar o Excluir', 'Líneas e indicadores']) assert.ok(page.includes(text), text);
  assert.ok(page.includes('registrar su desarrollo pendiente'));
});
