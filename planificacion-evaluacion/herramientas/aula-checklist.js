/* Ampliación de las checklists del curso «Del dato a la acción».
   - Datos del programa evaluado (nombre, responsables, fecha).
   - Un desplegable de anotaciones por ítem (instrumentos, fuentes, confidencialidad…).
   - Guarda marcas y anotaciones en este navegador (solo en este equipo).
   - Descarga en PDF de la checklist completa con la evaluación automática.
   No modifica los ítems, los umbrales ni el cálculo originales: lee el resultado que
   calcula la propia herramienta. */
(function(){
'use strict';
const TOOL=document.body.dataset.tool||location.pathname.split('/').pop().replace('.html','');
const KEY='del-dato-a-la-accion:'+TOOL;
const TITLE=document.querySelector('header h1')?document.querySelector('header h1').textContent.replace(/^[^A-Za-zÁÉÍÓÚÑáéíóúñ]+/,'').trim():'Checklist';
const store={get(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return{}}},set(v){try{localStorage.setItem(KEY,JSON.stringify(v))}catch(e){}}};
let state=store.get();state.notes=state.notes||{};state.checks=state.checks||{};state.meta=state.meta||{};
const save=()=>store.set(state);

/* Indicaciones para anotar, según el contenido del ítem */
function hintFor(text){
 const t=text.toLowerCase();
 if(/validad/.test(t))return 'Nombre del instrumento, referencia de su validación (autoría, año, población) y adaptación utilizada.';
 if(/anonimato|confidencial/.test(t))return 'Cómo se garantizan el anonimato y la confidencialidad: codificación, custodia de datos, consentimiento, quién accede.';
 if(/instrumento|cuestionario|escala|pilot/.test(t))return 'Instrumentos utilizados o previstos, cómo se han elaborado o pilotado y dónde están disponibles.';
 if(/indicador/.test(t))return 'Indicadores definidos: definición operativa, fuente, tiempo cero y meta.';
 if(/presupuesto|financ|recurso/.test(t))return 'Recursos y financiación: fuente, cuantía o compromiso, y documento que lo respalda.';
 if(/apoyo institucional|coordinaci|instituci|agentes|actores/.test(t))return 'Entidades y personas implicadas, acuerdos alcanzados y documento que los recoge.';
 if(/línea base|pre\b|post|seguimiento|momento/.test(t))return 'Momentos de medición previstos (fechas), responsable y cómo se reducirán las pérdidas de seguimiento.';
 if(/devoluci|difusi|comunicaci|informe/.test(t))return 'Destinatarios, formato y fecha de la devolución o difusión.';
 return 'Cómo se cumple este criterio: evidencias, documentos, fuentes o decisiones que lo respaldan. Si no se cumple, qué falta.';
}

/* Datos del programa */
const content=document.querySelector('.content');
const metaBox=document.createElement('div');
metaBox.className='aula-meta';
metaBox.innerHTML='<h3>Programa o actuación que se revisa</h3><div class="aula-meta-grid">'+
 '<label>Nombre del programa o actuación<input type="text" data-meta="programa"></label>'+
 '<label>Responsable o responsables<input type="text" data-meta="responsables"></label>'+
 '<label>Fecha de la revisión<input type="date" data-meta="fecha"></label></div>'+
 '<p class="aula-note">Las marcas y anotaciones se guardan solo en este navegador. Para conservarlas o entregarlas, descarga el PDF.</p>'+
 '<div class="aula-actions"><button type="button" class="aula-btn solid" data-pdf>Descargar PDF completo</button><button type="button" class="aula-btn" data-open-all>Desplegar todas las anotaciones</button><button type="button" class="aula-btn" data-reset>Borrar marcas y anotaciones</button></div>';
const firstSection=document.querySelector('.checklist-section');
if(content&&firstSection)firstSection.parentNode.insertBefore(metaBox,firstSection);
metaBox.querySelectorAll('[data-meta]').forEach(inp=>{inp.value=state.meta[inp.dataset.meta]||'';inp.addEventListener('input',()=>{state.meta[inp.dataset.meta]=inp.value;save();});});

/* Desplegable de anotaciones por ítem */
const items=[...document.querySelectorAll('.checklist-item')];
items.forEach(item=>{
 const cb=item.querySelector('input[type=checkbox]');const label=item.querySelector('label');if(!cb||!label)return;
 const id=cb.id;
 const det=document.createElement('details');det.className='aula-notes';
 const sum=document.createElement('summary');sum.textContent='Anotaciones';
 const ta=document.createElement('textarea');ta.rows=3;ta.placeholder=hintFor(label.textContent+' '+(item.querySelector('.checklist-descripcion')||{}).textContent);
 ta.setAttribute('aria-label','Anotaciones para '+label.textContent.trim());
 ta.value=state.notes[id]||'';
 const mark=()=>sum.classList.toggle('has',!!ta.value.trim());mark();
 ta.addEventListener('input',()=>{state.notes[id]=ta.value;save();mark();});
 det.append(sum,ta);item.appendChild(det);
 if(state.checks[id]){cb.checked=true;cb.dispatchEvent(new Event('change'));}
 cb.addEventListener('change',()=>{state.checks[id]=cb.checked;save();});
});

metaBox.querySelector('[data-open-all]').addEventListener('click',e=>{const open=!document.querySelector('details.aula-notes:not([open])');document.querySelectorAll('details.aula-notes').forEach(d=>d.open=!open);e.target.textContent=open?'Desplegar todas las anotaciones':'Plegar todas las anotaciones';});
metaBox.querySelector('[data-reset]').addEventListener('click',()=>{if(!confirm('¿Borrar todas las marcas, anotaciones y datos del programa de esta checklist en este navegador?'))return;state={notes:{},checks:{},meta:{}};save();location.reload();});
window.addEventListener('beforeprint',()=>document.querySelectorAll('details.aula-notes').forEach(d=>{if(d.querySelector('textarea').value.trim())d.open=true;}));

/* Lectura del estado para el informe */
function collect(){
 const sections=[];let cur=null;
 document.querySelectorAll('.content h3, .checklist-item').forEach(el=>{
  if(el.tagName==='H3'){if(el.closest('.summary-section,.feedback-box,.aula-meta')||!/^\d+\.\s/.test(el.textContent.trim()))return;cur={title:el.textContent.trim(),items:[]};sections.push(cur);return;}
  if(!cur){cur={title:'',items:[]};sections.push(cur);}
  const cb=el.querySelector('input[type=checkbox]');const d=el.querySelector('.checklist-descripcion');
  cur.items.push({label:el.querySelector('label').textContent.trim(),desc:d?d.textContent.replace(/\s+/g,' ').trim():'',checked:cb.checked,note:(state.notes[cb.id]||'').trim()});
 });
 const total=sections.reduce((a,s)=>a+s.items.length,0),done=sections.reduce((a,s)=>a+s.items.filter(i=>i.checked).length,0);
 const fb=document.querySelector('.feedback-box');
 const visible=fb&&getComputedStyle(fb).display!=='none';
 const feedback=visible?{title:(fb.querySelector('h3')||{}).textContent||'',msg:((fb.querySelector('p')||{}).textContent||'').trim(),recs:[...fb.querySelectorAll('li')].map(li=>li.textContent.trim())}:null;
 let minimo='';document.querySelectorAll('.summary-table tr').forEach(tr=>{const td=tr.querySelectorAll('td');if(td.length>1&&/criterio de calidad/i.test(td[0].textContent))minimo=td[1].textContent.replace(/\s+/g,' ').trim();});
 const interp=[...document.querySelectorAll('.summary-section li, .feedback-box ~ * li')].map(li=>li.textContent.replace(/\s+/g,' ').trim()).filter(t=>/%/.test(t));
 return {sections,total,done,pct:total?Math.round(done/total*100):0,feedback,minimo,interp};
}

/* PDF */
function loadScript(src){return new Promise((res,rej)=>{const s=document.createElement('script');s.src=src;s.onload=()=>window.jspdf?res(window.jspdf):rej();s.onerror=rej;document.head.appendChild(s);});}
function loadJsPDF(){if(window.jspdf)return Promise.resolve(window.jspdf);return loadScript('vendor/jspdf.umd.min.js').catch(()=>loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'));}
function clean(t){return String(t).replace(/[^\x09\x0A\x0D\x20-\x7E -ÿ€–—‘’“”•…]/g,'').replace(/\s+\n/g,'\n');}
async function pdf(){
 let lib;try{lib=await loadJsPDF();}catch(e){alert('No se ha podido cargar el generador de PDF. Se abrirá la impresión: elige «Guardar como PDF».');window.print();return;}
 const r=collect();const {jsPDF}=lib;const doc=new jsPDF({unit:'mm',format:'a4'});
 const W=210,L=18,R=18,TW=W-L-R,B=280;let y=0;
 const green=[19,124,115],deep=[16,42,40],muted=[97,117,116],soft=[227,241,236];
 function header(){doc.setFillColor(...deep);doc.rect(0,0,W,22,'F');doc.setTextColor(255,255,255);doc.setFont('helvetica','bold');doc.setFontSize(9);doc.text('AULA DE SALUD COMUNITARIA · DEL DATO A LA ACCIÓN',L,9);doc.setFontSize(13);doc.text(clean(TITLE+' · Promoción de la Salud'),L,17);y=32;doc.setTextColor(0,0,0);}
 function ensure(h){if(y+h>B){doc.addPage();header();}}
 function para(t,size,color,style,indent){doc.setFont('helvetica',style||'normal');doc.setFontSize(size||10);doc.setTextColor(...(color||[30,50,48]));const lines=doc.splitTextToSize(clean(t),TW-(indent||0));for(const ln of lines){ensure(size*0.45+1);doc.text(ln,L+(indent||0),y);y+=size*0.45+1;}}
 function h(t){ensure(14);y+=3;doc.setFont('helvetica','bold');doc.setFontSize(12);doc.setTextColor(...green);doc.text(clean(t),L,y);y+=2;doc.setDrawColor(210,225,217);doc.line(L,y,W-R,y);y+=5;}
 header();
 const m=state.meta;
 para('Programa o actuación: '+(m.programa||'—'),10.5,deep,'bold');para('Responsable o responsables: '+(m.responsables||'—'),10,deep);para('Fecha de la revisión: '+(m.fecha?m.fecha.split('-').reverse().join('/'):'—')+'   ·   Generado el '+new Date().toLocaleDateString('es-ES'),10,deep);
 h('Evaluación automática');
 doc.setFillColor(...soft);ensure(22);doc.roundedRect(L,y-4,TW,18,2,2,'F');doc.setFont('helvetica','bold');doc.setFontSize(20);doc.setTextColor(...green);doc.text(r.pct+' %',L+5,y+7);doc.setFontSize(10.5);doc.setTextColor(...deep);doc.text(clean(r.done+' de '+r.total+' criterios cumplidos'),L+35,y+2);doc.setFont('helvetica','normal');doc.text(clean('Criterio de calidad mínimo: '+(r.minimo||'—')),L+35,y+8);y+=20;
 if(r.feedback){para(r.feedback.title,11.5,deep,'bold');para(r.feedback.msg,10);if(r.feedback.recs.length){y+=1;para('Recomendaciones:',10,deep,'bold');r.feedback.recs.forEach(t=>para('• '+t,10,null,null,3));}}else para('Sin criterios marcados.',10,muted);
 h('Cumplimiento por sección');
 r.sections.forEach(s=>{const d=s.items.filter(i=>i.checked).length;ensure(7);doc.setFont('helvetica','normal');doc.setFontSize(10);doc.setTextColor(30,50,48);doc.text(clean(s.title.replace(/\s*\(\d+ ítems\)/i,'')),L,y);doc.text(d+' / '+s.items.length,W-R,y,{align:'right'});const bw=40,bx=W-R-58;doc.setFillColor(223,231,221);doc.rect(bx,y-3,bw,3.2,'F');doc.setFillColor(...green);doc.rect(bx,y-3,bw*(s.items.length?d/s.items.length:0),3.2,'F');y+=6.5;});
 if(r.interp.length){y+=2;para('Interpretación de resultados de la herramienta:',9.5,muted,'bold');r.interp.forEach(t=>para(t,9,muted,null,3));}
 h('Checklist completa con anotaciones');
 r.sections.forEach(s=>{ensure(14);para(s.title,10.5,deep,'bold');y+=1;s.items.forEach(it=>{ensure(12);para((it.checked?'[X] ':'[  ] ')+it.label,10,it.checked?deep:[90,100,98],'bold',2);if(it.desc)para(it.desc,8.8,muted,null,9);para(it.note?'Anotaciones: '+it.note:'Anotaciones: —',9.2,it.note?[30,50,48]:[150,160,158],it.note?'normal':'italic',9);y+=2;});y+=2;});
 const n=doc.getNumberOfPages();for(let i=1;i<=n;i++){doc.setPage(i);doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(...muted);doc.text('Del dato a la acción · Aula de Salud Comunitaria · Herramienta: B. R. Hermoso y J. Serrano',L,290);doc.text(i+' / '+n,W-R,290,{align:'right'});}
 const slug=(m.programa||'programa').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'').toLowerCase().slice(0,40);
 doc.save(TOOL+'-'+slug+'.pdf');
}
document.querySelectorAll('[data-pdf]').forEach(b=>b.addEventListener('click',pdf));
})();
