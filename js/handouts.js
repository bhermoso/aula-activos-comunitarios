const structures={
  "tecnica-mapa": [
    "Mapeo colectivo",
    "Delimitar pregunta y territorio → reunir participantes → situar y comentar lugares → contrastar significados → devolver el mapa",
    "Plano + experiencias cotidianas + personas participantes",
    "Ubicación | Quién reconoce | Beneficio | Condiciones de acceso | Dudas",
    "Mapa anotado y relatos que fundamentan cada activo",
    "La marca muestra dónde; el relato explica por qué importa; el contraste indica qué reconocimiento comparte la comunidad."
  ],
  "tecnica-paseos": [
    "Paseos comunitarios",
    "Preparar recorrido accesible → caminar y conversar → documentar paradas → interpretar conjuntamente → devolver",
    "Ruta + preguntas + experiencias de participantes",
    "Parada | Observación | Relato | Bienestar | Accesibilidad",
    "Recorrido comentado y mapa de observaciones",
    "La observación aporta contexto espacial; el relato muestra la experiencia vivida y el significado del lugar."
  ],
  "tecnica-fotovoz": [
    "Fotovoz",
    "Acordar pregunta y consentimiento → producir imágenes → narrarlas → dialogar → compartir conclusiones",
    "Pregunta + fotografías autorizadas + relatos",
    "Imagen | Significado para su autoría | Relación con bienestar | Interpretaciones",
    "Imágenes comentadas y significados compartidos",
    "La imagen documenta una mirada; el relato y el diálogo construyen el conocimiento."
  ],
  "tecnica-talleres": [
    "Taller participativo",
    "Definir objetivo y participantes → recoger aportaciones → debatir → agrupar y priorizar → devolver",
    "Grupo plural + pregunta + técnicas visuales",
    "Idea inicial | Ejemplo | Argumentos | Coincidencias | Diferencias | Prioridad",
    "Acuerdos y diferencias documentados, mapa o inventario consensuado",
    "La prioridad es una decisión colectiva, que debe interpretarse según diversidad de participantes y argumentos."
  ],
  "tecnica-fichas": [
    "Registro mediante fichas",
    "Definir unidad de registro → identificar fuente → describir → comprobar datos y permisos → preparar registro",
    "Hallazgos + testimonios + datos verificables",
    "Nombre | Ubicación | Acceso | Actividad o recurso | Reconocimiento | Verificación",
    "Ficha trazable con estado de comprobación",
    "Describir, reconocer participativamente y validar son operaciones distintas; la ficha documenta evidencias."
  ]
};
const interview="# Guion de entrevista abierta · ejemplo comunitario: Albolote\n\n**Propósito:** conocer los lugares, personas, grupos, actividades y relaciones que contribuyen al bienestar de quienes viven en Albolote.\n**Situación didáctica:** entrevista a una persona residente, con experiencias cotidianas en el municipio. Ejemplo hipotético; no presenta testimonios reales.\n\n## Apertura y consentimiento\nExplicar la finalidad del mapeo, el carácter voluntario de la conversación, la toma de notas y la devolución comunitaria. Solicitar consentimiento antes de registrar información; pedir consentimiento específico para grabaciones.\n\n## Pregunta generadora\n**Pensando en su vida cotidiana en Albolote, ¿qué lugares, personas, grupos o actividades le ayudan a vivir mejor?**\n\nEscuchar sin imponer orden ni una lista de respuestas. Profundizar a partir de los ejemplos que aporte la persona.\n\n## Preguntas abiertas de profundización\n1. ¿Podría contarme una experiencia concreta relacionada con ese lugar o actividad?\n2. ¿Qué encuentra allí que le resulta valioso para su bienestar?\n3. ¿Qué personas o colectivos hacen posible esa experiencia?\n4. ¿Cómo conoció ese lugar, grupo o actividad?\n5. ¿Cómo pueden acceder o participar otras personas?\n6. ¿Qué espacios del municipio facilitan el encuentro y el apoyo mutuo?\n7. ¿Qué iniciativas o grupos conoce en otros barrios o localidades próximas?\n8. ¿Qué experiencias de mujeres y hombres, y de personas con distintas responsabilidades de cuidados, convendría incorporar al mapa?\n\n## Repreguntas flexibles\n- **Ejemplo:** ¿Recuerda alguna ocasión concreta?\n- **Significado:** ¿Qué hizo importante esa experiencia?\n- **Localización:** ¿Dónde se reúne ese grupo o sucede la actividad?\n- **Relaciones:** ¿Quiénes participan o colaboran?\n- **Comprobación:** Según entiendo, este lugar le aporta… ¿es así?\n\n## Cierre y devolución\n- ¿Qué activos comunitarios añadiría a este recorrido?\n- ¿A qué personas o colectivos sería útil escuchar después?\n- ¿Cómo le gustaría conocer los resultados del mapeo?\n\n## Matriz orientativa de notas\n| Recurso o experiencia | Relato y significado | Localización | Acceso | Origen del dato | Pendiente de contraste |\n| --- | --- | --- | --- | --- | --- |\n| | | | | | |\n\n## Ingeniería de la información\n**Relato individual → activo candidato y significado → contraste con otras personas → devolución comunitaria.**\nUn testimonio proporciona conocimiento situado. La validación formal, cuando corresponda, es una operación diferente.\n\n**Referencia:** EASP, Guía breve Salud Comunitaria Basada en Activos, anexo sobre entrevista individual.\n**Naturaleza:** guion de elaboración didáctica para el aula, adaptable a diferentes territorios.";

export function buildTechniqueHandout(id,t,d){
 if(id==='tecnica-entrevistas')return interview;
 const p=structures[id];if(!p)return '';
 return [
  '# '+p[0]+' · esquema estructural','',
  '## Propósito','',t.purpose,'',
  '## Secuencia de la técnica','',p[1],'',
  '## Información de partida','',p[2],'',
  '## Variables o dimensiones que observar','',p[3],'',
  '## Producto de información','',p[4],'',
  '## Cómo interpretar lo producido','',p[5],'',
  '## Precaución metodológica','',t.risks,'',
  '## Pregunta para reflexionar','',d.question,'',
  '## Fuente de ampliación','',d.read,'',d.pdf,'',
  '---','Esquema de elaboración propia para el Aula de Activos Comunitarios. Consultar la fuente original de la EASP.'
 ].join('\n');
}


// Generación PDF local, sin servidor ni dependencias externas.
// PDF 1.4, texto WinAnsi compatible con Helvetica; paginación automática.
export function buildTechniquePdf(id,t,d){
 const markdown=buildTechniqueHandout(id,t,d);
 const norm=x=>x.replace(/[→←]/g,'->').replace(/[–—]/g,'-').replace(/[“”]/g,'"').replace(/[’]/g,"'").replace(/•/g,'-').replace(/[\u0100-\uffff]/g,c=>({'…':'...','≥':'>=','≤':'<=','€':'EUR'}[c]||'?'));
 const wrap=(line,max=89)=>{
  const out=[];let str=norm(line);
  while(str.length>max){
   let n=str.lastIndexOf(' ',max);if(n<25)n=max;
   out.push(str.slice(0,n));str=str.slice(n).trimStart();
  }
  out.push(str);return out;
 };
 const rows=[];
 for(const raw of markdown.split('\n')){
  const level=raw.startsWith('# ')?1:raw.startsWith('## ')?2:0;
  let line=raw.replace(/^#{1,3}\s*/,'').replace(/\*\*/g,'').replace(/^>\s*/, '  ');
  const width=level===1?55:level===2?73:91;
  wrap(line,width).forEach((v,i)=>rows.push({text:v,bold:level>0,space:level>0&&i===0?8:0,size:level===1?16:level===2?12:9.2}));
 }
 const pages=[];let page=[],y=767;
 for(const row of rows){
  const need=(row.size===16?23:row.size===12?18:13)+row.space;
  if(y-need<65){pages.push(page);page=[];y=767;}
  y-=row.space;
  page.push({...row,y});y-=need-row.space;
 }
 if(page.length)pages.push(page);
 const bytes=[];const push=s=>{for(let i=0;i<s.length;i++)bytes.push(s.charCodeAt(i)&255)};
 const esc=text=>{
  let v='';
  for(const ch of text){
   const cp=ch.charCodeAt(0);
   if(ch==='\\'||ch==='('||ch===')'){v+='\\'+ch;continue;}
   if(cp>255){v+='?';continue;}
   if(cp<32||cp>126)v+='\\'+cp.toString(8).padStart(3,'0');else v+=ch;
  }
  return v;
 };
 const objects=[];const add=s=>{objects.push(s);return objects.length};
 const catalog=add('');const pagesId=add('');
 const fontNormal=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
 const fontBold=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
 const pageIds=[];
 pages.forEach((rows,i)=>{
  const commands=['BT'];
  rows.forEach(row=>{
   commands.push('/'+(row.bold?'F2':'F1')+' '+row.size+' Tf');
   commands.push('1 0 0 1 48 '+row.y.toFixed(1)+' Tm');
   commands.push('('+esc(row.text)+') Tj');
  });
  commands.push('/F1 8 Tf','1 0 0 1 48 35 Tm','('+esc('Aula de Activos Comunitarios - Material docente')+') Tj',
    '1 0 0 1 510 35 Tm','('+String(i+1)+' / '+pages.length+') Tj','ET');
  const stream=commands.join('\n')+'\n';
  const streamId=add('<< /Length '+stream.length+' >>\nstream\n'+stream+'endstream');
  const pageId=add('<< /Type /Page /Parent '+pagesId+' 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 '+fontNormal+' 0 R /F2 '+fontBold+' 0 R >> >> /Contents '+streamId+' 0 R >>');
  pageIds.push(pageId);
 });
 objects[catalog-1]='<< /Type /Catalog /Pages '+pagesId+' 0 R >>';
 objects[pagesId-1]='<< /Type /Pages /Kids ['+pageIds.map(n=>n+' 0 R').join(' ')+'] /Count '+pageIds.length+' >>';
 push('%PDF-1.4\n');
 const offsets=[0];
 objects.forEach((o,i)=>{offsets.push(bytes.length);push((i+1)+' 0 obj\n'+o+'\nendobj\n');});
 const xref=bytes.length;push('xref\n0 '+(objects.length+1)+'\n0000000000 65535 f \n');
 offsets.slice(1).forEach(offset=>push(String(offset).padStart(10,'0')+' 00000 n \n'));
 push('trailer\n<< /Size '+(objects.length+1)+' /Root '+catalog+' 0 R >>\nstartxref\n'+xref+'\n%%EOF');
 return new Blob([new Uint8Array(bytes)],{type:'application/pdf'});
}
