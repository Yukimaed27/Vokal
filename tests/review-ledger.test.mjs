import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {dictionaryEntries} from '../src/vocabulary-data.js';

test('el informe 201–500 cubre cada índice y lema una sola vez con fuente y estado explícitos', () => {
  const report=readFileSync(new URL('../docs/reviews/LEX-201-500.md',import.meta.url),'utf8');
  const rows=report.split('\n').filter(line=>/^\| \d+ \|/.test(line)).map(line=>line.split('|').slice(1,-1).map(v=>v.trim()));
  assert.equal(rows.length,300);
  const counts={};
  for(const [index,row] of rows.entries()) {
    assert.equal(Number(row[0]),index+201);
    assert.equal(row[1],dictionaryEntries[index+200].lemma);
    assert.ok(['Ajuste aplicado','Sin incidencia en contraste','Contraste parcial','Duda'].includes(row[2]));
    assert.ok(row[3]&&row[4]);
    const links=[...row[5].matchAll(/\]\((https:\/\/[^)]+)\)/g)];
    assert.ok(links.length,row[1]);
    for(const [,link] of links) assert.ok(['de.langenscheidt.com','es.langenscheidt.com','www.duden.de','www.verbformen.de'].includes(new URL(link).hostname));
    counts[row[2]]=(counts[row[2]]??0)+1;
  }
  assert.deepEqual(counts,{'Contraste parcial':21,'Sin incidencia en contraste':186,'Ajuste aplicado':92,Duda:1});
});
