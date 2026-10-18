import {readFileSync,existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {strict as assert} from 'node:assert';
import {test} from 'node:test';
import {Script as vmScript} from 'node:vm';
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
 for(const phrase of ['162 recursos','157 pendientes','157 recursos hoy pendientes','40 participantes','26 problemas','COMPÁS-NG','no ejecuta','no se presenta como acuerdo vigente'].slice(0,5)) {
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


test('La sesión enlaza la ficha, guía, CSV y revisión histórica, sin fingir persistencia',()=>{
 for(const href of ['ficha-revision-activos.html','dinamica-priorizacion.html','plantilla_revision_recursos_loja.csv','GUIA_REVISION_INDIVIDUAL_ACTIVOS.md']){
   assert.ok(session.includes('href="'+href+'"'),'La sesión no enlaza '+href);
   assert.ok(existsSync(path.join(root,href)),'Archivo inexistente '+href);
 }
 const ficha=readFileSync(path.join(root,'ficha-revision-activos.html'),'utf8');
 assert.ok(ficha.includes('no guarda ni envía información'));
 assert.ok(ficha.includes('No introduzcas datos personales'));
 assert.ok(ficha.includes('estado-localiza'));
 assert.ok(ficha.includes('participacion'));
 assert.ok(ficha.includes('vigencia'));
 assert.ok(ficha.includes('decision'));
 assert.ok(ficha.includes('justificacion'));
 assert.ok(ficha.includes('plazo'));
 assert.ok(ficha.includes('window.print()'));
 assert.ok(!/localStorage|sessionStorage|firebase|fetch\(/i.test(ficha));
});

test('Plantilla CSV vacía mantiene campos para decisión motivada y contraste Localiza',()=>{
 const csv=readFileSync(path.join(root,'plantilla_revision_recursos_loja.csv'),'utf8').replace(/^\uFEFF/,'').trim();
 const lines=csv.split(/\r?\n/);
 assert.equal(lines.length,1,'La plantilla no contiene datos ni ejemplos que pudieran confundirse con reales');
 const cols=lines[0].split(';');
 assert.equal(cols.length,20);
 assert.equal(new Set(cols).size,cols.length);
 for(const c of ['id_historico','id_localiza_salud','fecha_consulta_localiza','participacion_contraste','estado_en_localiza','resultado_revision','motivo_revision','accion_pendiente','equipo_responsable','fecha_limite']){
  assert.ok(cols.includes(c),'Campo ausente: '+c);
 }
});

test('Dinámica muestra 26 problemas de 2022 sin convertir el contraste en votación',()=>{
 const page=readFileSync(path.join(root,'dinamica-priorizacion.html'),'utf8');
 assert.equal((page.match(/class="revision"/g)||[]).length,26);
 for(let i=1;i<=26;i++)assert.ok(page.includes('id="tema-'+i+'"'),'Falta el tema '+i);
 assert.ok(page.includes('40 participantes en 2022'));
 assert.ok(page.includes('Suicidio'));
 assert.ok(page.includes('Sedentarismo'));
 assert.ok(page.includes('187.850'));
 assert.ok(page.includes('74.185'));
 assert.ok(page.includes('no constituyen una nueva priorización'));
 assert.ok(page.includes('no recoge votos públicos'));
 for(const route of ['revisar','consulta','mixto','pendiente'])assert.ok(page.includes('name="ruta" value="'+route+'"'));
 assert.ok(!/localStorage|sessionStorage|firebase|fetch\(/i.test(page));
});

test('Scripts locales de materiales prácticos son sintácticamente válidos',()=>{
 
 for(const pathName of ['ficha-revision-activos.html','dinamica-priorizacion.html']){
  const page=readFileSync(path.join(root,pathName),'utf8');
  const scripts=[...page.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
  assert.ok(scripts.length>=1,'Sin script en '+pathName);
  scripts.forEach((js,i)=>assert.doesNotThrow(()=>new vmScript(js),pathName+' script '+i));
 }
});
