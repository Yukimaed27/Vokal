const key = 'vokal.theme';
const system = matchMedia('(prefers-color-scheme: dark)');
const select = document.querySelector('#theme-select');
const toggle = document.querySelector('#theme-toggle');
let preference = 'system';
try {
  const saved = localStorage.getItem(key);
  if (['system', 'dark', 'light'].includes(saved)) preference = saved;
} catch { /* System preference remains available when storage is blocked. */ }
function apply() {
  const theme = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference;
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#141018' : '#faf5f7';
  select.value = preference;
  toggle.textContent = theme === 'dark' ? 'Modo claro' : 'Modo noche';
  toggle.setAttribute('aria-label', `Cambiar a modo ${theme === 'dark' ? 'claro' : 'noche'}`);
}
function choose(value) {
  preference = value;
  try { localStorage.setItem(key, preference); } catch { /* Keep the selection for this visit. */ }
  apply();
}
select.addEventListener('change', () => choose(select.value));
toggle.addEventListener('click', () => choose(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
system.addEventListener('change', apply);
apply();
