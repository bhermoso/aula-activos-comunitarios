import {localizaSequence} from '../content/data.js?v=20261012-unified3';
// Mejoras de la primera sesión. Este módulo no depende de Moodle.
export function enhanceSession(){
 const $=id=>document.getElementById(id);
 const panel=$('panel'),program=$('programa'),loc=$('localiza'),map=$('mapeo');
 const menu=[
 ['programa','01','Programa','Horario · grupos · rotaciones'],
 ['localiza','02','Localiza Salud','Buscar, interpretar y registrar'],
 ['mapeo','03','Planificar el mapeo','Trabajo colaborativo y ficha'],
 ['biblioteca','04','Fuentes y documentos','Guías, criterios y audiovisuales de apoyo']
 ];
 if(panel){
  const old=panel.querySelector('.tiles');
  if(old)old.outerHTML='<div class="session-directory">'+menu.map(([id,num,title,desc])=>'<a class="directory-link" href="#'+id+'"><span>'+num+'</span><strong>'+title+'</strong><small>'+desc+'</small><b aria-hidden="true">↗</b></a>').join('')+'</div>';
 }
 if(program){
  const summary=document.createElement('div');
  summary.className='rotation-board';
  summary.innerHTML='<h3>Rotación de los talleres</h3><p>Ambos grupos realizan los dos talleres. El desayuno marca el cambio de sala.</p><div class="rotation-grid" role="table" aria-label="Rotación por grupos">'
  +'<div role="row" class="rotation-head"><div role="columnheader">Hora</div><div role="columnheader">Grupo A · 15</div><div role="columnheader">Grupo B · 14</div></div>'
  +'<div role="row"><div role="cell">09:15–11:00</div><div role="cell" class="r-localiza">Localiza Salud<small>100 min + preguntas</small></div><div role="cell" class="r-mapeo">Planificación<small>100 min + preguntas</small></div></div>'
  +'<div role="row" class="rotation-break"><div role="cell">11:00–12:00</div><div role="cell" class="break-wide">Desayuno · descanso · cambio de salas</div></div>'
  +'<div role="row"><div role="cell">12:00–13:50</div><div role="cell" class="r-mapeo">Planificación<small>100 min + preguntas</small></div><div role="cell" class="r-localiza">Localiza Salud<small>100 min + preguntas</small></div></div></div>';
  const lead=program.querySelector('.lead');lead?.insertAdjacentElement('afterend',summary);
 }
 function guide(container,kicker,links){
  if(!container)return;
  const item=document.createElement('div');item.className='activity-path';
  item.innerHTML='<p class="eyebrow">'+kicker+'</p><div class="activity-grid">'+links.map(([id,title,desc],i)=>'<a class="activity-link" href="#'+id+'"><span class="activity-number">'+String(i+1).padStart(2,'0')+'</span><strong>'+title+'</strong><small>'+desc+'</small><span class="activity-arrow" aria-hidden="true">→</span></a>').join('')+'</div>';
  container.querySelector('.lead')?.insertAdjacentElement('afterend',item);
 }
 guide(loc,'Actividades del taller · mismo orden que el guion docente',
  localizaSequence.map(({id,time,title,summary})=>[id,time+' · '+title,summary]));
 if(map){
  const lead=map.querySelector('.lead');
  lead?.insertAdjacentHTML('afterend','<div class="notice"><strong>Perspectiva de género en el mapeo:</strong> al convocar, recoger e interpretar información, considerar si las oportunidades de participación y acceso presentan diferencias entre mujeres y hombres. Revisar horarios, tareas de cuidados, seguridad y accesibilidad. Describir los hallazgos y contrastarlos con la comunidad, sin presuponer diferencias.</div>');
 }

 guide(map,'Para realizar el taller',[
  ['tecnicas-catalogo','1. Consultar técnicas','Revisar las fichas e incorporar las elegidas'],
  ['decisiones','2. Preparar el plan','Acordar seis decisiones y completar la ficha']
 ]);
 const m=$('maracena');if(m){const metric=m.querySelector('.metrics');metric?.insertAdjacentHTML('afterend','<div class="ratio-track" role="img" aria-label="7 de 38 registros cumplen el filtro participativo"><span></span></div><p class="ratio-caption">7 de 38 registros de la búsqueda observada · cifra para ejercicio, no indicador poblacional.</p>');}
 const c=$('chrysallis');if(c){c.querySelector('.notice')?.insertAdjacentHTML('afterend','<div class="question-prompt"><strong>Ejercicio: explorar el mapa para encontrar un activo conocido</strong><p>Sabemos que Chrysallis es una asociación relacionada con la salud sexual y reproductiva, pero no aparece al buscar en Albolote. Ampliad el territorio a «Provincia: Granada» y seleccionad la temática «Salud sexual y reproductiva». Cuando se actualice el mapa, acercad la vista a Albolote, buscad los marcadores amarillos (asociaciones) y abrid sus fichas una por una hasta localizar Chrysallis. Comprobad su validación como activo.</p><p><strong>Aprendizaje:</strong> si tenemos pistas sobre un recurso que no aparece en la búsqueda municipal, podemos explorar visualmente su entorno en el mapa ampliando el ámbito de consulta.</p></div>');}
 const d=$('decisiones');if(d){d.querySelector('.grid')?.insertAdjacentHTML('afterend','<p class="action-inline"><a class="worksheet-link" href="#ficha">Abrir la ficha editable del equipo →</a></p>');}
}
