import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {dictionaryEntries} from '../src/vocabulary-data.js';
import {reviewRows001500,reviewExtraRows10011005} from '../src/vocabulary-review-001-500.js';
import {words} from '../src/content.js';
import {partOfSpeech} from '../src/vocabulary.js';
import {publicFiles} from '../scripts/public-files.mjs';

test('el complemento documenta505 filas, conserva22 previas y llega a1000 contrastadas sin aprobar dudas', () => {
  const report=readFileSync(new URL('../docs/reviews/RECHECK-001-500.md',import.meta.url),'utf8');
  const docs=report.split('\n').filter(line=>/^\| \d+ \|/.test(line)).map(line=>line.split('|').slice(1,-1).map(v=>v.trim()));
  const rows=[...reviewRows001500,...reviewExtraRows10011005];
  assert.equal(reviewRows001500.length,500);
  assert.equal(reviewExtraRows10011005.length,5);
  assert.equal(docs.length,505);
  assert.equal(rows.filter(row=>row[9]).length,22);
  assert.deepEqual(rows.filter(row=>!row[8]).map(row=>row[0]),[121,242]);
  for(const [offset,row] of rows.entries()) {
    const [index,lemma,de,es,pos,gender,note,sources,checked,previous]=row;
    assert.equal(index,offset<500?offset+1:offset+501);
    assert.equal(dictionaryEntries[index-1].lemma,lemma);
    const word=words.find(w=>w.lemma===lemma);
    assert.equal(word.de,de,lemma);
    assert.equal(word.es,es,lemma);
    assert.equal(word.editorialNote,note,lemma);
    assert.equal(word.pos,pos,lemma);
    assert.ok(partOfSpeech[pos],lemma);
    if(pos==='n') assert.ok(['masc','fem','neut'].includes(gender));
    assert.equal(word.reviewStatus,checked?'sense-checked-ai':'pending',lemma);
    assert.deepEqual(docs[offset].slice(0,4),[String(index),lemma,de,es]);
    assert.equal(docs[offset][5],checked?'C':'P');
    for(const source of sources) assert.ok(docs[offset][7].includes(source.url),lemma);
    if(checked) {
      assert.deepEqual(word.review.sources,sources,lemma);
      assert.equal(word.review.humanReviewed,false);
      assert.equal(word.review.date,previous?'2026-10-26':'2026-10-27');
    }
  }
  const approved=words.filter(w=>w.reviewStatus==='sense-checked-ai');
  assert.equal(approved.length,1000);
  assert.equal(words.filter(w=>w.source&&w.reviewStatus==='pending').length,4000);
  assert.deepEqual(dictionaryEntries.slice(0,1005).filter(e=>!approved.some(w=>w.lemma===e.lemma)).map(e=>e.lemma),['scheiße','getötet','zerstört','Hau','Mister']);
  assert.ok(publicFiles.includes('src/vocabulary-review-001-500.js'));
});
