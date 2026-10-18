import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const section=name=>{
 const a=html.indexOf('<section class="section',html.indexOf('id="'+name+'"')-100);
 return html.slice(a,html.indexOf('</section>',a)+10);
};
test('el expediente RELAS se integra en el bloque 02 del Programa',()=>{
 assert.ok(section('programa').includes('class="fv-trayectoria" id="contexto" open'));
 assert.ok(section('programa').includes('<span class="num">02</span>'));
 for(const txt of ['2021','2022','102 cuestionarios','29 de abril de 2022','julio y agosto','fecha de una paralización definitiva']){
  assert.ok(section('programa').includes(txt),'No está documentado '+txt);
 }
});
test('programa completo por bloques y personas citadas como previstas/invitadas',()=>{
 const prog=section('programa');
 for(const t of ['Apertura institucional','Trayectoria del Plan Local','Informe sobre la situación de salud de Fuente Vaqueros','Mesa-coloquio intersectorial','Conclusiones y propuestas de continuidad','Trabajo participativo','Puesta en común']){
  assert.ok(prog.includes(t),'Falta bloque: '+t);
 }
 for(const n of ['José Miguel Muñoz Ortega','Carlos del Moral Campaña','Alicia Bellido González','María Martín Calvo','Francisco J. Pigne Marín','Blas Hermoso Rico','Margarita Rut Goena Martínez','Raquel Cal','Jenifer González','Inserta Andalucía','Asociación de Regantes']){
  assert.ok(prog.includes(n),'No citado en programa: '+n);
  assert.ok(section('participantes').includes(n),'No citado en participantes: '+n);
 }
 assert.ok(prog.includes('Composición de la mesa pendiente de confirmación'));
 assert.ok(prog.includes('Moderación a cargo de Rubén (área de Cultura del Ayuntamiento de Fuente Vaqueros; apellidos pendientes)'));
 assert.ok(section('participantes').includes('Está confirmada la intervención de Carlos del Moral Campaña'));
});
test('no se difunden teléfonos ni respuestas individuales de archivos privados',()=>{
 assert.ok(html.includes('Rubén'),'El moderador comunicado es Rubén');
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
  for(const t of ['revisar el trabajo de priorización', 'Localiza Salud','pendiente de contrastar']){
    assert.ok(contexto.toLowerCase().includes(t.toLowerCase()),'Contexto omite '+t);
  }
  for(const t of ['Blas Hermoso Rico','revisar el trabajo de priorización de 2022','mapeo comunitario de activos','Composición de la mesa']){
    assert.ok(programa.includes(t),'Programa omite '+t);
  }
  for(const t of ['Revisión técnica','Deliberación del grupo motor','Consulta a la ciudadanía','Procedimiento combinado','Localiza Salud','no significa ausencia de activos reales']){
    assert.ok(proceso.includes(t),'Hoja de ruta omite '+t);
  }
  assert.ok(practica.includes('id="fv-prioridad"'));
  assert.ok(html.includes("prioridad:fvv('fv-prioridad')"),'Se guarda relación a prioridad');
  assert.ok(html.includes("x.prioridad||''"),'Se exporta con compatibilidad con datos anteriores');
  assert.ok(practica.includes('no registra recursos en Localiza Salud'));
  assert.ok(html.includes('Rubén'),'Se permite nombre propio con apellidos pendientes');
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
 assert.ok(s.includes('id="contexto" open'), 'recorrido histórico desplegado al entrar');
 assert.equal((s.match(/<details /g)||[]).length,9);
 assert.ok(s.includes('Participantes previstos · 7 personas'));
 assert.ok(s.includes('Invitaciones · 17 personas o entidades'));
});
