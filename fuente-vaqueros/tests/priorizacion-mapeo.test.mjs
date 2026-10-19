import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {test} from 'node:test';
import {Script} from 'node:vm';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>readFileSync(path.join(root,p),'utf8');
const first=read('index.html'),next=read('sesion-priorizacion-mapeo.html'),guide=read('SESION_PRIORIZACION_Y_MAPEO.md');

test('El taller de impulso conserva 7 bloques, fecha, moderador, y no suplanta la segunda sesión',()=>{
 for(const x of ['22 de octubre de 2026','Rubén García Martín','técnico de Cultura del Ayuntamiento',
 'Carlos del Moral Campaña','Apertura institucional','Trayectoria del Plan Local',
 'La visión de la salud local desde la Atención Primaria, las familias y la comunidad educativa','Próximos pasos: perfil de salud local, priorización y mapeo de activos',
 'Trabajo participativo','Puesta en común y cierre'])
  assert.ok(first.includes(x),'Falta '+x);
 assert.ok(first.includes('href="sesion-priorizacion-mapeo.html"'));
 assert.ok(first.includes('revisar la priorización existente'));
 assert.ok(first.includes('sin iniciarlos ahora'));
 assert.ok(first.includes('una vez seleccionadas las grandes líneas estratégicas'));
 assert.ok(first.includes('decidir si los resultados, el procedimiento y su vigencia son adecuados'));
 assert.ok(first.includes('Próximos pasos: perfil de salud local, priorización y mapeo de activos'));
});

test('Prioridades Fuente Vaqueros 2022 y Localiza Salud mantienen cautelas documentales',()=>{
 for(const x of ['102 cuestionarios','416 selecciones','33 problemas','27 factores',
   'Hanlon','no se localizaron resultados finales aprobados',
   'ningún activo registrado','pendiente de comprobación directa',
   'Cero registros no significa cero activos comunitarios reales'])
  assert.ok(guide.includes(x),'Guion omite '+x);
 assert.ok(next.includes('102 cuestionarios'));
 assert.ok(next.includes('416 selecciones'));
 assert.ok(next.includes('33 problemas'));
 assert.ok(next.includes('27 factores'));
 assert.ok(next.includes('no constan puntuaciones finales de Hanlon'));
 assert.ok(next.includes('Dato pendiente de comprobación directa'));
 assert.ok(next.includes('Ausencia de registros no significa ausencia de activos'));
});

test('Agenda coherente: priorización, líneas y planificación del mapeo dentro de la misma sesión',()=>{
 const expected=[
  ['apertura',10],['antecedentes',20],['contraste',20],
  ['consulta',15],['lineas',15],['plan-mapeo',30],['cierre',10]
 ];
 const got=[...next.matchAll(/data-agenda-key="([^"]+)" data-minutes="(\d+)"/g)]
   .map(m=>[m[1],Number(m[2])]);
 assert.deepEqual(got,expected);
 assert.equal(got.reduce((total,r)=>total+r[1],0),120);
 for(const [id,min] of expected){
  assert.ok(guide.includes('| `'+id+'` | '+min+' min |'),'Guion desalineado: '+id);
 }
 assert.ok(next.indexOf('id="antecedentes"')<next.indexOf('id="mapeo"'));
 assert.ok(next.includes('qué activos mapear, con quién, en qué ámbitos'));
 assert.ok(next.includes('El trabajo de campo y las altas en Localiza Salud serán posteriores')||
    next.includes('Se planifica aquí; se ejecuta después'));
});

test('Si se consulta, líneas y matriz no se tratan como aprobadas',()=>{
 for(const x of ['Provisional (pendiente de priorización)',
 'Seleccionada por el Grupo Motor (acta)',
 'las grandes líneas quedan pendientes',
 'no iniciará el trabajo de campo',
 'no guardan ni se envían'])
  assert.ok(next.toLowerCase().includes(x.toLowerCase())||guide.toLowerCase().includes(x.toLowerCase()),'Falta límite: '+x);
 assert.ok(next.includes('No se registran activos en Localiza Salud desde el Aula'));
});

test('La matriz ofrece qué, dónde, con quién, técnicas, responsables y privacidad',()=>{
 for(const x of ['name="linea"','name="estado"','name="ambito"','name="que"',
  'name="quienes"','name="tecnica"','name="encargo"',
  'id="add-line"','cloneNode(true)','window.print()'])
  assert.ok(next.includes(x),'Falta '+x);
 assert.ok(!/localStorage|sessionStorage|firebase|fetch\(/i.test(next));
 assert.ok(next.includes('sin localizar personas, refugios ni direcciones confidenciales')||
  next.includes('no publicar ubicaciones sensibles'));
});

test('Navegación y enlaces del segundo encuentro, sin mezclar municipios',()=>{
 for(const t of ['href="../index.html"','href="index.html"',
 'href="index.html#programa"','id="volver"','href="sesion-priorizacion-mapeo.html"'])
  assert.ok(next.includes(t)||first.includes(t),'Falta enlace: '+t);
 const html=next;
 for(const match of html.matchAll(/href="([^"]+)"/g)){
  let url=match[1];
  if(!url||url.startsWith('#')||/^(https?:|mailto:)/.test(url))continue;
  url=url.split('#')[0].split('?')[0];
  assert.ok(existsSync(path.resolve(root,url)),'Enlace roto: '+url);
 }
 assert.ok(!guide.includes('162 recursos'));
 assert.ok(!guide.includes('157 pendientes'));
 assert.ok(!guide.includes('40 participantes'));
});

test('Los scripts de ambas páginas son parseables',()=>{
 for(const html of [first,next]){
  for(const m of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)){
    assert.doesNotThrow(()=>new Script(m[1]));
  }
 }
});
