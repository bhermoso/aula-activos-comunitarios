// Herramientas docentes sin cronómetro automático ni flotante.
export function setupTeachingUI(){
 const main=document.querySelector('#main');
 main.insertAdjacentHTML('beforebegin','<div id="teaching-stage" class="teaching-stage" aria-label="Etapas del taller" hidden></div>');
 main.insertAdjacentHTML('afterend','<div class="teacher-tools" hidden aria-label="Herramientas docentes"><button id="screen-full" type="button">Pantalla completa</button><button id="teacher-home" type="button">⌂ Panel</button><button id="teacher-exit" type="button">Salir del modo docente</button><span id="teacher-status" role="status" aria-live="polite"></span></div>');
}
export function initTeaching({navigate,currentId,setMode}){
 const sequences={
  localiza:[['localiza','Introducción'],['maracena','Maracena · 38/7'],['chrysallis','Chrysallis'],['registro','Registro y validación']],
  mapeo:[['mapeo','Introducción'],['tecnicas','Técnicas'],['decisiones','Seis decisiones'],['ficha','Ficha de equipo']]
 };
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
