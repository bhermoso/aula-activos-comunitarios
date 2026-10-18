import {readFileSync,existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {strict as assert} from 'node:assert';
import {test} from 'node:test';
import {Script} from 'node:vm';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=(name)=>readFileSync(path.join(root,name),'utf8');
const hub=read('index.html'),first=read('taller-impulso.html');
const second=read('sesion-2.html'),guide=read('SESION_2_MAPEO_Y_PRIORIZACION.md');

test('Portada del módulo: dos encuentros separados y mapeo como tercera etapa posterior',()=>{
  assert.ok(hub.includes('Itinerario del Plan Local de Salud'));
  assert.ok(hub.includes('Taller de impulso'));
  assert.ok(hub.includes('Priorización y líneas estratégicas'));
  assert.ok(hub.includes('href="taller-impulso.html"'));
  assert.ok(hub.includes('href="sesion-2.html"'));
  assert.ok(hub.includes('Mapeo de activos orientado a las líneas seleccionadas'));
  assert.ok(hub.includes('Solo después'));
  assert.equal((hub.match(/<article class="card /g)||[]).length,2);
  assert.ok(!hub.includes('id="actividad-app"'),'La portada ya no contiene el taller completo incrustado');
});

test('Se conserva el primer taller y sus accesos desde enlaces históricos',()=>{
  for(const token of ['id="portada-actividad"','id="actividad-app"',
    '16 de octubre · 10:00–11:30 · 90 minutos',
    'id="tab-mapeo-escolar"','id="tab-mapeo-redes"',
    'data-cover-open="0"','data-cover-open="4"',
    'const hashNames=','../assets/proyeccion-loja.js']){
    assert.ok(first.includes(token),'Falta material original: '+token);
  }
  assert.ok(first.includes('href="index.html"'),'Primer taller regresa a itinerario');
  assert.ok(!first.includes('loja-segunda-sesion'));
  for(const hash of ['diagnostico','itinerario','moderacion','marco','ficha','estudios','mapeo-escolar','mapeo-redes']){
    assert.ok(hub.includes("'"+hash+"'"),'Falta redirección compatible: '+hash);
  }
  assert.ok(hub.includes("window.location.replace('taller-impulso.html'+window.location.hash)"));
});

test('Priorizar primero: líneas estratégicas y mapeo posteriormente',()=>{
  assert.ok(second.includes('Priorización de problemas y selección de líneas estratégicas'));
  assert.ok(second.includes('Primero decidir qué queremos mejorar'));
  const a=second.indexOf('id="antecedentes"'),
        b=second.indexOf('id="decision"'),
        c=second.indexOf('id="lineas"'),
        d=second.indexOf('id="mapeo"');
  assert.ok(a>0&&a<b&&b<c&&c<d,'Orden pedagógico: historial → decisión → líneas → mapeo');
  assert.ok(second.includes('Líneas estratégicas'));
  assert.ok(second.includes('solo si procede'));
  assert.ok(second.includes('Si se acuerda consultar:'));
  assert.ok(second.includes('relacionados con las líneas acordadas'));
  assert.ok(second.includes('<details>'),'Herramientas de activos han de quedar secundarias');
  assert.ok(second.includes('href="index.html"'));
  assert.ok(second.includes('Fecha por confirmar'));
  assert.ok(!second.includes('<h2>Agenda de mapeo</h2>'));
});

test('Documento de continuidad docente evita priorizar todo el inventario antes de líneas',()=>{
  for(const phrase of ['40 participantes','26 problemas','162 registros','157 pendientes','COMPÁS-NG','Solo entran','líneas estratégicas','Después de seleccionar líneas']){
    const hay=(guide+'\n'+read('GUIA_REVISION_INDIVIDUAL_ACTIVOS.md')).toLowerCase();
    assert.ok(hay.includes(phrase.toLowerCase()),'No encontrado: '+phrase);
  }
  assert.ok(guide.includes('No es objetivo de la segunda sesión hacer mapeo'));
  assert.ok(guide.includes('solo se revisarán como posibles activos aquellos pertinentes'));
  assert.ok(guide.includes('No programar desde la sesión de priorización una auditoría del 100 %'));
  assert.ok(guide.includes('mantenimiento general'));
});

test('Dinámica recupera 26 prioridades y distingue consulta de selección de líneas',()=>{
 const page=read('dinamica-priorizacion.html');
 assert.equal((page.match(/class="revision"/g)||[]).length,26);
 for(let i=1;i<=26;i++)assert.ok(page.includes('id="tema-'+i+'"'));
 for(const txt of ['40 participantes en 2022','Sedentarismo','Suicidio','187.850','74.185','no constituyen una nueva priorización',
 'name="ruta" value="consulta"','id="lineas"','Si se acuerda encuesta','El mapeo será posterior']){
  assert.ok(page.includes(txt),'Falta: '+txt);
 }
 assert.ok(!/localStorage|sessionStorage|firebase|fetch\(/i.test(page));
});

test('Ficha y plantilla exigen vínculo con línea seleccionada sin introducir datos reales',()=>{
 const ficha=read('ficha-revision-activos.html');
 for(const s of ['id="linea"','id="pertinencia"','Uso posterior a la selección de líneas',
 'no guarda ni envía información','No introduzcas datos personales','estado-localiza','window.print()']){
   assert.ok(ficha.includes(s),'No encontrado: '+s);
 }
 assert.ok(!/localStorage|sessionStorage|firebase|fetch\(/i.test(ficha));
 const csv=read('plantilla_revision_recursos_loja.csv').replace(/^\uFEFF/,'').trim();
 assert.equal(csv.split(/\r?\n/).length,1,'CSV debe estar vacío de datos');
 const cols=csv.split(';');
 assert.equal(cols.length,22);
 assert.equal(new Set(cols).size,cols.length);
 for(const c of ['linea_estrategica_seleccionada','pertinencia_para_linea','id_localiza_salud','resultado_revision','fecha_limite'])
  assert.ok(cols.includes(c),'Falta '+c);
 for(const href of ['ficha-revision-activos.html','dinamica-priorizacion.html','plantilla_revision_recursos_loja.csv','GUIA_REVISION_INDIVIDUAL_ACTIVOS.md'])
  assert.ok(existsSync(path.join(root,href)));
});

test('Guion, enlaces y scripts disponibles sin fuentes externas de recogida',()=>{
 assert.ok(guide.includes('mapeo dirigido'));
 assert.ok(guide.includes('Acta mínima'));
 for(const href of ['dinamica-priorizacion.html','ficha-revision-activos.html'])
   assert.ok(second.includes('href="'+href+'"'));
 for(const page of [hub,first,second,read('ficha-revision-activos.html'),read('dinamica-priorizacion.html')]){
  const scripts=[...page.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
  for(const script of scripts)assert.doesNotThrow(()=>new Script(script));
 }
});
