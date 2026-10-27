import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {dictionaryEntries} from '../src/vocabulary-data.js';
import {reviewRows5011000,vocabularyReview5011000} from '../src/vocabulary-review-501-1000.js';
import {createVocabularyCourse,partOfSpeech} from '../src/vocabulary.js';
import {lessonQuestions} from '../src/learning.js';
import {publicFiles} from '../scripts/public-files.mjs';

test('501–1000 tiene 500 filas trazables y solo497 sentidos con evidencia completa', () => {
  const report=readFileSync(new URL('../docs/reviews/LEX-501-1000.md',import.meta.url),'utf8');
  const rows=report.split('\n').filter(line=>/^\| \d+ \|/.test(line)).map(line=>line.split('|').slice(1,-1).map(cell=>cell.trim()));
  assert.equal(reviewRows5011000.length,500);
  assert.equal(rows.length,500);
  assert.equal(new Set(reviewRows5011000.map(row=>row[1])).size,500);
  assert.deepEqual(reviewRows5011000.filter(row=>!row[8]).map(row=>row[0]),[641,669,994]);
  for(const [offset,row] of reviewRows5011000.entries()) {
    const [index,lemma,de,es,pos,gender,note,sources,checked]=row;
    assert.equal(index,501+offset);
    assert.equal(lemma,dictionaryEntries[index-1].lemma);
    assert.deepEqual(rows[offset].slice(0,4),[String(index),lemma,de,es]);
    assert.equal(rows[offset][5],checked?'C':'P');
    assert.ok(partOfSpeech[pos],lemma);
    if(pos==='n') assert.ok(['masc','fem','neut'].includes(gender),lemma);
    assert.ok(note&&sources.length===2,lemma);
    const correction=vocabularyReview5011000[lemma];
    assert.equal(Boolean(correction.review),checked,lemma);
    if(checked) {
      assert.equal(correction.review.humanReviewed,false);
      assert.deepEqual(sources,correction.review.sources);
      assert.equal(new Set(sources.map(source=>source.name)).size,2);
    }
    for(const source of sources) {
      assert.equal(new URL(source.url).protocol,'https:');
      assert.ok(rows[offset][7].includes(source.url),lemma);
    }
  }
  assert.ok(publicFiles.includes('src/vocabulary-review-501-1000.js'));
});

test('el lote acota sentidos, conserva IDs y lleva la corrección a respuestas y feedback', () => {
  const course=createVocabularyCourse([{words:[['id-loch-previo','der Loch','loch','Ejemplo anterior sin verificar.']]}]);
  const corrected=course.entries.find(word=>word.lemma==='Loch');
  assert.equal(corrected.id,'id-loch-previo');
  assert.equal(corrected.de,'das Loch');
  assert.equal(corrected.gender,'neut');
  assert.equal(corrected.es,'agujero');
  assert.equal(corrected.example,'');
  for(const [,lemma,de,es,,,,,checked] of reviewRows5011000) {
    const word=course.entries.find(entry=>entry.lemma===lemma);
    assert.equal(word.de,de,lemma);
    assert.equal(word.es,es,lemma);
    assert.equal(word.reviewStatus,checked?'sense-checked-ai':'pending',lemma);
    const block=course.lessons.find(lesson=>lesson.words.some(row=>row[0]===word.id));
    const questions=lessonQuestions(block).filter(question=>question.wordId===word.id);
    assert.ok(questions.some(question=>question.options&&question.answers.includes(es)),lemma);
    assert.ok(questions.some(question=>!question.options&&question.answers.includes(de)),lemma);
    assert.ok(questions.every(question=>question.explanation.includes(word.editorialNote)),lemma);
  }
});

test('participios, categorías funcionales y nombres sin artículo no enseñan categorías falsas', () => {
  const course=createVocabularyCourse([]);
  const get=lemma=>course.entries.find(word=>word.lemma===lemma);
  for(const lemma of ['gestohlen','geboren','geliebt','gebaut','gebrochen']) assert.equal(get(lemma).pos,'part',lemma);
  for(const [lemma,pos] of [['weder','conj'],['zweite','num'],['entlang','prep'],['abgesehen','adv']]) assert.equal(get(lemma).pos,pos,lemma);
  for(const lemma of ['Paris','Weihnachten','Amerika','England','Mister']) assert.equal(get(lemma).de,lemma);
  for(const lesson of course.lessons) {
    for(const question of lesson.questions) {
      if(!question.prompt.includes('qué artículo')) continue;
      const noun=course.entries.find(word=>question.prompt.includes(`«${word.de}»`));
      assert.ok(noun&&/^(der|die|das)\s/.test(noun.de));
      assert.equal(question.answers[0],({masc:'der',fem:'die',neut:'das'})[noun.gender]);
    }
  }
  assert.equal(get('Tor').de,'das Tor');
  assert.equal(get('See').de,'die See');
  assert.equal(get('Band').de,'der Band');
  assert.equal(get('freuen').de,'sich freuen');
  assert.equal(get('verhalten').de,'sich verhalten');
  assert.equal(get('überrascht').es,'sorprendido');
});
