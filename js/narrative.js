// Trayectos de lectura y conexiones entre los módulos del aula.
// Cada paso es una página autónoma: estas rutas son orientación, no un bloqueo.
const paths=[
 {name:'Itinerario Localiza Salud',steps:[
 ['entrada-localiza','Orientarse en Localiza Salud','Menú y filtros iniciales'],
 ['almunecar','Recursos/Activos vs. Actividades · Almuñécar','Centro de Salud y Receta de Pasos: dos búsquedas diferentes'],
 ['maracena','Maracena: inventario y participación','38 registros y 7 con identificación participativa'],
 ['chrysallis','Chrysallis: ampliar territorio','Explorar en el mapa cerca de Albolote'],
 ['denominaciones','Granada: nomenclatura de activos','Buscar y contrastar CPA, Punto Vuela, GRUSE y GRAFA'],
 ['registro','Registro práctico de un activo','Candidato, criterios, formulario y revisión en 25 minutos'],
 ['cierre-localiza','Síntesis','Lecciones y cierre del taller']
 ]},

];
export function addNarrativePaths(){
 for(const path of paths){
  path.steps.forEach(([id,title,description],index)=>{
   const page=document.getElementById(id);
   if(!page)return;
   const prev=path.steps[index-1],next=path.steps[index+1];
   const el=document.createElement('nav');
   el.className='story-trail';
   el.setAttribute('aria-label','Recorrido: '+path.name);
   el.innerHTML='<div class="story-trail-head"><strong>'+path.name+'</strong><span>Etapa '+(index+1)+' de '+path.steps.length+'</span></div><p>'+description+'</p><div class="story-trail-links">'
    +(prev?'<a href="#'+prev[0]+'">← '+prev[1]+'</a>':'<a href="#panel">← Índice del aula</a>')
    +(next?'<a href="#'+next[0]+'">'+next[1]+' →</a>':'<a href="#biblioteca">Explorar fuentes y documentos →</a>')+'</div>';
   const foot=page.querySelector('a.back')?.parentElement;
   if(foot)foot.insertAdjacentElement('beforebegin',el);
   else page.appendChild(el);
  });
 }
 // Una sola salida clara al final de cada pantalla del taller de mapeo.
 const route=[
  ['mapeo','tecnicas-catalogo','Consultar técnicas'],
  ['tecnicas','tecnicas-catalogo','Consultar las seis técnicas'],
  ['tecnicas-catalogo','decisiones','Preparar las seis decisiones'],
  ['tecnicas-comparar','tecnicas-catalogo','Volver al catálogo de técnicas'],
  ['decisiones','ficha','Completar la ficha del equipo'],
  ['ficha','cierre','Exposición, viabilidad y cierre'],
  ['cierre','mapeo','Volver al guion']
 ];
 route.forEach(([id,next,label])=>{
  const page=document.getElementById(id);
  if(!page)return;
  const nav=document.createElement('nav');
  nav.className='planning-guidance';
  nav.setAttribute('aria-label','Continuar en el taller de planificación');
  nav.innerHTML='<div class="story-links"><a href="#'+next+'">Siguiente: '+label+' →</a><a href="#mapeo">Guion del taller</a></div>';
  const back=page.querySelector('a.back')?.parentElement;
  if(back)back.insertAdjacentElement('beforebegin',nav);else page.appendChild(nav);
 });
 const reference=document.querySelector('#biblioteca');
 if(catalog){
  catalog.insertAdjacentHTML('beforeend','<nav class="planning-guidance" aria-label="Fin del catálogo"><p><strong>Después de revisar las fichas e incorporar las técnicas elegidas</strong>, corresponde acordar las seis decisiones del equipo.</p><div class="story-links"><a href="#tecnicas">← Anterior: visión general de técnicas</a><a href="#decisiones">Siguiente: preparar las seis decisiones →</a></div></nav>');
 }
 if(reference){
  reference.insertAdjacentHTML('beforeend','<p class="story-context">Las fuentes ayudan a contrastar lo visto en <a href="#localiza">Localiza Salud</a> y a fundamentar <a href="#mapeo">el plan de mapeo</a>. El <a href="#tecnicas-catalogo">catálogo de técnicas</a> reúne, por separado, el aprendizaje metodológico.</p>');
 }
}
