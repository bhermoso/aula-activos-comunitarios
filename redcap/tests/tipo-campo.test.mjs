import {readFileSync} from 'node:fs';
import {strict as assert} from 'node:assert';
import {test} from 'node:test';
import {Script} from 'node:vm';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const js=html.match(/<script>([\s\S]*?)<\/script>/)?.[1]||'';
const start=js.indexOf('const AYUDAS_TIPO_CAMPO = Object.freeze(');
const end=js.indexOf('\nfunction wire(){',start);
assert.ok(start>=0&&end>start,'No se encuentra la lógica del asistente');
const {AYUDAS_TIPO_CAMPO,conectarAsistenteTipo}=new Script(js.slice(start,end)+'\n({AYUDAS_TIPO_CAMPO,conectarAsistenteTipo});').runInNewContext();

function simularAsistente(){
  const boton=v=>({
    dataset:{v},
    attributes:{'aria-pressed':'false'},
    setAttribute(name,value){this.attributes[name]=String(value)},
  });
  const inicio=[boton('abierta'),boton('cerrada')];
  const abiertas=['Text Box + validación','Notes Box','Calculated Field'].map(boton);
  const cerradas=['Yes - No','Radio Buttons','Drop-down','Checkboxes'].map(boton);
  const grupos=[{dataset:{show:'abierta'},hidden:true},{dataset:{show:'cerrada'},hidden:true}];
  const res={textContent:'Elija una opción'};
  const titulo={textContent:''},cuerpo={textContent:''};
  const aviso={hidden:true,className:'note',querySelector(q){
    if(q==='[data-aviso-titulo]')return titulo;
    if(q==='[data-aviso-cuerpo]')return cuerpo;
    throw new Error('Selector no previsto: '+q);
  }};
  const lt={
    querySelector(q){
      if(q==='#tipo-res')return res;
      if(q==='#tipo-aviso')return aviso;
      throw new Error('Selector no previsto: '+q);
    },
    querySelectorAll(q){
      if(q==='[data-q="a"] button')return inicio;
      if(q==='[data-q="b"] button')return [...abiertas,...cerradas];
      if(q==='[data-show]')return grupos;
      throw new Error('Selector no previsto: '+q);
    }
  };
  conectarAsistenteTipo(lt);
  return {inicio,abiertas,cerradas,grupos,res,titulo,cuerpo,aviso};
}

test('Cada opción de campo disponible tiene un consejo específico',()=>{
  const options=[...html.matchAll(/<button[^>]+data-v="([^"]+)"/g)].map(m=>m[1])
    .filter(x=>x!=='abierta'&&x!=='cerrada');
  const expected=['Text Box + validación','Notes Box','Calculated Field','Yes - No','Radio Buttons','Drop-down','Checkboxes'];
  for(const v of expected)assert.ok(options.includes(v),'Falta el botón '+v);
  assert.equal(Object.keys(AYUDAS_TIPO_CAMPO).length,7);
  assert.equal(new Set(Object.values(AYUDAS_TIPO_CAMPO).map(x=>x.texto)).size,7);
  for(const v of expected){
    const consejo=AYUDAS_TIPO_CAMPO[v];
    assert.ok(consejo?.texto?.length>70,'Consejo insuficiente para '+v);
    assert.ok(['warn','note','bad'].includes(consejo.clase));
  }
  assert.match(AYUDAS_TIPO_CAMPO['Checkboxes'].texto,/varias opciones/i);
  assert.match(AYUDAS_TIPO_CAMPO['Calculated Field'].texto,/otros campos/i);
});

test('El aviso se actualiza al cambiar opciones y se oculta al cambiar la primera respuesta',()=>{
  const x=simularAsistente();
  assert.equal(x.aviso.hidden,true,'No mostrar el error de Checkboxes antes de contestar');
  x.inicio[0].onclick();
  assert.equal(x.grupos[0].hidden,false);
  assert.equal(x.grupos[1].hidden,true);
  assert.equal(x.aviso.hidden,true);
  x.abiertas[2].onclick();
  assert.equal(x.aviso.hidden,false);
  assert.equal(x.aviso.className,'note');
  assert.match(x.res.textContent,/Calculated Field/);
  assert.match(x.cuerpo.textContent,/valor.*otros campos/i);
  assert.doesNotMatch(x.cuerpo.textContent,/Sexo/);
  const calculo=x.cuerpo.textContent;
  x.abiertas[0].onclick();
  assert.equal(x.aviso.className,'warn');
  assert.notEqual(x.cuerpo.textContent,calculo);
  assert.match(x.cuerpo.textContent,/validación/i);
  x.inicio[1].onclick();
  assert.equal(x.grupos[0].hidden,true);
  assert.equal(x.grupos[1].hidden,false);
  assert.equal(x.aviso.hidden,true,'Al cambiar abierta/cerrada se debe eliminar el aviso obsoleto');
  assert.equal(x.cuerpo.textContent,'');
  assert.equal(x.abiertas[0].attributes['aria-pressed'],'false');
  x.cerradas[3].onclick();
  assert.equal(x.aviso.className,'bad');
  assert.match(x.cuerpo.textContent,/Sexo/);
  assert.match(x.res.textContent,/Checkboxes/);
  x.cerradas[1].onclick();
  assert.match(x.res.textContent,/Radio Buttons/);
  assert.doesNotMatch(x.cuerpo.textContent,/Sexo/);
  assert.equal(x.cerradas[3].attributes['aria-pressed'],'false');
  x.inicio[0].onclick();
  assert.equal(x.aviso.hidden,true);
  assert.equal(x.cerradas[1].attributes['aria-pressed'],'false');
});

test('El mensaje contextual está en la zona interactiva, sin advertencia fija externa',()=>{
  const slide=html.slice(html.indexOf('id="lab-tipo"'),html.indexOf("{t:'Codificación'"));
  assert.ok(slide.includes('id="tipo-aviso"'));
  assert.ok(slide.includes('aria-live="polite"'));
  assert.ok(slide.includes('data-aviso-titulo'));
  assert.ok(slide.includes('data-aviso-cuerpo'));
  assert.ok(!slide.includes('div class="bad"><b>Error común:'));
  assert.ok(slide.includes('¿Cómo se obtiene el valor?'),'El cálculo no se escribe como respuesta');
});
