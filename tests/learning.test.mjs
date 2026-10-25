import test from 'node:test';
import assert from 'node:assert/strict';
import { normalize, isCorrect, schedule, dueWords, readState, mergeProgress, unitUnlocked, lessonQuestions, DAY } from '../src/learning.js';
import { lessons, words, units } from '../src/content.js';

test('acepta espacios, mayúsculas y puntuación; mantiene diferencias del alemán', () => {
  assert.equal(normalize('  Guten   Tag! '), 'guten tag');
  assert.equal(isCorrect('HALLO!', ['Hallo']), true);
  assert.equal(isCorrect('schon', ['schön']), false);
  assert.equal(isCorrect('heissen', ['heißen']), false);
});
test('errores vuelven pronto y el éxito amplía el intervalo con límite', () => {
  const now = 1000;
  assert.deepEqual(schedule(null, false, now), { streak:0, due:601000, updatedAt:now });
  assert.deepEqual(schedule(null, true, now), { streak:1, due:now + DAY, updatedAt:now });
  assert.deepEqual(schedule({streak:1}, true, now), { streak:2, due:now + 3 * DAY, updatedAt:now });
  assert.deepEqual(schedule({streak:6}, true, now), { streak:6, due:now + 60 * DAY, updatedAt:now });
  assert.equal(schedule({streak:4}, false, now).streak, 0);
});
test('repaso solo incluye entradas practicadas cuyo plazo ha vencido', () => {
  const items = [{id:'a'}, {id:'b'}, {id:'c'}];
  assert.deepEqual(dueWords(items, {a:{due:9},b:{due:11}},10), [{id:'a'}]);
});
test('restauración filtra datos desconocidos, duplicados y estados inválidos', () => {
  const raw = JSON.stringify({completed:['a','a','unknown'], reviews:{x:{streak:2,due:500},y:{streak:-1,due:20},z:{streak:1,due:30}},assessment:{score:3,total:2}});
  assert.deepEqual(readState(raw,['a'],['x','y']), {completed:['a'],reviews:{x:{streak:2,due:500,updatedAt:0}},assessment:null,results:{},assessments:{}});
  assert.throws(() => readState('{broken',[],[]));
  assert.throws(() => readState('null',[],[]));
  assert.deepEqual(readState(null,[],[]),{completed:[],reviews:{},assessment:null,results:{},assessments:{}});
});
test('contenido consistente: identificadores únicos y respuestas presentes en opciones', () => {
  assert.equal(new Set(words.map(w => w.id)).size, words.length);
  assert.equal(new Set(lessons.map(l => l.id)).size, lessons.length);
  for (const lesson of lessons) {
    assert.ok(lesson.theory && lesson.tip && lesson.grammar && lesson.dialogue.length >= 3);
    assert.ok(lesson.words.length >= 12);
    assert.ok(units.some(u => u.id === lesson.unit && u.level === lesson.level));
    const questions = lessonQuestions(lesson);
    assert.ok(questions.length >= 24);
    for (const q of questions) {
      assert.ok(q.prompt && q.explanation && q.answers.length);
      if (q.options) for (const answer of q.answers) assert.ok(q.options.includes(answer));
    }
  }
});

test('desbloqueo exige todas las lecciones previas y no acepta unidades desconocidas', () => {
  assert.equal(unitUnlocked(units[0].id,units,lessons,[]),true);
  assert.equal(unitUnlocked(units[1].id,units,lessons,[]),false);
  const first = lessons.filter(l => l.unit === units[0].id).map(l => l.id);
  assert.equal(unitUnlocked(units[1].id,units,lessons,first.slice(1)),false);
  assert.equal(unitUnlocked(units[1].id,units,lessons,first),true);
  assert.equal(unitUnlocked(units[2].id,units,lessons,first),false);
  assert.equal(unitUnlocked('unknown',units,lessons,lessons.map(l => l.id)),false);
});
test('dos dispositivos conservan logros distintos y el repaso más reciente, no el más optimista', () => {
  const a = {...readState(null,[],[]),completed:['uno'],reviews:{a:schedule(null,true,100),b:schedule(null,true,200)}};
  const b = {...readState(null,[],[]),completed:['dos'],reviews:{a:schedule(null,false,300)}};
  const merged = mergeProgress(a,b);
  assert.deepEqual(merged.completed,['dos','uno']);
  assert.equal(merged.reviews.a.streak,0);
  assert.equal(merged.reviews.b.due,200 + DAY);
  assert.deepEqual(mergeProgress(merged,a),merged);
});
test('el progreso anterior conserva identificadores y se migra sin descartar lecciones', () => {
  const migrated = readState(JSON.stringify({completed:['saludos'],reviews:{hallo:{streak:1,due:123}},assessment:null}),lessons.map(l => l.id),words.map(w => w.id),units.map(u => u.id));
  assert.deepEqual(migrated.completed,['saludos']);
  assert.equal(migrated.reviews.hallo.due,123);
  assert.equal(migrated.reviews.hallo.updatedAt,0);
});
