# 🚀 Portafolio Web Personal | Carlos.dev

Bienvenido al repositorio de mi portafolio web personal. Un sitio web moderno, rápido y totalmente responsivo desarrollado con **HTML5, CSS3 modular (CSS Variables & BEM)** y **JavaScript Vanilla (ES6+)**.

El sitio incluye un sistema de cambio de tema (Claro/Oscuro), filtrado dinámico de proyectos, ventana modal de detalle e integración del formulario de contacto directamente con **Google Sheets** utilizando **Google Apps Script**.

---

## 💻 Demo en Vivo

Puedes ver el portafolio desplegado en GitHub Pages:
👉 **[Ver Portafolio Online](https://tu-usuario.github.io/tu-repositorio/)** *(Reemplaza con tu enlace de GitHub Pages)*

---

## ✨ Características Principales

* 🎨 **Diseño Moderno & Paleta Sage Green:** Estética limpia inspirada en Bento Grid y componentes UI estilo macOS.
* 🌓 **Modo Claro / Oscuro (Dark Mode):** Alternador con transiciones suaves y guardado de preferencia local en el navegador (`localStorage`).
* 📱 **Diseño 100% Responsivo:** Adaptado para dispositivos móviles, tablets y pantallas de escritorio.
* 📂 **Filtrado de Proyectos & Modales:** Filtrado dinámico por tecnologías/categorías y vista detallada de proyectos mediante modales interactivos.
* 📩 **Formulario de Contacto en la Nube:** Captura de mensajes e peticiones en tiempo real conectadas a una base de datos en Google Sheets a través de una API Serverless personalizada en Google Apps Script.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3 (Custom Properties, Flexbox, CSS Grid), JavaScript Vanilla (ES6 Modules).
* **Backend / API:** Google Apps Script (GAS), Google Sheets API.
* **Hosting / Despliegue:** GitHub Pages.

---

## 📁 Estructura del Proyecto

```text
/
├── index.html              # Página Principal (Inicio & Bento Grid)
├── proyectos.html          # Galería y filtros de proyectos
├── contacto.html           # Formulario de contacto y copiado rápido
├── css/
│   ├── main.css            # Punto de entrada de estilos (@import central)
│   ├── variables.css       # Design Tokens (Colores Sage, sombras, radios)
│   ├── global.css          # Reset y estilos base
│   ├── header.css         # Header Sticky y Toggle de modo oscuro
│   ├── footer.css          # Pie de página y enlaces sociales
│   ├── home.css            # Estilos del Hero y Bento Grid
│   ├── proyectos.css       # Tarjetas de proyectos y modales
│   └── contacto.css        # Formulario con Floating Labels
└── js/
    ├── main.js             # Módulo JS principal
    ├── theme-init.js       # Anti-destello y gestión del tema
    ├── contacto.js         # Fetch hacia Google Apps Script / Google Sheets
    └── ...                 # Módulos JS adicionales (modales, filtros)
