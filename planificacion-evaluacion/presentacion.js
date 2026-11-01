/* Motor de presentaciones del curso «Del dato a la acción».
   Deriva del formato de zagra/presentacion-perfil.html (lienzo 1600×900 escalado,
   teclado, pantalla completa e impresión de una diapositiva por página).
   Cada página define window.SLIDES antes de cargar este archivo.
   Material para el alumnado: no contiene soluciones ni indicaciones del profesorado. */
(function(){
'use strict';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const frame=document.getElementById('frame');
function block(b){
 switch(b.t){
  case 'lead': return '<p class="lead">'+esc(b.text)+'</p>';
  case 'list': return '<ul class="clean'+(b.cols?' cols':'')+'">'+b.items.map(i=>'<li>'+esc(i)+'</li>').join('')+'</ul>';
  case 'ol': return '<ol class="clean steps">'+b.items.map(i=>'<li>'+esc(i)+'</li>').join('')+'</ol>';
  case 'cards': return '<div class="grid g'+(b.cols||b.items.length)+'">'+b.items.map(c=>'<div class="card'+(c.soft?' soft':'')+(c.sand?' sand':'')+'">'+(c.big?'<span class="big">'+esc(c.big)+'</span>':'')+(c.h?'<h3>'+esc(c.h)+'</h3>':'')+(c.p?'<p>'+esc(c.p)+'</p>':'')+'</div>').join('')+'</div>';
  case 'chain': return '<div class="chain" style="grid-template-columns:repeat('+b.items.length+',1fr)">'+b.items.map(c=>'<div'+(c.here?' class="here"':'')+'><b>'+esc(c.h)+'</b>'+esc(c.p||'')+'</div>').join('')+'</div>';
  case 'table': return '<table><thead><tr>'+b.head.map(h=>'<th>'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+b.rows.map(r=>'<tr>'+r.map((c,i)=>'<td'+(b.num&&b.num.includes(i)?' class="n"':'')+'>'+esc(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table>';
  case 'agenda': return '<div class="agenda">'+b.rows.map(r=>'<div class="ag'+(/descanso/i.test(r[1])?' pausa':'')+'"><span class="t">'+esc(r[0])+'</span><span class="d"></span><span class="x">'+esc(r[1])+'</span></div>').join('')+'</div>';
  case 'bars': return '<div class="bars">'+b.items.map((r,i)=>'<div class="brow'+(i<(b.top||0)?' top':'')+'"><span>'+esc(r[0])+'</span><div class="track"><div class="fill" style="width:'+r[1]+'%"></div></div><span class="pct">'+String(r[1]).replace('.',',')+' %</span></div>').join('')+'</div>';
  case 'timeline': return '<div class="timeline" style="grid-template-columns:repeat('+b.items.length+',1fr)">'+b.items.map(r=>'<div class="tl'+(r[2]?' now':'')+'"><b>'+esc(r[0])+'</b><span>'+esc(r[1])+'</span></div>').join('')+'</div>';
  case 'task': return '<div class="task"><span class="pill'+(b.alt?' alt':'')+'">'+esc(b.label||'Tarea')+'</span><p>'+esc(b.text)+'</p></div>';
  case 'formula': return '<div class="formula">'+esc(b.text)+'</div>';
  case 'two': return '<div class="two">'+b.cols.map(c=>'<div>'+c.map(block).join('')+'</div>').join('')+'</div>';
 }
 return '';
}
frame.innerHTML=window.SLIDES.map(s=>'<section class="slide'+(s.cover?' cover':'')+(s.kind?' '+s.kind:'')+'">'+(s.meta?'<span class="meta">'+esc(s.meta)+'</span>':'')+(s.cover?'<h1>'+esc(s.title)+'</h1>':(s.title?'<h2>'+esc(s.title)+'</h2>':''))+(s.blocks||[]).map(block).join('')+(s.time?'<span class="time">'+esc(s.time)+'</span>':'')+(s.src?'<p class="src">'+esc(s.src)+'</p>':'')+'</section>').join('');
const slides=[...frame.querySelectorAll('.slide')];let i=0;
const counter=document.getElementById('counter'),prev=document.getElementById('prev'),next=document.getElementById('next');
function fromHash(){const n=parseInt((location.hash||'').replace(/\D/g,''),10);return n>=1&&n<=slides.length?n-1:0}
function show(n){i=Math.max(0,Math.min(slides.length-1,n));slides.forEach((s,k)=>s.classList.toggle('on',k===i));counter.textContent=(i+1)+' / '+slides.length;prev.disabled=i===0;next.disabled=i===slides.length-1;try{history.replaceState(null,'','#'+(i+1))}catch(e){}}
function fit(){const st=document.getElementById('stage');const s=Math.min(st.clientWidth/1600,st.clientHeight/900);frame.style.transform='scale('+s+')'}
prev.addEventListener('click',()=>show(i-1));next.addEventListener('click',()=>show(i+1));
document.getElementById('fs').addEventListener('click',()=>{const d=document.getElementById('deck');if(!document.fullscreenElement&&d.requestFullscreen)d.requestFullscreen().catch(()=>{});else if(document.exitFullscreen)document.exitFullscreen().catch(()=>{})});
document.addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();show(i+1)}else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();show(i-1)}else if(e.key==='Home')show(0);else if(e.key==='End')show(slides.length-1);else if(e.key==='f'||e.key==='F')document.getElementById('fs').click()});
window.addEventListener('resize',fit);document.addEventListener('fullscreenchange',()=>setTimeout(fit,50));
show(fromHash());fit();
})();
