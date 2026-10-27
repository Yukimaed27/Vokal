import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {lessons, words} from '../src/content.js';
import {lessonQuestions, isCorrect} from '../src/learning.js';

const reviewed = lessons.filter(lesson => ['saludos','presentacion','cortesia','tiempo'].includes(lesson.id));

test('la auditoría A1 conserva los identificadores de las cuatro lecciones y sus48 fichas', () => {
  const ids = reviewed.flatMap(lesson => [lesson.id,...lesson.words.map(word => word[0])]);
  assert.equal(createHash('sha256').update(JSON.stringify(ids)).digest('hex'),'6923981c4210aed16b09a53d065c4a532860e1a1c98a09af3dbb38efed1fb5f5');
  assert.equal(reviewed.flatMap(lesson => lesson.words).length,48);
  assert.equal(words.filter(word => word.reviewStatus === 'sense-checked-ai').length,1000);
});

test('los ejercicios distinguen despedida, flexión, dativo y hora frente a duración', () => {
  const checks = [
    ['saludos','Te vas a dormir','Gute Nacht','Guten Abend'],
    ['saludos','respuesta formal','Ihnen','dir'],
    ['presentacion','con heißen','heißt','heißst'],
    ['presentacion','con sprechen','sprichst','sprechst'],
    ['presentacion','lugar de residencia','Wo wohnst du?','Woher kommst du?'],
    ['cortesia','petición formal','mir','mich'],
    ['cortesia','con helfen','hilfst','helfst'],
    ['tiempo','Es ist ___ Uhr','ein','eins'],
    ['tiempo','para duración','Stunde','Uhr'],
    ['tiempo','plural de Minute','Minuten','Minute'],
  ];
  for (const [id,part,correct,incorrect] of checks) {
    const lesson = reviewed.find(lesson => lesson.id === id);
    const question = lessonQuestions(lesson).find(question => question.prompt.includes(part));
    assert.ok(question,`${id}: ${part}`);
    assert.ok(isCorrect(correct,question.answers),`${part}: ${correct}`);
    assert.ok(!isCorrect(incorrect,question.answers),`${part}: rechazar ${incorrect}`);
    assert.ok(lesson.grammar.includes(correct.split(' ')[0]) || id === 'saludos');
  }
  assert.equal(reviewed.reduce((sum,lesson) => sum+lessonQuestions(lesson).length,0),118);
});

test('el sustantivo disculpa no exige escribir una interjección como si fuera un nombre', () => {
  const lesson = reviewed.find(lesson => lesson.id === 'cortesia');
  const production = lessonQuestions(lesson).find(question => question.wordId === 'entschuldigung' && !question.options);
  assert.ok(production.prompt.includes('la disculpa'));
  assert.deepEqual(production.answers,['die Entschuldigung']);
  assert.ok(!production.prompt.includes('disculpe'));
  assert.ok(lesson.grammar.includes('sin artículo'));
});

test('el cierre de A1 conserva las36 fichas restantes y la compatibilidad de progreso', () => {
  const remaining = lessons.filter(lesson => ['cafeteria','orientacion','transporte'].includes(lesson.id));
  const ids = remaining.flatMap(lesson => [lesson.id,...lesson.words.map(word => word[0])]);
  assert.equal(createHash('sha256').update(JSON.stringify(ids)).digest('hex'),'1c40b0f323959098a9fa1dd36a236377dafc4b1efcd0fa11756c37c5d2572386');
  assert.equal(remaining.flatMap(lesson => lesson.words).length,36);
  assert.equal(remaining.reduce((sum,lesson) => sum+lessonQuestions(lesson).length,0),84);
  assert.equal(remaining.find(lesson => lesson.id === 'transporte').dialogue[1][0],'Der Zug fährt von Gleis drei ab.');
});

test('las tres lecciones finales practican caso, destino, plural y prefijo separable', () => {
  const checks = [
    ['cafeteria','indefinido: Ich möchte ___ Kaffee','einen','ein'],
    ['cafeteria','indefinido: Ich möchte ___ Wasser','ein','einen'],
    ['cafeteria','mit ___ Zucker','dem','den'],
    ['cafeteria','ohne ___ Zucker','den','dem'],
    ['orientacion','pregunta de destino','Wohin','Wo'],
    ['orientacion','plural de Bahnhof','Bahnhöfe','Bahnhofe'],
    ['orientacion','indicación formal','Gehen','Geh'],
    ['transporte','presente de fahren','fährst','fahrst'],
    ['transporte','mit ___ Bus','dem','den'],
    ['transporte','verbo separable aussteigen','aus','ein'],
  ];
  for (const [id,part,correct,incorrect] of checks) {
    const question = lessonQuestions(lessons.find(lesson => lesson.id === id)).find(question => question.prompt.includes(part));
    assert.ok(question,`${id}: ${part}`);
    assert.ok(isCorrect(correct,question.answers),`${part}: ${correct}`);
    assert.ok(!isCorrect(incorrect,question.answers),`${part}: rechazar ${incorrect}`);
  }
});
