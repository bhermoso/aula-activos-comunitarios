import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const program=html.split('<section class="section active" id="programa">')[1]?.split('</section>')[0] ?? '';
const cover=html.split('<div class="portada-cursos">')[1]?.split('<div class="portada-pie">')[0] ?? '';

test('bloque 03 presenta indicadores de enfermedad, no un informe general de situación de salud',()=>{
  assert.ok(program.includes('<span class="num">03</span><h3>Indicadores de enfermedad</h3>'));
  assert.ok(program.includes('Carlos del Moral Campaña</strong> · presentación de indicadores epidemiológicos de enfermedad en Fuente Vaqueros'));
  assert.ok(!program.includes('<span class="num">03</span><h3>Situación de salud</h3>'));
  assert.ok(cover.includes('<span>Indicadores de enfermedad</span>'));
});

test('sin alterar los cinco apartados y el guion de mesa',()=>{
  const tabs=[...html.matchAll(/class="tab" data-tab="([^"]+)"/g)].map(x=>x[1]);
  assert.deepEqual(tabs,['programa','participantes','moderacion','proceso','practica']);
  assert.ok(html.includes('Alicia Bellido González'));
  assert.ok(html.includes('Margarita Rut Goena Martínez'));
  assert.ok(html.includes('data-cover-open="practica"'));
});
