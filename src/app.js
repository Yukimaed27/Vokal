import { lessons, words } from './content.js';
import { isCorrect, schedule, dueWords, readState } from './learning.js';

const key = 'vokal.progress.v1';
const main = document.querySelector('main');
const notice = document.querySelector('#storage-notice');
let state;
let session = null;
try {
  state = readState(localStorage.getItem(key), lessons.map(l => l.id), words.map(w => w.id));
} catch {
  state = readState(null, [], []);
  notify('No pudimos recuperar el progreso. Puedes seguir aprendiendo; no se ha sobrescrito el registro anterior.');
}
function notify(message) { notice.textContent = message; notice.hidden = false; }
function save() {
  try { localStorage.setItem(key, JSON.stringify(state)); }
  catch { notify('El navegador no permite guardar tu progreso. Los cambios de esta sesión podrían perderse.'); }
}
function esc(value) { return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char])); }
function button(text, action, kind = 'primary') { return `<button class="${kind}" data-action="${action}">${text}</button>`; }
function nextLesson() { return lessons.find(l => !state.completed.includes(l.id)) ?? lessons[0]; }
function title(kicker, heading, description) { return `<p class="eyebrow">${kicker}</p><h1>${heading}</h1><p class="intro">${description}</p>`; }
function lessonCards() {
  return lessons.map((lesson, index) => `<a class="lesson-card" href="#leccion/${lesson.id}"><span class="lesson-number">0${index + 1}</span><div><p class="eyebrow">${lesson.category}</p><h3>${lesson.title}</h3><p>${lesson.subtitle}</p></div><span class="card-status">${state.completed.includes(lesson.id) ? 'Completada ✓' : 'Explorar ↗'}</span></a>`).join('');
}
function home() {
  const next = nextLesson();
  const due = dueWords(words, state.reviews).length;
  return `${title('TU ALEMÁN EMPIEZA AQUÍ', 'Un pequeño paso.<br>Una nueva conversación.', 'Aprende a entender, responder y sentirte más cerca de Alemania. A tu ritmo, con una guía en cada paso.')}
    <section class="hero"><div><span class="badge light">A1 · UNIDAD 01</span><h2>Primeros encuentros</h2><p>Un saludo. Tu nombre. Un gracias.<br>Todo empieza con algo que ya puedes usar.</p><a class="primary" href="#leccion/${next.id}">${state.completed.length ? 'Continuar aprendiendo' : 'Empezar mi primera lección'} <span aria-hidden="true">↗</span></a><p class="hero-note">Comprende · Practica · Recuerda</p></div><div class="word-art" aria-hidden="true"><div class="orbit"></div><span class="hallo">Hallo<span>!</span></span><span class="art-note">Tu primera conexión.</span><span class="art-dot"></span></div></section>
    <div class="stats"><div><span class="stat-value">${state.completed.length}<small> / 3</small></span><span>Lecciones completadas</span></div><div><span class="stat-value">${Object.keys(state.reviews).length}<small> / ${words.length}</small></span><span>Entradas practicadas</span></div><a href="#repaso"><span class="stat-value">${due}</span><span>Repasos para ahora ↗</span></a></div>
    <div class="section-heading"><div><p class="eyebrow">PASO A PASO</p><h2>Tu primera unidad</h2></div><a href="#ruta">Ver mi ruta ↗</a></div>${lessonCards()}
    <section class="note"><div><h3>¿Ya conoces estos primeros pasos?</h3><p>Evalúa esta unidad. Si dominas sus contenidos, puedes marcarla como conocida.</p></div>${button('Evaluar esta unidad', 'assessment', 'secondary')}</section>`;
}
function lessonPage(id) {
  const lesson = lessons.find(l => l.id === id);
  if (!lesson) return title('NO ENCONTRADO', 'Esta lección no existe.', 'Vuelve a Mi aprendizaje para continuar.');
  return `<a class="back" href="#inicio">← Mi aprendizaje</a>${title('A1 · COMPRENDER ANTES DE PRACTICAR', lesson.title, lesson.subtitle)}<section class="paper"><p class="eyebrow">LA IDEA CLAVE</p><h2>Primero, entiende</h2><p>${lesson.theory}</p><blockquote><p lang="de">${lesson.example[0]}</p><p>${lesson.example[1]}</p></blockquote><div class="culture"><strong>En contexto</strong><p>${lesson.tip}</p></div></section><div class="section-heading"><h2>Palabras para llevar contigo</h2><span>${lesson.words.length} entradas</span></div><div class="word-grid">${words.filter(w => w.lesson === id).map(wordCard).join('')}</div><div class="practice-start"><p>No necesitas memorizar todo ahora. Vamos a practicar con ayuda.</p>${button('Practicar esta lección ↗', `practice:${id}`)}</div>`;
}
function wordCard(word) { return `<article class="word-card"><h3 lang="de">${esc(word.de)}</h3><p>${esc(word.es)}</p><p class="example" lang="de">${esc(word.example)}</p></article>`; }
function startQuestions(id) {
  const all = id === 'assessment';
  session = { type: all ? 'assessment' : 'practice', lesson: id, questions: (all ? lessons : lessons.filter(l => l.id === id)).flatMap(l => l.questions), index: 0, score: 0, mistakes: 0, answered: false };
  location.hash = all ? 'evaluacion' : `practica/${id}`;
  render();
}
function exercise() {
  if (!session || session.type === 'review') return `${title('PRÁCTICA', 'Vamos paso a paso.', 'Abre una lección para comenzar la práctica.')}<a class="primary" href="#inicio">Ver mis lecciones</a>`;
  const q = session.questions[session.index];
  return `<a class="back" href="#inicio">← Salir de la práctica</a>${title(session.type === 'assessment' ? 'EVALUACIÓN DE ESTA UNIDAD · NO CERTIFICA NIVEL' : 'AHORA ES TU TURNO', 'Lo que entiendes, lo puedes usar.', `Pregunta ${session.index + 1} de ${session.questions.length}`)}<progress aria-label="Avance de la práctica" max="${session.questions.length}" value="${session.index}"></progress><section class="paper exercise"><h2 id="question">${q.prompt}</h2><form id="answer-form"><fieldset><legend class="sr-only">${q.prompt}</legend>${q.options ? q.options.map((option, i) => `<label class="option"><input type="radio" name="answer" value="${esc(option)}" required><span><span class="option-letter">${String.fromCharCode(65 + i)}</span><span lang="de">${esc(option)}</span></span></label>`).join('') : '<label for="written-answer">Tu respuesta en alemán</label><input id="written-answer" name="answer" autocomplete="off" autocapitalize="off" spellcheck="false" required maxlength="160">'}</fieldset><button class="primary" type="submit">Comprobar respuesta</button></form><div id="feedback" role="status"></div></section>`;
}
function finish() {
  const all = session.type === 'assessment';
  const mastered = session.score / session.questions.length >= 0.8;
  if (all) state.assessment = { score: session.score, total: session.questions.length };
  else {
    if (!state.completed.includes(session.lesson)) state.completed.push(session.lesson);
    for (const word of words.filter(w => w.lesson === session.lesson)) {
      // shortcut: lesson errors schedule the whole lesson, replace with per-word evidence when exercises are tagged.
      state.reviews[word.id] = schedule(state.reviews[word.id], session.mistakes === 0);
    }
  }
  save();
  main.innerHTML = `${title('UN PASO MÁS CERCA', all ? 'Ya sabes por dónde empezar.' : 'Has terminado la práctica.', `${session.score} de ${session.questions.length} respuestas correctas al primer intento.`)}<section class="paper"><h2>${mastered ? 'Una buena base para seguir.' : 'Aprender también es volver a intentarlo.'}</h2><p>${all ? 'Esta evaluación cubre solo los contenidos de la primera unidad. No asigna un nivel A1–C1.' : 'Tus palabras entran en el repaso. Si hubo errores, volverán antes para ayudarte a afianzarlas.'}</p>${all && mastered ? button('Marcar esta unidad como conocida', 'skip-unit') : ''}<a class="secondary" href="#inicio">Volver a mi aprendizaje</a></section>`;
  main.focus();
}
function reviewPage() {
  const due = dueWords(words, state.reviews);
  return `${title('RECORDAR SIN AGOBIARSE', 'Un poco de repaso.', 'Intenta recordar antes de mirar. Si te cuesta, volveremos a practicarlo pronto.')}<section class="paper"><h2>${due.length ? `${due.length} entradas listas para repasar` : 'Por ahora, todo al día.'}</h2><p>${due.length ? 'Las palabras que fallas vuelven en diez minutos. Las que recuerdas se espacian de forma gradual.' : 'Completa una lección para comenzar. Después, tus repasos aparecerán aquí cuando toque.'}</p>${due.length ? button('Empezar repaso', 'review') : '<a class="primary" href="#inicio">Seguir aprendiendo</a>'}</section>`;
}
function reviewCard() {
  const word = session.words[session.index];
  main.innerHTML = `${title('REPASO', 'Dale un momento a tu memoria.', `Entrada ${session.index + 1} de ${session.words.length}`)}<section class="paper flashcard"><p>¿Qué significa esta palabra o expresión?</p><h2 lang="de">${esc(word.de)}</h2><div id="reveal">${button('Mostrar significado', 'reveal', 'secondary')}</div></section>`;
  main.focus();
}
function render() {
  const route = location.hash.slice(1) || 'inicio';
  document.querySelectorAll('nav a').forEach(a => {
    if (a.hash === `#${route}`) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  if (route === 'inicio') main.innerHTML = home();
  else if (route === 'ruta') main.innerHTML = `${title('TU CAMINO', 'De las primeras palabras a nuevas posibilidades.', 'Hoy empezamos por A1. La ruta intermedia y avanzada se incorporará con contenidos y evaluaciones revisados.')}<section class="paper"><div class="levels">${['A1', 'A2', 'B1', 'B2', 'C1'].map((level,i) => `<div class="level ${i === 0 ? 'active' : ''}"><strong>${level}</strong><span>${i === 0 ? 'Unidad inicial disponible' : 'Por desarrollar'}</span></div>`).join('')}</div></section>${lessonCards()}`;
  else if (route === 'palabras') {
    main.innerHTML = `${title('TU EQUIPAJE', 'Palabras con contexto.', `${words.length} entradas disponibles en esta muestra. Objetivo del catálogo: 10 000 entradas revisadas.`)}<label for="word-search">Buscar en alemán o español</label><input id="word-search" type="search" placeholder="Por ejemplo: gracias"><p id="search-count" role="status"></p><div class="word-grid" id="word-results">${words.map(wordCard).join('')}</div>`;
    document.querySelector('#word-search').addEventListener('input', event => {
      const query = event.target.value.toLocaleLowerCase('es');
      const matches = words.filter(w => `${w.de} ${w.es}`.toLocaleLowerCase('es').includes(query));
      document.querySelector('#word-results').innerHTML = matches.map(wordCard).join('');
      document.querySelector('#search-count').textContent = `${matches.length} resultados`;
    });
  } else if (route === 'repaso') main.innerHTML = reviewPage();
  else if (route.startsWith('leccion/')) main.innerHTML = lessonPage(route.split('/')[1]);
  else if (route.startsWith('practica/') || route === 'evaluacion') main.innerHTML = exercise();
  else { location.hash = 'inicio'; return; }
  main.focus();
}
main.addEventListener('submit', event => {
  if (event.target.id !== 'answer-form') return;
  event.preventDefault();
  if (!session || session.answered) return;
  const q = session.questions[session.index];
  const answer = new FormData(event.target).get('answer');
  const correct = isCorrect(answer ?? '', q.answers);
  if (correct) session.score++; else session.mistakes++;
  session.answered = true;
  for (const control of event.target.elements) control.disabled = true;
  document.querySelector('#feedback').innerHTML = `<div class="feedback ${correct ? 'correct' : 'retry'}"><strong>${correct ? '¡Bien hecho!' : `La respuesta es: ${esc(q.answers[0])}`}</strong><p>${q.explanation}</p>${button('Continuar', 'next')}</div>`;
  document.querySelector('[data-action="next"]').focus();
});
main.addEventListener('click', event => {
  const control = event.target.closest('[data-action]');
  if (!control) return;
  const action = control.dataset.action;
  if (action.startsWith('practice:')) startQuestions(action.split(':')[1]);
  else if (action === 'assessment') startQuestions('assessment');
  else if (action === 'next' && session?.answered) {
    session.index++; session.answered = false;
    if (session.index === session.questions.length) finish(); else { main.innerHTML = exercise(); main.focus(); }
  } else if (action === 'skip-unit' && session?.type === 'assessment' && session.score / session.questions.length >= 0.8) {
    state.completed = lessons.map(l => l.id);
    for (const word of words) if (!state.reviews[word.id]) state.reviews[word.id] = schedule(null, true);
    save(); location.hash = 'inicio';
  } else if (action === 'review') {
    const due = dueWords(words, state.reviews);
    if (!due.length) { render(); return; }
    session = { type: 'review', words: due, index: 0, revealed: false }; reviewCard();
  } else if (action === 'reveal' && session?.type === 'review') {
    session.revealed = true;
    const word = session.words[session.index];
    document.querySelector('#reveal').innerHTML = `<p class="meaning">${esc(word.es)}</p><p lang="de">${esc(word.example)}</p><div class="review-actions">${button('Necesito practicar', 'again', 'secondary')}${button('Lo recordé', 'remember')}</div>`;
    document.querySelector('[data-action="again"]').focus();
  } else if (['again', 'remember'].includes(action) && session?.type === 'review' && session.revealed) {
    const word = session.words[session.index];
    state.reviews[word.id] = schedule(state.reviews[word.id], action === 'remember'); save();
    session.index++; session.revealed = false;
    if (session.index < session.words.length) reviewCard(); else { session = null; render(); }
  }
});
window.addEventListener('hashchange', () => {
  const route = location.hash.slice(1);
  const activeRoute = session?.type === 'assessment' ? 'evaluacion' : session?.type === 'practice' ? `practica/${session.lesson}` : 'repaso';
  if (route !== activeRoute) session = null;
  render();
});
render();
