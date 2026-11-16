import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {Script} from 'node:vm';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const read=p=>readFileSync(path.join(root,p),'utf8');
const manifest=JSON.parse(read('materiales/perfiles-2026/referencias.json'));

test('Cada taller identifica su propio perfil y originales con SHA-256',()=>{
 for(const [m,f] of Object.entries(manifest)){
  const p=JSON.parse(read(f.json));assert.equal(p.municipalityId,m);assert.equal(p.title,f.profileTitle);assert.equal(p.results.length,f.results);
  for(const ext of ['json','pdf'])assert.equal(createHash('sha256').update(readFileSync(path.join(root,f[ext]))).digest('hex'),f[ext+'Sha256']);
  const folder=m==='loja'?'impulso':m;const deck=read(folder+'/presentacion-perfil.html');
  assert.ok(deck.includes(f.version));if(['alfacar','atarfe'].includes(m))assert.ok(!deck.includes('href="perfil/"'));assert.ok(deck.includes('../'+f.pdf));assert.ok(deck.includes('../'+f.json));assert.ok(deck.includes('En revisión'));
  assert.ok(existsSync(path.join(root,folder,'presentacion-perfil-antecedente-20261114.html')));
 }
});
test('Las convocatorias nuevas no reutilizan las fechas históricas',()=>{
 assert.match(read('alfacar/index.html'),/19 de noviembre de 2026/);assert.match(read('alfacar/index.html'),/11:00/);
 assert.match(read('atarfe/index.html'),/26 de noviembre de 2026, a las 11:00/);
 assert.match(read('atarfe/presentacion-perfil.html'),/26 de noviembre de 2026 · 11:00/);
 assert.match(read('impulso/priorizacion-2026.html'),/2026-11-27T10:00:00\+01:00/);
 assert.match(read('zagra/presentacion-perfil.html'),/fecha y hora por confirmar/);
 assert.ok(!read('atarfe/presentacion-perfil.html').includes('Grupo Motor · 10 de noviembre'));
});
test('Alfacar conserva seis participantes aportados y retira la asistencia sin intervención',()=>{
 const s=read('alfacar/index.html');const roster=s.slice(s.indexOf('id="participantes"'));
 for(const name of ['Mª Fátima Gómez Abad','Elisa González Sánchez','María Ángeles Granados Contreras','Miriam Denia Milla','Juana Jiménez Cobo','Araceli Moya Alcalde'])assert.ok(roster.includes(name),name);
 assert.ok(!s.includes('Ana Belén')); assert.ok(!s.includes('sin intervención prevista'));
 assert.match(roster,/La mesa reúne seis participantes/);
 const col=s.slice(s.indexOf('id="moderacion"'));const map=col.slice(col.indexOf('<figure class="cq"'),col.indexOf('</figure>'));
 for(const name of ['Mª Fátima Gómez Abad','Elisa González Sánchez','María Ángeles Granados Contreras','Miriam Denia Milla','Juana Jiménez Cobo','Araceli Moya Alcalde','Carlos del Moral Campaña','Blas Hermoso Rico'])assert.ok(map.includes(name),'Gráfico: '+name);
 const seats=[...map.matchAll(/<li class="cq-seat[^"]*"[^>]*><span class="cq-n"[^>]*>(\d)<\/span><span class="cq-persp">[^<]*<\/span><strong>([^<]*)<\/strong>/g)].map(x=>x[1]+' '+x[2]);
 assert.deepEqual(seats,['1 Carlos del Moral Campaña','2 Araceli Moya Alcalde','3 María Ángeles Granados Contreras','4 Miriam Denia Milla','5 Juana Jiménez Cobo','6 Blas Hermoso Rico']);
 assert.ok(!s.includes('Enfermero escolar'));assert.ok(!s.includes('el Juana'));assert.ok(!s.includes('Milla Milla'));
});
test('Las presentaciones mantienen fuente, navegación y frontera con la decisión',()=>{
 for(const folder of ['alfacar','atarfe','impulso','zagra']){
  const s=read(folder+'/presentacion-perfil.html');const slides=s.match(/<section class="slide/g)||[];assert.ok(slides.length>=15,folder);
  for(const id of ['prev','next','counter','fs'])assert.ok(s.includes(`id="${id}"`),folder+id);
  for(const script of s.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g))if(script[1].trim())new Script(script[1]);
  assert.ok(s.includes('Síntesis del perfil identificado, no aprobación institucional.'));
 }
 const atarfe=read('atarfe/presentacion-perfil.html');assert.ok(atarfe.includes('se reunieron 753'));assert.ok(!atarfe.includes('Su validación como activos está pendiente.'));
 assert.ok(atarfe.includes('No se extiende automáticamente la declaración a los añadidos'));
});
test('Elisa presenta y modera sin figurar entre las personas preguntadas',()=>{
 const g=read('alfacar/guion-preguntas-20261119.md');
 const blocks=g.split(/^## /m).slice(1).filter(b=>/^\d\. ¿|^\d\. .*¿/m.test(b));
 assert.equal(blocks.length,7);
 for(const b of blocks){assert.ok(!b.split('\n')[0].includes('Elisa'));assert.equal((b.match(/^\d\. /gm)||[]).length,2);assert.equal((b.match(/¿/g)||[]).length,2);}
 assert.ok(g.includes('No es necesario agotarlas'));assert.ok(!g.includes('Ana Belén'));
 const s=read('alfacar/index.html');assert.ok(s.includes('Presenta y modera'));
});
test('La vista proyectable del coloquio no muestra el guion de moderación',()=>{
 const s=read('alfacar/index.html');const col=s.slice(s.indexOf('id="moderacion"'),s.indexOf('</section>',s.indexOf('id="moderacion"')));
 for(const t of ['Guion de moderación','fv-question-guide','Dinámica propuesta','¿','Apoyo para el cierre'])assert.ok(!col.includes(t),t);
 assert.match(col,/Apertura institucional[\s\S]*Mª Fátima Gómez Abad/);assert.match(col,/Presenta y modera[\s\S]*Elisa González Sánchez/);
});
test('Los enlaces relativos de las páginas modificadas y sus originales resuelven',()=>{
 for(const f of ['index.html','alfacar/index.html','atarfe/index.html','zagra/index.html','impulso/index.html',...['alfacar','atarfe','zagra','impulso'].map(m=>m+'/presentacion-perfil.html')]){
  for(const [,url] of read(f).matchAll(/(?:href|src)="([^"#]+)"/g)){
   if(/^(?:https?:|data:|mailto:|tel:|javascript:)/.test(url))continue;
   const target=decodeURIComponent(url.split(/[?#]/)[0]);if(target)assert.ok(existsSync(path.resolve(root,path.dirname(f),target)),f+' → '+url);
  }
 }
});
test('Loja conserva ESdE separada y no sobreescribe automáticamente sesiones anteriores',async()=>{
 const evidence=JSON.parse(read('impulso/materiales/perfil-2026/sesion-datos.json'));assert.equal(evidence.profileSha256,manifest.loja.jsonSha256);
 assert.equal(evidence.profilePdfSha256,manifest.loja.pdfSha256);assert.equal(evidence.surveyComparison.metrics.length,6);
 assert.ok(!JSON.parse(read(manifest.loja.json)).surveyComparison);
 const js=read('assets/loja-priorizacion.js');new Script(js);assert.ok(js.includes('fetch(evidence.profileJsonPath)'));assert.ok(js.includes('version = saved.version'));
 assert.ok(js.includes('previousSession = saved'));assert.ok(js.includes('download-previous-session'));assert.ok(!js.includes("fetch('materiales/perfil-2026/Loja_PSL_renta_2024"));
 const payload={schema:'aula-loja-complete/v1',worksheet:{},evidence,originals:{profileJson:read(manifest.loja.json),profileJsonSha256:manifest.loja.jsonSha256,profilePdfBase64:readFileSync(path.join(root,manifest.loja.pdf)).toString('base64'),profilePdfSha256:manifest.loja.pdfSha256}};
 const codec=await import('data:text/javascript;base64,'+Buffer.from(read('assets/session-content-codec.js')).toString('base64')); const content=await codec.encodeSessionContent(payload); assert.ok(Buffer.byteLength(content)<680000,'Margen bajo límite de 700000 bytes del guardado Firebase'); assert.deepEqual(await codec.decodeSessionContent(content),payload);
});


test('Los cuatro talleres usan el mismo año de movimientos y calculan ambos saldos con su propia fuente municipal',()=>{
 const demographic=JSON.parse(read('materiales/presentaciones-2026/demografia-armonizada.json'));
 const expected={alfacar:[21,-12],atarfe:[407,51],loja:[139,-38],zagra:[-36,-13]};
 for(const [municipality,record] of Object.entries(demographic.municipalities)){
  assert.equal(record.movementYear,2024);assert.equal(record.populationYear,2025);
  assert.equal(record.incoming-record.outgoing,expected[municipality][0]);assert.equal(record.births-record.deaths,expected[municipality][1]);
  const deck=read(record.folder+'/presentacion-perfil.html');
  const movement=deck.match(/<section class="slide demographic-movements">([\s\S]*?)<\/section>/)[1];
  assert.ok(movement.includes(record.sourceUrl));assert.ok(movement.includes('2024'));
  assert.ok(!/contrastar (?:la lectura|lecturas) sanitari|Es un dato que pide contraste|valores de Granada son los correctos/i.test(deck));
 }
});
