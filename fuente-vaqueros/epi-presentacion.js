(function () {
  'use strict';
  const file = './Informe%20sobre%20la%20Situaci%C3%B3n%20de%20Salud%20en%20el%20Municipio%20de%20Fuente%20Vaqueros.pdf';
  const $ = id => document.getElementById(id);
  const root = $('deck'), screen = $('screen'), canvas = $('slide'), ctx = canvas.getContext('2d', { alpha: false });
  const message = $('message'), previous = $('prev'), next = $('next'), count = $('counter');
  const fullscreen = $('fullscreen'), exit = $('exit');
  let pdf = null, pageNumber = 1, renderTask = null, generation = 0, resizeTimer = null;
  function inform(text) { message.textContent = text; message.hidden = false; }
  function refresh() {
    count.textContent = pdf ? (pageNumber + ' / ' + pdf.numPages) : '— / 14';
    previous.disabled = !pdf || pageNumber === 1;
    next.disabled = !pdf || pageNumber >= pdf.numPages;
  }
  async function show(number) {
    if (!pdf) return;
    pageNumber = Math.max(1, Math.min(pdf.numPages, number));
    refresh();
    const myGeneration = ++generation;
    if (renderTask) {
      try { renderTask.cancel(); } catch (_) {}
      renderTask = null;
    }
    inform('Preparando diapositiva ' + pageNumber + '…');
    try {
      const page = await pdf.getPage(pageNumber);
      if (myGeneration !== generation) return;
      const viewport = page.getViewport({ scale: 1 });
      const w = Math.max(1, screen.clientWidth - 12), h = Math.max(1, screen.clientHeight - 12);
      const scale = Math.min(w / viewport.width, h / viewport.height);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const view = page.getViewport({ scale: scale * pixelRatio });
      canvas.width = Math.max(1, Math.round(view.width));
      canvas.height = Math.max(1, Math.round(view.height));
      canvas.style.width = (view.width / pixelRatio) + 'px';
      canvas.style.height = (view.height / pixelRatio) + 'px';
      renderTask = page.render({ canvasContext: ctx, viewport: view });
      await renderTask.promise;
      if (myGeneration === generation) {
        message.hidden = true;
        canvas.setAttribute('aria-label', 'Diapositiva ' + pageNumber + ' de ' + pdf.numPages);
      }
      renderTask = null;
    } catch (e) {
      if (e && e.name === 'RenderingCancelledException') return;
      if (myGeneration === generation) inform('No se ha podido mostrar esta diapositiva. ' + (e && e.message ? e.message : '') );
    }
  }
  previous.addEventListener('click', () => show(pageNumber - 1));
  next.addEventListener('click', () => show(pageNumber + 1));
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.target.closest('button,a,input,textarea,select')) return;
    if (['ArrowRight','ArrowDown','PageDown',' '].includes(e.key)) { e.preventDefault(); show(pageNumber + 1); }
    else if (['ArrowLeft','ArrowUp','PageUp','Backspace'].includes(e.key)) { e.preventDefault(); show(pageNumber - 1); }
    else if (e.key === 'Home') { e.preventDefault(); show(1); }
    else if (e.key === 'End' && pdf) { e.preventDefault(); show(pdf.numPages); }
  });
  let touchX = null;
  screen.addEventListener('touchstart', e => { if (e.touches.length === 1) touchX = e.touches[0].clientX; }, { passive: true });
  screen.addEventListener('touchend', e => {
    if (touchX === null || !e.changedTouches.length) return;
    const diff = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(diff) > 65) show(pageNumber + (diff < 0 ? 1 : -1));
  }, { passive: true });
  fullscreen.addEventListener('click', () => {
    if (root.requestFullscreen) root.requestFullscreen().catch(() => inform('No se ha podido activar pantalla completa. Puedes usar F11.'));
    else inform('Tu navegador no admite pantalla completa de esta página. Puedes usar F11.');
  });
  exit.addEventListener('click', () => { if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen(); });
  document.addEventListener('fullscreenchange', () => {
    const active = !!document.fullscreenElement;
    fullscreen.hidden = active;
    exit.hidden = !active;
    if (pdf) show(pageNumber);
  });
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (pdf) show(pageNumber); }, 160);
  });
  async function start() {
    if (!window.pdfjsLib) {
      inform('No se ha podido cargar el motor de presentación. Comprueba la conexión y actualiza la página.');
      return;
    }
    if (!ctx) { inform('Este navegador no permite representar diapositivas.'); return; }
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    try {
      const task = window.pdfjsLib.getDocument({ url: file, isEvalSupported: false });
      pdf = await task.promise;
      refresh();
      await show(1);
    } catch (e) {
      inform('No se ha podido abrir el documento original desde el Aula. Comprueba la conexión o espera a que termine la publicación de GitHub Pages.');
    }
  }
  refresh();
  start();
})();