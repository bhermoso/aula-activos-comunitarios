import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// Las presentaciones escalan una diapositiva de 1600×900 al escenario. Cualquier contenido
// fuera de #deck alarga la página, hace aparecer una barra de desplazamiento vertical y,
// si la escala no se recalcula, recorta la diapositiva por los lados (revisión 16/11/2026).
const decks = [
  'alfacar/presentacion-perfil.html', 'atarfe/presentacion-perfil.html',
  'impulso/presentacion-perfil.html', 'zagra/presentacion-perfil.html',
  'alfacar/presentacion-perfil-antecedente-20261114.html', 'atarfe/presentacion-perfil-antecedente-20261114.html',
  'impulso/presentacion-perfil-antecedente-20261114.html', 'zagra/presentacion-perfil-antecedente-20261114.html',
  'alfacar/presentacion-priorizacion.html', 'impulso/presentacion-trayectoria-2026.html',
];
const read = (f) => readFileSync(new URL(`../../${f}`, import.meta.url), 'utf8');

for (const f of decks) {
  test(`${f}: el cuerpo solo contiene el deck y su script`, () => {
    const body = read(f).split(/<body[^>]*>/)[1].split('</body>')[0];
    const before = body.split('<div id="deck">')[0].trim();
    assert.equal(before, '', 'no debe haber contenido antes de #deck');
    const after = body.slice(body.lastIndexOf('</script>') + '</script>'.length).trim();
    assert.equal(after, '', 'no debe haber contenido después del script');
  });
  test(`${f}: la escala usa la caja útil del escenario y se recalcula con su tamaño`, () => {
    const t = read(f);
    assert.match(t, /function fit\(\)\{[^}]*paddingLeft[^}]*paddingRight[^}]*paddingTop[^}]*paddingBottom/);
    assert.match(t, /new ResizeObserver\(fit\)\.observe\(document\.getElementById\('stage'\)\)/);
  });
}

test('las cuatro presentaciones vigentes conservan la nota de revisión en la barra', () => {
  for (const f of decks.slice(0, 4)) {
    assert.match(read(f), /<div class="bar"><span class="brand">[^<]*<\/span><span class="workshop-source-note">Preparación revisada el 16\/11\/2026\. Síntesis del perfil identificado, no aprobación institucional\. <a href="presentacion-perfil-antecedente-20261114\.html">Consultar el material anterior<\/a>\.<\/span>/, f);
  }
});

test('los antecedentes conservan el aviso dentro del deck', () => {
  for (const f of decks.slice(4, 8)) {
    assert.match(read(f), /<div id="deck"><aside class="antecedent-note"[^>]*>Antecedente conservado\. <a href="presentacion-perfil\.html">Abrir la preparación revisada del próximo taller<\/a>\.<\/aside>/, f);
  }
});
