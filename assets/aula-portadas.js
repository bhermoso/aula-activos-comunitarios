/* Navegación de las portadas de cursos y talleres del Aula.
   No modifica ni sustituye los sistemas internos de cada módulo. */
(function(){
'use strict';
const cover=document.getElementById('portada-actividad');
const app=document.getElementById('actividad-app');
if(!cover||!app)return;
const mode=cover.dataset.module;
function reveal(on){
  cover.hidden=on;
  app.hidden=!on;
  document.body.classList.toggle('actividad-abierta',on);
  window.scrollTo({top:0,behavior:'instant'});
}
function selectSection(target){
  if(mode==='loja'){
    const button=app.querySelector('[data-go="'+target+'"]');
    if(button)button.click();
  }else if(mode==='fuente'){
    const button=app.querySelector('[data-tab="'+target+'"]');
    if(button)button.click();
  }else if(mode==='activos'){
    if(location.hash!=='#'+target)location.hash=target;
  }
}
document.querySelectorAll('[data-cover-open]').forEach(button=>{
  button.addEventListener('click',e=>{
    e.preventDefault();
    reveal(true);
    selectSection(button.dataset.coverOpen);
  });
});
document.querySelectorAll('[data-return-cover]').forEach(button=>{
  button.addEventListener('click',e=>{
    e.preventDefault();
    history.replaceState(null,'',location.pathname+location.search);
    reveal(false);
  });
});
const direct=String(window.__aulaEntryHash||'');
reveal(!!direct&&direct!=='#portada');
window.addEventListener('hashchange',()=>{
  if(location.hash&&location.hash!=='#portada'&&cover.hidden===false)reveal(true);
});
})();