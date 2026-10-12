// Selección audiovisual para autoaprendizaje. Enlaces a páginas verificables,
// sin copiar ni re-publicar archivos de terceros.
const videos={
 'tecnica-mapa':{
  title:"Mapeo de activos saludables en el barrio de La Luz (Avilés)",
  institution:"Observatorio de Salud de Asturias · proyecto Partycipa y UNGA",
  url:"https://obsaludasturias.com/obsa/mapeo-de-activos-saludables-en-el-barrio-avilesino-de-la-luz/",
  kind:"Experiencia española de mapeo participativo",
  note:"Presenta una experiencia española de identificación de activos con participación vecinal y elaboración de un mapa. Es una experiencia documentada, no una clase teórica sobre mapeo.",
  prompt:"¿Cómo transforma el recorrido y la participación vecinal las observaciones en un mapa de activos?"
 },
 'tecnica-paseos':{
  title:"Mapeo participativo en La Luz: recorridos y reconocimiento del barrio",
  institution:"Observatorio de Salud de Asturias · Partycipa y UNGA",
  url:"https://obsaludasturias.com/obsa/mapeo-de-activos-saludables-en-el-barrio-avilesino-de-la-luz/",
  kind:"Experiencia española de recorridos comunitarios",
  note:"El vídeo presenta recorridos vinculados al mapeo de activos. Para aprender específicamente a organizar un Paseo de Jane, se complementa con la guía paso a paso del INTEF.",
  prompt:"¿Qué se aprende caminando con personas del barrio que aporta valor al mapa?"
 },
 'tecnica-fotovoz':{
  title:"Fotovoz y análisis de contenido como técnicas de recogida y análisis de datos cualitativos",
  institution:"Universidad de Sevilla · TV US",
  url:"https://tv.us.es/media/1_8nxa7qri",
  kind:"Vídeo docente universitario español",
  note:"Explica fotovoz y análisis cualitativo dentro de una serie universitaria de metodologías sensibles a la cultura. El contexto es psicosocial; transferir los principios al mapeo comunitario.",
  prompt:"¿Qué significado construyen las personas al seleccionar y comentar sus fotografías?"
 },
 'tecnica-entrevistas':{
  title:"Apuntes prácticos para el desarrollo de entrevistas cualitativas",
  institution:"Álvaro Elices Acero · Universidad de Valladolid (2026)",
  url:"https://uvadoc.uva.es/handle/10324/83803",
  kind:"Vídeo universitario español · entrevista abierta",
  note:"Material audiovisual en español sobre entrevistas abiertas, en profundidad y semiestructuradas. Complementa el guion de entrevista comunitaria de Albolote.",
  prompt:"¿Cómo se sigue el relato de una persona con preguntas abiertas y repreguntas?"
 },
 'tecnica-talleres':{
  title:"Técnicas grupales de investigación · DOCUMEDIA",
  institution:"Universitat de València · equipo docente de investigación cualitativa",
  url:"https://www.uv.es/tecnicas-investigacion-cualitativa-documedia/es/videos/tecnicas-grupales-investigacion-1286380872907/Recurs.html?id=1286442638161",
  kind:"Vídeo docente universitario español",
  note:"Expone técnicas de investigación grupal. Es una base útil para comprender la facilitación y el contraste colectivo, aunque el taller de mapeo tiene propósitos más amplios.",
  prompt:"¿Cómo se articulan las aportaciones de diferentes personas en una interpretación compartida?"
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
