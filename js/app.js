import {addTechniquePages,initTechniqueLearning} from './techniques.js';
import {initTeaching,setupTeachingUI} from './teaching.js';
import {enhanceSession} from './session.js';
import {materials,localiza,mapeo,decisions} from '../content/data.js';
const root=document.querySelector('#main');
function section(id,kicker,title,content){
 const s=document.createElement('section');s.className='section';s.id=id;s.dataset.slide='1';
 s.innerHTML='<p class="eyebrow">'+kicker+'</p><h2>'+title+'</h2>'+content+'<p><a class="back" href="#panel">← Volver al panel</a></p>';
 root.append(s);
}
function grid(items){return '<div class="grid">'+items.map(x=>'<article class="card"><h3>'+x[0]+'</h3><p>'+x[1]+'</p></article>').join('')+'</div>';}
function steps(items){return '<div class="stages">'+items.map(x=>'<div class="entry"><time>'+x[0]+' min</time><div><h3>'+x[1]+'</h3><p>'+x[2]+'</p></div></div>').join('')+'</div>';}
function checklist(items){return '<ul class="criteria-list">'+items.map(x=>'<li>'+x+'</li>').join('')+'</ul>';}
section('inicio','Maracena · 13 octubre 2026','Salud comunitaria basada en activos','<p class="lead">Primera sesión presencial: Localiza Salud y planificación participativa de un mapeo comunitario.</p><p><strong>29 profesionales</strong> · Dos grupos · Dos talleres · Una rotación</p><div class="actions"><a href="#panel">Entrar en el aula →</a></div>');
section('panel','Índice navegable','Aula de Activos Comunitarios','<p class="lead">Un único soporte para la jornada y sus materiales.</p><div class="tiles"><a class="tile" href="#programa"><h3>01 Programa</h3><p>Horario y rotaciones</p></a><a class="tile" href="#localiza"><h3>02 Localiza Salud</h3><p>Búsqueda, registro y validación</p></a><a class="tile" href="#mapeo"><h3>03 Planificación</h3><p>Técnicas y trabajo en equipos</p></a><a class="tile" href="#biblioteca"><h3>04 Biblioteca</h3><p>Guías, criterios, vídeos y enlaces</p></a></div>');
section('programa','01 / Jornada','Dos talleres. Una mañana.','<p class="lead">Grupo A: 15 profesionales. Grupo B: 14. Los dos grupos pasan por ambos talleres.</p>'+steps([['09:00–09:15','Presentación conjunta','Ronda inicial, ESCA y logística'],['09:15–10:55','Rotación 1','A: Localiza Salud · B: Planificación'],['10:55–11:00','Preguntas','En cada taller'],['11:00–12:00','Desayuno y descanso','Cambio de espacios'],['12:00–13:40','Rotación 2','A: Planificación · B: Localiza Salud'],['13:40–13:50','Preguntas','En cada taller'],['13:50–14:00','Plenaria final','Síntesis y continuidad']])+'<div class="notice">ESCA 2026–2030 · Acción 2.1.2: actualización anual del mapa de activos de cada UGC en su territorio.</div>');
section('localiza','02 / Taller · 100 min','Localiza Salud: buscar, registrar y validar','<p class="lead">Búsqueda pública sin identificación; cuenta ciudadana para proponer registros; perfil autorizado para validar y decidir su posible visibilidad clínica.</p>'+steps(localiza)+'<div class="actions"><a href="https://localizasalud.sanidad.gob.es/" target="_blank" rel="noopener noreferrer">Abrir Localiza Salud ↗</a></div>');
section('maracena','Caso práctico 01','Maracena: 38 / 7','<p class="lead">Buscar Maracena y comparar los registros con el filtro «Ha sido identificado de forma participativa» desactivado y activado.</p><div class="metrics"><div><strong>38</strong><span>registros totales observados</span></div><div><strong>7</strong><span>registros con filtro participativo</span></div></div><div class="notice">Recurso registrado no equivale a activo identificado participativamente.</div>');
section('chrysallis','Caso práctico 02','Chrysallis: buscar más allá del municipio','<p class="lead">Una asociación con sede en Maracena y alcance provincial puede no aparecer en una búsqueda limitada a Albolote.</p>'+steps([['1','Albolote','Mostrar listado: dos registros, Chrysallis no aparece'],['2','Eliminar el filtro territorial','Seleccionar «Salud sexual y reproductiva» y pulsar «Localizar»'],['3','Explorar Maracena','Hacer zoom, identificar colores de categorías y abrir fichas de asociaciones']])+'<div class="notice">Es obligatorio elegir al menos un criterio antes de pulsar «Localizar». El mapa distingue organizaciones, asociaciones, espacios físicos y otros.</div>');
section('registro','Caso práctico 03','Búsqueda por modalidad y denominación',grid([['Granada · 28 resultados','Granada capital + Envejecimiento saludable + filtro participativo. Revisar Centro de Participación Activa Buenos Aires.'],['Nombres consistentes','Centro de Participación Activa, Punto Vuela, GRUSE y GRAFA: aplicar las convenciones del documento de criterios.'],['Almuñécar · Receta de Pasos','Buscar municipio Almuñécar + Actividad física + Gratuito; comparar Recursos/Activos con Actividades.'],['Registro ciudadano','El campo «Nombre de actividad» no es un buscador general por nombre de recurso.']])+'<h3>Comprobar antes de proponer un registro</h3>'+checklist(['Nombre claro','Ubicación y ámbito','Destinatarios','Temáticas y gratuidad','Descripción y beneficio','Periodicidad','Identificación participativa','Contacto y consentimiento'])+'<p>Los criterios permiten registrar actividades independientemente de su recurso organizador, pero no lo imponen. La validación corresponde a un perfil autorizado.</p>');
section('mapeo','03 / Taller · 100 min','Planificar el mapeo participativo','<p class="lead">No se pretende elaborar hoy un mapa definitivo, sino un plan viable de trabajo comunitario.</p><p><a class="worksheet-link" href="#ficha">Completar la ficha de planificación →</a></p>'+steps(mapeo)+'<div class="notice">Trabajar en tres equipos de unas cinco personas por grupo; preferentemente con territorios de referencia comunes.</div>');
section('tecnicas','Metodologías participativas','De la consulta a la construcción colectiva',grid([['Paseos comunitarios','Reconocer lugares y experiencias con personas del territorio'],['Mapas colectivos','Situar recursos y relaciones en un plano compartido'],['Entrevistas','Escuchar colectivos y agentes distintos'],['Talleres y grupos','Contrastar experiencias y percepciones'],['Fotovoz','Registrar lugares y vivencias mediante imágenes'],['Devolución comunitaria','Compartir, discutir y validar resultados']]));
section('decisiones','Actividad en equipos','Las seis decisiones del plan',grid(decisions)+'<h3>Comprobar viabilidad</h3>'+checklist(['Finalidad delimitada','Territorio acotado','Participación vecinal real','Inclusión y equidad','Técnicas adecuadas','Calendario y responsables','Registro de hallazgos','Devolución comunitaria'])+'<p><a class="worksheet-link" href="#ficha">Abrir ficha editable del equipo →</a></p><p><strong>Producto esperado:</strong> propuesta de mapeo presentada en aproximadamente cinco minutos por equipo; después se desarrollará el trabajo de campo.</p>');
section('biblioteca','04 / Materiales','Biblioteca de recursos','<p class="lead">Los vídeos son materiales opcionales de consulta autónoma, no tareas obligatorias durante la sesión.</p><div class="timeline">'+materials.map(x=>'<a class="resource" href="'+x[2]+'" target="_blank" rel="noopener noreferrer"><strong>'+x[0]+' ↗</strong><small>'+x[1]+'</small></a>').join('')+'</div><div class="notice">El documento de criterios andaluces enlaza al Google Drive facilitado. Su acceso depende de los permisos del archivo.</div>');
section('cierre','Continuidad','Del aula al territorio','<p class="lead">Cada equipo revisa su propuesta, prepara el proceso comunitario y documenta el trabajo de campo posterior. No se atribuirán datos de encuestas o actividades que no se hayan realizado.</p><div class="actions"><a href="#decisiones">Revisar seis decisiones →</a> <a href="#biblioteca">Abrir materiales →</a></div>');

/* Ficha editable: toda la información permanece en el navegador hasta descargar. */
section('ficha','Actividad práctica · Planificación','Ficha de trabajo en equipos',
 '<p class="lead">Redactad una primera propuesta de mapeo participativo. Al finalizar, descargadla en formato editable (.md). No se envían respuestas a ningún servidor.</p>'
 +'<form id="plan-form" class="worksheet">'
 +'<div class="worksheet-meta"><label>Identificación del equipo<input name="equipo" type="text" placeholder="Ej. Grupo A · Equipo 1"></label><label>Municipio o territorio<input name="territorio" type="text" placeholder="Barrio, zona básica de salud, municipio…"></label></div>'
 +decisions.map((d,i)=>'<label class="worksheet-field"><span class="worksheet-number">'+String(i+1).padStart(2,'0')+'</span><strong>'+d[0]+'</strong><small>'+d[1]+'</small><textarea name="decision'+(i+1)+'" rows="4" placeholder="Anotad los acuerdos, participantes y aspectos pendientes…"></textarea></label>').join('')
 +'<label class="worksheet-field"><strong>Observaciones y cuestiones pendientes</strong><textarea name="observaciones" rows="3" placeholder="Dificultades, recursos necesarios, alternativas…"></textarea></label>'
 +'<div class="worksheet-actions"><button type="button" id="download-plan">Descargar propuesta (.md)</button><button type="button" id="print-plan">Imprimir / Guardar en PDF</button><button type="reset">Vaciar ficha</button></div>'
 +'<p id="worksheet-status" role="status" aria-live="polite"></p><p class="worksheet-privacy">Las respuestas no se guardan en la web ni se transmiten a GitHub. Descargad la propuesta antes de cerrar la página.</p></form>');
document.querySelector('#download-plan').addEventListener('click',()=>{
 const form=document.querySelector('#plan-form'),data=new FormData(form);
 const clean=x=>String(data.get(x)||'').trim();
 const lines=['# Propuesta de mapeo comunitario','','**Equipo:** '+(clean('equipo')||'Sin indicar'),'**Territorio:** '+(clean('territorio')||'Sin indicar'),''];
 decisions.forEach((d,i)=>lines.push('## '+(i+1)+'. '+d[0]+' — '+d[1],'',clean('decision'+(i+1))||'(Pendiente de completar)',''));
 lines.push('## Observaciones y cuestiones pendientes','',clean('observaciones')||'(Sin observaciones)','');
 const blob=new Blob([lines.join('\n')],{type:'text/markdown;charset=utf-8'});
 const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='propuesta-mapeo-comunitario.md';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 document.querySelector('#worksheet-status').textContent='Propuesta descargada. Podéis seguir editando esta ficha.';
});
document.querySelector('#print-plan').addEventListener('click',()=>window.print());

enhanceSession();
addTechniquePages(section);
initTechniqueLearning();
setupTeachingUI();
const pages=[...document.querySelectorAll('[data-slide]')];
const controls=document.querySelector('#controls'),present=document.querySelector('#present');
let current=0,mode=false;
let teaching=null;
function indexOfPage(id){return pages.findIndex(p=>p.id===id)}
function render(i,{updateUrl=false}={}){
 current=Math.max(0,Math.min(pages.length-1,i));
 pages.forEach((p,j)=>{p.classList.toggle('current',j===current);p.hidden=j!==current;p.setAttribute('aria-hidden',String(j!==current))});
 document.querySelector('#count').textContent=(current+1)+' / '+pages.length;
 teaching?.update(pages[current].id);
 document.title=(pages[current].querySelector('h2')?.textContent||'Aula de Activos Comunitarios')+' · Aula de Activos Comunitarios';
 if(updateUrl)history.pushState({page:pages[current].id},'', '#'+pages[current].id);
 window.scrollTo({top:0,left:0,behavior:'instant'});
}
function route(){let id='inicio';try{id=decodeURIComponent(location.hash.slice(1))||'inicio'}catch(e){id='inicio'}const i=indexOfPage(id);render(i>=0?i:indexOfPage('inicio'))}
const visitStack=[];
function go(i){if(pages[current] && pages[current].id!==pages[Math.max(0,Math.min(pages.length-1,i))].id)visitStack.push(pages[current].id);const next=Math.max(0,Math.min(pages.length-1,i));render(next,{updateUrl:true})}
function toggle(on){
 mode=on;document.body.classList.toggle('presenting',on);controls.hidden=!on;
 document.querySelector('.teacher-tools').hidden=!on;
 present.setAttribute('aria-pressed',String(on));present.textContent=on?'▣ Consultar':'◫ Presentar';
}
present.onclick=()=>toggle(!mode);
document.querySelector('#exit').onclick=()=>toggle(false);
document.querySelector('#prev').onclick=()=>go(current-1);
document.querySelector('#next').onclick=()=>go(current+1);
document.addEventListener('click',e=>{
 const a=e.target.closest('a[href^="#"]');
 if(!a)return;
 const id=a.getAttribute('href').slice(1),i=indexOfPage(id);
 if(i<0)return;
 e.preventDefault();go(i);
});
document.querySelector('#back-page').addEventListener('click',()=>{const prior=visitStack.pop();if(prior&&indexOfPage(prior)>=0){render(indexOfPage(prior),{updateUrl:true});return;}if(current!==indexOfPage('inicio'))go(indexOfPage('panel'));else go(indexOfPage('inicio'));});
window.addEventListener('popstate',route);
window.addEventListener('hashchange',route);
window.addEventListener('keydown',e=>{
 if(!mode||/input|textarea|select/i.test(document.activeElement.tagName))return;
 if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();go(current+1)}
 else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(current-1)}
 else if(e.key==='Escape')toggle(false);
});
route();
teaching=initTeaching({navigate:id=>{const i=indexOfPage(id);if(i>=0)go(i)},currentId:()=>pages[current].id,setMode:toggle});
