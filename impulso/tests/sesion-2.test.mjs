import {readFileSync,existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {strict as assert} from 'node:assert';
import {test} from 'node:test';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const original=readFileSync(path.join(root,'index.html'),'utf8');
const session=readFileSync(path.join(root,'sesion-2.html'),'utf8');
const guide=readFileSync(path.join(root,'SESION_2_MAPEO_Y_PRIORIZACION.md'),'utf8');
test('Portada: enlace a una segunda sesión separada, sin perder sesión 1',()=>{
 assert.ok(original.includes('href="sesion-2.html"'));
 assert.ok(original.includes('href="#diagnostico"'));
 assert.ok(original.includes('16 de octubre · 10:00–11:30 · 90 minutos'));
 assert.ok(original.includes('id="portada-actividad"'));
 assert.ok(original.includes('id="actividad-app"'));
 assert.ok(original.includes('id="tab-mapeo-escolar"'));
 assert.ok(original.includes('id="tab-mapeo-redes"'));
});
test('Sesión 2: dos decisiones principales y sin Plan de Acción prematuro',()=>{
 assert.match(session,/<h1>Planificar el mapeo de activos y revisar la priorización<\/h1>/);
 for(const term of ['Revisión uno a uno','Nuevos mapeos participativos','Loja ya priorizó en 2022','¿Hace falta actualizarla?','26 problemas','Localiza Salud','REDCap','Sin consulta ni publicación de datos individuales']){
  assert.ok(session.includes(term),'Falta: '+term);
 }
 assert.match(session,/no corresponde cerrar hoy:[\s\S]{0,150}líneas estratégicas/);
 assert.doesNotMatch(session,/<h2>Plan de Acción<\/h2>/);
 assert.ok(session.includes('Fecha por confirmar'));
 assert.ok(session.includes('href="index.html"'));
 assert.ok(session.includes('href="SESION_2_MAPEO_Y_PRIORIZACION.md"'));
});
test('Documentación: no confundir inventario histórico, decisiones y herramientas',()=>{
 for(const phrase of ['162 recursos','157 pendientes','No afirmar','40 participantes','26 problemas','COMPÁS-NG','no ejecuta','no se presenta como acuerdo vigente'].slice(0,5)) {
  assert.ok(guide.toLowerCase().includes(phrase.toLowerCase()),'No consta: '+phrase);
 }
 assert.match(guide,/fuera de alcance|vendrá después|fase posterior|materia de una sesión posterior|paso posterior/i);
 assert.ok(!guide.includes('PROPUESTA_GRUPO_MOTOR_MAPEO_PRIORIZACION_PLAN_2026.md'));
 assert.equal(existsSync(path.join(root,'PROPUESTA_GRUPO_MOTOR_MAPEO_PRIORIZACION_PLAN_2026.md')),false);
});
test('Sesión 2: navegación interna y estructura básica legibles',()=>{
 for(const id of ['objetivos','agenda','mapeo','prioridades','acuerdos']){
  assert.ok(session.includes('id="'+id+'"'));
  assert.ok(session.includes('href="#'+id+'"'));
 }
 assert.ok(session.includes('@media(max-width:660px)'));
 assert.ok(session.includes('@media print'));
 assert.ok(session.includes('<main>')&&session.includes('</main>'));
});
