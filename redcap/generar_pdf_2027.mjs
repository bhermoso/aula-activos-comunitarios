// Generador PDF A4 reproducible, sin dependencias, para redcap/materiales_2027.json
// Solo textos WinAnsi; conserva el JSON como fuente docente editable.
export function makePdf(doc, revision="17/10/2026") {
 const W=595.28,H=841.89,L=51,R=51,B=64,WIDTH=W-L-R;
 const colors={dark:[.105,.255,.212],green:[.142,.424,.325],pale:[.918,.955,.914],muted:[.365,.439,.397],line:[.81,.875,.822]};
 const pages=[];let ops=[],y=0;
 const f=n=>Number(n.toFixed(2)).toString();
 const cp={0x20ac:128,0x201a:130,0x0192:131,0x201e:132,0x2026:133,0x2020:134,0x2021:135,0x02c6:136,0x2030:137,0x0160:138,0x2039:139,0x0152:140,0x017d:142,0x2018:145,0x2019:146,0x201c:147,0x201d:148,0x2022:149,0x2013:150,0x2014:151,0x02dc:152,0x2122:153,0x0161:154,0x203a:155,0x0153:156,0x017e:158,0x0178:159};
 function ansi(t){let s="";for(const c of String(t)){const n=c.codePointAt(0);if(n===10){s+=" ";continue}if(n<256)s+=String.fromCharCode(n);else if(cp[n])s+=String.fromCharCode(cp[n]);else if(n===0x2265)s+=">=";else if(n===0x2264)s+="<=";else if(n===0x2192)s+=" -> ";else s+="?";}return s}
 function rgb(x){return (colors[x]||x).map(f).join(" ")}
 function rect(x,yy,w,h,c){ops.push(rgb(c)+" rg "+f(x)+" "+f(yy)+" "+f(w)+" "+f(h)+" re f")}
 function line(x1,y1,x2,y2,c="line",width=.6){ops.push(rgb(c)+" RG "+f(width)+" w "+f(x1)+" "+f(y1)+" m "+f(x2)+" "+f(y2)+" l S")}
 function safe(s){return ansi(s).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")}
 function txt(x,yy,s,size=9,bold=false,c="dark"){ops.push("BT /"+(bold?"F2":"F1")+" "+f(size)+" Tf "+rgb(c)+" rg 1 0 0 1 "+f(x)+" "+f(yy)+" Tm ("+safe(s)+") Tj ET")}
 function approx(s,size,bold=false){let n=0;for(const ch of ansi(s)){if(" iIl,.:;!'|".includes(ch))n+=.255;else if("mMwW".includes(ch))n+=.78;else if(/[A-ZÁÉÍÓÚÑ]/.test(ch))n+=.62;else if(/[0-9]/.test(ch))n+=.555;else n+=bold?.54:.495;}return n*size}
 function wrap(s,size,width,bold=false){let lines=[];for(const p of String(s).split(/\n/)){let now="";for(const word of p.trim().split(/\s+/).filter(Boolean)){const proposed=now?now+" "+word:word;if(approx(proposed,size,bold)>width&&now){lines.push(now);now=word}else now=proposed}lines.push(now||" ")}return lines}
 function page(){if(ops.length)pages.push(ops.join("\n")+"\n");ops=[];y=H-150;rect(0,H-15,W,15,"green");rect(0,H-128,W,113,"pale");txt(L,H-39,"AULA DE SALUD COMUNITARIA BASADA EN ACTIVOS · REDCap 2027",8,true,"green");const title=wrap(doc.titulo,17.3,WIDTH,true);for(let i=0;i<Math.min(title.length,2);i++)txt(L,H-66-i*22,title[i],17.3,true,"dark");txt(L,H-117,doc.nivel.toUpperCase()+"   |   "+doc.clase+"   |   "+doc.duracion,8.2,false,"muted");line(L,H-133,W-R,H-133)}
 function ensure(n){if(y-n<B)page()}
 function paragraph(str,size=9,leading=14.2){if(!str)return;for(const l of wrap(str,size,WIDTH)){ensure(leading);txt(L,y,l,size);y-=leading}y-=5}
 function heading(str){ensure(47);y-=12;txt(L,y,str,12.2,true,"green");y-=12;line(L,y,W-R,y);y-=16}
 function bullet(str){const ls=wrap(str,8.9,WIDTH-18);ensure(ls.length*13.2+6);rect(L+1,y+1.1,4,4,"green");for(const l of ls){txt(L+15,y,l,8.9);y-=13.2}y-=5}
 function table(tab){const cols=tab.head?.length||2;for(const row of tab.rows||[]){const name=String(row[0]),value=cols<=2?String(row.slice(1).join(" · ")):tab.head.slice(1).map((h,j)=>h+": "+(row[j+1]??"—")).join("   ·   ");const names=wrap(name,8.5,WIDTH-18,true),values=wrap(value,8.45,WIDTH-18);const h=9+names.length*11.2+values.length*11.6+4;ensure(h+5);rect(L,y-h+12,WIDTH,h,"pale");let cy=y;for(const x of names){txt(L+9,cy,x,8.5,true,"green");cy-=11.2}for(const x of values){txt(L+9,cy,x,8.45);cy-=11.6}y-=h+4}y-=4}
 page();
 paragraph("Propuesta docente en revisión: "+revision+". Pendiente de validación institucional.",8.2,12.2);
 paragraph(doc.subtitulo,10,15);
 for(const sec of doc.sections||[]){heading(sec.h);if(sec.p)paragraph(sec.p);if(sec.bullets)for(const b of sec.bullets)bullet(b);if(sec.table)table(sec.table);y-=5}
 ensure(30);line(L,y,W-R,y);y-=17;paragraph("Solo registros ficticios y permisos adecuados. Consultar documentación del REDCap institucional.",8.1,12.5);
 pages.push(ops.join("\n")+"\n");
 const N=pages.length,objects=[];objects.push("<< /Type /Catalog /Pages 2 0 R >>");objects.push("<< /Type /Pages /Count "+N+" /Kids ["+pages.map((_,i)=>(3+i*2)+" 0 R").join(" ")+"] >>");const fontA=3+2*N,fontB=fontA+1;
 for(let i=0;i<N;i++){const pageId=3+i*2,streamId=pageId+1;objects.push("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 "+f(W)+" "+f(H)+"] /Resources << /Font << /F1 "+fontA+" 0 R /F2 "+fontB+" 0 R >> >> /Contents "+streamId+" 0 R >>");
 const footer="BT /F1 8 Tf "+rgb("muted")+" rg 1 0 0 1 "+f(L)+" 39 Tm (Material REDCap 2027  -  "+(i+1)+" / "+N+") Tj ET\n"+"BT /F1 8 Tf "+rgb("muted")+" rg 1 0 0 1 "+f(W-155)+" 39 Tm (Revision "+revision+") Tj ET\n"+rgb("line")+" RG 0.6 w "+L+" 51 m "+f(W-R)+" 51 l S\n";
 const stream=pages[i]+footer;objects.push("<< /Length "+stream.length+" >>\nstream\n"+stream+"endstream")}
 objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
 let pdf="%PDF-1.4\n%\xE2\xE3\xCF\xD3\n",offsets=[0];for(let i=0;i<objects.length;i++){offsets.push(pdf.length);pdf+=(i+1)+" 0 obj\n"+objects[i]+"\nendobj\n"}const xref=pdf.length;pdf+="xref\n0 "+(objects.length+1)+"\n0000000000 65535 f \n";for(let i=1;i<offsets.length;i++)pdf+=String(offsets[i]).padStart(10,"0")+" 00000 n \n";pdf+="trailer\n<< /Root 1 0 R /Size "+(objects.length+1)+" >>\nstartxref\n"+xref+"\n%%EOF\n";
 return {bytes:pdf,pages:N,byteLength:pdf.length}
}
export function toBase64(latin1){const abc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";let s="";for(let i=0;i<latin1.length;i+=3){const a=latin1.charCodeAt(i),b=i+1<latin1.length?latin1.charCodeAt(i+1):0,c=i+2<latin1.length?latin1.charCodeAt(i+2):0;s+=abc[a>>>2]+abc[((a&3)<<4)|(b>>>4)]+(i+1<latin1.length?abc[((b&15)<<2)|(c>>>6)]:"=")+(i+2<latin1.length?abc[c&63]:"=")}return s}
