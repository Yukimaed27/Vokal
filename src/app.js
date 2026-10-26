import {lessons, words, units, dictionaryLemmaCount} from './content.js';
import {partOfSpeech} from './vocabulary.js';
import {isCorrect, schedule, dueWords, readState, mergeProgress, unitUnlocked, lessonQuestions, assessmentQuestions} from './learning.js';
import {cloudConfig} from './config.js';
import {createCloud} from './cloud.js';

const guestKey = 'vokal.progress.v1';
const main = document.querySelector('main');
const notice = document.querySelector('#storage-notice');
const ids = [lessons.map(l => l.id), words.map(w => w.id), units.map(u => u.id)];
const wordById = new Map(words.map(word => [word.id,word]));
const levelLabel = level => level === 'LEX' ? 'Vocabulario' : level;
const clean = value => readState(value, ...ids);
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const route = () => location.hash.slice(1) || 'inicio';
const notify = message => {notice.textContent = message; notice.hidden = false;};
let cloud = null;
try {cloud = createCloud(cloudConfig);} catch (error) {notify(error.message);}
let account = cloud?.user?.id ?? null;
let state = load(cacheKey());
let session = null;
let syncTimer;
let syncing = false;
let syncAgain = false;
let syncMessage = account ? 'Conectando con tu nube…' : 'Progreso local';
let otpEmail = '';
let sendingCode = false;
let wordPage = 0;
let wordQuery = '';
let wordLevel = '';

function cacheKey() {return account ? `vokal.progress.v2:${account}` : guestKey;}
function load(key) {
  try {return clean(localStorage.getItem(key));}
  catch {notify('No se pudo leer el progreso local. Comprueba el almacenamiento del navegador antes de continuar.');return clean(null);}
}
function persist() {
  try {localStorage.setItem(cacheKey(), JSON.stringify(state));}
  catch {notify('No se pudo guardar aquí. No cierres la página hasta confirmar la sincronización con la nube.');}
}
function save() {
  persist();
  if (cloud?.user && account) {
    syncMessage = 'Cambios pendientes de sincronizar';updateLabel();
    clearTimeout(syncTimer);syncTimer = setTimeout(syncProgress,700);
  }
}
function updateLabel() {document.querySelector('#cloud-label').textContent = syncMessage;}
async function syncProgress() {
  if (!cloud?.user || !account) return;
  if (syncing) {syncAgain = true;return;}
  const owner = account;
  syncing = true;
  try {
    do {
      syncAgain = false;syncMessage = 'Sincronizando…';updateLabel();
      const result = await cloud.sync(state);
      if (owner !== account) return;
      state = mergeProgress(state,clean(JSON.stringify(result)));persist();
    } while (syncAgain && owner === account);
    syncMessage = 'Guardado en la nube';
    if (['inicio','cuenta'].includes(route()) || route().startsWith('ruta')) render(false);
  } catch (error) {
    if (owner === account) {syncMessage = 'Sin sincronizar · copia local';notify(error.message);}
  } finally {
    syncing = false;updateLabel();
    if (owner !== account && account) queueMicrotask(syncProgress);
  }
}
function button(text,action,kind = 'primary') {return `<button class="${kind}" data-action="${action}">${text}</button>`;}
function title(kicker,heading,description) {return `<p class="eyebrow">${kicker}</p><h1>${heading}</h1><p class="intro">${description}</p>`;}
const unlocked = unit => unitUnlocked(unit,units,lessons,state.completed);
const unitLessons = id => lessons.filter(l => l.unit === id);
function nextLesson() {return lessons.find(l => !state.completed.includes(l.id) && unlocked(l.unit)) ?? lessons[0];}
function lockedPage() {return `${title('PASO A PASO','Esta sección se abre después.','Domina la sección anterior o supera su evaluación para continuar.')}<a class="primary" href="#ruta">Ver mi ruta</a>`;}
function lessonCards(list) {
  return list.map(lesson => {
    const open = unlocked(lesson.unit);
    const number = String(unitLessons(lesson.unit).indexOf(lesson)+1).padStart(2,'0');
    return `<${open ? `a href="#leccion/${lesson.id}"` : 'article'} class="lesson-card ${open ? '' : 'locked'} ${state.completed.includes(lesson.id) ? 'completed' : ''}"><span class="lesson-number">${number}</span><div><p class="eyebrow">${levelLabel(lesson.level)} · ${lesson.words.length} ENTRADAS · ${lessonQuestions(lesson).length} EJERCICIOS</p><h3>${lesson.title}</h3><p>${lesson.subtitle}</p></div><span class="card-status">${state.completed.includes(lesson.id) ? 'Dominada ✓' : open ? 'Aprender ↗' : 'Por desbloquear'}</span></${open ? 'a' : 'article'}>`;
  }).join('');
}
function home() {
  const next = nextLesson();
  const unit = units.find(u => u.id === next.unit);
  const sectionLessons = unitLessons(unit.id);
  const sectionDone = sectionLessons.filter(l => state.completed.includes(l.id)).length;
  return `${title('TU ESPACIO PARA APRENDER','Tu próxima conversación<br>empieza <span class="text-accent">aquí.</span>','Entiende lo que dices. Descubre nuevas palabras. Lleva un poco más de alemán a tu vida, cada día.')}
    <div class="dashboard-grid"><section class="hero"><div class="hero-copy"><span class="badge light">${levelLabel(unit.level)} · TU SIGUIENTE PASO</span><h2>${unit.title}</h2><p>${unit.description}</p><a class="primary" href="#leccion/${next.id}">${state.completed.length ? 'Continuar aprendiendo' : 'Empezar a aprender'} <span aria-hidden="true">↗</span></a><p class="hero-note">${next.title}</p></div><div class="word-art" aria-hidden="true"><div class="phrase-card"><span class="phrase-label">UNA PALABRA. UN COMIENZO.</span><span class="hallo">Hallo<span>!</span></span><span class="phrase-translation">Hola. Así empieza una conexión.</span><span class="phrase-rule"></span><span class="phrase-language">DEUTSCH <span>PALABRAS QUE CONECTAN</span></span></div></div><div class="hero-progress"><div><span>Tu avance en esta sección</span><strong>${sectionDone} / ${sectionLessons.length}</strong></div><progress aria-label="Avance de la sección" max="${sectionLessons.length}" value="${sectionDone}"></progress></div></section>
    <section class="session-plan"><div><p class="eyebrow">UN MOMENTO PARA TI</p><h2>Aprender con intención.</h2><span class="session-duration">20–30 min · a tu ritmo</span></div><ol><li><span>01</span><div><h3>Primero, comprende</h3><p>Una idea clara y un diálogo real.</p></div></li><li><span>02</span><div><h3>Después, úsalo</h3><p>Reconoce, recuerda y escribe.</p></div></li><li><span>03</span><div><h3>Hazlo tuyo</h3><p>Repasa lo que te hizo pensar.</p></div></li></ol><p class="plan-note">Sin prisa. Sin rachas que perder.</p></section></div>
    <div class="stats"><div><span class="stat-value">${state.completed.length}<small> / ${lessons.length}</small></span><span>Lecciones dominadas</span></div><div><span class="stat-value">${Object.keys(state.reviews).length}<small> / ${words.length}</small></span><span>Entradas practicadas</span></div><a href="#repaso"><span class="stat-value">${dueWords(words,state.reviews).length}</span><span>Repasos para ahora ↗</span></a></div>
    <section class="vocabulary-spotlight"><div><p class="eyebrow">MÁS PALABRAS. MÁS POSIBILIDADES.</p><h2>${dictionaryLemmaCount.toLocaleString('es')} palabras para explorar.</h2><p>25 secciones de vocabulario con traducciones y práctica. Catálogo de diccionario con revisión pendiente.</p></div><a class="secondary" href="#ruta/LEX">Abrir vocabulario ↗</a></section>
    <div class="section-heading"><div><p class="eyebrow">TU SECCIÓN ACTUAL</p><h2>${unit.title}</h2></div><a href="#ruta">Explorar mi ruta ↗</a></div>${lessonCards(sectionLessons)}
    <section class="note"><div><h3>¿Ya conoces estos contenidos?</h3><p>Evalúa esta sección para saltar lo que ya dominas. Necesitas al menos un 80 %.</p></div>${button('Evaluar sección',`assessment:${unit.id}`,'secondary')}</section>
    <p class="cloud-status">${dictionaryLemmaCount.toLocaleString('es')} lemas de diccionario; ${words.length.toLocaleString('es')} entradas contando el curso. Meta: 10 000 palabras. La ruta A1–C1 está en desarrollo y no equivale a una certificación.</p>`;
}
function routePage(level) {
  const vocabulary = level === 'LEX';
  const navigation = `<section class="paper"><div class="levels">${['A1','A2','B1','B2','C1','LEX'].map(l => `<a class="level-link" href="#ruta/${l}"><div class="level ${level === l ? 'active' : ''}"><strong>${levelLabel(l)}</strong><span>${units.filter(u => u.level === l).length} secciones · ${lessons.filter(x => x.level === l).length} lecciones</span></div></a>`).join('')}</div></section>`;
  if (vocabulary) return `${title('AMPLÍA TU VOCABULARIO',`${dictionaryLemmaCount.toLocaleString('es')} palabras, paso a paso.`,'25 secciones de 200 palabras y bloques de 25. Esta ruta es independiente del curso: puedes empezar hoy y desbloquear las siguientes secciones al avanzar.')}${navigation}${sourceNote()}${units.filter(u => u.level === 'LEX').map((unit,index) => {
    const open = unlocked(unit.id);
    const completed = unitLessons(unit.id).filter(l => state.completed.includes(l.id)).length;
    return `<${open ? `a href="#seccion/${unit.id}"` : 'article'} class="lesson-card ${open ? '' : 'locked'}"><span class="lesson-number">${String(index+1).padStart(2,'0')}</span><div><p class="eyebrow">200 PALABRAS · 8 BLOQUES · REVISIÓN PENDIENTE</p><h3>${unit.title}</h3><p>${completed} de 8 bloques dominados</p></div><span class="card-status">${open ? 'Abrir sección ↗' : 'Por desbloquear'}</span></${open ? 'a' : 'article'}>`;
  }).join('')}`;
  return `${title('TU CAMINO','Básico, intermedio y después, más lejos.','Cada nivel tiene secciones. Dominar todas las lecciones de una sección abre la siguiente. Puedes demostrar lo que sabes con su evaluación.')}
    ${navigation}
    ${level ? '<a class="back" href="#ruta">← Ver todos los niveles</a>' : ''}
    ${units.filter(u => u.level !== 'LEX' && (!level || u.level === level)).map(unit => `<section class="unit"><div class="section-header"><div class="section-label"><p class="eyebrow">${unit.level} · ${unlocked(unit.id) ? 'DISPONIBLE' : 'POR DESBLOQUEAR'}</p><h3>${unit.title}</h3><p>${unit.description}</p></div>${unlocked(unit.id) ? button('Evaluar sección',`assessment:${unit.id}`,'secondary') : ''}</div>${lessonCards(unitLessons(unit.id))}</section>`).join('')}`;
}
function sourceNote() {return `<p class="source-note">Importado de <a href="https://freedict.org/downloads/" target="_blank" rel="noopener">FreeDict/WikDict</a> (Karl Bartel; Wiktionary vía DBnary), priorizado con <a href="https://github.com/hermitdave/FrequencyWords" target="_blank" rel="noopener">FrequencyWords / OpenSubtitles2018</a>. Selección adaptada bajo <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>. Traducciones pendientes de revisión; frecuencia no equivale a nivel MCER.</p>`;}
function sectionPage(id) {
  const unit = units.find(u => u.id === id);
  if (!unit || !unlocked(id)) return lockedPage();
  return `<a class="back" href="#ruta/LEX">← Secciones de vocabulario</a>${title('VOCABULARIO · 200 PALABRAS',unit.title,'Ocho bloques de 25 palabras. Aprende artículo y significado, practica y vuelve a los términos que necesiten repaso.')}${sourceNote()}${lessonCards(unitLessons(id))}<section class="note"><div><h3>¿Ya conoces este bloque de vocabulario?</h3><p>La evaluación toma una muestra. Un 80 % permite marcar esta sección como conocida.</p></div>${button('Evaluar sección',`assessment:${id}`,'secondary')}</section>`;
}
function wordCard([id,de,es,example]) {
  const word = wordById.get(id);
  return `<article class="word-card">${word?.source ? `<div class="word-meta"><span>${partOfSpeech[word.pos]}</span><span>Revisión pendiente</span></div>` : ''}<h3 lang="de">${esc(de)}</h3><p>${esc(es)}</p>${example ? `<p class="example" lang="de">${esc(example)}</p>` : word?.definitions?.length ? `<details class="word-details"><summary>Matiz del diccionario (alemán)</summary><p lang="de">${esc(word.definitions[0])}</p></details>` : ''}</article>`;
}
function lessonPage(id) {
  const lesson = lessons.find(l => l.id === id);
  if (!lesson) return title('NO ENCONTRADO','Esta lección no existe.','Vuelve a Mi aprendizaje para continuar.');
  if (!unlocked(lesson.unit)) return lockedPage();
  return `<a class="back" href="${lesson.level === 'LEX' ? `#seccion/${lesson.unit}` : `#ruta/${lesson.level}`}">← ${levelLabel(lesson.level)}</a>${title(`${levelLabel(lesson.level)} · COMPRENDER ANTES DE PRACTICAR`,lesson.title,lesson.subtitle)}${lesson.reviewStatus === 'pending' ? '<p class="source-note">Fuente: FreeDict/WikDict · Revisión lingüística pendiente. <a href="#ruta/LEX">Créditos y licencia</a>.</p>' : ''}
    <section class="paper"><p class="eyebrow">01 · COMPRENDE</p><h2>La idea que vas a usar</h2><div class="lesson-details"><p>${lesson.theory}</p><p>${lesson.grammar}</p></div><div class="culture"><h3>En contexto</h3><p>${lesson.tip}</p></div></section>
    <section class="paper"><p class="eyebrow">02 · OBSERVA EL DIÁLOGO</p><h2>Una conversación posible</h2>${lesson.dialogue.map(([de,es]) => `<blockquote><p lang="de">${de}</p><p>${es}</p></blockquote>`).join('')}<p>Lee cada intervención. Tapa la traducción e intenta explicar su intención. Después cambia un dato para hacerla tuya.</p></section>
    <div class="section-heading"><div><p class="eyebrow">03 · CONSTRUYE TU VOCABULARIO</p><h2>Palabras para llevar contigo</h2></div><span>${lesson.words.length} entradas</span></div><div class="word-grid">${lesson.words.map(wordCard).join('')}</div>
    <section class="practice-start"><p class="eyebrow">04 · PRACTICA Y APLICA</p><h2>Primero reconoce. Después escribe.</h2><p>Trabajarás los significados y recordarás las expresiones sin opciones. Para dominar la lección necesitas un 80 % de aciertos. Puedes volver a la teoría cuando lo necesites.</p>${button(`Empezar · ${lessonQuestions(lesson).length} ejercicios ↗`,`practice:${id}`)}</section>
    <section class="paper"><h3>Tu pequeño reto real</h3><p>Construye tu versión del diálogo usando al menos tres expresiones de esta lección. Léela en voz alta. ¿Qué cambiarías si hablaras con un amigo o con una persona desconocida?</p><p>Objetivo de sesión: 20–30 minutos entre lectura, práctica y repaso. Puedes hacer una pausa; la duración real depende de ti.</p></section>`;
}
function startQuestions(type,id) {
  const unit = type === 'assessment' ? units.find(u => u.id === id) : units.find(u => u.id === lessons.find(l => l.id === id)?.unit);
  if (!unit || !unlocked(unit.id)) {main.innerHTML = lockedPage();return;}
  const selected = type === 'assessment' ? unitLessons(id) : lessons.filter(l => l.id === id);
  const questions = selected.flatMap(type === 'assessment' ? assessmentQuestions : lessonQuestions);
  session = {type,id,questions,index:0,score:0,answered:false,evidence:{}};
  const destination = type === 'assessment' ? `evaluacion/${id}` : `practica/${id}`;
  if (route() === destination) render(); else location.hash = destination;
}
function exercise() {
  if (!session || session.type === 'review' || session.index >= session.questions.length) return `${title('PRÁCTICA','Vamos paso a paso.','Abre una lección o una evaluación para comenzar.')}<a class="primary" href="#inicio">Mi aprendizaje</a>`;
  const q = session.questions[session.index];
  return `<a class="back" href="#inicio">← Salir de la práctica</a>${title(session.type === 'assessment' ? 'EVALUACIÓN DE SECCIÓN · NO CERTIFICA NIVEL' : 'AHORA ES TU TURNO','Lo que entiendes, lo puedes usar.',`Pregunta ${session.index+1} de ${session.questions.length}`)}<progress aria-label="Avance de la práctica" max="${session.questions.length}" value="${session.index}"></progress><section class="paper exercise"><h2>${esc(q.prompt)}</h2><form id="answer-form"><fieldset><legend class="sr-only">${esc(q.prompt)}</legend>${q.options ? q.options.map((option,i) => `<label class="option"><input type="radio" name="answer" value="${esc(option)}" required><span><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${esc(option)}</span></span></label>`).join('') : '<label for="written-answer">Tu respuesta en alemán</label><input id="written-answer" name="answer" autocomplete="off" autocapitalize="off" spellcheck="false" required maxlength="200">'}</fieldset><button class="primary" type="submit">Comprobar respuesta</button></form><div id="feedback" role="status"></div></section>`;
}
function finish() {
  const all = session.type === 'assessment';
  const mastered = session.score/session.questions.length >= 0.8;
  const result = {score:session.score,total:session.questions.length,updatedAt:Date.now()};
  if (all) state.assessments[session.id] = result; else state.results[session.id] = result;
  const completed = all ? unitLessons(session.id) : lessons.filter(l => l.id === session.id);
  if (mastered) state.completed = [...new Set([...state.completed,...completed.map(l => l.id)])];
  for (const [id,correct] of Object.entries(session.evidence)) state.reviews[id] = schedule(state.reviews[id],correct);
  save();
  main.innerHTML = `${title('UN PASO MÁS CERCA',mastered ? 'Una base para continuar.' : 'Ya sabes qué reforzar.',`${result.score} de ${result.total} respuestas correctas al primer intento. Objetivo: 80 %.`)}<section class="paper"><h2>${mastered ? 'Contenido marcado como dominado.' : 'Volvamos a las ideas que faltan.'}</h2><p>${all ? 'Esta evaluación cubre solo esta sección. No asigna un nivel oficial A1–C1.' : 'Los repasos se ajustan por palabra: lo que te costó recordar vuelve antes.'}</p>${mastered ? '<p>Si ya dominaste toda la sección, la siguiente está desbloqueada.</p>' : '<p>Revisa la teoría y repite la práctica sin penalizaciones.</p>'}<div class="account-actions">${button('Volver a practicar',`${all ? 'assessment' : 'practice'}:${session.id}`,'secondary')}<a class="primary" href="#ruta">Ver mi ruta</a></div></section>`;
  main.focus();
}
function reviewPage() {
  const due = dueWords(words,state.reviews);
  return `${title('RECORDAR SIN AGOBIARSE','Un poco de repaso.','Intenta recordar antes de mirar. Si te cuesta, volveremos a practicarlo pronto.')}<section class="paper"><h2>${due.length ? `${due.length} entradas listas` : 'Por ahora, todo al día.'}</h2><p>${due.length ? 'Las palabras que fallas vuelven en diez minutos. Las que recuerdas se espacian hasta 60 días.' : 'Practica una lección para comenzar. Los repasos aparecerán cuando toque.'}</p>${due.length ? button('Empezar repaso','review') : '<a class="primary" href="#inicio">Seguir aprendiendo</a>'}</section>`;
}
function reviewCard() {
  const word = session.words[session.index];
  return `${title('REPASO','Dale un momento a tu memoria.',`Entrada ${session.index+1} de ${session.words.length}`)}<section class="paper flashcard"><p>¿Qué significa esta palabra o expresión?</p><h2 lang="de">${esc(word.de)}</h2><div id="reveal">${session.revealed ? `<p class="meaning">${esc(word.es)}</p><p lang="de">${esc(word.example)}</p><div class="review-actions">${button('Necesito practicar','again','secondary')}${button('Lo recordé','remember')}</div>` : button('Mostrar significado','reveal','secondary')}</div></section>`;
}
function vocabulary() {
  return `${title('TU EQUIPAJE','Palabras para seguir creciendo.',`${dictionaryLemmaCount.toLocaleString('es')} lemas de diccionario y ${words.length.toLocaleString('es')} entradas al incluir las lecciones. Las importadas están pendientes de revisión.`)}${sourceNote()}<div class="filters"><div><label for="word-search">Buscar en alemán o español</label><input id="word-search" type="search" value="${esc(wordQuery)}" placeholder="Por ejemplo: gracias"></div><div><label for="word-level">Ruta de aprendizaje</label><select id="word-level"><option value="">Todo el catálogo</option>${['A1','A2','B1','B2','C1','LEX'].map(l => `<option value="${l}" ${wordLevel === l ? 'selected' : ''}>${levelLabel(l)}</option>`).join('')}</select></div></div><p id="search-count" role="status"></p><div class="word-grid" id="word-results"></div><div id="word-pagination"></div>`;
}
function showWords() {
  const query = wordQuery.toLocaleLowerCase('es').normalize('NFC');
  const matches = words.filter(w => (!wordLevel || (wordLevel === 'LEX' ? w.source : w.level === wordLevel)) && `${w.de} ${w.es} ${(w.translations ?? []).join(' ')}`.toLocaleLowerCase('es').normalize('NFC').includes(query));
  const pages = Math.max(1,Math.ceil(matches.length/24));wordPage = Math.min(wordPage,pages-1);
  document.querySelector('#word-results').innerHTML = matches.slice(wordPage*24,(wordPage+1)*24).map(w => wordCard([w.id,w.de,w.es,w.example])).join('') || '<p>No hay coincidencias. Prueba con otra palabra.</p>';
  document.querySelector('#search-count').textContent = `${matches.length} resultados · página ${wordPage+1} de ${pages}`;
  document.querySelector('#word-pagination').innerHTML = `<div class="pagination"><button class="secondary" data-action="words-prev" ${wordPage === 0 ? 'disabled' : ''}>Anterior</button><span>${wordPage+1} / ${pages}</span><button class="secondary" data-action="words-next" ${wordPage+1 === pages ? 'disabled' : ''}>Siguiente</button></div>`;
}
function accountPage() {
  if (!cloud) return `${title('TU APRENDIZAJE CONTIGO','Una cuenta, todos tus dispositivos.','La sincronización aún no está activada. Puedes seguir aprendiendo con una copia en este navegador.')}<section class="paper"><h2>La conexión con la nube está preparada.</h2><p>Falta conectar un proyecto de Supabase. Cuando esté activado, entra con tu correo desde celular, tableta o computadora.</p><a class="secondary" href="https://github.com/Yukimaed27/Vokal/blob/main/docs/CLOUD.md" target="_blank" rel="noopener">Cómo activar la nube ↗</a></section>`;
  if (account) {
    const guest = load(guestKey);
    return `${title('TU CUENTA','Tu progreso viaja contigo.',esc(cloud.user?.email ?? 'Sesión iniciada'))}<section class="paper"><h2>Estado de tu progreso</h2><p id="account-message" role="status">${esc(syncMessage)}</p><div class="account-actions">${button('Sincronizar ahora','sync')}${button('Cerrar sesión','signout','secondary')}</div>${guest.completed.length || Object.keys(guest.reviews).length ? `<h3>¿Quieres conservar lo que aprendiste sin cuenta?</h3><p>Hay progreso de invitado en este navegador. Solo se añadirá a tu cuenta si lo eliges.</p>${button('Importar mi progreso local','import-guest','secondary')}` : ''}<p>Cierra tu sesión si compartes este dispositivo. Tu copia local queda separada de la de otros usuarios.</p></section>`;
  }
  return `${title('TU CUENTA','Continúa desde donde estés.','Recibe un código en tu correo. No necesitas crear una contraseña.')}<section class="paper"><h2>${otpEmail ? 'Introduce tu código' : 'Entra con tu correo'}</h2><form id="${otpEmail ? 'verify-form' : 'login-form'}" class="cloud-form">${otpEmail ? `<p>Enviamos un código a ${esc(otpEmail)}.</p><label for="otp">Código del correo</label><input id="otp" name="code" type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6,10}" minlength="6" maxlength="10" required><button class="primary" type="submit">Entrar y sincronizar</button>` : '<label for="email">Tu correo</label><input id="email" name="email" type="email" autocomplete="email" required maxlength="254"><button class="primary" type="submit">Enviar código</button>'}</form><p id="account-message" role="status"></p>${otpEmail ? button('Usar otro correo / reenviar','change-email','secondary') : ''}<p class="cloud-status">El progreso de invitado no se incorpora a una cuenta sin que lo elijas.</p></section>`;
}
function render(focus = true) {
  const current = route();
  const section = current.split('/')[0];
  const navigation = ['seccion','leccion','practica','evaluacion'].includes(section) ? 'ruta' : section;
  document.querySelectorAll('nav a').forEach(a => {
    if (navigation === a.hash.slice(1)) a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
  });
  if (current === 'inicio') main.innerHTML = home();
  else if (current === 'ruta' || current.startsWith('ruta/')) main.innerHTML = routePage(current.split('/')[1]);
  else if (current.startsWith('leccion/')) main.innerHTML = lessonPage(current.split('/')[1]);
  else if (current.startsWith('seccion/')) main.innerHTML = sectionPage(current.split('/')[1]);
  else if (current.startsWith('practica/') || current.startsWith('evaluacion/')) main.innerHTML = exercise();
  else if (current === 'repaso') main.innerHTML = session?.type === 'review' ? reviewCard() : reviewPage();
  else if (current === 'palabras') {main.innerHTML = vocabulary();showWords();}
  else if (current === 'cuenta') main.innerHTML = accountPage();
  else {location.hash = 'inicio';return;}
  updateLabel();if (focus) main.focus();
}
main.addEventListener('input',event => {if (event.target.id === 'word-search') {wordQuery = event.target.value;wordPage = 0;showWords();}});
main.addEventListener('change',event => {if (event.target.id === 'word-level') {wordLevel = event.target.value;wordPage = 0;showWords();}});
main.addEventListener('submit',async event => {
  event.preventDefault();const form = event.target;
  if (['login-form','verify-form'].includes(form.id)) {
    if (sendingCode || !cloud) return;
    sendingCode = true;const submit = form.querySelector('button[type=submit]');submit.disabled = true;
    try {
      const data = new FormData(form);
      if (form.id === 'login-form') {
        const email = String(data.get('email')).trim();await cloud.sendCode(email);otpEmail = email;render();
      } else {
        const user = await cloud.verifyCode(otpEmail,String(data.get('code')).trim());
        account = user.id;state = load(cacheKey());session = null;otpEmail = '';syncMessage = 'Conectando con tu nube…';render();await syncProgress();
      }
    } catch (error) {const message = document.querySelector('#account-message');if (message) {message.textContent = error.message;message.classList.add('error-text');}}
    finally {sendingCode = false;if (submit.isConnected) submit.disabled = false;}
    return;
  }
  if (form.id !== 'answer-form' || !session || session.answered) return;
  const q = session.questions[session.index];
  const correct = isCorrect(new FormData(form).get('answer') ?? '',q.answers);
  if (correct) session.score++;
  if (q.wordId) session.evidence[q.wordId] = (session.evidence[q.wordId] ?? true) && correct;
  session.answered = true;
  for (const control of form.elements) control.disabled = true;
  document.querySelector('#feedback').innerHTML = `<div class="feedback ${correct ? 'correct' : 'retry'}"><strong>${correct ? '¡Bien hecho!' : `La respuesta objetivo es: ${esc(q.answers[0])}`}</strong><p>${esc(q.explanation)}</p>${button('Continuar','next')}</div>`;
  document.querySelector('[data-action="next"]').focus();
});
main.addEventListener('click',async event => {
  const control = event.target.closest('[data-action]');if (!control || control.disabled) return;
  const [action,id] = control.dataset.action.split(':');
  if (action === 'practice' || action === 'assessment') startQuestions(action,id);
  else if (action === 'next' && session?.answered) {session.index++;session.answered = false;if (session.index === session.questions.length) finish();else render();}
  else if (action === 'review') {const due = dueWords(words,state.reviews);if (due.length) session = {type:'review',words:due,index:0,revealed:false};render();}
  else if (action === 'reveal' && session?.type === 'review') {session.revealed = true;render();document.querySelector('[data-action="again"]').focus();}
  else if (['again','remember'].includes(action) && session?.type === 'review' && session.revealed) {
    const word = session.words[session.index];state.reviews[word.id] = schedule(state.reviews[word.id],action === 'remember');save();
    session.index++;session.revealed = false;if (session.index === session.words.length) session = null;render();
  } else if (action === 'words-prev' || action === 'words-next') {wordPage += action === 'words-next' ? 1 : -1;showWords();document.querySelector('#word-results').scrollIntoView({block:'start'});}
  else if (action === 'change-email') {otpEmail = '';render();}
  else if (action === 'sync') {control.disabled = true;await syncProgress();if (control.isConnected) control.disabled = false;}
  else if (action === 'import-guest' && account) {state = mergeProgress(state,load(guestKey));save();render();}
  else if (action === 'signout' && cloud) {
    control.disabled = true;clearTimeout(syncTimer);
    try {await cloud.signOut();} catch (error) {notify(error.message);}
    account = null;state = load(guestKey);session = null;syncMessage = 'Progreso local';render();
  }
});
window.addEventListener('hashchange',() => {
  const active = session?.type === 'practice' ? `practica/${session.id}` : session?.type === 'assessment' ? `evaluacion/${session.id}` : 'repaso';
  if (route() !== active) session = null;
  render();
});
window.addEventListener('online',() => syncProgress());
window.addEventListener('focus',() => {if (account) syncProgress();});
render(false);
if (account) syncProgress();
