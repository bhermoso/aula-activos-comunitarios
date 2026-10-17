import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const program=html.split('<section class="section active" id="programa">')[1]?.split('</section>')[0] ?? '';
const cover=html.split('<div class="portada-cursos">')[1]?.split('<div class="portada-pie">')[0] ?? '';

test('bloque 03 anuncia el informe sobre la situación de salud de Fuente Vaqueros',()=>{
  assert.ok(program.includes('<span class="num">03</span><h3>Informe sobre la situación de salud de Fuente Vaqueros</h3>'));
  assert.ok(program.includes('Carlos del Moral Campaña</strong> · presentación del informe sobre la situación de salud del municipio'));
  assert.ok(!program.includes('<span class="num">03</span><h3>Indicadores de enfermedad</h3>'));
  assert.ok(cover.includes('<span>Informe de situación de salud</span>'));
  const block03=program.split('<span class="num">03</span>')[1]?.split('<span class="num">04</span>')[0] ?? '';
  assert.ok(block03.includes('Intervención de Carlos del Moral Campaña confirmada por la organización'));
  assert.ok(block03.includes('Presentación confirmada'));
  assert.ok(!block03.includes('pendiente de confirmación'));
  assert.ok(!block03.includes('tendencias poblacionales'));
  assert.ok(!block03.includes('indicadores epidemiológicos de enfermedad'));
});

test('sin alterar los cinco apartados y el guion de mesa',()=>{
  const tabs=[...html.matchAll(/class="tab" data-tab="([^"]+)"/g)].map(x=>x[1]);
  assert.deepEqual(tabs,['programa','participantes','moderacion','proceso','practica']);
  assert.ok(html.includes('Alicia Bellido González'));
  assert.ok(html.includes('Margarita Rut Goena Martínez'));
  assert.ok(html.includes('data-cover-open="practica"'));
});
