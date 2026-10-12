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
 {name:'Itinerario del equipo',steps:[
 ['mapeo','Definir el encargo','Para qué se planifica el mapeo'],
 ['tecnicas','Elegir métodos','Qué conocimiento aporta cada técnica'],
 ['tecnicas-catalogo','Estudiar las técnicas','Seis métodos con materiales específicos'],
 ['decisiones','Tomar decisiones','Finalidad, territorio, participación y viabilidad'],
 ['ficha','Construir el plan único','Una propuesta coherente y combinada por equipo'],
 ['cierre','Conectar con el territorio','Trabajo de campo, contraste y devolución']
 ]}
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
 // Orientación visible al entrar en cada pantalla clave; no sustituye al guion de 100 minutos.
 const planningSteps=[
  ['mapeo','Guion docente y propósito','00–15 · Situar la tarea','tecnicas','Siguiente: consultar técnicas participativas (15–32)'],
  ['tecnicas','Técnicas disponibles','15–32 · Consultar y elegir','decisiones','Siguiente: preparar las seis decisiones (43–73)'],
  ['tecnicas-catalogo','Fichas de técnicas','Material de consulta durante 15–32','decisiones','Siguiente: preparar las seis decisiones (43–73)'],
  ['decisiones','Seis decisiones del equipo','43–73 · Estructurar la propuesta','ficha','Siguiente: completar la ficha única del equipo'],
  ['ficha','Ficha de planificación','43–73 · Redactar y descargar','cierre','Siguiente: exposición, viabilidad y cierre (73–100)'],
  ['cierre','Continuidad del proceso','73–100 · Exponer, contrastar y cerrar','mapeo','Volver al guion del taller']
 ];
 planningSteps.forEach(([id,name,time,next,label])=>{
  const page=document.getElementById(id),lead=page?.querySelector('.lead');
  if(!lead)return;
  const nav=document.createElement('nav');
  nav.className='planning-guidance';
  nav.setAttribute('aria-label','Orientación para seguir el taller de planificación');
  nav.innerHTML='<p class="eyebrow">Taller de planificación · orientación docente</p><p><strong>'+name+'</strong> · '+time+'</p><p>El guion minutado marca las fases; estos enlaces sirven para consultar herramientas, sin añadir actividades al horario.</p><div class="story-links"><a href="#'+next+'">'+label+' →</a><a href="#mapeo">Consultar guion de 100 minutos →</a></div>';
  lead.insertAdjacentElement('afterend',nav);
 });
 const catalog=document.querySelector('#tecnicas-catalogo');
 const reference=document.querySelector('#biblioteca');
 if(catalog){
  catalog.insertAdjacentHTML('beforeend','<p class="story-context"><strong>¿Qué se hace con lo aprendido?</strong> Selecciona los métodos necesarios para tu territorio y justifica cómo se combinan en <a href="#ficha">la ficha única del equipo →</a></p>');
 }
 if(reference){
  reference.insertAdjacentHTML('beforeend','<p class="story-context">Las fuentes ayudan a contrastar lo visto en <a href="#localiza">Localiza Salud</a> y a fundamentar <a href="#mapeo">el plan de mapeo</a>. El <a href="#tecnicas-catalogo">catálogo de técnicas</a> reúne, por separado, el aprendizaje metodológico.</p>');
 }
}
