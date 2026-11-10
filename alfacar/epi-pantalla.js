(() => {
  const viewer = document.getElementById('fv-epi-visor');
  const enter = document.getElementById('fv-epi-ampliar');
  const leave = document.getElementById('fv-epi-salir');
  if (!viewer || !enter || !leave) return;

  enter.addEventListener('click', () => {
    if (viewer.requestFullscreen) {
      viewer.requestFullscreen().catch(() => {
        const link = viewer.querySelector('iframe');
        if (link) link.focus();
      });
    }
  });
  leave.addEventListener('click', () => {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen();
    }
  });
  document.addEventListener('fullscreenchange', () => {
    const active = document.fullscreenElement === viewer;
    enter.hidden = active;
    leave.hidden = !active;
  });
})();