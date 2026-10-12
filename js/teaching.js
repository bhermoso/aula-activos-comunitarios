// Cronómetro manual opcional: independiente de la navegación y de los intervalos.
export function setupTeachingUI(){
 const main=document.querySelector('#main');
 main.insertAdjacentHTML('beforebegin','<div id="teaching-stage" class="teaching-stage" aria-label="Etapas del taller" hidden></div>');
 main.insertAdjacentHTML('afterend','<button type="button" id="timer-activate" aria-controls="timer-widget" aria-expanded="false">◷ Activar cronómetro</button><aside id="timer-widget" class="timer-widget" hidden aria-label="Cronómetro opcional"><div class="timer-head"><strong>Cronómetro manual</strong><button type="button" id="timer-close" aria-label="Cerrar cronómetro">×</button></div><output id="timer-display" aria-label="Tiempo restante">05:00</output><label for="timer-minutes">Duración en minutos</label><input id="timer-minutes" type="number" min="1" max="180" step="1" value="5"><div id="timer-state" role="status" aria-live="polite">Preparado</div><div class="timer-actions"><button id="timer-play" type="button">Iniciar</button><button id="timer-reset" type="button">Reiniciar</button></div></aside><div class="teacher-tools" hidden aria-label="Herramientas docentes"><button id="screen-full" type="button">Pantalla completa</button><button id="teacher-home" type="button">⌂ Panel</button><button id="teacher-exit" type="button">Salir del modo docente</button><span id="teacher-status" role="status" aria-live="polite"></span></div>');
}
export function initTeaching({navigate,currentId,setMode}){
 const sequences={
  localiza:[['localiza','Introducción'],['maracena','Maracena · 38/7'],['chrysallis','Chrysallis'],['registro','Registro y validación']],
  mapeo:[['mapeo','Introducción'],['tecnicas','Técnicas'],['decisiones','Seis decisiones'],['ficha','Ficha de equipo']]
 };
 const timer=document.querySelector('#timer-widget');
 const toggle=document.querySelector('#timer-activate');
 const minutes=document.querySelector('#timer-minutes');
 const output=document.querySelector('#timer-display');
 const state=document.querySelector('#timer-state');
 const play=document.querySelector('#timer-play');
 let countdown=5*60000,deadline=0,running=false,handle=null;
 function duration(){return Math.max(1,Math.min(180,Number(minutes.value)||5))*60000;}
 function display(){
  const seconds=Math.max(0,Math.ceil(countdown/1000));
  output.textContent=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');
  timer.classList.toggle('timer-done',countdown===0);
 }
 function pause(){
  if(running)countdown=Math.max(0,deadline-Date.now());
  running=false;clearInterval(handle);handle=null;
 }
 function updateClock(){
  if(!running)return;
  countdown=Math.max(0,deadline-Date.now());display();
  if(countdown===0){pause();play.textContent='Iniciar';state.textContent='Tiempo terminado';}
 }
 function reset(){pause();countdown=duration();play.textContent='Iniciar';state.textContent='Preparado';display();}
 toggle.addEventListener('click',()=>{
  timer.hidden=!timer.hidden;
  toggle.setAttribute('aria-expanded',String(!timer.hidden));
  toggle.textContent=timer.hidden?'◷ Activar cronómetro':'◷ Ocultar cronómetro';
 });
 document.querySelector('#timer-close').addEventListener('click',()=>{timer.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.textContent='◷ Activar cronómetro';});
 minutes.addEventListener('change',reset);
 play.addEventListener('click',()=>{
  if(running){pause();play.textContent='Continuar';state.textContent='En pausa';display();return;}
  if(countdown<=0)countdown=duration();
  deadline=Date.now()+countdown;running=true;play.textContent='Pausar';state.textContent='En marcha';handle=setInterval(updateClock,250);display();
 });
 document.querySelector('#timer-reset').addEventListener('click',reset);
 display();
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
  const key=id==='localiza'||['maracena','chrysallis','registro'].includes(id)?'localiza':id==='mapeo'||['tecnicas','decisiones','ficha'].includes(id)?'mapeo':null;
  if(!key){stage.hidden=true;return}
  const seq=sequences[key],index=seq.findIndex(([v])=>v===id);
  stage.hidden=false;
  stage.innerHTML='<div class="stage-title"><strong>'+(key==='localiza'?'Localiza Salud':'Planificación del mapeo')+'</strong><span>Etapa '+(index+1)+' de '+seq.length+'</span></div><div class="stage-links">'+seq.map(([target,label],i)=>'<button type="button" class="stage-link'+(i===index?' active':'')+'" data-target="'+target+'" '+(i===index?'aria-current="step"':'')+'><span>'+(i+1)+'</span>'+label+'</button>').join('')+'</div>';
 }
 stage.addEventListener('click',e=>{const b=e.target.closest('[data-target]');if(b)navigate(b.dataset.target)});
 update(currentId());
 return {update};
}
