import {localizaSequence} from '../content/data.js';
// Cronómetro manual opcional: independiente de la navegación y de los intervalos.
export function setupTeachingUI(){
 const main=document.querySelector('#main');
 main.insertAdjacentHTML('beforebegin','<div id="teaching-stage" class="teaching-stage" aria-label="Etapas del taller" hidden></div>');
 main.insertAdjacentHTML('afterend','<button type="button" id="timer-activate" aria-controls="timer-widget" aria-expanded="false">◷ Activar cronómetro</button><aside id="timer-widget" class="timer-widget" hidden aria-label="Cronómetro opcional"><div class="timer-head"><strong>Cronómetro manual</strong><button type="button" id="timer-close" aria-label="Cerrar cronómetro">×</button></div><output id="timer-display" aria-label="Tiempo restante">05:00</output><label for="timer-minutes">Duración en minutos</label><input id="timer-minutes" type="number" min="1" max="180" step="1" value="5"><div id="timer-state" role="status" aria-live="polite">Preparado</div><div class="timer-actions"><button id="timer-play" type="button">Iniciar</button><button id="timer-reset" type="button">Reiniciar</button></div></aside><div class="teacher-tools" hidden aria-label="Herramientas docentes"><button id="screen-full" type="button">Pantalla completa</button><button id="teacher-home" type="button">⌂ Panel</button><button id="teacher-exit" type="button">Salir del modo docente</button><span id="teacher-status" role="status" aria-live="polite"></span></div>');
}
export function initTeaching({navigate,currentId,setMode}){
 const sequences={
  localiza:localizaSequence.map(({id,title})=>[id,title]),
  mapeo:[['mapeo','Guion docente'],['tecnicas-catalogo','Consultar técnicas'],['decisiones','Equipos y decisiones'],['ficha','Ficha del equipo'],['cierre','Exposición y cierre']]
 };
 const localizaIds=new Set(sequences.localiza.map(([id])=>id));
 const mapeoIds=new Set(sequences.mapeo.map(([id])=>id));
 const stage=document.querySelector('#teaching-stage');
 const fs=document.querySelector('#screen-full');
 fs.addEventListener('click',async()=>{
  try{
   if(document.fullscreenElement)await document.exitFullscreen();
   else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();
  }catch(e){document.querySelector('#teacher-status').textContent='Pantalla completa no disponible en este navegador'}
 });
 document.addEventListener('fullscreenchange',()=>{fs.textContent=document.fullscreenElement?'Salir de pantalla completa':'Pantalla completa'});
 document.querySelector('#teacher-home').addEventListener('click',()=>navigate('panel'));
 document.querySelector('#teacher-exit').addEventListener('click',async()=>{
  if(document.fullscreenElement)await document.exitFullscreen().catch(()=>{});
  setMode(false);
 });
 function update(id){
  const key=localizaIds.has(id)?'localiza':mapeoIds.has(id)?'mapeo':null;
  if(!key){stage.hidden=true;return}
  const seq=sequences[key],index=seq.findIndex(([v])=>v===id);
  stage.hidden=false;
  stage.innerHTML='<div class="stage-title"><strong>'+(key==='localiza'?'Localiza Salud':'Planificación del mapeo')+'</strong><span>Etapa '+(index+1)+' de '+seq.length+'</span></div><div class="stage-links">'+seq.map(([target,label],i)=>'<button type="button" class="stage-link'+(i===index?' active':'')+'" data-target="'+target+'" '+(i===index?'aria-current="step"':'')+'><span>'+(i+1)+'</span>'+label+'</button>').join('')+'</div>';
 }
 stage.addEventListener('click',e=>{const b=e.target.closest('[data-target]');if(b)navigate(b.dataset.target)});
 update(currentId());
 return {update};
}
