import {readFileSync,existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {strict as assert} from 'node:assert';
import {test} from 'node:test';
import {Script} from 'node:vm';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>readFileSync(path.join(root,name),'utf8');
const hub=read('index.html');
const first=read('taller-impulso.html');
const second=read('sesion-2.html');
const guide=read('SESION_2_MAPEO_Y_PRIORIZACION.md');
const matrix=read('matriz-planificacion-mapeo.html');
const rootPage=readFileSync(path.join(root,'..','index.html'),'utf8');

test('La portada presenta encuentros separados y ejecución del mapeo después',()=>{
 for(const str of ['Taller de impulso','Priorización y planificación del mapeo',
   'href="taller-impulso.html"','href="sesion-2.html"','Realización de los mapeos acordados',
   'La segunda sesión diseña'])
  assert.ok(hub.includes(str),'Falta '+str);
 assert.equal((hub.match(/<article class="card /g)||[]).length,2);
 assert.ok(!hub.includes('id="actividad-app"'));
 assert.ok(rootPage.includes('Loja · Impulso y planificación del mapeo'));
 assert.ok(rootPage.includes('href="./impulso/"'));
});

test('El primer taller de 16 octubre sigue archivado y con enlaces profundos válidos',()=>{
 for(const str of ['id="portada-actividad"','id="actividad-app"',
  '16 de octubre · 10:00–11:30 · 90 minutos',
  'id="tab-mapeo-escolar"','id="tab-mapeo-redes"',
  'data-cover-open="0"','data-cover-open="4"',
  'const hashNames=','../assets/proyeccion-loja.js'])
   assert.ok(first.includes(str),'Primer taller incompleto: '+str);
 for(const hash of ['diagnostico','itinerario','moderacion','marco','ficha',
  'estudios','mapeo-escolar','mapeo-redes'])
   assert.ok(hub.includes("'"+hash+"'"),'Redirección perdida: '+hash);
 assert.ok(hub.includes("window.location.replace('taller-impulso.html'+window.location.hash)"));
});

test('La sesión 2 respeta orden: prioridades, líneas, PLANIFICACIÓN del mapeo y ejecución futura',()=>{
 const ids=['antecedentes','decision','lineas','plan-mapeo','agenda','acuerdos','mapeo'];
 const positions=ids.map(id=>second.indexOf('id="'+id+'"'));
 assert.ok(positions.every(x=>x>0),'Falta alguna sección');
 assert.ok(positions.every((x,i)=>i===0||x>positions[i-1]),'Secuencia incorrecta de secciones');
 for(const text of ['Priorizar y planificar el mapeo de activos',
  'En esta segunda sesión se planifica el mapeo',
  'Por cada línea: ¿qué mapear, con quién y cómo?',
  'La ejecución de paseos, entrevistas, talleres y revisión de activos',
  'matriz-planificacion-mapeo.html'])
  assert.ok(second.includes(text),'Falta: '+text);
 assert.ok(second.includes('href="index.html"'));
 assert.ok(second.includes('Fecha por confirmar'));
});

test('Agenda HTML y Markdown tienen los mismos 7 bloques en igual orden y totalizan 120',()=>{
 const expected=[
  ['apertura',10,'Apertura y objetivos'],
  ['antecedentes',20,'Priorización de 2022'],
  ['contraste',20,'Contraste y actualización'],
  ['consulta',15,'¿Nueva consulta?'],
  ['lineas',15,'Grandes líneas estratégicas'],
  ['plan-mapeo',30,'Planificar el mapeo POR LÍNEA'],
  ['cierre',10,'Acuerdos y calendario']
 ];
 const got=[...second.matchAll(/data-agenda-key="([^"]+)" data-minutes="(\d+)"/g)]
  .map(m=>[m[1],Number(m[2])]);
 assert.deepEqual(got,expected.map(x=>x.slice(0,2)));
 assert.equal(got.reduce((n,x)=>n+x[1],0),120);
 for(const [id,min,title] of expected){
  assert.ok(second.includes(title),'Bloque HTML sin título '+title);
  assert.ok(guide.includes(title),'Bloque guion sin título '+title);
  assert.ok(guide.includes('| '+String.fromCharCode(96)+id+String.fromCharCode(96)+' | '+min+' min |'),
   'Duración desalineada para '+id);
 }
 assert.ok(second.includes('primero priorizar, después planificar el mapeo'));
 assert.ok(guide.includes('10 + 20 + 20 + 15 + 15 + 30 + 10'));
});

test('La consulta pendiente convierte el plan de mapeo en provisional, no definitivo',()=>{
 for(const term of ['escenario','provisional','encuesta','sin activar','líneas']){
  const txt=(second+'\n'+guide).toLowerCase();
  assert.ok(txt.includes(term.toLowerCase()),'Falta condición: '+term);
 }
 assert.ok(second.includes('Solo planificación provisional si las líneas siguen pendientes'));
 assert.ok(guide.includes('Ningún equipo sale a mapear')||guide.includes('ningún equipo sale a mapear'));
 assert.ok(guide.includes('la ejecución efectiva del mapeo es posterior')||guide.includes('La ejecución efectiva del mapeo es posterior'));
});

test('La matriz plantea qué, dónde, con quién, cómo y quién coordina',()=>{
 for(const key of ['name="linea"','name="estado"','name="territorio"','name="que"',
  'name="quienes"','name="como"','name="responsables"','name="precauciones"',
  'id="anadir"','id="imprimir"','no se guardan ni se envían'])
  assert.ok(matrix.includes(key),'Campo de planificación ausente: '+key);
 assert.ok(matrix.includes('data-matriz-item'));
 assert.ok(matrix.includes("cloneNode(true)"));
 assert.ok(matrix.includes('window.print()'));
 assert.ok(!/localStorage|sessionStorage|firebase|fetch\(/i.test(matrix));
});

test('Los ejemplos de las cuatro líneas son ilustrativos, nunca acuerdos de Loja',()=>{
 for(const label of ['Envejecimiento saludable','Uso saludable de pantallas y dispositivos',
 'Violencia de género','Desigualdades en salud en un barrio ERACIS']){
  assert.ok(matrix.toLowerCase().includes(label.toLowerCase()),'Falta ejemplo '+label);
  assert.ok(guide.toLowerCase().includes(label.toLowerCase()),'Guion sin ejemplo '+label);
 }
 assert.ok(matrix.includes('no líneas elegidas ni actuaciones aprobadas en Loja'));
 assert.ok(matrix.includes('sin localizar personas, refugios ni direcciones confidenciales'));
 assert.ok(guide.includes('NO son prioridades elegidas en Loja'));
});

test('La ficha y CSV de ejecución siguen vinculados a líneas seleccionadas',()=>{
 const ficha=read('ficha-revision-activos.html');
 for(const x of ['id="linea"','id="pertinencia"','no guarda ni envía información','estado-localiza']){
  assert.ok(ficha.includes(x),'Ficha inválida: '+x);
 }
 const csv=read('plantilla_revision_recursos_loja.csv').replace(/^\uFEFF/,'').trim();
 assert.equal(csv.split(/\r?\n/).length,1,'CSV debe seguir vacío');
 const cols=csv.split(';');
 assert.equal(cols.length,22);
 assert.equal(new Set(cols).size,22);
 for(const c of ['linea_estrategica_seleccionada','pertinencia_para_linea','id_localiza_salud'])
  assert.ok(cols.includes(c));
 assert.ok(!/localStorage|sessionStorage|firebase|fetch\(/i.test(ficha));
});

test('La dinámica histórica conserva los 26 problemas y da acceso a planificar',()=>{
 const d=read('dinamica-priorizacion.html');
 assert.equal((d.match(/class="revision"/g)||[]).length,26);
 for(let i=1;i<=26;i++)assert.ok(d.includes('id="tema-'+i+'"'));
 for(const t of ['40 participantes en 2022','Sedentarismo','Suicidio','187.850',
 '74.185','name="ruta" value="consulta"','id="lineas"','matriz-planificacion-mapeo.html',
 'Planificación del mapeo en esta segunda sesión'])
  assert.ok(d.includes(t),'Falta: '+t);
 assert.ok(!/localStorage|sessionStorage|firebase|fetch\(/i.test(d));
});

test('La guía de mapeo es visual y distingue planificación en sesión 2 y ejecución posterior',()=>{
 const g=read('guia-mapeo.html');
 for(const x of ['id="criterio"','id="metodo"','id="ficha"','id="ejemplo"',
 'id="garantias"','matriz-planificacion-mapeo.html','Seis pasos para construir un mapa útil',
 'guía visual','líneas estratégicas']){
  assert.ok(g.toLowerCase().includes(x.toLowerCase()),'Falta '+x);
 }
 assert.ok(second.includes('href="guia-mapeo.html"'));
 assert.ok(read('ficha-revision-activos.html').includes('href="guia-mapeo.html"'));
 for(const page of [hub,second,read('ficha-revision-activos.html')])
  assert.ok(!page.includes('href="GUIA_REVISION_INDIVIDUAL_ACTIVOS.md"'));
});

test('Navegación Aula, Inicio Loja, talleres, guía y Volver llega también a matriz y ficha de actores',()=>{
 const pages=['index.html','taller-impulso.html','sesion-2.html','ficha.html',
  'dinamica-priorizacion.html','ficha-revision-activos.html','guia-mapeo.html',
  'matriz-planificacion-mapeo.html'];
 for(const filename of pages){
  const html=read(filename);
  for(const t of ['loja-global-nav','⌂ Aula','Inicio Loja','Taller de impulso',
    'Priorización','Guía de activos','data-loja-volver','data-fallback',
    '../assets/loja-navegacion.css','../assets/loja-navegacion.js'])
   assert.ok(html.includes(t),filename+' sin '+t);
 }
 assert.equal((first.match(/data-loja-volver/g)||[]).length,2);
 const css=readFileSync(path.join(root,'..','assets','loja-navegacion.css'),'utf8');
 const js=readFileSync(path.join(root,'..','assets','loja-navegacion.js'),'utf8');
 assert.ok(css.includes('flex-wrap:wrap;justify-content:flex-end'));
 assert.ok(css.includes(':focus-visible'));
 assert.ok(js.includes('ref.origin===here.origin'));
 assert.doesNotThrow(()=>new Script(js));
});

test('Enlaces locales de todas las páginas de Loja resuelven a archivos existentes',()=>{
 for(const filename of ['index.html','taller-impulso.html','sesion-2.html','ficha.html',
  'dinamica-priorizacion.html','ficha-revision-activos.html','guia-mapeo.html',
  'matriz-planificacion-mapeo.html']){
  const html=read(filename);
  for(const m of html.matchAll(/href="([^"]+)"/g)){
   const url=m[1];
   if(!url||url.startsWith('#')||/^(https?:|mailto:|data:)/.test(url))continue;
   const clean=url.split('#')[0].split('?')[0];
   if(!clean||clean.startsWith('/')||clean.includes('$'))continue;
   assert.ok(existsSync(path.resolve(root,clean)),filename+' enlace roto: '+url);
  }
 }
});

test('Scripts internos de interfaces no tienen errores de sintaxis',()=>{
 for(const filename of ['index.html','taller-impulso.html','sesion-2.html',
  'dinamica-priorizacion.html','ficha-revision-activos.html','guia-mapeo.html',
  'matriz-planificacion-mapeo.html']){
  const html=read(filename);
  for(const m of html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g))
   assert.doesNotThrow(()=>new Script(m[1]),'Script inválido: '+filename);
 }
});

test('Programa histórico de 90 minutos no se confunde con la segunda sesión de 120',()=>{
 const ponente=read('GUIA_PONENTE_16-10-2026.md');
 assert.ok(ponente.includes('90 minutos'));
 assert.ok(ponente.includes('10:00–10:10'));
 assert.ok(ponente.includes('11:25–11:30'));
 assert.ok(first.includes('Programa histórico del 16/10/2026'));
 assert.ok(first.includes('Este programa no es la agenda del siguiente encuentro'));
 for(const t of ['Propuesta histórica de mapeo 01','Propuesta histórica de mapeo 02'])
  assert.ok(first.includes(t));
 assert.ok(first.includes('Solo se valorará después de elegir las líneas estratégicas'));
});

test('Continuidad refleja la rectificación actual y distingue de versiones superadas',()=>{
 const rootState=readFileSync(path.join(root,'..','ESTADO_Y_CONTINUIDAD.md'),'utf8');
 const lojaState=read('ESTADO_Y_CONTINUIDAD.md');
 for(const state of [rootState,lojaState]){
  assert.ok(state.includes('PR #36'));
  assert.ok(state.includes('120 minutos'));
  assert.ok(state.includes('PR #20'));
  assert.ok(state.includes('10 + 20 + 20 + 15 + 15 + 30 + 10')||
    state.includes('10 apertura, 20 prioridades 2022'));
 }
 assert.ok(lojaState.includes('Histórico supersedido'));
 assert.ok(rootState.includes('en esa misma reunión qué activos mapear'));
 assert.ok(lojaState.includes('qué, con quién, técnica'));
});

test('La ficha histórica de actores conserva la integración Firestore sin cambios de conducta',()=>{
 const actors=read('ficha.html');
 assert.ok(actors.includes('encuestas_loja_2026'));
 assert.ok(actors.includes('data-loja-volver'));
 assert.ok(actors.includes('loja-navegacion.js'));
 assert.ok(guide.includes('COMPÁS-NG'));
 assert.ok(guide.includes('Localiza Salud'));
});
