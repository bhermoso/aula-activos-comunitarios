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
  title:"Observación participante: realización del trabajo de campo",
  institution:"DOCUMEDIA · Universitat de València · proyecto de metodología cualitativa en Sociología y Antropología Social",
  url:"https://www.uv.es/tecnicas-investigacion-cualitativa-documedia/es/tecnicas-cualitativas/tecnica-observacion/fases-trabajo/realizacion-del-trabajo-campo.html",
  kind:"Vídeo universitario sobre observación social · aplicable a paseos comunitarios",
  note:"Explica la observación participante y el conocimiento situado. No es un tutorial de Paseos de Jane: para ese procedimiento se mantiene la guía del INTEF.",
  prompt:"¿Qué relaciones, usos de los espacios y significados podrían observarse durante un paseo comunitario?"
 },
 'tecnica-fotovoz':{
  title:"Del documental social al informe: sociología visual",
  institution:"DOCUMEDIA · Universitat de València · autoría colectiva de Sociología y Antropología Social",
  url:"https://www.uv.es/tecnicas-investigacion-cualitativa-documedia/es/tecnicas-cualitativas/entrevista-profundidad/redaccion-del-informe.html",
  kind:"Práctica de sociología visual (no es un tutorial de fotovoz)",
  note:"Actividad basada en un documental social para comunicar resultados de entrevistas con imágenes y testimonios. Autoría metodológica: proyecto DOCUMEDIA; no se atribuye el documental a personas sin verificar.",
  prompt:"¿Cómo conservar las voces e interpretaciones de participantes al construir un relato visual colectivo?"
 },
 'tecnica-entrevistas':{
  title:"Entrevistas de investigación social: ejemplos audiovisuales",
  institution:"DOCUMEDIA · A. G. Ingellis, J. Gómez Ferri, B. Herzog, J. Pérez y Soriano y J. M. Rodríguez Victoriano · Sociología y Antropología Social, UV",
  url:"https://www.uv.es/tecnicas-investigacion-cualitativa-documedia/es/tecnicas-cualitativas/entrevista-profundidad/material-audiovisual.html",
  kind:"Colección audiovisual de sociología cualitativa",
  note:"Incluye entrevistas de documentales sociales y fragmentos para estudiar su realización, gestión y análisis. Es una colección, no un único vídeo.",
  prompt:"¿Cómo escuchar los relatos vecinales sin convertir la entrevista en un cuestionario cerrado?"
 },
 'tecnica-talleres':{
  title:"Realización y gestión de grupos de discusión",
  institution:"DOCUMEDIA · Universitat de València · equipo docente de metodología cualitativa de ciencias sociales",
  url:"https://www.uv.es/tecnicas-investigacion-cualitativa-documedia/es/tecnicas-cualitativas/tecnicas-grupales/fases-trabajo/realizacion-gestion.html",
  kind:"Vídeo de investigación social y facilitación grupal",
  note:"Describe la moderación y observación de grupos para recoger significados compartidos y puntos de vista divergentes. Aplicable al contraste comunitario.",
  prompt:"¿Cómo favorecer distintas voces y documentar acuerdos y desacuerdos en el taller?"
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
  block.innerHTML='<div class="tech-video-head"><span>MATERIAL AUDIOVISUAL · AUTORÍA Y ENFOQUE SOCIAL</span><h3>'+v.title+'</h3><p>'+v.institution+'</p></div><p><strong>'+v.kind+'</strong> · '+v.note+'</p><div class="tech-video-link"><a href="'+v.url+'" target="_blank" rel="noopener noreferrer">Abrir recurso audiovisual en la institución de origen ↗</a></div><details><summary>Qué observar durante el visionado</summary><p>'+v.prompt+'</p></details><p class="tech-video-note">Material externo; la reproducción puede requerir conexión y abrirse en otra pestaña. Los recursos en inglés pueden necesitar apoyo del guion en español.</p>';
  if(id==='tecnica-paseos'){
   block.insertAdjacentHTML('beforeend','<div class="tech-andalusia"><strong>Guía española específica del paseo</strong><p>«Cómo hacer un paseo Jane», proyecto La Aventura de Aprender del INTEF: preparación, convocatoria y recorrido paso a paso.</p><a href="https://laaventuradeaprender.intef.es/proyectos_colab/como-hacer-un-paseo-jane/?seccion=paso_a_paso" target="_blank" rel="noopener noreferrer">Abrir guía del INTEF ↗</a></div>');
  }
  const context=andalusian[id];
  if(context){
   block.insertAdjacentHTML('beforeend','<div class="tech-andalusia"><strong>Referencia de aplicación andaluza</strong><p>'+context.scope+'</p><a href="'+context.url+'" target="_blank" rel="noopener noreferrer">'+context.label+' · '+context.source+' ↗</a></div>');
  }
  detail.insertAdjacentElement('afterend',block);
 });
}
