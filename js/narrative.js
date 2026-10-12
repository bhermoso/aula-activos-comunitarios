// Trayectos de lectura y conexiones entre los módulos del aula.
// Cada paso es una página autónoma: estas rutas son orientación, no un bloqueo.
const paths=[
 {name:'Itinerario Localiza Salud',steps:[
 ['entrada-localiza','Leer el menú inicial','Escoger modalidad y comprender la pantalla de búsqueda'],
 ['modalidades','Reconocer qué se busca','Recurso o actividad: dos unidades de información'],
 ['criterios-busqueda','Combinar criterios','Ámbito, temática y filtros disponibles'],
 ['maracena','Comprobar el inventario','38 registros y 7 con identificación participativa'],
 ['chrysallis','Ampliar el territorio','De Albolote a la provincia de Granada'],
 ['denominaciones','Interpretar las denominaciones','Distinguir entidad, actividad y validación'],
 ['registro','Revisar y registrar','De los resultados a los datos que conviene comprobar']
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
 const catalog=document.querySelector('#tecnicas-catalogo');
 const reference=document.querySelector('#biblioteca');
 if(catalog){
  catalog.insertAdjacentHTML('beforeend','<p class="story-context"><strong>¿Qué se hace con lo aprendido?</strong> Selecciona los métodos necesarios para tu territorio y justifica cómo se combinan en <a href="#ficha">la ficha única del equipo →</a></p>');
 }
 if(reference){
  reference.insertAdjacentHTML('beforeend','<p class="story-context">Las fuentes ayudan a contrastar lo visto en <a href="#localiza">Localiza Salud</a> y a fundamentar <a href="#mapeo">el plan de mapeo</a>. El <a href="#tecnicas-catalogo">catálogo de técnicas</a> reúne, por separado, el aprendizaje metodológico.</p>');
 }
}
