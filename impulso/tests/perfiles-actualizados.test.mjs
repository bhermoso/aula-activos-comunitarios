import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {Script} from 'node:vm';
const root=new URL('../../',import.meta.url);
const read=p=>readFileSync(new URL(p,root),'utf8');
const manifest=JSON.parse(read('materiales/perfiles-2026/referencias.json'));
const codec=await import('data:text/javascript;base64,'+Buffer.from(read('assets/session-content-codec.js')).toString('base64'));
for(const [m,f] of Object.entries(manifest))test(m+' conserva perfil, originales, conclusiones y recomendaciones de la última revisión',()=>{
 const p=JSON.parse(read(f.json));assert.equal(p.municipalityId,m);assert.equal(p.results.length,f.results);
 for(const ext of ['pdf','json'])assert.equal(createHash('sha256').update(readFileSync(new URL(f[ext],root))).digest('hex'),f[ext+'Sha256']);
 const dir=m==='loja'?'impulso':m;const deck=read(dir+'/presentacion-perfil.html');const index=read(dir+'/index.html');assert.ok(deck.includes(f.version));assert.ok(deck.includes('../'+f.pdf));assert.ok(index.includes(p.summary));
 for(const a of p.areas)assert.ok(deck.includes(a.rationale));
 for(const c of p.findings)assert.ok(index.includes(c.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')));
 for(const s of deck.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g))if(s[1].trim())new Script(s[1]);
 assert.equal(f.firebaseLatestIsCurrent,m==='alfacar');
});
test('Loja conserva toda la evidencia y originales sin superar el límite de guardado',async()=>{
 const f=manifest.loja,e=JSON.parse(read('impulso/materiales/perfil-2026/sesion-datos.json'));assert.equal(e.profileResultCount,493);assert.equal(e.profileSha256,f.jsonSha256);assert.equal(e.surveyComparison.metrics.length,6);assert.ok(e.income.find(x=>x.code==='1812203002').threshold.startsWith('Cota'));
 const payload={schema:'aula-loja-complete/v1',worksheet:{closingNotes:'Prueba ñ á'},evidence:e,originals:{profileJson:read(f.json),profileJsonSha256:f.jsonSha256,profilePdfBase64:readFileSync(new URL(f.pdf,root)).toString('base64'),profilePdfSha256:f.pdfSha256}};
 assert.ok(Buffer.byteLength(JSON.stringify(payload))>700000);const content=await codec.encodeSessionContent(payload);assert.ok(Buffer.byteLength(content)<700000);assert.deepEqual(await codec.decodeSessionContent(content),payload);
 const legacy={schema:'aula-loja-complete/v1',worksheet:{notes:'sesión anterior'}};assert.deepEqual(await codec.decodeSessionContent(JSON.stringify(legacy)),legacy);
});
test('Alcaldesa primero y preguntas corregidas sin perder las seis voces',()=>{
 const g=read('alfacar/guion-preguntas-20261119.md');const heads=[...g.matchAll(/^## (.*)$/gm)].map(x=>x[1]);
 const ia=heads.findIndex(h=>/Alcaldesa · si permanece/.test(h)),ic=heads.findIndex(h=>/^Carlos/.test(h));assert.ok(ia>=0&&ic===ia+1);assert.match(g,/interviene libremente\. No se le plantean preguntas/);assert.match(g,/morbimortalidad con su presentación y sus datos\. No se le plantean preguntas/);
 assert.ok(g.includes('valoración sintética'));assert.ok(g.includes('indicadores de morbimortalidad'));assert.ok(g.includes('qué conocimiento y qué perspectiva'));
 const s=read('alfacar/index.html');assert.equal((s.match(/class="cq-seat cq-/g)||[]).length,6);
});
test('Alfacar 0.8.2: el Paso al Plan de Acción no le atribuye actuaciones, responsables, recursos ni plazos',()=>{
 const f=manifest.alfacar;assert.equal(f.version,'0.8.2');const t=JSON.parse(read(f.json)).text;
 const s=t.slice(t.indexOf('6. Paso al Plan de Acción'),t.indexOf('7. Autoría'));
 assert.match(s,/Plan de Acción, que fijará las líneas estratégicas, los objetivos y los indicadores/);assert.match(s,/agendas anuales de implantación/);
 assert.doesNotMatch(s,/actuaciones, responsables, recursos y plazos/);assert.doesNotMatch(s,/líneas de actuación/);
 assert.doesNotMatch(read('alfacar/index.html'),/compromisos de ejecución corresponden al Plan de Acción/);
 assert.ok(readFileSync(new URL('materiales/perfiles-2026/alfacar/Alfacar_PSL_v0_8_1_2026-11-16.pdf',root)).length>0);
});
