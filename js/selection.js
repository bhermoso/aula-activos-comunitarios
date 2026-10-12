// La elección pertenece al plan único, no crea fichas adicionales.
export const methodChoices=[
 ['tecnica-paseos','Paseos comunitarios'],
 ['tecnica-mapa','Mapeo colectivo'],
 ['tecnica-entrevistas','Entrevistas abiertas'],
 ['tecnica-talleres','Talleres participativos'],
 ['tecnica-fotovoz','Fotovoz'],
 ['tecnica-fichas','Registro mediante fichas']
];
const visited=new Set(),selected=new Set();
const label=id=>methodChoices.find(([key])=>key===id)?.[1]||id;
export function markMethodVisited(id){
 if(!methodChoices.some(([key])=>key===id))return;
 visited.add(id);refreshMethodSelection();
}
export function canOpenPlan(){return selected.size>0&&[...selected].every(id=>visited.has(id))}
export function redirectForPlan(){
 if(canOpenPlan())return null;
 if(selected.size&&[...selected].some(id=>!visited.has(id)))return [...selected].find(id=>!visited.has(id));
 return 'tecnicas-catalogo';
}
export function initMethodSelection(){
 document.querySelectorAll('[data-method-select]').forEach(btn=>{
  btn.addEventListener('click',()=>{
   const id=btn.dataset.methodSelect;
   if(!visited.has(id))return;
   if(selected.has(id))selected.delete(id);else selected.add(id);
   refreshMethodSelection();
  });
 });
 const form=document.querySelector('#plan-form');
 if(form){
  const box=form.querySelector('.methods-selection');
  if(box){
   box.querySelectorAll('input[name="metodos"]').forEach(input=>{
    const id=methodChoices.find(([,name])=>name===input.value)?.[0];
    if(!id)return;
    input.disabled=!visited.has(id);
    input.addEventListener('change',()=>{
     if(!visited.has(id))return;
     if(input.checked)selected.add(id);else selected.delete(id);
     refreshMethodSelection();
    });
   });
   box.insertAdjacentHTML('afterbegin','<p class="selection-synced">Las técnicas se seleccionan tras consultar sus fichas. Las elecciones se trasladan automáticamente aquí.</p>');
  }
 }
 refreshMethodSelection();
}
export function refreshMethodSelection(){
 document.querySelectorAll('[data-method-select]').forEach(btn=>{
  const id=btn.dataset.methodSelect,on=selected.has(id),seen=visited.has(id);
  btn.disabled=!seen;
  btn.textContent=on?'✓ Incorporada al plan · retirar':seen?'Incorporar a la planificación del mapeo':'Consulta primero la ficha para incorporarla';
  btn.setAttribute('aria-pressed',String(on));
 });
 document.querySelectorAll('[data-method-status]').forEach(el=>{
  const id=el.dataset.methodStatus;
  el.textContent=selected.has(id)?'Seleccionada para el plan':visited.has(id)?'Consultada · pendiente de elección':'Pendiente de consultar';
 });
 const count=selected.size;
 document.querySelectorAll('[data-selection-count]').forEach(el=>{el.textContent=count+' técnica'+(count===1?'':'s')+' seleccionada'+(count===1?'':'s');});
 document.querySelectorAll('#plan-form input[name="metodos"]').forEach(input=>{
  const id=methodChoices.find(([,name])=>name===input.value)?.[0];
  input.checked=selected.has(id);input.disabled=!visited.has(id);
 });
 document.querySelectorAll('[data-plan-continue]').forEach(link=>{link.hidden=false;});
 const gate=document.querySelector('#plan-prerequisite');
 if(gate){
  gate.hidden=false;
  gate.textContent=count?'Puedes completar la ficha y revisar las técnicas elegidas cuando lo necesites.':'Puedes completar la ficha ahora. Si quieres incorporar técnicas, consúltalas desde el catálogo.';
 }
 document.querySelectorAll('[data-plan-shortcut]').forEach(link=>{
  link.setAttribute('aria-label','Abrir ficha única del equipo');
 });
}
export function selectedMethodNames(){return [...selected].map(label)}
