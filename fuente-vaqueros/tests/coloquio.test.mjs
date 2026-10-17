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

test('la mesa conecta los indicadores epidemiológicos con cuatro miradas humanas diferenciadas',()=>{
  const s=section('moderacion');
  for(const t of [
    'Mesa-coloquio · guion por ámbitos',
    'Carlos del Moral Campaña',
    'Entrada de Raúl, moderador',
    'Alicia Bellido González',
    'María Martín Calvo',
    'Francisco J. Pigne Marín',
    'Margarita Rut Goena Martínez',
    'Atención primaria',
    'Familias y escuela',
    'Salud en el ámbito educativo',
    'Bienestar emocional y salud mental'
  ]) assert.ok(s.includes(t),'Falta perspectiva: '+t);
  assert.ok(s.indexOf('Alicia Bellido González')<s.indexOf('María Martín Calvo'));
  assert.ok(s.indexOf('María Martín Calvo')<s.indexOf('Francisco J. Pigne Marín'));
  assert.ok(s.indexOf('Francisco J. Pigne Marín')<s.indexOf('Margarita Rut Goena Martínez'));
});

test('preguntas abiertas por ámbito, no examen técnico ni presunción de patologías',()=>{
  const s=section('moderacion');
  for(const t of [
    '¿qué realidad de salud estáis encontrando hoy en Fuente Vaqueros?',
    '¿Qué ha cambiado en las personas que atendéis y en sus necesidades?',
    '¿cómo veis el bienestar de los niños, las niñas y los adolescentes?',
    '¿qué necesidades de salud detectas entre el alumnado?',
    '¿cómo percibes el bienestar emocional de la población?',
    'barreras de acceso',
    'utilización frecuente de consultas',
    'problemas de salud emergentes',
    'No se presupone que todas esas situaciones se estén produciendo',
    'sin solicitar información personal o clínica',
    'no equivalen a prioridades formalmente acordadas'
  ]) assert.ok(s.includes(t),'Falta: '+t);
  for(const old of [
    'Pregunta inicial común','Preguntas de apoyo para conversar',
    '¿Qué procedimiento permitiría revisar las prioridades',
    '¿Qué conclusiones de la consulta','Rubén'
  ]) assert.ok(!s.includes(old),'Texto no pertinente: '+old);
});

test('el programa distingue la presentación de Carlos, mesa y conclusiones de Blas',()=>{
  const s=section('programa');
  const epi=s.indexOf('03</span><h3>Situación de salud');
  const mesa=s.indexOf('04</span><h3>Mesa-coloquio intersectorial');
  const conclusiones=s.indexOf('05</span><h3>Conclusiones y propuestas de continuidad');
  assert.ok(epi>=0&&mesa>epi&&conclusiones>mesa,'Secuencia del programa alterada');
  for(const name of ['Alicia Bellido González','María Martín Calvo','Francisco J. Pigne Marín','Margarita Rut Goena Martínez']){
    const block=s.slice(mesa,conclusiones);
    assert.ok(block.includes(name),'Falta nombre en el bloque 04: '+name);
  }
  assert.ok(s.includes('Composición de la mesa pendiente de confirmación'));
  assert.ok(s.includes('Moderación a cargo de Raúl (apellidos pendientes)'));
  assert.ok(s.includes('Blas Hermoso Rico'));
  assert.ok(s.includes('revisar el trabajo de priorización de 2022'));
});

test('se conservan los cinco apartados, mapeo y navegación',()=>{
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

test('pregunta central visible y apoyos opcionales desplegables',()=>{
 const s=section('moderacion');
 assert.equal((s.match(/<details class="fv-detalle">/g)||[]).length,4);
 assert.ok(s.includes('Claves para profundizar'));
 assert.ok(s.includes('trabajo en el ámbito educativo'));
});
