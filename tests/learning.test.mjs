import test from 'node:test';
import assert from 'node:assert/strict';
import { normalize, isCorrect, schedule, dueWords, readState, DAY } from '../src/learning.js';
import { lessons, words } from '../src/content.js';

test('acepta espacios, mayúsculas y puntuación; mantiene diferencias del alemán', () => {
  assert.equal(normalize('  Guten   Tag! '), 'guten tag');
  assert.equal(isCorrect('HALLO!', ['Hallo']), true);
  assert.equal(isCorrect('schon', ['schön']), false);
  assert.equal(isCorrect('heissen', ['heißen']), false);
});
test('errores vuelven pronto y el éxito amplía el intervalo con límite', () => {
  const now = 1000;
  assert.deepEqual(schedule(null, false, now), { streak:0, due:601000 });
  assert.deepEqual(schedule(null, true, now), { streak:1, due:now + DAY });
  assert.deepEqual(schedule({streak:1}, true, now), { streak:2, due:now + 3 * DAY });
  assert.deepEqual(schedule({streak:6}, true, now), { streak:6, due:now + 60 * DAY });
  assert.equal(schedule({streak:4}, false, now).streak, 0);
});
test('repaso solo incluye entradas practicadas cuyo plazo ha vencido', () => {
  const items = [{id:'a'}, {id:'b'}, {id:'c'}];
  assert.deepEqual(dueWords(items, {a:{due:9},b:{due:11}},10), [{id:'a'}]);
});
test('restauración filtra datos desconocidos, duplicados y estados inválidos', () => {
  const raw = JSON.stringify({completed:['a','a','unknown'], reviews:{x:{streak:2,due:500},y:{streak:-1,due:20},z:{streak:1,due:30}},assessment:{score:3,total:2}});
  assert.deepEqual(readState(raw,['a'],['x','y']), {completed:['a'],reviews:{x:{streak:2,due:500}},assessment:null});
  assert.throws(() => readState('{broken',[],[]));
  assert.throws(() => readState('null',[],[]));
  assert.deepEqual(readState(null,[],[]),{completed:[],reviews:{},assessment:null});
});
test('contenido consistente: identificadores únicos y respuestas presentes en opciones', () => {
  assert.equal(new Set(words.map(w => w.id)).size, words.length);
  assert.equal(new Set(lessons.map(l => l.id)).size, lessons.length);
  for (const lesson of lessons) {
    assert.ok(lesson.theory && lesson.tip && lesson.questions.length >= 3);
    for (const q of lesson.questions) {
      assert.ok(q.prompt && q.explanation && q.answers.length);
      if (q.options) for (const answer of q.answers) assert.ok(q.options.includes(answer));
    }
  }
});
