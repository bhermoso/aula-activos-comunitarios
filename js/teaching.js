export function setupTeachingUI(){
 const main=document.querySelector('#main');
 main.insertAdjacentHTML('beforebegin','<div id="teaching-stage" class="teaching-stage" aria-label="Etapas del taller" hidden></div>');
 main.insertAdjacentHTML('afterend','<div class="teacher-tools" hidden aria-label="Herramientas docentes"><button id="screen-full" type="button">Pantalla completa</button><button id="timer-toggle" type="button" aria-expanded="false" aria-controls="timer-widget">◷ Cronómetro</button><button id="teacher-home" type="button">⌂ Panel</button><button id="teacher-exit" type="button">Salir del modo docente</button><span id="teacher-status" role="status" aria-live="polite"></span></div><div class="timer-widget" id="timer-widget" hidden><div class="timer-head"><strong>Cronómetro de actividad</strong><span id="timer-state" role="status">Preparado</span></div><output id="timer-display" aria-label="Tiempo restante">05:00</output><label for="timer-minutes">Duración</label><select id="timer-minutes"><option value="3">3 min</option><option value="5" selected>5 min</option><option value="10">10 min</option><option value="15">15 min</option><option value="20">20 min</option><option value="25">25 min</option><option value="30">30 min</option><option value="35">35 min</option><option value="45">45 min</option><option value="60">60 min</option><option value="100">100 min</option></select><div class="timer-actions"><button id="timer-play" type="button">Iniciar</button><button id="timer-reset" type="button">Reiniciar</button></div></div>');
}

// Controles docentes independientes del contenido y de la navegación.
export function initTeaching({navigate,currentId,setMode}){
 const sequences={
  localiza:[['localiza','Introducción'],['maracena','Maracena · 38/7'],['chrysallis','Chrysallis'],['registro','Registro y validación']],
  mapeo:[['mapeo','Introducción'],['tecnicas','Técnicas'],['decisiones','Seis decisiones'],['ficha','Ficha de equipo']]
 };
 const ids=Object.values(sequences).flat().map(([id])=>id);
 const stage=document.querySelector('#teaching-stage');
 const timer=document.querySelector('#timer-widget');
 const choices=document.querySelector('#timer-minutes');
 let deadline=null,remaining=0,interval=null,active=false;
 const format=ms=>{const seconds=Math.max(0,Math.ceil(ms/1000));return String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0')};
 function tick(){
  if(active) remaining=Math.max(0,deadline-Date.now());
  const face=document.querySelector('#timer-display');face.textContent=format(remaining);
  timer.classList.toggle('timer-done',remaining===0&&active);
  if(remaining===0&&active){active=false;clearInterval(interval);interval=null;document.querySelector('#timer-play').textContent='Iniciar';document.querySelector('#timer-state').textContent='Tiempo terminado';}
 }
 function stop(){if(active)remaining=Math.max(0,deadline-Date.now());active=false;clearInterval(interval);interval=null;}
 function reset(){stop();remaining=Number(choices.value)*60000;timer.classList.remove('timer-done');document.querySelector('#timer-play').textContent='Iniciar';document.querySelector('#timer-state').textContent='Preparado';tick();}
 choices.addEventListener('change',reset);
 document.querySelector('#timer-play').addEventListener('click',()=>{
  if(active){stop();document.querySelector('#timer-play').textContent='Continuar';document.querySelector('#timer-state').textContent='En pausa'}
  else{if(remaining<=0)remaining=Number(choices.value)*60000;deadline=Date.now()+remaining;active=true;document.querySelector('#timer-play').textContent='Pausar';document.querySelector('#timer-state').textContent='En marcha';interval=setInterval(tick,250)}
  tick();
 });
 document.querySelector('#timer-reset').addEventListener('click',reset);
 document.querySelector('#timer-toggle').addEventListener('click',()=>{
  const hidden=timer.hidden;timer.hidden=!hidden;document.querySelector('#timer-toggle').setAttribute('aria-expanded',String(hidden));
 });
 const fs=document.querySelector('#screen-full');
 fs.addEventListener('click',async()=>{
  try{
   if(document.fullscreenElement){await document.exitFullscreen()}
   else if(document.documentElement.requestFullscreen){await document.documentElement.requestFullscreen()}
  }catch(e){document.querySelector('#teacher-status').textContent='Pantalla completa no disponible en este navegador';}
 });
 document.addEventListener('fullscreenchange',()=>{fs.textContent=document.fullscreenElement?'Salir de pantalla completa':'Pantalla completa'});
 document.querySelector('#teacher-home').addEventListener('click',()=>navigate('panel'));
 document.querySelector('#teacher-exit').addEventListener('click',async()=>{if(document.fullscreenElement)await document.exitFullscreen().catch(()=>{});setMode(false)});
 function update(id){
  let key=id==='localiza'||['maracena','chrysallis','registro'].includes(id)?'localiza':id==='mapeo'||['tecnicas','decisiones','ficha'].includes(id)?'mapeo':null;
  if(!key){stage.hidden=true;return;}
  const seq=sequences[key],index=seq.findIndex(([v])=>v===id);
  stage.hidden=false;
  stage.innerHTML='<div class="stage-title"><strong>'+(key==='localiza'?'Localiza Salud':'Planificación del mapeo')+'</strong><span>Etapa '+(index+1)+' de '+seq.length+'</span></div><div class="stage-links">'+seq.map(([target,label],i)=>'<button type="button" class="stage-link'+(i===index?' active':'')+'" data-target="'+target+'" '+(i===index?'aria-current="step"':'')+'><span>'+(i+1)+'</span>'+label+'</button>').join('')+'</div>';
 }
 stage.addEventListener('click',e=>{const b=e.target.closest('[data-target]');if(b)navigate(b.dataset.target)});
 reset();update(currentId());
 return {update};
}
