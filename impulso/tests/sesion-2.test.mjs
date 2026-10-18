import {readFileSync,existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {strict as assert} from 'node:assert';
import {test} from 'node:test';
import {Script} from 'node:vm';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=(name)=>readFileSync(path.join(root,name),'utf8');
const hub=read('index.html'),first=read('taller-impulso.html');
const aulaRoot=readFileSync(path.join(root,'..','index.html'),'utf8');
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
  assert.ok(aulaRoot.includes('Loja · Impulso y priorización'));
  assert.ok(aulaRoot.includes('Mapeo posterior'));
  assert.ok(aulaRoot.includes('href="./impulso/"'));
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


test('Navegación global del Aula, Loja, talleres, guía y volver en TODAS las pantallas',()=>{
 const pages=[
  ['index.html','loja'],
  ['taller-impulso.html','impulso'],
  ['sesion-2.html','priorizacion'],
  ['dinamica-priorizacion.html','priorizacion'],
  ['ficha-revision-activos.html','guia'],
  ['guia-mapeo.html','guia']
 ];
 const headerNames=['⌂ Aula','Inicio Loja','Taller de impulso','Priorización','Guía de activos'];
 for(const [file] of pages){
  const text=read(file);
  for(const label of headerNames)assert.ok(text.includes(label),file+' sin '+label);
  assert.ok(text.includes('loja-global-nav'),file+' sin barra global');
  assert.ok(text.includes('href="../index.html"'),file+' sin retorno al Aula');
  assert.ok(text.includes('href="index.html"'),file+' sin inicio de Loja');
  assert.ok(text.includes('href="taller-impulso.html"'),file+' sin primer taller');
  assert.ok(text.includes('href="sesion-2.html"'),file+' sin priorización');
  assert.ok(text.includes('href="guia-mapeo.html"'),file+' sin guía');
  assert.ok(text.includes('data-loja-volver'),file+' sin botón Volver');
  assert.ok(text.includes('data-fallback='),file+' sin destino seguro');
  assert.ok(text.includes('../assets/loja-navegacion.css'),file+' sin estilos compartidos');
  assert.ok(text.includes('../assets/loja-navegacion.js'),file+' sin funcionamiento Volver');
 }
 assert.equal((first.match(/data-loja-volver/g)||[]).length,2,'Primera sesión: navegación tanto en portada como en el taller');
});

test('La guía docente HTML sustituye enlaces a Markdown en la navegación visible',()=>{
 const html=read('guia-mapeo.html'), ficha=read('ficha-revision-activos.html');
 assert.ok(html.includes('Mapeo de activos vinculado a las prioridades'));
 for(const part of ['id="criterio"','id="metodo"','id="ficha"','id="ejemplo"','id="garantias"'])
  assert.ok(html.includes(part),'Sección visual inexistente: '+part);
 assert.ok(html.includes('índice')||html.includes('Índice')||html.includes('En esta guía'));
 assert.ok(html.includes('<details>'));
 assert.ok(html.includes('Seis pasos para construir un mapa útil'));
 assert.ok(html.includes('líneas estratégicas'));
 assert.ok(html.includes('CSV'));
 assert.ok(html.includes('window.print()'));
 assert.ok(second.includes('href="guia-mapeo.html"'));
 assert.ok(ficha.includes('href="guia-mapeo.html"'));
 for(const page of [second,ficha,hub])assert.ok(!page.includes('href="GUIA_REVISION_INDIVIDUAL_ACTIVOS.md"'),'Enlace visible a Markdown sin maquetar');
 assert.ok(existsSync(path.join(root,'GUIA_REVISION_INDIVIDUAL_ACTIVOS.md')),'El original debe mantenerse como fuente editable');
});

test('Navegación global en móvil no oculta enlaces en un carrusel horizontal',()=>{
 const css=readFileSync(path.join(root,'..','assets','loja-navegacion.css'),'utf8');
 const js=readFileSync(path.join(root,'..','assets','loja-navegacion.js'),'utf8');
 assert.ok(css.includes('@media(max-width:940px)'));
 assert.ok(css.includes('flex-wrap:wrap;justify-content:flex-end'));
 assert.ok(css.includes(':focus-visible'));
 assert.ok(css.includes('@media print'));
 assert.ok(js.includes('data-loja-volver'));
 assert.ok(js.includes('data-fallback'));
 assert.ok(js.includes('ref.origin===here.origin'));
 assert.doesNotThrow(()=>new Script(js));
});

test('Segunda sesión permite navegar por fases y mantiene guías de mapeo en etapa posterior',()=>{
 const sections=['antecedentes','decision','lineas','agenda','acuerdos'];
 for(const id of sections)assert.ok(second.includes('href="#'+id+'"')&&second.includes('id="'+id+'"'),'Falta apartado '+id);
 assert.ok(second.includes('aria-label="Apartados del taller de priorización"'));
 const guideLink=second.indexOf('href="guia-mapeo.html"');
 const deferred=second.indexOf('id="mapeo"');
 assert.ok(guideLink>=0&&deferred>=0);
});


test('Agenda sincronizada: siete bloques y 120 minutos, con rutas de decisión excluyentes',()=>{
 const expected=[
  ['apertura',10,'Apertura y objetivo'],
  ['antecedentes',20,'Prioridades de 2022'],
  ['contraste',20,'Contraste comunitario'],
  ['demostracion',15,'Herramientas disponibles'],
  ['metodo',20,'Decisión metodológica'],
  ['ruta-condicionada',25,'Trabajo condicionado al acuerdo'],
  ['cierre',10,'Acta y continuidad']
 ];
 const actual=[...second.matchAll(/data-agenda-key="([^"]+)" data-minutes="(\d+)"/g)]
  .map(m=>[m[1],Number(m[2])]);
 assert.deepEqual(actual,expected.map(x=>x.slice(0,2)));
 assert.equal(actual.reduce((total,a)=>total+a[1],0),120);
 for(const [id,minutes,title] of expected){
  const csv='| '+String.fromCharCode(96)+id+String.fromCharCode(96)+' | '+minutes+' min |';
  assert.ok(guide.includes(csv),'Falta bloque sincronizado en el guion: '+id);
  assert.ok(second.includes(title),'Falta en la web: '+title);
  assert.ok(guide.includes(title),'Falta en el guion: '+title);
 }
 assert.ok(second.includes('Ruta A · Sin nueva consulta'));
 assert.ok(second.includes('Ruta B · Con consulta o decisión aplazada'));
 assert.ok(second.includes('No cerrar todavía las líneas estratégicas'));
 assert.ok(guide.includes('alternativas'));
 assert.ok(guide.includes('NO una sesión de mapeo'));
 assert.ok(guide.includes('NO seleccionar aún líneas'));
 assert.ok(second.includes('no incluye ejercicios de mapeo de activos'));
 assert.ok(!second.includes('Distribuir revisión de todos los registros'));
});

test('Programa del primer taller: histórico y separado de agenda de priorización',()=>{
 assert.ok(first.includes('10:00–10:10'));
 assert.ok(first.includes('11:25–11:30'));
 assert.ok(first.includes('Programa histórico del 16/10/2026'));
 assert.ok(first.includes('Este programa no es la agenda del siguiente encuentro'));
 assert.ok(first.includes('href="sesion-2.html"'));
 for(const label of ['Propuesta histórica de mapeo 01','Propuesta histórica de mapeo 02'])
  assert.ok(first.includes(label));
 assert.ok(first.includes('Solo se valorará después de elegir las líneas estratégicas'));
 const speaker=read('GUIA_PONENTE_16-10-2026.md');
 assert.ok(speaker.includes('90 minutos'));
 assert.ok(speaker.includes('10:00–10:10'));
 assert.ok(speaker.includes('11:25–11:30'));
});

test('La ficha histórica de actores mantiene navegación y su integración',()=>{
 const ficha=read('ficha.html');
 for(const token of ['loja-global-nav','href="../index.html"','href="index.html"',
   'data-loja-volver','href="taller-impulso.html"','loja-navegacion.js','encuestas_loja_2026'])
  assert.ok(ficha.includes(token),'Falta '+token);
});

test('La documentación distingue situación vigente, publicaciones y alternativas futuras',()=>{
 const rootState=readFileSync(path.join(root,'..','ESTADO_Y_CONTINUIDAD.md'),'utf8');
 const lojaState=read('ESTADO_Y_CONTINUIDAD.md');
 for(const t of [rootState,lojaState]){
  assert.ok(t.includes('PR #36'));
  assert.ok(t.includes('NO DESPLEGADA')||t.includes('NO PUBLICADO'));
  assert.ok(t.includes('120 minutos'));
  assert.ok(t.includes('PR #20'));
 }
 assert.ok(lojaState.includes('Histórico supersedido'));
 assert.ok(rootState.includes('10 + 20 + 20 + 15 + 20 + 25 + 10'));
 assert.ok(rootState.includes('guía visual'));
});

test('Enlaces internos resuelven a archivos existentes en todas las pantallas de Loja',()=>{
 for(const fname of ['index.html','taller-impulso.html','sesion-2.html','ficha.html',
  'dinamica-priorizacion.html','ficha-revision-activos.html','guia-mapeo.html']){
  const page=read(fname);
  for(const m of page.matchAll(/href="([^"]+)"/g)){
   const href=m[1];
   if(!href||href.startsWith('#')||/^https?:|^mailto:|^data:/.test(href))continue;
   const clean=href.split('#')[0].split('?')[0];
   if(!clean || clean.startsWith('/') || clean.includes('$'))continue;
   assert.ok(existsSync(path.resolve(root,clean)),fname+' enlaza a ruta inexistente: '+href);
  }
 }
});
