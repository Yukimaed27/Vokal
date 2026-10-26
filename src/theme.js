const key = 'vokal.theme';
const system = matchMedia('(prefers-color-scheme: dark)');
const select = document.querySelector('#theme-select');
let preference = 'system';
try {
  const saved = localStorage.getItem(key);
  if (['system', 'dark', 'light'].includes(saved)) preference = saved;
} catch { /* System preference remains available when storage is blocked. */ }
function apply() {
  const theme = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference;
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#101318' : '#f5f6f8';
  select.value = preference;
}
function choose(value) {
  preference = value;
  try { localStorage.setItem(key, preference); } catch { /* Keep the selection for this visit. */ }
  apply();
}
select.addEventListener('change', () => choose(select.value));
system.addEventListener('change', apply);
apply();
