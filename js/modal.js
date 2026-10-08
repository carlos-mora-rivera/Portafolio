import { proyectosInfo } from './data/index.js';

export function initProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const closeBtns = document.querySelectorAll('.modal-close-trigger');

  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalCase = document.getElementById('modal-case');
  const modalTech = document.getElementById('modal-tech');
  const modalRepo = document.getElementById('modal-repo-link');

  const openModal = (projectId) => {
    const data = proyectosInfo[projectId];

    if (!data) {
      console.warn(`No se encontraron datos para el proyecto: ${projectId}`);
      return;
    }

    if (modalBadge) modalBadge.textContent = data.badge || '';
    if (modalTitle) modalTitle.textContent = data.titulo || '';
    if (modalDesc) modalDesc.textContent = data.resumen || '';
    if (modalCase) {
      modalCase.innerHTML = `<strong>El Reto:</strong> ${data.retos || 'N/A'}<br><br><strong>La Solución:</strong> ${data.solucion || 'N/A'}`;
    }
    if (modalRepo) modalRepo.href = data.repoUrl || '#';
    if (modalTech) {
      modalTech.innerHTML = (data.tecnologias || []).map(tech => `<span>${tech}</span>`).join('');
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Delegación de eventos para abrir modal desde cualquier botón .open-modal
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-modal');
    if (btn) {
      e.preventDefault();
      const projectId = btn.dataset.id;
      openModal(projectId);
    }
  });

  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}