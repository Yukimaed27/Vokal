import {dictionaryEntries} from './vocabulary-data.js';
import {vocabularyCorrections} from './vocabulary-corrections.js';

export const dictionaryLemmaCount = dictionaryEntries.length;
const articles = {masc:'der',fem:'die',neut:'das'};
export const partOfSpeech = {n:'Sustantivo',v:'Verbo',adj:'Adjetivo',adv:'Adverbio',particle:'Partícula'};
const canonical = value => value.normalize('NFC').replace(/^(der|die|das)\s+/i,'').toLocaleLowerCase('de-DE');

export function createVocabularyCourse(guidedLessons) {
  const existing = new Map(guidedLessons.flatMap(lesson => lesson.words.map(row => [canonical(row[1]),row])));
  const entries = dictionaryEntries.map(entry => {
    const original = existing.get(canonical(entry.lemma));
    const compatible = original && (entry.pos !== 'n' || /^(der|die|das)\s/i.test(original[1]));
    const correction = vocabularyCorrections[entry.lemma];
    const translations = correction?.translations ?? [...new Set(entry.senses.flatMap(sense => sense.translations))];
    return {
      id:compatible ? original[0] : `lex-${entry.lemma.toLocaleLowerCase('de-DE')}`,
      lemma:entry.lemma,
      de:correction?.de ?? (compatible ? original[1] : entry.pos === 'n' ? `${articles[correction?.gender ?? entry.gender]} ${entry.lemma}` : entry.lemma),
      es:correction?.translations ? translations.join(' / ') : compatible ? original[2] : translations.slice(0,4).join(' / '),
      example:correction?.example ?? (compatible ? original[3] : ''),
      translations, definitions:correction?.definitions ?? entry.senses.flatMap(sense => sense.definitions),
      editorialNote:correction?.note ?? '',
      pos:correction?.pos ?? entry.pos,gender:correction?.gender ?? entry.gender,source:'freedict-wikdict',reviewStatus:correction?.review ? 'sense-checked-ai' : 'pending',
      review:correction?.review ?? null,
      frequencyRank:entry.rank,level:'LEX',
    };
  });
  const units = [];
  const lessons = [];
  for (let offset=0;offset<entries.length;offset+=200) {
    const number = String(offset/200+1).padStart(2,'0');
    const unit = {id:`lexico-${number}`,level:'LEX',track:'vocabulary',title:`Palabras en uso · ${number}`,description:'200 palabras de diccionario, ordenadas por frecuencia de sus formas en el corpus de referencia.'};
    units.push(unit);
    const group = entries.slice(offset,offset+200);
    for (let start=0;start<group.length;start+=25) {
      const block = group.slice(start,start+25);
      const blockNumber = String(start/25+1).padStart(2,'0');
      const noun = block.find(word => word.pos === 'n');
      const questions = noun ? [{prompt:`En «${noun.de}», ¿qué artículo acompaña al sustantivo?`,options:['der','die','das'],answers:[articles[noun.gender]],explanation:`El diccionario registra «${noun.lemma}» con el artículo «${articles[noun.gender]}». Aprende artículo y nombre juntos.`}] : [{prompt:'Para estudiar un verbo, ¿qué conviene distinguir?',options:['Su infinitivo y sus formas conjugadas','Solo la primera letra','El número de letras'],answers:['Su infinitivo y sus formas conjugadas'],explanation:'La forma del diccionario no sustituye aprender cómo se utiliza un verbo en una oración.'}];
      lessons.push({
        id:`lexico-${number}-${blockNumber}`,unit:unit.id,level:'LEX',category:`VOCABULARIO · BLOQUE ${number}`,reviewStatus:'pending',
        title:`Palabras ${number}.${blockNumber}`,subtitle:`${block.slice(0,3).map(word=>word.lemma).join(', ')} y ${block.length-3} términos más.`,
        theory:'Empieza por leer la palabra alemana y su traducción. Si es un sustantivo, aprende también der, die o das. Después tapa el significado, intenta recordarlo y compruébalo. Estas palabras proceden de un diccionario: una equivalencia no sirve necesariamente para todos los contextos.',
        grammar:'Distingue el sustantivo, que se escribe con mayúscula y se aprende con artículo, del verbo en infinitivo, el adjetivo y el adverbio. Una palabra puede tener más de un sentido. Los matices originales en alemán ayudan a reconocer cuál se recoge aquí. Cada ficha indica si el sentido está contrastado por IA o sigue pendiente; eso no certifica todos sus usos.',
        tip:'La lista de frecuencia procede de subtítulos y no asigna niveles A1–C1. Utiliza estos bloques como ampliación de vocabulario junto con las lecciones guiadas, no como una certificación de nivel.',
        dialogue:[['Was bedeutet dieses Wort?','¿Qué significa esta palabra?'],['Kannst du mir ein Beispiel geben?','¿Puedes darme un ejemplo?'],['Jetzt verstehe ich es besser.','Ahora lo entiendo mejor.']],
        example:['Was bedeutet dieses Wort?','¿Qué significa esta palabra?'],
        words:block.map(word => [word.id,word.de,word.es,word.example,word.editorialNote]),questions,
      });
    }
  }
  return {entries,units,lessons};
}
