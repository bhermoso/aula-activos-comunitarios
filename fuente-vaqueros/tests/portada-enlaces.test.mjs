import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const shared=readFileSync(new URL('../../assets/aula-portadas.js',import.meta.url),'utf8');
const cover=html.slice(html.indexOf('<div class="portada-cursos">'),html.indexOf('<div class="portada-pie">'));
const practical=html.slice(html.indexOf('<section class="section" id="practica">'),html.indexOf('</section>',html.indexOf('<section class="section" id="practica">')));

test('la tarjeta de participantes y trabajo práctico ofrece ambos accesos directos',()=>{
  assert.ok(cover.includes('Participantes y trabajo práctico'));
  assert.ok(cover.includes('href="#practica" data-cover-open="practica"'));
  assert.ok(cover.includes('Abrir ficha práctica'));
  assert.ok(cover.includes('href="#participantes" data-cover-open="participantes"'));
  assert.ok(cover.includes('Ver participantes'));
  assert.ok(cover.includes('class="fv-cover-actions"'),'Accesos agrupados con estilo coherente');
});

test('los tres destinos de la portada existen en la navegación interior',()=>{
  const targets=[...html.matchAll(/data-cover-open="([^"]+)"/g)].map(x=>x[1]);
  assert.deepEqual(targets,['programa','practica','participantes']);
  for(const id of targets){
    assert.ok(html.includes('data-tab="'+id+'"'),'Sin pestaña para '+id);
    assert.ok(html.includes('id="'+id+'"'),'Sin sección para '+id);
  }
  assert.ok(shared.includes("selectSection(button.dataset.coverOpen)"),'No se selecciona el destino al abrir la portada');
  assert.ok(shared.includes("app.querySelector('[data-tab=\"'+target+'\"]')"),'La portada no abre la pestaña solicitada');
});

test('la ficha mantiene la recogida local, sin envío ni cambio en Localiza Salud',()=>{
  assert.ok(practical.includes('id="fv-add"'));
  assert.ok(practical.includes('id="fv-sector"'));
  assert.ok(practical.includes('id="fv-prioridad"'));
  assert.ok(practical.includes('no registra recursos en Localiza Salud'));
  assert.ok(html.includes("localStorage.setItem(fvkey"));
});
