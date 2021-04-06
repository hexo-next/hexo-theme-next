/* global NexT, CONFIG */

document.addEventListener('page:loaded', () => {
  if (!CONFIG.enableMath) return;

  NexT.utils.getScriptPromise(CONFIG.katex.copy_tex_js).catch(() => {});
});
