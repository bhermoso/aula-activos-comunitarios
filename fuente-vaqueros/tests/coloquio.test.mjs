import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
function section(id){
  let start=html.indexOf('<section class="section" id="'+id+'">');
  if(start<0) start=html.indexOf('<section class="section active" id="'+id+'">');
  assert.ok(start>=0,'No existe sección '+id);
  return html.slice(start,html.indexOf('</section>',start)+10);
}

test('coloquio centrado en escuchar experiencias, no en evaluar conocimientos de RELAS',()=>{
  const s=section('moderacion');
  for(const t of [
    'Mesa-coloquio · guía de escucha',
    'Desde su trabajo, su entidad o su experiencia cotidiana, ¿cómo ve la salud y el bienestar',
    '¿Qué es lo que más le preocupa',
    '¿Qué cosas funcionan bien',
    '¿Hay situaciones, colectivos o dificultades',
    '¿Qué experiencias, iniciativas o colaboraciones',
    '¿Qué le gustaría que se tuviera en cuenta',
    'no una batería que deba completarse',
    'sin convertirlo en prioridades ya acordadas'
  ]) assert.ok(s.includes(t),'Falta orientación de escucha: '+t);
  for(const technical of [
    '¿Qué conclusiones de la consulta',
    '¿Qué procedimiento permitiría revisar las prioridades',
    '¿Qué capacidades, redes, espacios y recursos comunitarios podrían vincularse a las líneas prioritarias?',
    'Rubén'
  ]) assert.ok(!s.includes(technical),'Pregunta técnica o personalismo residual: '+technical);
});

test('el programa sitúa la entrevista antes de las conclusiones de Blas',()=>{
  const s=section('programa');
  const colloquium=s.indexOf('Mesa-coloquio intersectorial: cómo se vive la salud');
  const conclusions=s.indexOf('Conclusiones y propuestas de continuidad: priorización y mapeo de activos');
  assert.ok(colloquium>=0 && conclusions>colloquium);
  assert.ok(s.includes('Blas Hermoso Rico'),'Las conclusiones deben conservar su propuesta de autor');
  assert.ok(s.includes('Composición de la mesa pendiente de confirmación'));
 assert.ok(s.includes('Moderación a cargo de Raúl (apellidos pendientes)'));
});

test('las demás secciones y navegación del módulo siguen disponibles',()=>{
  for(const id of ['programa','participantes','moderacion','proceso','practica']){
    assert.ok(html.includes('data-tab="'+id+'"'));
    assert.ok(html.includes('id="'+id+'"'));
  }
  assert.ok(!html.includes('data-tab="contexto"'));
  assert.ok(section('programa').includes('id="contexto" open'));
  assert.ok(section('proceso').includes('Revisión técnica'));
  assert.ok(section('proceso').includes('Consulta a la ciudadanía'));
  assert.ok(section('practica').includes('id="fv-prioridad"'));
});
