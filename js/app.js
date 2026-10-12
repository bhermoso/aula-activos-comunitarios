import {initMethodSelection,markMethodVisited,redirectForPlan,canOpenPlan} from './selection.js?v=20261012-unified3';
import {addNarrativePaths} from './narrative.js?v=20261012-unified3';
import {attachTechniqueVideos} from './videos.js?v=20261012-unified3';
import {addSearchPages} from './search-learning.js?v=20261012-unified3';
import {addTechniquePages,initTechniqueLearning} from './techniques.js?v=20261012-unified3';
import {initTeaching,setupTeachingUI} from './teaching.js?v=20261012-unified3';
import {enhanceSession} from './session.js?v=20261012-unified3';
import {materials,localizaSequence,mapeo,decisions} from '../content/data.js?v=20261012-unified3';
const root=document.querySelector('#main');
function section(id,kicker,title,content){
 const s=document.createElement('section');s.className='section';s.id=id;s.dataset.slide='1';
 s.innerHTML='<p class="eyebrow">'+kicker+'</p><h2>'+title+'</h2>'+content+'<p><a class="back" href="#panel">← Volver al panel</a></p>';
 root.append(s);
}
function grid(items){return '<div class="grid">'+items.map(x=>'<article class="card"><h3>'+x[0]+'</h3><p>'+x[1]+'</p></article>').join('')+'</div>';}
function steps(items){return '<div class="stages">'+items.map(x=>'<div class="entry"><time>'+x[0]+' min</time><div><h3>'+x[1]+'</h3><p>'+x[2]+'</p></div></div>').join('')+'</div>';}
function checklist(items){return '<div class="reading-checklist" aria-label="Criterios informativos, no interactivos"><p><strong>Guía de revisión · solo lectura</strong><small>Estos puntos son criterios para discutir y contrastar; no son casillas que haya que marcar en la web.</small></p><ul class="criteria-list">'+items.map(x=>'<li>'+x+'</li>').join('')+'</ul></div>';}
section('inicio','Maracena · 13 octubre 2026','Salud comunitaria basada en activos','<p class="lead">Primera sesión presencial: Localiza Salud y planificación participativa de un mapeo comunitario.</p><p><strong>29 profesionales</strong> · Dos grupos · Dos talleres · Una rotación</p><div class="actions"><a href="#panel">Entrar en el aula →</a></div>');
section('panel','Índice navegable','Aula de Activos Comunitarios','<p class="lead">Un único soporte para la jornada y sus materiales.</p><div class="tiles"><a class="tile" href="#programa"><h3>01 Programa</h3><p>Horario y rotaciones</p></a><a class="tile" href="#localiza"><h3>02 Localiza Salud</h3><p>Búsqueda, registro y validación</p></a><a class="tile" href="#mapeo"><h3>03 Planificación</h3><p>Técnicas y trabajo en equipos</p></a><a class="tile" href="#biblioteca"><h3>04 Fuentes y documentos</h3><p>Guías, criterios, vídeos y enlaces</p></a></div>');
section('programa','01 / Jornada','Dos talleres. Una mañana.','<p class="lead">Grupo A: 15 profesionales. Grupo B: 14. Los dos grupos pasan por ambos talleres.</p>'+steps([['09:00–09:15','Presentación conjunta','Ronda inicial, ESCA y logística'],['09:15–10:55','Rotación 1','A: Localiza Salud · B: Planificación'],['10:55–11:00','Preguntas','En cada taller'],['11:00–12:00','Desayuno y descanso','Cambio de espacios'],['12:00–13:40','Rotación 2','A: Planificación · B: Localiza Salud'],['13:40–13:50','Preguntas','En cada taller'],['13:50–14:00','Plenaria final','Síntesis y continuidad']])+'<div class="notice">ESCA 2026–2030 · Acción 2.1.2: actualización anual del mapa de activos de cada UGC en su territorio.</div>');
section('localiza','02 / Taller · 100 min','Localiza Salud: buscar, registrar y validar','<p class="lead">Búsqueda pública sin identificación; cuenta ciudadana para proponer registros; perfil autorizado para validar y decidir su posible visibilidad clínica.</p><div class="common-session-times"><h3>Apertura y cierre de la jornada</h3><div class="common-session-grid"><article><time>09:00–09:15</time><strong>Ronda de presentación</strong><p>Presentación de participantes, equipo docente y objetivos de la jornada. Introducción al trabajo con Localiza Salud.</p></article><article><time>13:50–14:00</time><strong>Conclusiones de los talleres</strong><p>Aprendizajes, dudas y próximos pasos del trabajo comunitario.</p></article></div><p class="common-session-note">Apertura y cierre conjuntos. Cada grupo realiza este taller durante su rotación de 100 minutos.</p></div>'+ '<details class="teacher-runbook"><summary>Guion docente minutado · 100 minutos (desplegar)</summary>' +steps(localizaSequence.map(({time,title,detail})=>[time,title,detail]))+'</details><div class="actions"><a href="https://localizasalud.sanidad.gob.es/" target="_blank" rel="noopener noreferrer">Abrir Localiza Salud ↗</a></div>');
section('cierre-localiza','Localiza Salud · cierre del taller','Síntesis · tres aprendizajes',
 '<p class="lead">Últimos cinco minutos del taller: comprobar qué ha cambiado en nuestra forma de interpretar una búsqueda.</p>'
 +'<div class="search-callout"><strong>01 · Los resultados dependen de los filtros</strong><p>Territorio, temática y modalidad condicionan qué registros encontramos. Cero resultados no significa que no exista actividad comunitaria.</p></div>'
 +'<div class="search-callout"><strong>02 · Recurso registrado y activo reconocido no son lo mismo</strong><p>Examinar la identificación participativa y la validación en las fichas, como en Maracena y Chrysallis.</p></div>'
 +'<div class="search-callout"><strong>03 · Buscar también en Actividades</strong><p>«Receta de Pasos» aparece directamente al buscar Actividades en Almuñécar, mientras que en Recursos/Activos solo se descubre al abrir la ficha del Centro de Salud.</p></div>'
 +'<p>Para terminar: una propuesta ciudadana no equivale a un registro validado. Los criterios y el manual oficial quedan disponibles para consultar después del taller.</p>'
 +'<div class="story-links"><a href="#registro">Revisar registro y validación →</a><a href="#biblioteca">Consultar documentos y criterios →</a><a href="#localiza">Volver al itinerario del taller →</a></div>');
section('maracena','Caso práctico 01','Maracena: 38 / 7','<p class="lead">Buscar Maracena y comparar los registros con el filtro «Ha sido identificado de forma participativa» desactivado y activado.</p><div class="metrics"><div><strong>38</strong><span>registros totales observados</span></div><div><strong>7</strong><span>registros con filtro participativo</span></div></div><div class="notice">Recurso registrado no equivale a activo identificado participativamente.</div>');
section('chrysallis','Caso práctico 02','El territorio no es una frontera','<p class="lead">Partimos de Albolote: la búsqueda municipal devuelve dos recursos, pero ninguno es Chrysallis. Como no podemos buscar por el ámbito del Distrito Sanitario Granada-Metropolitano, ampliamos la búsqueda al siguiente nivel de agregación disponible: la provincia de Granada.</p>'+steps([['1','Buscar en Albolote','Seleccionar Albolote como municipio. Encontramos dos recursos, ninguno de ellos Chrysallis.'],['2','Ampliar a provincia','Seleccionar Granada en el campo «Provincia» y «Salud sexual y reproductiva» en «Temática». El mapa muestra automáticamente los recursos de esa temática en toda la provincia: no es necesario pulsar «Mostrar listado» ni «Localizar».'],['3','Acercarnos a Albolote','Hacer zoom hacia Albolote y examinar los recursos situados en su entorno. Buscar marcadores amarillos, correspondientes a asociaciones, porque sabemos que Chrysallis es una asociación.'],['4','Identificar y comprobar Chrysallis','Abrir el recurso Chrysallis y comprobar en su ficha que está validado como activo.']])+'<div class="notice">Aprendizaje clave: cuando el ámbito administrativo disponible no coincide con nuestro territorio de interés, podemos buscar a escala provincial y después explorar visualmente el entorno de Albolote. No hace falta ir primero a Maracena ni pulsar botones adicionales para mostrar el mapa.</div><div class="actions"><a href="https://localizasalud.sanidad.gob.es/maparecursos/main/ResourcesSearchDetail.action?id=26014" target="_blank" rel="noopener noreferrer">Consultar ficha de Chrysallis ↗</a></div>');
section('registro','Localiza Salud · ejercicios prácticos','Cuatro cuestiones distintas para leer y registrar activos',
 '<p class="lead">No confundamos los resultados del buscador, el nombre de cada registro, la relación entre un recurso y sus actividades y el procedimiento para proponer un alta. Cada ejercicio responde a una pregunta distinta.</p>'
 +'<div class="search-compare"><article><span>01 · FILTRAR E INTERPRETAR</span><h3>Granada: registros identificados participativamente</h3><p><strong>Búsqueda observada:</strong> Recursos/Activos · Granada capital · temática de envejecimiento · «Ha sido identificado de forma participativa».</p><p><strong>28 resultados</strong> en la consulta documentada. Abre, entre otros, la ficha del <strong>Centro de Participación Activa Buenos Aires</strong> y comprueba qué indica sobre identificación participativa y validación.</p><p><strong>Aprendizaje:</strong> un recuento es el resultado de unos filtros concretos, no una cifra universal ni un inventario completo del municipio. Comprueba el nombre exacto de la temática elegida en la interfaz.</p></article><article><span>02 · IDENTIFICAR SIN CONFUNDIR</span><h3>Denominación y tipo de registro</h3><p><strong>CPA (Centro de Participación Activa)</strong> y <strong>Punto Vuela</strong> designan recursos o dispositivos; <strong>GRUSE</strong> y <strong>GRAFA</strong> requieren comprobar la denominación y descripción precisas en sus fichas.</p><p><strong>Aprendizaje:</strong> nombrar de forma homogénea facilita reconocer un recurso y evitar duplicidades; no significa que todos los nombres correspondan al mismo tipo de elemento. Utiliza los criterios de denominación como referencia, no como filtro de búsqueda.</p><p><a href="#denominaciones">Consultar las reglas de denominación →</a></p></article></div>'
 +'<div class="search-callout"><strong>03 · Almuñécar: por qué hay que consultar también Actividades</strong><p><strong>Al buscar por Actividades en Almuñécar</strong>, «Receta de Pasos» aparece directamente entre los resultados. <strong>Al buscar por Recursos/Activos</strong>, encontramos el <strong>Centro de Salud de Almuñécar</strong>; <strong>solo al abrir la ficha del centro</strong> vemos también «Receta de Pasos».</p><p>Si nos limitamos al listado de recursos y no abrimos todas sus fichas, podemos pasar por alto actividades. Aunque existan muchos más registros de Recursos/Activos, la búsqueda por Actividades aporta una vía directa para descubrirlas.</p><p><strong>Ejercicio:</strong> 1. Buscar la actividad y reconocerla en resultados. 2. Buscar el centro como recurso. 3. Abrir la ficha del centro y localizar la actividad. 4. Explicar qué información es visible directamente en cada modalidad.</p><p><a href="#modalidades">Ver la comparación de modalidades →</a></p></div>'
 +'<div class="search-callout"><strong>04 · Registro ciudadano: proponer no es validar</strong><p>Después de buscar y comprobar que no se duplica una ficha, se puede utilizar el procedimiento oficial para proponer un recurso o una actividad. Preparar una descripción útil, territorio, población destinataria, temática, acceso, contactos y demás datos exigidos por el formulario. <strong>El envío ciudadano no equivale a la validación</strong>, que corresponde a perfiles autorizados.</p><p>La peculiar ubicación del campo «Nombre de actividad» pertenece a la <a href="#modalidades">explicación del buscador</a>, no a las instrucciones para dar de alta registros.</p></div>'
 +'<h3>Antes de proponer un nuevo registro</h3>'+checklist(['Comprobar que no existe ya','Nombre claro y tipo de registro','Ubicación y ámbito','Población destinataria','Temática y condiciones de acceso','Descripción de la actividad o recurso','Periodicidad cuando proceda','Identificación participativa documentada','Contacto y consentimiento'])
 +'<p><strong>Esta lista es una guía de revisión.</strong> No guarda ni envía información. El alta se realiza en Localiza Salud y queda sujeta al procedimiento de validación correspondiente.</p>'
 +'<div class="story-links"><a href="#entrada-localiza">Entender el menú →</a><a href="#criterios-busqueda">Combinar filtros →</a><a href="https://localizasalud.sanidad.gob.es/maparecursos/manual/Como_subir_recursos_telematicamenteV2.pdf" target="_blank" rel="noopener noreferrer">Manual oficial de registro ↗</a></div>');

section('mapeo','03 / Taller · 100 min','Planificar el mapeo participativo','<p class="lead">No se pretende elaborar hoy un mapa definitivo, sino un plan viable de trabajo comunitario.</p><div class="common-session-times"><h3>Apertura y cierre de la jornada</h3><div class="common-session-grid"><article><time>09:00–09:15</time><strong>Ronda de presentación</strong><p>Presentación de participantes, equipo docente y objetivos de la jornada. Introducción al mapeo participativo.</p></article><article><time>13:50–14:00</time><strong>Conclusiones de los talleres</strong><p>Aprendizajes, dudas y próximos pasos del trabajo comunitario.</p></article></div><p class="common-session-note">Apertura y cierre conjuntos. Cada grupo realiza este taller durante su rotación de 100 minutos.</p></div><p><a class="worksheet-link" href="#tecnicas">Consultar técnicas antes de completar la ficha de planificación →</a></p>'+steps(mapeo)+'<div class="notice">Trabajar en tres equipos de unas cinco personas por grupo; preferentemente con territorios de referencia comunes.</div>');
const techniqueRoutes=[
 ['tecnica-paseos','Paseos comunitarios','Reconocer lugares y experiencias con personas del territorio','Recorridos y observación'],
 ['tecnica-mapa','Mapas colectivos','Situar recursos y relaciones en un plano compartido','Localización y relatos'],
 ['tecnica-entrevistas','Entrevistas','Escuchar experiencias, vínculos y significados','Voces y perspectivas'],
 ['tecnica-talleres','Talleres y grupos','Contrastar experiencias, reconocer acuerdos y diferencias','Interpretación colectiva'],
 ['tecnica-fotovoz','Fotovoz','Comprender experiencias a través de imágenes y relatos','Narrativas visuales'],
 ['decisiones','Devolución comunitaria','Contrastar los hallazgos con la comunidad y acordar su devolución','Cierre del proceso']
];
section('tecnicas','Metodologías participativas','De la consulta a la construcción colectiva',
 '<p class="lead">Cada técnica aporta una perspectiva distinta del territorio. Selecciona una caja para estudiar cómo funciona, qué información obtiene y cómo se conecta con el plan del equipo.</p>'
 +'<p class="selection-summary"><span data-selection-count aria-live="polite">0 técnicas seleccionadas</span> · Abre una técnica, conoce su aplicación y usa «Incorporar a la planificación del mapeo». Después continúa a la ficha única del equipo.</p>'
 +'<div class="method-network">'+techniqueRoutes.map(([id,title,description,role],i)=>'<article class="method-node"><span class="method-node-number">'+String(i+1).padStart(2,'0')+' · '+role+'</span><h3>'+title+'</h3><p>'+description+'</p><a class="method-open" href="#'+id+'">Consultar '+title+' →</a>'+(id.startsWith('tecnica-')?'<button type="button" data-method-select="'+id+'">Incorporar a la planificación del mapeo</button><small data-method-status="'+id+'">Pendiente de consultar</small>':'<a href="#decisiones">Preparar la devolución →</a>')+'</article>').join('')+'</div>'
 +'<div class="selection-next"><a href="#ficha" data-plan-continue hidden>Continuar a la ficha única con las técnicas incorporadas →</a><a href="#tecnicas-catalogo">Revisar las seis fichas de técnicas →</a></div>'
 +'<div class="method-bridge"><p><strong>La selección no es excluyente.</strong> Un paseo puede identificar lugares; las entrevistas profundizan en sus significados; un mapa colectivo sitúa los hallazgos; los talleres los contrastan, y la devolución permite revisar lo aprendido.</p><div class="story-links"><a href="#tecnicas-catalogo">Comparar las seis técnicas →</a><a href="#tecnicas-catalogo">Elegir técnicas antes de planificar →</a><a href="#biblioteca">Consultar fuentes metodológicas →</a></div></div>');
section('decisiones','Actividad en equipos','Las seis decisiones del plan',grid(decisions)+'<h3>Guía para revisar la viabilidad</h3>'+checklist(['Finalidad delimitada','Territorio acotado','Participación vecinal real','Equidad y perspectiva de género','Técnicas adecuadas','Calendario y responsables','Registro de hallazgos','Devolución comunitaria'])+'<p><a class="worksheet-link" href="#ficha">Abrir ficha editable del equipo →</a></p><p><strong>Producto esperado:</strong> propuesta de mapeo presentada en aproximadamente cinco minutos por equipo; después se desarrollará el trabajo de campo.</p>');
section('biblioteca','04 / Documentación','Fuentes y documentos de referencia','<p class="lead">Los vídeos son materiales opcionales de consulta autónoma, no tareas obligatorias durante la sesión.</p><div class="timeline">'+materials.map(x=>'<a class="resource" href="'+x[2]+'" target="_blank" rel="noopener noreferrer"><strong>'+x[0]+' ↗</strong><small>'+x[1]+'</small></a>').join('')+'</div><div class="notice">El documento de criterios andaluces enlaza al Google Drive facilitado. Su acceso depende de los permisos del archivo.</div>');
section('cierre','Continuidad','Del aula al territorio','<p class="lead">Cada equipo revisa su propuesta, prepara el proceso comunitario y documenta el trabajo de campo posterior. No se atribuirán datos de encuestas o actividades que no se hayan realizado.</p><div class="actions"><a href="#decisiones">Revisar seis decisiones →</a> <a href="#biblioteca">Abrir materiales →</a></div>');

/* Ficha editable: toda la información permanece en el navegador hasta descargar. */
section('ficha','Actividad práctica · Planificación','Ficha de trabajo en equipos',
 '<p id="plan-prerequisite" class="notice">Antes de completar esta ficha, consulta y selecciona al menos una técnica de mapeo.</p><p class="lead">Redactad una primera propuesta de mapeo participativo. Al finalizar, descargadla en formato de texto editable (.txt) o guardadla en PDF. No se envían respuestas a ningún servidor.</p>'
 +'<form id="plan-form" class="worksheet">'
 +'<div class="worksheet-meta"><label>Identificación del equipo<input name="equipo" type="text" placeholder="Ej. Grupo A · Equipo 1"></label><label>Municipio o territorio<input name="territorio" type="text" placeholder="Barrio, zona básica de salud, municipio…"></label></div>'
 +decisions.map((d,i)=>'<label class="worksheet-field"><span class="worksheet-number">'+String(i+1).padStart(2,'0')+'</span><strong>'+d[0]+'</strong><small>'+d[1]+'</small><textarea name="decision'+(i+1)+'" rows="4" placeholder="Anotad los acuerdos, participantes y aspectos pendientes…"></textarea></label>').join('')
 +'<fieldset class="methods-selection"><legend>Técnicas que combinará el equipo</legend><p>Seleccionad las técnicas previstas y describid la función de cada una en el apartado 4. La combinación debe responder a la finalidad del mapeo.</p><div class="method-options">'+[['mapa','Mapeo colectivo'],['paseos','Paseos comunitarios'],['fotovoz','Fotovoz'],['entrevistas','Entrevistas abiertas'],['talleres','Talleres participativos'],['fichas','Registro mediante fichas']].map(([v,label])=>'<label><input type="checkbox" name="metodos" value="'+label+'"> '+label+'</label>').join('')+'</div><label>Función y secuencia de las técnicas elegidas<textarea name="secuencia_metodos" rows="4" placeholder="Qué aportará cada técnica, cómo se combinarán y en qué orden…"></textarea></label></fieldset>'
+'<label class="worksheet-field"><strong>Observaciones y cuestiones pendientes</strong><textarea name="observaciones" rows="3" placeholder="Dificultades, recursos necesarios, alternativas…"></textarea></label>'
 +'<div class="worksheet-actions"><button type="button" id="download-plan">Descargar propuesta (.txt)</button><button type="button" id="print-plan">Imprimir / Guardar en PDF</button><button type="reset">Vaciar ficha</button></div>'
 +'<p id="worksheet-status" role="status" aria-live="polite"></p><p class="worksheet-privacy">Las respuestas no se guardan en la web ni se transmiten a GitHub. Descargad la propuesta antes de cerrar la página.</p></form>');
document.querySelector('#download-plan').addEventListener('click',()=>{
 const form=document.querySelector('#plan-form'),data=new FormData(form);
 const clean=x=>String(data.get(x)||'').trim();
 const lines=['# Propuesta de mapeo comunitario','','**Equipo:** '+(clean('equipo')||'Sin indicar'),'**Territorio:** '+(clean('territorio')||'Sin indicar'),''];
 decisions.forEach((d,i)=>lines.push('## '+(i+1)+'. '+d[0]+' — '+d[1],'',clean('decision'+(i+1))||'(Pendiente de completar)',''));
 lines.push('## Técnicas seleccionadas','',data.getAll('metodos').join(', ')||'(Pendiente de seleccionar)','', '## Función y secuencia', '',clean('secuencia_metodos')||'(Pendiente de completar)','');
 lines.push('## Observaciones y cuestiones pendientes','',clean('observaciones')||'(Sin observaciones)','');
 const blob=new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'});
 const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='propuesta-mapeo-comunitario.txt';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 document.querySelector('#worksheet-status').textContent='Propuesta descargada. Podéis seguir editando esta ficha.';
});
document.querySelector('#print-plan').addEventListener('click',()=>window.print());

enhanceSession();
addTechniquePages(section);
addSearchPages(section);
initTechniqueLearning();
attachTechniqueVideos();
initMethodSelection();
addNarrativePaths();
setupTeachingUI();
const pages=[...document.querySelectorAll('[data-slide]')];
const controls=document.querySelector('#controls'),present=document.querySelector('#present');
let current=0,mode=false;
let teaching=null;
const visitStack=[];
function indexOfPage(id){return pages.findIndex(p=>p.id===id)}
function render(i,{updateUrl=false}={}){
 current=Math.max(0,Math.min(pages.length-1,i));
 markMethodVisited(pages[current].id);
 pages.forEach((p,j)=>{p.classList.toggle('current',j===current);p.hidden=j!==current;p.setAttribute('aria-hidden',String(j!==current))});
 document.querySelector('#count').textContent=(current+1)+' / '+pages.length;
 const back=document.querySelector('#back-page');back.disabled=visitStack.length===0;back.setAttribute('aria-label',visitStack.length?'Volver a la vista anterior':'Sin vista anterior');
 teaching?.update(pages[current].id);
 document.title=(pages[current].querySelector('h2')?.textContent||'Aula de Activos Comunitarios')+' · Aula de Activos Comunitarios';
 if(updateUrl)history.pushState({page:pages[current].id},'', '#'+pages[current].id);
 window.scrollTo({top:0,left:0,behavior:'instant'});
}
function route({external=false}={}){
 let id='inicio';
 try{id=decodeURIComponent(location.hash.slice(1))||'inicio'}catch(e){id='inicio'}
 const target=indexOfPage(id);let next=target>=0?target:indexOfPage('inicio');
 if(pages[next].id==='ficha'&&!canOpenPlan())next=indexOfPage(redirectForPlan());
 if(external&&next!==current){
  const prior=visitStack[visitStack.length-1];
  if(prior===pages[next].id)visitStack.pop();
  else if(pages[current])visitStack.push(pages[current].id);
 }
 render(next);
}
function go(i){
 let next=Math.max(0,Math.min(pages.length-1,i));
 if(pages[next].id==='ficha'&&!canOpenPlan())next=indexOfPage(redirectForPlan());
 if(next===current)return;
 visitStack.push(pages[current].id);
 render(next,{updateUrl:true});
}
function backOne(){
 const prior=visitStack.pop();
 if(!prior)return;
 const i=indexOfPage(prior);
 if(i<0){render(current);return;}
 render(pages[i].id==='ficha'&&!canOpenPlan()?indexOfPage(redirectForPlan()):i,{updateUrl:true});
}
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
document.querySelector('#back-page').addEventListener('click',backOne);
window.addEventListener('popstate',()=>route({external:true}));
window.addEventListener('hashchange',()=>route({external:true}));
window.addEventListener('keydown',e=>{
 if(!mode||/input|textarea|select/i.test(document.activeElement.tagName))return;
 if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();go(current+1)}
 else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(current-1)}
 else if(e.key==='Escape')toggle(false);
});
route();
teaching=initTeaching({navigate:id=>{const i=indexOfPage(id);if(i>=0)go(i)},currentId:()=>pages[current].id,setMode:toggle});
