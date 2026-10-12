// Mejoras de la primera sesión. Este módulo no depende de Moodle.
export function enhanceSession(){
 const $=id=>document.getElementById(id);
 const panel=$('panel'),program=$('programa'),loc=$('localiza'),map=$('mapeo');
 const menu=[
 ['programa','01','Programa','Horario · grupos · rotaciones'],
 ['localiza','02','Localiza Salud','Buscar, interpretar y registrar'],
 ['mapeo','03','Planificar el mapeo','Trabajo colaborativo y ficha'],
 ['biblioteca','04','Materiales','Documentación y vídeos']
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
 guide(loc,'Actividades del taller',[
 ['maracena','Inventario y participación','Maracena: 38 resultados frente a 7'],
 ['chrysallis','El territorio no es una frontera','De Albolote a la provincia de Granada'],
 ['registro','Modalidades y registro','Granada, Almuñécar y alta ciudadana'],
 ['biblioteca','Consultar criterios','Documentación y normativa de referencia']
 ]);
 if(map){
  const lead=map.querySelector('.lead');
  lead?.insertAdjacentHTML('afterend','<div class="notice"><strong>Perspectiva de género en el mapeo:</strong> al convocar, recoger e interpretar información, considerar si las oportunidades de participación y acceso presentan diferencias entre mujeres y hombres. Revisar horarios, tareas de cuidados, seguridad y accesibilidad. Describir los hallazgos y contrastarlos con la comunidad, sin presuponer diferencias.</div>');
 }
 guide(map,'Itinerario de trabajo',[
 ['tecnicas','Escoger la metodología','Paseos, mapas, talleres y fotovoz'],
 ['decisiones','Tomar seis decisiones','De la finalidad a la devolución'],
 ['ficha','Redactar la propuesta','Ficha editable para cada equipo'],
 ['biblioteca','Consultar experiencias','Guías y audiovisuales voluntarios']
 ]);
 const m=$('maracena');if(m){const metric=m.querySelector('.metrics');metric?.insertAdjacentHTML('afterend','<div class="ratio-track" role="img" aria-label="7 de 38 registros cumplen el filtro participativo"><span></span></div><p class="ratio-caption">7 de 38 registros de la búsqueda observada · cifra para ejercicio, no indicador poblacional.</p>');}
 const c=$('chrysallis');if(c){c.querySelector('.notice')?.insertAdjacentHTML('afterend','<div class="question-prompt"><strong>Pregunta para el grupo</strong><p>¿Qué perdemos al limitar una búsqueda al municipio de la consulta, cuando un activo presta servicio a toda la provincia?</p></div>');}
 const d=$('decisiones');if(d){d.querySelector('.grid')?.insertAdjacentHTML('afterend','<p class="action-inline"><a class="worksheet-link" href="#ficha">Abrir la ficha editable del equipo →</a></p>');}
}
