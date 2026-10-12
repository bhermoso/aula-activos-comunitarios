// Selección audiovisual para autoaprendizaje. Enlaces a páginas verificables,
// sin copiar ni re-publicar archivos de terceros.
const videos={
 'tecnica-mapa':{
  title:'Visual Assets-Mapping with Young People',
  institution:'National Centre for Research Methods · University of Manchester',
  url:'https://repository.ncrm.ac.uk/resources/video/?id=9725',
  kind:'Demostración metodológica',
  note:'Presenta actividades de mapeo visual participativo y cómo interpretar los mapas y relatos producidos. Caso educativo y comunitario, adaptable al enfoque de activos en salud.',
  prompt:'Observa cómo pasan de la pregunta inicial a los mapas y relatos. ¿Qué datos aparecen en el mapa y cuáles dependen de la conversación?'
 },
 'tecnica-paseos':{
  title:'Walking Methods in Practice: two international case studies',
  institution:'National Centre for Research Methods · University of Surrey',
  url:'https://repository.ncrm.ac.uk/resources/video/?id=4352',
  kind:'Aplicación de métodos de recorrido',
  note:'Analiza observación y experiencias sobre el espacio durante recorridos. El contexto es urbano y no se presenta como un Paseo de Jane específicamente.',
  prompt:'¿Qué información sobre el uso real del espacio aparece al recorrerlo con otras personas?'
 },
 'tecnica-fotovoz':{
  title:'Photovoice: Principles, Practicality, and Benefit to Participants',
  institution:'Veterans Affairs · Health Systems Research',
  url:'https://hsrd.research.va.gov/for_researchers/cyber_seminars/archives/video_archive.cfm?Seriesid=113&SessionID=5229',
  kind:'Seminario específico sobre fotovoz',
  note:'Distingue fotovoz y foto-elicitación, aborda relatos asociados a imágenes y sus implicaciones para una investigación participativa accesible.',
  prompt:'¿Cómo se relacionan la imagen seleccionada, el relato de la persona y el debate del grupo?'
 },
 'tecnica-entrevistas':{
  title:'What is qualitative interviewing?',
  institution:'National Centre for Research Methods · ESRC Research Methods Festival',
  url:'https://repository.ncrm.ac.uk/resources/video/?id=3697',
  kind:'Introducción a la entrevista cualitativa',
  note:'Material conceptual complementario al guion abierto de Albolote. Úsalo para observar la diferencia entre recoger respuestas prefijadas y escuchar experiencias significativas.',
  prompt:'¿Cómo seguirías una respuesta espontánea con una repregunta abierta que permita comprender su significado?'
 },
 'tecnica-talleres':{
  title:'Conducting Focus Groups',
  institution:'National Centre for Research Methods · Kingsley Purdam',
  url:'https://repository.ncrm.ac.uk/resources/video/?id=9559',
  kind:'Guía audiovisual de grupos de discusión',
  note:'Describe diseño, convocatoria, preguntas, moderación y uso de los resultados. Aplicable como referencia al trabajo de contraste colectivo.',
  prompt:'¿Qué decisiones de facilitación favorecen que se expresen y registren perspectivas diversas?'
 },
 'tecnica-fichas':{
  title:'Community Asset Mapping — Gathering Data',
  institution:'Center for Schools & Communities · Vimeo',
  url:'https://vimeo.com/378850091',
  kind:'Complementario sobre recogida de datos',
  note:'Vídeo sobre recogida de información en mapeo de activos. No se presenta como demostración del formulario oficial de Localiza Salud ni como tutorial de validación.',
  prompt:'¿Qué campos y evidencias necesitarías conservar para documentar el origen de un activo candidato?'
 }
};

const andalusian={
 'tecnica-mapa':{
  label:'Metodología para el mapeo de activos de salud en una comunidad',
  source:'Gaceta Sanitaria · autoría vinculada a EASP',
  url:'https://gacetasanitaria.org/es-metodologia-el-mapeo-activos-salud-articulo-resumen-S0213911112001896',
  scope:'Lectura metodológica con tablas de métodos y técnicas; no es un vídeo.'
 },
 'tecnica-paseos':{
  label:'Guía Salud Comunitaria basada en Activos',
  source:'EASP · Servicio Andaluz de Salud',
  url:'https://www.easp.es/project/salud-comunitaria-basada-en-activos/',
  scope:'Experiencia y marco de aplicación en Andalucía; no es una demostración audiovisual del paseo.'
 },
 'tecnica-fotovoz':{
  label:'Salud Comunitaria basada en Activos · instrumentos y técnicas',
  source:'EASP · Consejería de Salud',
  url:'https://www.easp.es/project/salud-comunitaria-basada-en-activos/',
  scope:'Apoyo metodológico andaluz para interpretar fotovoz; no es un vídeo.'
 },
 'tecnica-entrevistas':{
  label:'Proyecto PARAC: Activos para la Salud Comunitaria',
  source:'Escuela Andaluza de Salud Pública',
  url:'https://www.easp.es/project/proyecto-de-apoyo-a-la-revitalizacion-de-la-atencion-primaria-activos-para-la-salud-comunitaria-parac/',
  scope:'Experiencia de formación e investigación cualitativa en atención primaria andaluza, con entrevistas y grupos focales.'
 },
 'tecnica-talleres':{
  label:'Proyecto PARAC: técnicas participativas en atención primaria',
  source:'Escuela Andaluza de Salud Pública',
  url:'https://www.easp.es/project/proyecto-de-apoyo-a-la-revitalizacion-de-la-atencion-primaria-activos-para-la-salud-comunitaria-parac/',
  scope:'Contexto docente y participativo desarrollado en Andalucía; material de referencia, no tutorial audiovisual.'
 },
 'tecnica-fichas':{
  label:'Guía de Salud Comunitaria basada en Activos',
  source:'Servicio Andaluz de Salud · EASP',
  url:'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/todas-noticia/el-sistema-sanitario-publico-de-andalucia-ya-cuenta-con-su-guia-de-salud-comunitaria-basada-en',
  scope:'Marco de identificación y mapeo; para operar en Localiza Salud utilizar además el manual de registro.'
 }
};
export function attachTechniqueVideos(){
 Object.entries(videos).forEach(([id,v])=>{
  const page=document.getElementById(id);
  if(!page)return;
  const detail=page.querySelector('.tech-detail');
  if(!detail)return;
  const block=document.createElement('section');
  block.className='tech-video';
  block.innerHTML='<div class="tech-video-head"><span>RECURSO AUDIOVISUAL</span><h3>'+v.title+'</h3><p>'+v.institution+'</p></div><p><strong>'+v.kind+'</strong> · '+v.note+'</p><div class="tech-video-link"><a href="'+v.url+'" target="_blank" rel="noopener noreferrer">Ver el vídeo en la plataforma de origen ↗</a></div><details><summary>Qué observar durante el visionado</summary><p>'+v.prompt+'</p></details><p class="tech-video-note">Material externo; la reproducción puede requerir conexión y abrirse en otra pestaña. Los recursos en inglés pueden necesitar apoyo del guion en español.</p>';
  const context=andalusian[id];
  if(context){
   block.insertAdjacentHTML('beforeend','<div class="tech-andalusia"><strong>Referencia de aplicación andaluza</strong><p>'+context.scope+'</p><a href="'+context.url+'" target="_blank" rel="noopener noreferrer">'+context.label+' · '+context.source+' ↗</a></div>');
  }
  detail.insertAdjacentElement('afterend',block);
 });
}
