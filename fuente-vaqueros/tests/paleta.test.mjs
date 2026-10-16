import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const path = new URL('../index.html', import.meta.url);
const html = readFileSync(path, 'utf8');
const style = html.match(/<style>([\s\S]*?)<\/style>/)?.[1];
assert.ok(style, 'Se conserva hoja interior');

function toRgb(hex){
  let x=hex.slice(1);
  if(x.length===3||x.length===4)x=x.slice(0,3).split('').map(z=>z+z).join('');
  else x=x.slice(0,6);
  return [0,2,4].map(i=>parseInt(x.slice(i,i+2),16)/255);
}
function hsl(hex){
  const c=toRgb(hex),max=Math.max(...c),min=Math.min(...c),d=max-min;
  if(d===0)return [0,0];
  let h;
  if(max===c[0]) h=((c[1]-c[2])/d)%6;
  else if(max===c[1]) h=(c[2]-c[0])/d+2;
  else h=(c[0]-c[1])/d+4;
  h=(h*60+360)%360;
  const l=(max+min)/2,s=d/(1-Math.abs(2*l-1));
  return [h,s];
}
function luminance(rgb){
  const a=rgb.map(c=>c<=0.04045?c/12.92:((c+0.055)/1.055)**2.4);
  return a[0]*0.2126+a[1]*0.7152+a[2]*0.0722;
}
function contrast(a,b){const l=[luminance(toRgb(a)),luminance(toRgb(b))].sort((x,y)=>y-x);return (l[0]+.05)/(l[1]+.05);}
function colors(text){return [...new Set([...text.matchAll(/#[0-9a-f]{3,8}\b/gi)].map(x=>x[0].toLowerCase()))];}

test('portada e interiores comparten verdes y ningún acento azul saturado',()=>{
  for(const color of colors(html)){
    const [h,s]=hsl(color);
    assert.ok(!(h>=190&&h<=265&&s>=0.2),`Tono azul aún presente: ${color} (hue=${Math.round(h)})`);
  }
  for(const text of ['--teal:#246c53','--accent:#b9dba9','--light:#edf5e9',
    'color:#2f694b','color:#2e7254',
    '--cover-accent:#b9dba9','--cover-card:#1b4136','--cover-line:#406e58']){
    assert.ok(html.includes(text),`Falta el color nuevo: ${text}`);
  }
});
test('botones verdes mantienen contraste de texto accesible',()=>{
  assert.ok(contrast('#246c53','#ffffff')>=4.5,'Botones interiores: falta contraste');
  assert.ok(contrast('#b9dba9','#102a28')>=4.5,'Botón de portada: falta contraste');
  assert.ok(contrast('#2f694b','#f0f5f2')>=4.5,'Resumen de la actividad: falta contraste');
});
test('seis secciones interiores, portada y navegación conservadas',()=>{
  const tabs=[...html.matchAll(/data-tab="([^"]+)"/g)].map(x=>x[1]);
  const sections=[...html.matchAll(/<section class="section(?: active)?" id="([^"]+)"/g)].map(x=>x[1]);
  assert.equal(tabs.length,6);
  assert.deepEqual(tabs,sections);
  assert.ok(html.includes('id="portada-actividad"'));
  assert.ok(html.includes('id="actividad-app"'));
  assert.ok(html.includes('data-return-cover'));
  assert.ok(html.includes("window.addEventListener('hashchange'"));
});
