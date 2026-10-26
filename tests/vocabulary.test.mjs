import test from 'node:test';
import assert from 'node:assert/strict';
import {dictionaryEntries} from '../src/vocabulary-data.js';
import {lessons,units,words,dictionaryLemmaCount} from '../src/content.js';
import {lessonQuestions,readState,unitUnlocked} from '../src/learning.js';

test('el catálogo aporta 5000 lemas únicos con traducciones y sentidos, sin inflar con frases', () => {
  assert.equal(dictionaryLemmaCount,5000);
  assert.equal(dictionaryEntries.length,5000);
  assert.equal(new Set(dictionaryEntries.map(word=>word.lemma.normalize('NFC').toLocaleLowerCase('de-DE'))).size,5000);
  assert.equal(words.filter(word=>word.source === 'freedict-wikdict').length,5000);
  for (const word of dictionaryEntries) {
    assert.match(word.lemma,/^\p{L}+(?:-\p{L}+)*$/u);
    assert.ok(['n','v','adj','adv'].includes(word.pos));
    if (word.pos === 'n') assert.ok(['masc','fem','neut'].includes(word.gender));
    assert.ok(word.senses.length > 0);
    assert.ok(word.senses.every(sense=>sense.translations.length && sense.translations.every(value=>typeof value === 'string' && value.trim())));
  }
  for (const [lemma,translation] of [['Haus','casa'],['Wasser','agua'],['gehen','ir'],['Hotel','hotel']]) {
    const row = dictionaryEntries.find(word=>word.lemma === lemma);
    assert.ok(row?.senses.some(sense=>sense.translations.includes(translation)),`${lemma}: ${translation}`);
  }
  for (const name of ['Aachen','Aalborg','Aaron','Acapulco']) assert.equal(dictionaryEntries.some(word=>word.lemma === name),false);
});
test('los 5000 lemas tienen práctica y revisión pendiente en 25 secciones de 200 palabras', () => {
  const lexicalUnits = units.filter(unit=>unit.track === 'vocabulary');
  assert.equal(lexicalUnits.length,25);
  const seen = new Set();
  for (const unit of lexicalUnits) {
    const group = lessons.filter(lesson=>lesson.unit === unit.id);
    assert.equal(group.length,8);
    assert.equal(group.reduce((sum,lesson)=>sum+lesson.words.length,0),200);
    for (const lesson of group) {
      assert.equal(lesson.words.length,25);
      assert.equal(lesson.reviewStatus,'pending');
      const questions = lessonQuestions(lesson);
      for (const word of lesson.words) {
        seen.add(word[0]);
        assert.ok(questions.some(q=>q.wordId === word[0] && q.options));
        assert.ok(questions.some(q=>q.wordId === word[0] && !q.options));
      }
    }
  }
  assert.equal(seen.size,5000);
  assert.ok(words.filter(word=>word.source).every(word=>word.reviewStatus === 'pending'));
});
test('la ruta de vocabulario abre hoy sin exigir completar C1 y mantiene su propio desbloqueo', () => {
  const [first,second] = units.filter(unit=>unit.track === 'vocabulary');
  assert.equal(unitUnlocked(first.id,units,lessons,[]),true);
  assert.equal(unitUnlocked(second.id,units,lessons,[]),false);
  const completed = lessons.filter(lesson=>lesson.unit === first.id).map(lesson=>lesson.id);
  assert.equal(unitUnlocked(second.id,units,lessons,completed),true);
  assert.equal(unitUnlocked('a1-diario',units,lessons,completed),false);
});
test('el progreso de los 5000 términos se restaura y cabe bajo el límite de 4 MB de la RPC', () => {
  const imported = words.filter(word=>word.source);
  const state = {completed:[],reviews:Object.fromEntries(imported.map(word=>[word.id,{streak:1,due:1800000000000,updatedAt:1790000000000}])),results:{},assessments:{},assessment:null};
  const raw = JSON.stringify(state);
  assert.ok(Buffer.byteLength(raw,'utf8') < 4000000);
  const restored = readState(raw,lessons.map(l=>l.id),words.map(w=>w.id),units.map(u=>u.id));
  assert.equal(Object.keys(restored.reviews).length,5000);
});
