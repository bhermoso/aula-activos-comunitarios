/* Presentación 16:9: diapositivas de apoyo sin sustituir el expediente ni la ficha. */
(function(){
'use strict';
const DECK=[
[{title:'Apertura institucional y objetivos',lead:'16 de octubre de 2026 · 10:00–11:30 · I Plan Local de Salud de Loja',cards:[
['Propósito','Revisar los antecedentes y la situación de salud; escuchar a los sectores participantes.'],
['Apertura','Representación municipal participante. Intervenciones sujetas a confirmación.'],
['Conducción','Sergio Díaz Sánchez presenta las intervenciones y modera el intercambio.'],
['Continuidad','Recoger cuestiones y posibles próximos pasos, sin anticipar acuerdos.']]},{title:'Situación de salud de Loja · Carlos del Moral',lead:'Presentación íntegra del epidemiólogo · 14 diapositivas, sin modificaciones',originalEpi:true,cards:[]}],
[{title:'Programa del taller · 90 minutos',lead:'Distribución orientativa de los tiempos de intervención y trabajo.',layout:'agenda',cards:[
['10:00–10:10','Apertura institucional'],['10:10–10:15','Presentación de la sesión'],['10:15–10:30','Informe de salud · Carlos del Moral'],['10:30–10:50','Mesa-coloquio intersectorial'],
['10:50–11:10','Antecedentes · RELAS · salutogénesis'],['11:10–11:25','Actores y sectores'],['11:25–11:30','Puesta en común y cierre']
],note:'La convocatoria y los tiempos no acreditan por sí solos la asistencia efectiva.'}],
[{title:'Mesa-coloquio · Miradas complementarias',lead:'Preguntas abiertas para recoger perspectivas sin inducir respuestas.',cards:[
['Salud y bienestar','¿Qué aspectos del informe requieren atención o información adicional desde su ámbito?'],
['Servicios y entidades','¿Qué relaciones y formas de colaboración existen entre los servicios y los colectivos de Loja?'],
['Información pendiente','¿Qué cuestiones sería necesario contrastar con la población?'],
['Participación','¿Qué sectores y tipos de actores convendría consultar en las siguientes fases?']]},
{title:'Mesa-coloquio · Ordenar las aportaciones',lead:'Separar lo documentado, la experiencia local y las propuestas que requieren valoración.',cards:[
['Datos disponibles','Registrar los resultados del informe y las fuentes que los sustentan.'],
['Experiencias','Escuchar a entidades, profesionales y participantes.'],
['Preguntas','Identificar información no disponible o no contrastada.'],
['Seguimiento','Recoger opciones que puedan valorarse en el proceso local.']]}],
[{title:'Trayectoria documentada de Loja',lead:'Antecedentes extraídos del expediente histórico del Plan Local de Salud.',cards:[
['2009–2010','Primera parte del Perfil de Salud Local conservada en el expediente.'],
['2019–2020','Actualizaciones del perfil; se mencionan 164 respuestas a una encuesta de 2020. Metodología por verificar.'],
['2022','Según la presentación histórica: 40 participantes, 26 problemas priorizados y borrador de plan de acción.'],
['2026','Encuentro para revisar el trabajo previo y valorar su continuidad.']],note:'Los resultados de la consulta no equivalen a acuerdos finales de priorización.'},
{title:'Inventario histórico · Recursos y activos',lead:'Distinguir el número de recursos registrados de su validación como activos.',cards:[
['162 recursos','Registros migrados según el inventario histórico disponible.'],
['5 validados','Registros que constaban como activos validados.'],
['157 pendientes','Registros que figuraban pendientes de revisión o validación.'],
['Interpretación','Los recuentos no acreditan por sí solos la situación actual de los activos de Loja.']],note:'Cifras de una fuente histórica: su vigencia necesita comprobación.'},
{title:'RELAS · Ciclo de planificación local',lead:'La epidemiología, la participación y el reconocimiento de activos aportan información complementaria.',layout:'three',cards:[
['Diagnosticar y perfilar','Revisar fuentes, información anterior y el Perfil de Salud Local.'],
['Priorizar y planificar','Deliberar sobre problemas, activos, objetivos, actuaciones e indicadores.'],
['Elaborar y evaluar','Formalizar el plan y revisar procesos y resultados.']],note:'Las decisiones corresponden a los órganos, equipos y participantes competentes.'}],
[{title:'Trabajo práctico · Identificar actores y sectores',lead:'Propuesta para ampliar la representación y reconocer capacidades existentes.',cards:[
['Sectores','Salud, educación, servicios sociales, asociaciones, mayores, empleo y otros ámbitos.'],
['Tipos de actores','Entidades, colectivos, representaciones, servicios y funciones pertinentes.'],
['Registro personal','Cada participante puede añadir tantas propuestas como necesite desde su teléfono.'],
['Privacidad','Sin contactos de terceros ni datos de salud. La nueva encuesta estará alojada en REDCap.']],note:'La propuesta individual no constituye una invitación ni un acuerdo de incorporación.'},
{title:'Tu aportación es voluntaria',lead:'Escanea este QR para abrir una ficha independiente. Cuando REDCap esté habilitado, podrás enviar tus propuestas.',qr:true,cards:[],note:'La encuesta se está trasladando a REDCap. Este QR lleva al acceso estable; comprueba allí si la participación ya está habilitada.'}],
[{title:'Información complementaria para el perfil',lead:'Posibles líneas de estudio; no sustituyen los datos epidemiológicos disponibles.',cards:[
['Condiciones de vida','Alimentación, actividad física, descanso y características de los entornos.'],
['Relaciones','Redes cotidianas de apoyo, participación y experiencias de bienestar.'],
['Equidad','Cuando los datos lo permitan, examinar diferencias entre grupos y zonas del municipio.'],
['Métodos','Combinar indicadores con entrevistas y técnicas participativas.']]},
{title:'Del conocimiento a los mapas de activos',lead:'Los recursos identificados requieren contraste con la comunidad antes de representarse como activos.',cards:[
['Delimitar','Acordar el territorio, la pregunta y los participantes.'],
['Identificar','Registrar recursos, espacios, iniciativas y redes de apoyo.'],
['Contrastar','Revisar vigencia, accesibilidad, uso y contribución a la salud.'],
['Representar','Construir un mapa que pueda revisarse y utilizarse en el plan local.']],note:'Las siguientes dos propuestas son opciones metodológicas, no trabajos ya aprobados.'}],
[{title:'Mapeo 01 · Entorno escolar',lead:'Reconocimiento participativo de recursos y espacios de bienestar vinculados a la comunidad educativa.',cards:[
['Ámbito','Centros educativos, familias, alumnado y espacios cotidianos.'],
['Técnicas','Fotografía participativa, recorridos comentados y talleres de contraste.'],
['Posibles activos','Espacios, iniciativas, asociaciones y redes identificados por los participantes.'],
['Resultado','Mapa revisable y participativo, con medidas adecuadas de protección de menores.']]},
{title:'Mapeo escolar · Secuencia propuesta',lead:'Diseño y validación con los agentes educativos antes de cualquier registro público.',cards:[
['1 · Delimitar','Acordar centros, recorridos y participantes.'],
['2 · Identificar','Reconocer espacios, iniciativas y recursos con técnicas apropiadas.'],
['3 · Contrastar','Revisar hallazgos con la comunidad educativa.'],
['4 · Mapear','Representar los activos contrastados y documentar los criterios.']]}],
[{title:'Mapeo 02 · Redes de apoyo y barrios',lead:'Exploración participativa de relaciones, recursos y espacios relevantes para la salud.',cards:[
['Ámbito','Barrios y zonas del municipio acordados por el proceso local.'],
['Participación','Vecindario, asociaciones, servicios sociales, salud y otras entidades.'],
['Técnicas','Paseos comunitarios, conversaciones y encuentros de contraste.'],
['Resultado','Mapa de recursos y redes contrastado para apoyar la planificación.']]},
{title:'Mapeo comunitario · Pasos a valorar',lead:'La realización de estos mapeos requiere acuerdos sobre alcance, métodos y seguimiento.',cards:[
['Acordar','Definir objetivos, lugares, participantes y responsabilidades.'],
['Desarrollar','Planificar recorridos, entrevistas o talleres y su documentación.'],
['Devolver','Compartir los resultados con la comunidad para revisión.'],
['Incorporar','Valorar los mapas dentro del Plan Local de Salud y su actualización.']],note:'Estas propuestas no son actuaciones aprobadas.'},
{title:'Cierre · Del diálogo a los siguientes pasos',lead:'Propuesta para registrar la continuidad sin atribuir acuerdos que aún no existen.',cards:[
['Lo conocido','Confirmar qué documentos, datos y decisiones previas siguen vigentes.'],
['Lo que falta','Señalar información pendiente y voces comunitarias que deben incorporarse.'],
['Lo que se propone','Registrar posibles acciones, responsables sugeridos y plazos para su valoración.'],
['Lo acordado','Anotar únicamente decisiones adoptadas por quienes tienen competencia.']],note:'Cierre: distinguir acuerdos reales, propuestas y cuestiones pendientes. Avanzar → reinicia la presentación.'}]
];
const menuButtons=[...document.querySelectorAll('[data-go]')];if(menuButtons.length!==8)return;
const workspace=document.querySelector('.workspace'),progress=document.getElementById('progress');if(!workspace||!progress)return;
const stage=document.createElement('section');stage.id='loja-tv-stage';stage.setAttribute('aria-label','Diapositiva del taller');stage.setAttribute('aria-live','polite');progress.insertAdjacentElement('afterend',stage);
let pos=0,section=0;
function activeSection(){const active=document.querySelector('[data-go].active');return active?Number(active.dataset.go):section}
function render(){if(!document.body.classList.contains('presentation'))return;
 section=activeSection();if(!DECK[section])section=0;
 const d=DECK[section],slide=d[Math.min(pos,d.length-1)],cls=slide.layout==='agenda'?'tv-agenda':slide.layout==='three'?'tv-three':'';
 const cards=slide.cards.map((item,i)=>'<article class="tv-card">'+(cls==='tv-agenda'?'<small>MOMENTO '+(i+1)+'</small>':'')+'<h3>'+item[0]+'</h3><p>'+item[1]+'</p></article>').join('');
 if(slide.originalEpi){stage.innerHTML='<div class="tv-meta"><span>LOJA · 10:15–10:30</span><span>Presentación original del epidemiólogo</span></div><div class="tv-epi-toolbar"><strong>Situación de salud de Loja · M. Carlos del Moral Campaña</strong><a target="_blank" rel="noopener noreferrer" href="./materiales/Presentacion_Loja_2026.pdf">Abrir PDF completo ↗</a></div><iframe class="tv-epi-iframe" title="Presentación original de 14 diapositivas del epidemiólogo" src="./materiales/Presentacion_Loja_2026.pdf" allow="fullscreen"></iframe><p class="tv-epi-foot">Documento original sin cambios, alojado en el Aula. Si el navegador no permite previsualizarlo, utiliza «Abrir PDF completo».</p>';const count=document.getElementById('present-count');if(count)count.textContent=(pos+1)+' / '+d.length;return;}
 if(slide.qr){stage.innerHTML='<div class="tv-meta"><span>RELAS · LOJA · 16 OCT 2026</span><span>Consulta voluntaria · solo en el dispositivo</span></div><h2>'+slide.title+'</h2><p class="tv-lead">'+slide.lead+'</p><div class="loja-qr-proyeccion"><img src="./qr-ficha.svg" alt="Código QR para abrir la ficha de actores y sectores"><div><strong>Actores y sectores para la salud</strong><p>Sin registro, sin Inicio ni Volver. Puedes añadir propuestas o no participar.</p><p class="loja-qr-url">bhermoso.github.io/aula-activos-comunitarios/impulso/ficha.html</p></div></div><p class="tv-note">'+slide.note+'</p>';const c=document.getElementById('present-count');if(c)c.textContent=(pos+1)+' / '+d.length;return;} 
stage.innerHTML='<div class="tv-meta"><span>RELAS · LOJA · 16 OCT 2026</span><span>Apartado '+(section+1)+' de 8 · Pantalla '+(pos+1)+' de '+d.length+'</span></div><h2>'+slide.title+'</h2><p class="tv-lead">'+slide.lead+'</p><div class="tv-cards '+cls+'">'+cards+'</div>'+(slide.note?'<p class="tv-note">'+slide.note+'</p>':'');
 const count=document.getElementById('present-count');if(count)count.textContent=(pos+1)+' / '+d.length;
}
function gotoSection(n){section=Math.max(0,Math.min(7,n));pos=0;menuButtons[section].click();render()}
function step(delta){const d=DECK[section];
 if(delta>0&&pos<d.length-1){pos++;render();return}
 if(delta<0&&pos>0){pos--;render();return}
 if(delta>0)gotoSection(section===7?0:section+1);
 else if(section>0){gotoSection(section-1);pos=DECK[section].length-1;render()}
}
function presentation(on){document.body.classList.toggle('presentation',on);pos=0;section=activeSection();render();window.scrollTo(0,0)}
document.addEventListener('click',function(e){
 const t=e.target.closest('button');if(!t)return;
 if(t.id==='present'){e.preventDefault();e.stopImmediatePropagation();presentation(!document.body.classList.contains('presentation'));return}
 if(t.id==='present-exit'){e.preventDefault();e.stopImmediatePropagation();presentation(false);return}
 if(document.body.classList.contains('presentation')&&(t.id==='present-prev'||t.id==='present-next')){
  e.preventDefault();e.stopImmediatePropagation();step(t.id==='present-next'?1:-1);
 }
},true);
document.addEventListener('keydown',function(e){
 if(!document.body.classList.contains('presentation')||e.target.matches('input,textarea,select'))return;
 if(e.key==='ArrowRight'||e.key==='PageDown'){e.preventDefault();e.stopImmediatePropagation();step(1)}
 else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();e.stopImmediatePropagation();step(-1)}
 else if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();presentation(false)}
},true);
})();
