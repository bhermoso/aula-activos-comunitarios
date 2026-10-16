import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const section=name=>{
 const a=html.indexOf('<section class="section',html.indexOf('id="'+name+'"')-100);
 return html.slice(a,html.indexOf('</section>',a)+10);
};
test('el expediente figura en la sección de punto de partida',()=>{
 for(const txt of ['2021','2022','102 cuestionarios','29 de abril de 2022','julio y agosto','fecha de una paralización definitiva']){
  assert.ok(section('contexto').includes(txt),'No está documentado '+txt);
 }
});
test('programa completo por bloques y personas citadas como previstas/invitadas',()=>{
 const prog=section('programa');
 for(const t of ['Apertura institucional','Trayectoria del Plan Local','Situación de salud','Mesa-coloquio intersectorial','Hoja de ruta','Trabajo participativo','Puesta en común']){
  assert.ok(prog.includes(t),'Falta bloque: '+t);
 }
 for(const n of ['José Miguel Muñoz Ortega','Carlos del Moral Campaña','Alicia Bellido González','María Martín Calvo','Francisco J. Pigne Marín','Blas Hermoso Rico','Margarita Rut Goena Martínez','Raquel Cal','Jenifer González','Inserta Andalucía','Asociación de Regantes']){
  assert.ok(prog.includes(n),'No citado en programa: '+n);
  assert.ok(section('participantes').includes(n),'No citado en participantes: '+n);
 }
 assert.ok(prog.includes('Composición de la mesa y moderación pendientes de confirmación'));
 assert.ok(section('participantes').includes('no equivale a asistencia confirmada'));
});
test('no se difunden teléfonos ni respuestas individuales de archivos privados',()=>{
 assert.ok(!html.includes('651 963 794'));
 assert.ok(!html.includes('677905855'));
 assert.ok(!html.includes('agustin.gomez.jimenez.sspa@'));
});
test('se mantienen navegación y seis secciones originales',()=>{
 for(const id of ['contexto','programa','participantes','moderacion','proceso','practica']){
  assert.ok(html.includes('id="'+id+'"'));
  assert.ok(html.includes('data-tab="'+id+'"'));
 }
 assert.ok(html.includes("--teal:#246c53"),'paleta verde residual');
});