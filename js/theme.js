export function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  toggle.checked = (currentTheme === 'dark');

  toggle.addEventListener('change', () => {
    const nextTheme = toggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}