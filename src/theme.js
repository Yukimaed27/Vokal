const key = 'vokal.theme';
const system = matchMedia('(prefers-color-scheme: dark)');
const toggle = document.querySelector('#theme-toggle');
let preference = 'system';
try {
  const saved = localStorage.getItem(key);
  if (['system', 'dark', 'light'].includes(saved)) preference = saved;
} catch { /* System preference remains available when storage is blocked. */ }
function apply() {
  const theme = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference;
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#111113' : '#e9e6e1';
  const label = theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro';
  toggle.setAttribute('aria-label', label);
  toggle.title = label;
}
function choose(value) {
  preference = value;
  try { localStorage.setItem(key, preference); } catch { /* Keep the selection for this visit. */ }
  apply();
}
toggle.addEventListener('click', () => choose(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
system.addEventListener('change', apply);
apply();
