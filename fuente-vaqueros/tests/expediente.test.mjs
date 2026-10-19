import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const section=name=>{
 const a=html.indexOf('<section class="section',html.indexOf('id="'+name+'"')-100);
 return html.slice(a,html.indexOf('</section>',a)+10);
};
test('el expediente RELAS se integra en el bloque 02 del Programa',()=>{
 assert.ok(section('programa').includes('class="fv-trayectoria" id="contexto">'));
 assert.ok(section('programa').includes('<span class="num">02</span>'));
 for(const txt of ['2021','2022','102 cuestionarios','29 de abril de 2022','julio y agosto','fecha de una paralización definitiva']){
  assert.ok(section('programa').includes(txt),'No está documentado '+txt);
 }
});
test('programa completo por bloques y personas citadas como previstas/invitadas',()=>{
 const prog=section('programa');
 for(const t of ['Apertura institucional','Trayectoria del Plan Local','Informe sobre la situación de salud de Fuente Vaqueros','La visión de la salud local desde la Atención Primaria, las familias y la comunidad educativa','Conclusiones y propuestas de continuidad','Trabajo participativo','Puesta en común']){
  assert.ok(prog.includes(t),'Falta bloque: '+t);
 }
 for(const n of ['José Miguel Muñoz Ortega','Carlos del Moral Campaña','Alicia Bellido González','María Martín Calvo','Francisco J. Pigne Marín','Blas Hermoso Rico','Raquel Cal','Jenifer González','Inserta Andalucía','Asociación de Regantes']){
  assert.ok(prog.includes(n),'No citado en programa: '+n);
  assert.ok(section('participantes').includes(n),'No citado en participantes: '+n);
 }
 assert.ok(prog.includes('Composición de la mesa pendiente de confirmación'));
 assert.ok(prog.includes('Moderación a cargo de Rubén García Martín, técnico de Cultura del Ayuntamiento de Fuente Vaqueros'));
 assert.ok(section('participantes').includes('Está confirmada la intervención de Carlos del Moral Campaña'));
});
test('no se difunden teléfonos ni respuestas individuales de archivos privados',()=>{
 assert.ok(html.includes('Rubén García Martín'),'El moderador comunicado es Rubén García Martín');
 assert.ok(html.includes('Cultura del Ayuntamiento'),'Debe constar la vinculación municipal');
 assert.ok(!html.includes('Raúl'),'No mantener la atribución anterior');
 assert.ok(!html.includes('651 963 794'));
 assert.ok(!html.includes('677905855'));
 assert.ok(!html.includes('agustin.gomez.jimenez.sspa@'));
});
test('cinco secciones interiores sin pestaña independiente Punto de partida',()=>{
 for(const id of ['programa','participantes','moderacion','proceso','practica']){
  assert.ok(html.includes('id="'+id+'"'));
  assert.ok(html.includes('data-tab="'+id+'"'));
 }
 assert.ok(!html.includes('data-tab="contexto"'));
 assert.ok(html.includes('id="contexto"'),'compatibilidad con enlaces antiguos');
 assert.ok(html.includes("--teal:#102a28"),'paleta verde botella publicada');
});
test('conclusiones de Blas: priorización de 2022 y mapeo vinculado a líneas prioritarias',()=>{
  const contexto=section('programa');
  const programa=section('programa');
  const proceso=section('proceso');
  const practica=section('practica');
  for(const t of ['revisar la priorización existente', 'Localiza Salud','pendiente de verificación']){
    assert.ok(contexto.toLowerCase().includes(t.toLowerCase()),'Contexto omite '+t);
  }
  for(const t of ['Blas Hermoso Rico','revisar la priorización existente','decidir si resulta válida','Composición de la mesa']){
    assert.ok(programa.includes(t),'Programa omite '+t);
  }
  for(const t of ['Revisión técnica','Deliberación del grupo motor','Consulta a la ciudadanía','Procedimiento combinado','Localiza Salud','no significa ausencia de activos reales']){
    assert.ok(proceso.includes(t),'Hoja de ruta omite '+t);
  }
  assert.ok(practica.includes('id="fv-prioridad"'));
  assert.ok(html.includes("prioridad:fvv('fv-prioridad')"),'Se guarda relación a prioridad');
  assert.ok(html.includes("x.prioridad||''"),'Se exporta con compatibilidad con datos anteriores');
  assert.ok(practica.includes('no registra recursos en Localiza Salud'));
  assert.ok(html.includes('Rubén García Martín'),'Debe figurar el nombre completo confirmado');
});
test('JavaScript de la página sigue siendo sintácticamente válido',async()=>{
  const {Script}=await import('node:vm');
  const scripts=html.split('<script>').slice(1).map(x=>x.split('</script>')[0]);
  assert.ok(scripts.length>=2,'Faltan scripts incrustados');
  for(const js of scripts) new Script(js);
});

test('resultados 2022 y método Hanlon sustentados sin inventar priorización aprobada',()=>{
 const s=section('programa');
 for(const required of [
  '102 cuestionarios y 416 selecciones','33 problemas','27 problemas o factores',
  'magnitud, severidad y efectividad','(M + S) × E',
  'Drogas ilegales','Drogas legales','Alimentación no saludable',
  'Ámbito escolar','Desempleo','Adicciones sin sustancia',
  'Desigualdades y exclusión social','Falta de participación','Bienestar emocional',
  'no constan las puntuaciones finales de Hanlon ni una priorización aprobada'
 ]) assert.ok(s.includes(required),'Falta evidencia o cautela: '+required);
 assert.ok(s.includes('id="contexto">'), 'recorrido histórico cerrado al entrar');
 assert.equal((s.match(/<details /g)||[]).length,8,'Ocho paneles del Programa, también en main antes de esta corrección');
 assert.ok(s.includes('Participantes previstos · 6 personas'));
 assert.ok(s.includes('Invitaciones · 17 personas o entidades'));
});

test('moderación: nombre completo, función municipal y ninguna etiqueta desactualizada',()=>{
 const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
 const checks=[
  'Moderación: Rubén García Martín',
  'Modera <strong>Rubén García Martín</strong>',
  'Moderación a cargo de Rubén García Martín, técnico de Cultura del Ayuntamiento de Fuente Vaqueros',
  'La moderación estará a cargo de <strong>Rubén García Martín</strong>',
  '<strong>Moderación:</strong> Rubén García Martín',
  'Entrada de Rubén García Martín, moderador'
 ];
 for(const check of checks)assert.ok(html.includes(check),'Falta corregir: '+check);
 assert.ok(!/apellidos? pendientes?|apellido está pendiente|apellidos por confirmar/i.test(html),'Queda un aviso antiguo de apellido pendiente');
});


test('Sede y horario se reflejan en portada, programa, participantes y datos generales',()=>{
 const venue='Ayuntamiento de Fuente Vaqueros · Sala de audiovisuales (1.ª planta) · Plaza del Doctor Pareja, 1';
 const hours='10:30–12:00';
 const cover=html.slice(html.indexOf('<section class="portada'),html.indexOf('<div class="actividad-app"'));
 const opening=html.slice(html.indexOf('<div class="actividad-app"'),html.indexOf('<section class="section active" id="programa">'));
 const program=section('programa');
 const attendees=section('participantes');
 for(const [label,fragment] of [['portada',cover],['cabecera interior',opening],['programa',program],['participantes',attendees]]){
   assert.ok(fragment.includes(venue),label+' sin dirección/sala');
   assert.ok(fragment.includes(hours),label+' sin 10:30–12:00');
   assert.ok(!/Lugar y horario por confirmar|Lugar y horario: por confirmar|Lugar y horario pendientes de concretar/i.test(fragment),label+' aún sin corregir');
 }
 assert.ok(program.includes('Los siete bloques se desarrollarán dentro de los 90 minutos'));
 assert.ok(attendees.includes('Rubén García Martín'));
 assert.ok(html.includes('Siguiente sesión del Grupo Motor · fecha por acordar'),'No atribuir franja horaria al siguiente encuentro');
});

test('El expediente conserva la convocatoria completa sin asignar tiempos ficticios a cada bloque',()=>{
 const expediente=readFileSync(new URL('../EXPEDIENTE_2021_2022_Y_PROGRAMA.md',import.meta.url),'utf8');
 for(const term of ['22 de octubre de 2026','10:30–12:00','Sala de audiovisuales (1.ª planta)','Plaza del Doctor Pareja, 1']){
   assert.ok(expediente.includes(term),'Falta dato de convocatoria: '+term);
 }
});


test('el programa conserva siete bloques sin imponer recuperar la priorización histórica ni iniciar mapeos',()=>{
 const prog=section('programa');
 const titles=[...prog.matchAll(/<span class="num">([0-9]{2})<\/span><h3>([^<]+)<\/h3>/g)].map(m=>[m[1],m[2]]);
 assert.deepEqual(titles.map(x=>x[0]),['01','02','03','04','05','06','07']);
 const expectedTitle='La visión de la salud local desde la Atención Primaria, las familias y la comunidad educativa';
 assert.equal(titles.find(x=>x[0]==='04')?.[1],expectedTitle);
 const first=prog.indexOf('<span class="num">02</span>');
 const second=prog.indexOf('<span class="num">03</span>');
 const two=prog.slice(first,second);
 assert.ok(two.includes('<h3>Trayectoria del Plan Local de Salud</h3><details class="fv-trayectoria" id="contexto">'));
 assert.ok(!two.includes('id="contexto" open'),'El histórico debe estar cerrado por defecto');
 const five=prog.slice(prog.indexOf('<span class="num">05</span>'),prog.indexOf('<span class="num">06</span>'));
 assert.ok(five.includes('revisar la priorización existente y decidir si resulta válida o si necesita actualizarse'));
 assert.ok(!five.includes('recuperar los problemas más señalados en 2022'));
 const six=prog.slice(prog.indexOf('<span class="num">06</span>'),prog.indexOf('<span class="num">07</span>'));
 assert.ok(six.includes('Planificar participativamente cómo revisar'));
 assert.ok(six.includes('una vez seleccionadas las grandes líneas estratégicas'));
 assert.ok(!six.includes('Recoger propuestas exploratorias de actores y recursos'));
 assert.ok(html.includes('Rubén García Martín'));
 assert.ok(html.includes('Participantes previstos · 6 personas'));
});
