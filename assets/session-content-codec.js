// Keep complete profile originals and evidence in one versioned session snapshot.
// Legacy snapshots remain plain JSON; larger snapshots use lossless gzip.
const PREFIX = 'gzip-base64:';
export async function encodeSessionContent(payload) {
  const json = JSON.stringify(payload);
  const bytes = new TextEncoder().encode(json);
  if (bytes.length <= 700000) return json;
  if (typeof CompressionStream === 'undefined') throw new Error('Este navegador no admite el guardado de esta documentación. Usa una versión actual de Chrome, Edge o Firefox.');
  const compressed = new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new CompressionStream('gzip'))).arrayBuffer());
  let binary = '';
  for (let i = 0; i < compressed.length; i += 16384) binary += String.fromCharCode(...compressed.subarray(i, i + 16384));
  const content = PREFIX + btoa(binary);
  if (new TextEncoder().encode(content).length > 700000) throw new Error('La sesión supera el tamaño admitido. Conserva una copia y revisa sus documentos.');
  return content;
}
export async function decodeSessionContent(content) {
  if (!content.startsWith(PREFIX)) return JSON.parse(content);
  if (typeof DecompressionStream === 'undefined') throw new Error('Este navegador no admite recuperar esta documentación. Usa una versión actual de Chrome, Edge o Firefox.');
  const binary = atob(content.slice(PREFIX.length));
  const bytes = Uint8Array.from(binary, ch => ch.charCodeAt(0));
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  return JSON.parse(await new Response(stream).text());
}
