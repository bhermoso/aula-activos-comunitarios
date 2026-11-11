(() => {
  'use strict';
  const fieldNames = ['line', 'status', 'priority', 'conclusion', 'population', 'objective', 'reference', 'indicator', 'basis', 'baseline', 'target', 'source', 'assets', 'owner', 'pending'];
  const statuses = ['proposal', 'agreed', 'pending'];
  const $ = selector => document.querySelector(selector);
  let evidence;
  let state;
  let cloud;
  let version = 0;
  let dirty = false;
  let editGeneration = 0;
  let account = null;
  let busy = false;

  function emptyState() {
    return {schema: 'aula-loja-session/v1', municipalityId: 'loja', sessionDate: '2026-11-27', start: '10:00', end: '11:30', profileSha256: evidence.profileSha256, history: {}, historyNotes: '', participation: '', closingNotes: '', lines: []};
  }

  function element(tag, text, className) {
    const node = document.createElement(tag);
    node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function conclusionId(finding) {
    return /^C\d+/.exec(finding)?.[0] ?? '';
  }

  function checkedState(value) {
    if (!value || value.schema !== 'aula-loja-session/v1' || value.municipalityId !== 'loja' || value.sessionDate !== '2026-11-27' || value.start !== '10:00' || value.end !== '11:30' || !Array.isArray(value.lines) || value.lines.length > 20) {
      throw new Error('Selecciona una hoja de esta sesión de Loja, con un máximo de veinte fichas.');
    }
    const validText = text => typeof text === 'string' && text.length <= 4000;
    if (!['historyNotes', 'participation', 'closingNotes'].every(key => validText(value[key])) || typeof value.profileSha256 !== 'string' || value.profileSha256.length > 100) {
      throw new Error('La hoja contiene campos de texto incompatibles.');
    }
    const referenceIds = new Set(evidence.results.map(result => result.id));
    const conclusionIds = new Set(evidence.findings.map(conclusionId));
    if (!value.history || typeof value.history !== 'object' || Array.isArray(value.history) || Object.entries(value.history).some(([id, review]) => !evidence.history.some(item => item.id === id) || !['', 'maintain', 'reformulate', 'contrast'].includes(review))) {
      throw new Error('La revisión de prioridades históricas no es compatible.');
    }
    const next = emptyState();
    for (const key of ['historyNotes', 'participation', 'closingNotes', 'profileSha256']) next[key] = value[key];
    next.history = {...value.history};
    next.lines = value.lines.map(line => {
      if (!line || !fieldNames.every(key => validText(line[key])) || !statuses.includes(line.status) || (line.reference && !referenceIds.has(line.reference)) || (line.conclusion && !conclusionIds.has(line.conclusion))) {
        throw new Error('Una ficha contiene campos, conclusiones o referencias incompatibles.');
      }
      return Object.fromEntries(fieldNames.map(key => [key, line[key]]));
    });
    return next;
  }

  function persist() {
    dirty = true;
    editGeneration += 1;
    $('#draft-status').textContent = 'Hay cambios pendientes de guardar en Firebase.';
    updateCloudButtons();
  }

  function updateCloudButtons() {
    $('#save-firebase').disabled = !account || busy || !state;
    $('#load-firebase').disabled = !account || busy || !state;
    $('#sign-in').disabled = busy || !cloud;
    $('#sign-in').hidden = !!account;
    $('#sign-out').hidden = !account;
    $('#sign-out').disabled = busy;
  }

  function cloudError(error) {
    if (error.code === 'permission-denied') return 'La cuenta necesita autorización de coordinación para esta sesión de Loja.';
    if (error.code === 'auth/operation-not-allowed') return 'El acceso con Google necesita habilitarse en el proyecto Firebase del Aula.';
    if (error.code === 'auth/unauthorized-domain') return 'El dominio del Aula necesita estar autorizado en Firebase Authentication.';
    return error.message || 'No se ha podido completar la operación en Firebase.';
  }

  async function recoverCloud() {
    if (dirty && !window.confirm('Recuperar Firebase sustituirá los cambios de esta pantalla. Descarga tu hoja antes si necesitas conservarlos. ¿Continuar?')) return;
    const generation = editGeneration;
    busy = true; updateCloudButtons();
    $('#cloud-status').textContent = 'Recuperando la sesión desde el servidor…';
    try {
      const saved = await cloud.loadSession();
      if (generation !== editGeneration) throw new Error('Se ha editado la hoja mientras se recuperaba Firebase. Conserva los cambios antes de volver a recuperar.');
      if (!saved) { version = 0; $('#cloud-status').textContent = 'La sesión todavía no tiene una versión guardada. Puedes preparar y guardar su primera versión.'; return; }
      if (saved.payload.schema !== 'aula-loja-complete/v1' || saved.payload.evidence.profileSha256 !== evidence.profileSha256) throw new Error('La sesión utiliza otra revisión del perfil. Contrasta sus fuentes antes de sustituirla.');
      const restored = checkedState(saved.payload.worksheet);
      state = restored; version = saved.version; dirty = false; renderDraft();
      $('#cloud-status').textContent = `Sesión recuperada desde Firebase. Versión ${version}.`;
      $('#draft-status').textContent = `Versión ${version} guardada en Firebase. Puedes continuar la sesión.`;
    } catch (error) { $('#cloud-status').textContent = cloudError(error); }
    finally { busy = false; updateCloudButtons(); }
  }

  async function saveCloud() {
    collect();
    const generation = editGeneration;
    const worksheet = checkedState(state);
    busy = true; updateCloudButtons();
    $('#cloud-status').textContent = 'Guardando hoja, perfil, indicadores y antecedentes en Firebase…';
    try {
      const [profileResponse, pdfResponse] = await Promise.all([fetch('materiales/perfil-2026/Loja_PSL_renta_2024.json'), fetch('materiales/perfil-2026/Loja_PSL_renta_2024.pdf')]);
      if (!profileResponse.ok || !pdfResponse.ok) throw new Error('No se han podido recuperar los originales del perfil.');
      const profileJson = await profileResponse.text();
      const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(profileJson));
      const hash = [...new Uint8Array(digest)].map(value => value.toString(16).padStart(2, '0')).join('');
      if (hash !== evidence.profileSha256) throw new Error('El JSON del perfil ha cambiado. Recarga y contrasta las fuentes antes de guardar.');
      const pdfBytes = await pdfResponse.arrayBuffer();
      const pdfHash = [...new Uint8Array(await crypto.subtle.digest('SHA-256', pdfBytes))].map(value => value.toString(16).padStart(2, '0')).join('');
      if (pdfHash !== evidence.profilePdfSha256) throw new Error('El PDF del perfil ha cambiado. Contrasta sus fuentes antes de guardar.');
      const profilePdf = await new Promise((resolve, reject) => {
        const reader = new FileReader(); reader.onload = () => resolve(String(reader.result).split(',')[1]); reader.onerror = () => reject(new Error('No se ha podido preparar el PDF.')); reader.readAsDataURL(new Blob([pdfBytes], {type: 'application/pdf'}));
      });
      const payload = {schema: 'aula-loja-complete/v1', worksheet, evidence, originals: {profileJson, profileJsonSha256: hash, profilePdfBase64: profilePdf, profilePdfSha256: pdfHash}};
      version = await cloud.saveSession(payload, version);
      const reread = await cloud.loadSession();
      if (!reread || reread.version < version || (reread.version === version && JSON.stringify(reread.payload) !== JSON.stringify(payload))) throw new Error('El servidor no ha confirmado la lectura de la versión guardada. Recupera la sesión para comprobarla.');
      dirty = editGeneration !== generation;
      $('#cloud-status').textContent = `Versión ${version} guardada en Firebase y comprobada desde el servidor.`;
      $('#draft-status').textContent = dirty ? 'Hay cambios posteriores al último guardado. Vuelve a guardar en Firebase.' : `Todo el contenido de esta hoja está guardado en Firebase, versión ${version}.`;
    } catch (error) { $('#cloud-status').textContent = cloudError(error); }
    finally { busy = false; updateCloudButtons(); }
  }

  function collect() {
    state.historyNotes = $('#history-notes').value;
    state.participation = $('#participation').value;
    state.closingNotes = $('#closing-notes').value;
    state.history = Object.fromEntries([...document.querySelectorAll('[data-history-id]')].map(select => [select.dataset.historyId, select.value]));
    state.lines = [...document.querySelectorAll('.decision-card')].map(card => Object.fromEntries(fieldNames.map(name => [name, card.querySelector(`[name="${name}"]`).value])));
  }

  function displayReference(card) {
    const result = evidence.results.find(item => item.id === card.querySelector('[name="reference"]').value);
    const note = card.querySelector('.reference-note');
    note.replaceChildren();
    if (!result) return;
    note.append(element('p', `${result.value} ${result.unit} · ${result.period} · ${result.scale ?? 'Loja'}`));
    note.append(element('p', `${result.source}. ${result.page}. Base ${result.denominator ?? 'no explicitada'}. ${result.caution}`));
    const use = element('button', 'Usar esta referencia en la ficha', 'secondary');
    use.type = 'button';
    use.addEventListener('click', () => {
      const fields = {indicator: result.title, baseline: `${result.value} ${result.unit} · ${result.period} · ${result.scale ?? 'Loja'}`, basis: `${result.unit}. ${result.denominator ?? 'Base pendiente'}`, source: `${result.source}. ${result.page}. Periodicidad de seguimiento por acordar.`};
      for (const [name, value] of Object.entries(fields)) {
        const input = card.querySelector(`[name="${name}"]`);
        if (!input.value.trim()) input.value = value.slice(0, 4000);
      }
      collect();
      persist();
    });
    note.append(use);
  }

  function renderLine(line, index) {
    const card = $('#decision-template').content.firstElementChild.cloneNode(true);
    card.querySelector('.card-title').textContent = `Ficha ${index + 1}`;
    const conclusionSelect = card.querySelector('[name="conclusion"]');
    for (const finding of evidence.findings) {
      const option = element('option', finding);
      option.value = conclusionId(finding);
      conclusionSelect.append(option);
    }
    const referenceSelect = card.querySelector('[name="reference"]');
    for (const result of evidence.results) {
      const option = element('option', `${result.title} · ${result.scale ?? 'Loja'} · ${result.period}`);
      option.value = result.id;
      referenceSelect.append(option);
    }
    for (const name of fieldNames) card.querySelector(`[name="${name}"]`).value = line[name];
    referenceSelect.addEventListener('change', () => displayReference(card));
    card.querySelector('.remove-line').addEventListener('click', () => {
      collect();
      state.lines.splice(index, 1);
      renderLines();
      persist();
    });
    displayReference(card);
    return card;
  }

  function renderLines() {
    $('#decision-cards').replaceChildren(...state.lines.map(renderLine));
  }

  function renderMetrics() {
    const search = $('#metric-search').value.toLocaleLowerCase('es');
    const results = evidence.results.filter(result => `${result.title} ${result.topic} ${result.period} ${result.scale}`.toLocaleLowerCase('es').includes(search));
    $('#metric-rows').replaceChildren(...results.map(result => {
      const row = document.createElement('tr');
      for (const text of [`${result.title} · ${result.scale ?? 'Loja'}`, `${result.value} ${result.unit}`, result.period, `${result.source}. ${result.page}. Base ${result.denominator ?? 'no explicitada'}. ${result.caution}`]) row.append(element('td', text));
      return row;
    }));
  }

  function renderEvidence() {
    $('#history-rows').replaceChildren(...evidence.history.map(item => {
      const row = document.createElement('tr');
      row.append(element('td', item.id), element('td', item.title), element('td', item.score));
      const cell = document.createElement('td');
      const select = document.createElement('select');
      select.dataset.historyId = item.id;
      select.setAttribute('aria-label', `Revisión actual del problema ${item.id}`);
      for (const [value, label] of [['', 'Sin revisar'], ['maintain', 'Mantener'], ['reformulate', 'Reformular'], ['contrast', 'Contrastar o ampliar información']]) {
        const option = element('option', label); option.value = value; select.append(option);
      }
      select.value = state.history[item.id] ?? '';
      cell.append(select); row.append(cell); return row;
    }));
    $('#profile-findings').replaceChildren(...evidence.findings.map(finding => element('li', finding)));
    $('#income-rows').replaceChildren(...evidence.income.map(item => {
      const row = document.createElement('tr');
      for (const text of [item.code, item.person, item.household, item.threshold]) row.append(element('td', text));
      return row;
    }));
    renderMetrics();
  }

  function renderDraft() {
    $('#history-notes').value = state.historyNotes;
    $('#participation').value = state.participation;
    $('#closing-notes').value = state.closingNotes;
    renderEvidence();
    renderLines();
  }

  function exportSession() {
    collect();
    const incomplete = state.lines.findIndex(line => line.status === 'agreed' && ['line', 'priority', 'population', 'objective', 'indicator', 'basis', 'baseline', 'target', 'source', 'owner'].some(name => !line[name].trim()));
    if (incomplete >= 0) {
      $('#transfer-status').textContent = `La ficha ${incomplete + 1} figura como acordada y tiene campos pendientes. Complétalos o registra su estado como «Pendiente de contraste» antes de exportar.`;
      return;
    }
    const blob = new Blob([JSON.stringify({...state, exportedAt: new Date().toISOString()}, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = 'Loja_sesion_2026-11-27_hoja_trabajo.json'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    $('#transfer-status').textContent = 'Descarga de la hoja preparada. Revisa su contenido antes de incorporarla al acta del Grupo Motor.';
  }

  async function importSession(event) {
    const file = event.target.files[0];
    if (!file) return;
    try {
      if (file.size > 1024 * 1024) throw new Error('La hoja supera el tamaño admitido de 1 MB.');
      const imported = checkedState(JSON.parse(await file.text()));
      if (!window.confirm('Se sustituirá la hoja de trabajo de esta pantalla por el archivo seleccionado. ¿Continuar?')) return;
      state = imported; renderDraft(); persist();
      $('#transfer-status').textContent = state.profileSha256 === evidence.profileSha256 ? 'Hoja recuperada. Puedes continuar la revisión.' : 'Hoja recuperada con una revisión diferente del perfil. Contrasta las referencias antes de cerrar acuerdos.';
    } catch (error) { $('#transfer-status').textContent = `No se ha recuperado la hoja. ${error.message}`; }
    finally { event.target.value = ''; }
  }

  function printSession() {
    collect();
    const values = [];
    for (const input of document.querySelectorAll('#hoja input, #hoja textarea, #hoja select, #cierre textarea')) {
      const text = input.tagName === 'SELECT' ? input.selectedOptions[0]?.textContent : input.value;
      const node = element('div', text || 'Pendiente de completar', 'print-value');
      input.after(node); values.push([input, node]); input.style.display = 'none';
    }
    try { window.print(); } finally { for (const [input, node] of values) {input.style.display = ''; node.remove();} }
  }

  async function init() {
    $('#add-line').disabled = true;
    $('#export-session').disabled = true;
    try {
      const response = await fetch('materiales/perfil-2026/sesion-datos.json');
      if (!response.ok) throw new Error('No se ha podido recuperar la documentación.');
      evidence = await response.json();
      if (evidence.schema !== 'loja-session-evidence/v1' || evidence.history.length !== 26 || evidence.results.length !== 97 || evidence.income.length !== 17) throw new Error('La documentación está incompleta.');
      state = emptyState();
      renderDraft();
      $('#load-state').textContent = '';
      $('#add-line').disabled = false; $('#export-session').disabled = false;
      $('#add-line').addEventListener('click', () => {
        collect();
        if (state.lines.length >= 20) { $('#transfer-status').textContent = 'La hoja admite hasta veinte fichas.'; return; }
        const line = Object.fromEntries(fieldNames.map(name => [name, ''])); line.status = 'proposal'; state.lines.push(line);
        renderLines(); persist(); $('#decision-cards').lastElementChild.querySelector('input').focus();
      });
      for (const id of ['historia', 'hoja', 'cierre']) {
        $(`#${id}`).addEventListener('input', event => { if (event.target.matches('input:not([type="file"]), textarea, select')) {collect(); persist();} });
        $(`#${id}`).addEventListener('change', event => { if (event.target.matches('select')) {collect(); persist();} });
      }
      $('#metric-search').addEventListener('input', renderMetrics);
      $('#export-session').addEventListener('click', exportSession);
      $('#import-session').addEventListener('change', importSession);
      $('#print-session').addEventListener('click', printSession);
      window.addEventListener('beforeunload', event => { if (dirty) {event.preventDefault(); event.returnValue = '';} });
      try {
        cloud = await import('./loja-firebase-session.js');
        cloud.observeAccount(user => {
          account = user; version = 0; updateCloudButtons();
          $('#cloud-status').textContent = user ? 'Cuenta conectada. Recupera la sesión de Firebase antes de continuar una hoja existente.' : 'Accede con la cuenta de coordinación para guardar y recuperar la sesión.';
          if (user && !dirty) void recoverCloud();
        });
        updateCloudButtons();
        $('#sign-in').addEventListener('click', async () => { try { await cloud.connectAccount(); } catch (error) { $('#cloud-status').textContent = cloudError(error); } });
        $('#sign-out').addEventListener('click', async () => { if (!dirty || window.confirm('Hay cambios pendientes de guardar. ¿Cerrar la sesión de acceso?')) { try { await cloud.disconnectAccount(); } catch (error) { $('#cloud-status').textContent = cloudError(error); } } });
        $('#save-firebase').addEventListener('click', saveCloud);
        $('#load-firebase').addEventListener('click', recoverCloud);
      } catch (error) { $('#cloud-status').textContent = `Firebase no está disponible. ${cloudError(error)}`; }
    } catch (error) {
      $('#load-state').textContent = `${error.message} Recarga la página o utiliza los documentos PDF y JSON enlazados para preparar la sesión.`;
    }
  }
  init();
})();
