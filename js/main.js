import { initTheme } from './theme.js';
import { initProject } from './project.js';
import { initProjectModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  // Aislamiento seguro de inicializaciones
  try { initTheme(); } catch (e) { console.error('Theme init error:', e); }
  try { initProject(); } catch (e) { console.error('Project filter init error:', e); }
  try { initProjectModal(); } catch (e) { console.error('Modal init error:', e); }
  try { initQuickCopy(); } catch (e) { console.error('Quick copy init error:', e); }
});

// Función auxiliar para los botones "Copiar" en contacto.html
function initQuickCopy() {
  const copyButtons = document.querySelectorAll('.btn-copy');
  if (!copyButtons.length) return;

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetId = btn.dataset.copy;
      const inputEl = document.getElementById(targetId);
      if (!inputEl) return;

      try {
        await navigator.clipboard.writeText(inputEl.value);
        const originalText = btn.textContent;
        btn.textContent = '¡Copiado!';
        btn.classList.add('copied');
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Error al copiar:', err);
      }
    });
  });
}