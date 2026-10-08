// ==========================================================================
// INTEGRACIÓN FORMULARIO DE CONTACTO -> GOOGLE SHEETS
// ==========================================================================

// 1. Reemplaza este texto con la URL de tu Aplicación Web de Apps Script
const SCRIPT_URL = 'https://docs.google.com/spreadsheets/d/1h8yPKjkBcUe6-JTrMUrsvWp92BZFPN7dMgrDsXfQUEQ/edit?usp=sharing';

// 2. Selección de elementos del DOM
const contactForm = document.querySelector('.contact-form-ui');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    // Evitamos que la página se recargue al enviar el formulario
    e.preventDefault();

    // Referencia al botón para dar retroalimentación visual al usuario
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;

    // Cambiamos el texto del botón y lo deshabilitamos temporalmente
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    // ==========================================================================
    // FASE 1: OBTENER LOS DATOS DEL FORMULARIO
    // ==========================================================================
    const formData = {
      nombre: contactForm.querySelector('#nombre')?.value || contactForm.querySelector('input[type="text"]')?.value || '',
      email: contactForm.querySelector('#email')?.value || contactForm.querySelector('input[type="email"]')?.value || '',
      asunto: contactForm.querySelector('#asunto')?.value || contactForm.querySelector('select')?.value || 'Consulta General',
      mensaje: contactForm.querySelector('#mensaje')?.value || contactForm.querySelector('textarea')?.value || ''
    };

    // ==========================================================================
    // FASE 2: ENVIAR LOS DATOS A GOOGLE SHEETS (DRIVE)
    // ==========================================================================
    try {
      // Usamos fetch con mode 'no-cors' y Content-Type 'text/plain'
      // para evitar bloqueos de políticas CORS en Google Apps Script
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData)
      });

      // Confirmación de envío exitoso
      alert('¡Gracias! Tu petición de ayuda ha sido enviada con éxito.');
      contactForm.reset(); // Limpia los campos del formulario

    } catch (error) {
      console.error('Error al enviar la petición:', error);
      alert('Hubo un problema al enviar la información. Por favor, intenta de nuevo.');
    } finally {
      // Restauramos el botón a su estado original
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}