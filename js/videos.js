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
export function attachTechniqueVideos(){
 Object.entries(videos).forEach(([id,v])=>{
  const page=document.getElementById(id);
  if(!page)return;
  const detail=page.querySelector('.tech-detail');
  if(!detail)return;
  const block=document.createElement('section');
  block.className='tech-video';
  block.innerHTML='<div class="tech-video-head"><span>RECURSO AUDIOVISUAL</span><h3>'+v.title+'</h3><p>'+v.institution+'</p></div><p><strong>'+v.kind+'</strong> · '+v.note+'</p><div class="tech-video-link"><a href="'+v.url+'" target="_blank" rel="noopener noreferrer">Ver el vídeo en la plataforma de origen ↗</a></div><details><summary>Qué observar durante el visionado</summary><p>'+v.prompt+'</p></details><p class="tech-video-note">Material externo; la reproducción puede requerir conexión y abrirse en otra pestaña. Los recursos en inglés pueden necesitar apoyo del guion en español.</p>';
  detail.insertAdjacentElement('afterend',block);
 });
}
