import { units as guidedUnits, advancedLessons, firstLessonExtras } from './curriculum.js';
import {createVocabularyCourse} from './vocabulary.js';
export {dictionaryLemmaCount} from './vocabulary.js';
const initialLessons = [
  {
    id: 'saludos', title: 'Tu primer Hallo', subtitle: 'Saluda y despídete con confianza.', category: 'PRIMER CONTACTO',
    theory: 'En alemán, el saludo depende de la situación. Hallo es habitual entre conocidos. Guten Tag funciona en un encuentro formal. Usa Auf Wiedersehen en una despedida formal y Tschüss en una informal.',
    tip: 'En una tienda pequeña es habitual saludar al entrar. Un Guten Tag y una sonrisa son un buen comienzo.',
    example: ['Guten Tag! — Hallo!', '¡Buenos días! — ¡Hola!'],
    words: [
      ['hallo', 'Hallo', 'Hola', 'Hallo, Anna!'],
      ['guten-morgen', 'Guten Morgen', 'Buenos días (por la mañana)', 'Guten Morgen, Frau Weber!'],
      ['guten-tag', 'Guten Tag', 'Buenos días / buenas tardes', 'Guten Tag, Herr Müller!'],
      ['guten-abend', 'Guten Abend', 'Buenas tardes / noches (al llegar)', 'Guten Abend, Frau Weber!'],
      ['tschuess', 'Tschüss', 'Adiós (informal)', 'Tschüss, bis morgen!'],
      ['wiedersehen', 'Auf Wiedersehen', 'Adiós (formal)', 'Auf Wiedersehen, Herr Müller!'],
    ],
    questions: [
      { prompt: 'Entras en una tienda y quieres saludar de manera formal.', options: ['Guten Tag', 'Tschüss', 'Danke'], answers: ['Guten Tag'], explanation: 'Guten Tag es un saludo adecuado para un encuentro formal durante el día.' },
      { prompt: '¿Cómo te despides de una amiga?', options: ['Guten Morgen', 'Tschüss', 'Guten Abend'], answers: ['Tschüss'], explanation: 'Tschüss es una despedida informal. Guten Morgen y Guten Abend son saludos.' },
      { prompt: 'Escribe el saludo informal «Hola» en alemán.', answers: ['Hallo'], explanation: 'Hallo significa «Hola». Recuerda la doble l.' },
      { prompt: 'Te vas a dormir. ¿Qué despedida corresponde?', options: ['Gute Nacht', 'Guten Abend', 'Guten Morgen'], answers: ['Gute Nacht'], explanation: 'Gute Nacht desea una buena noche al despedirse para dormir; Guten Abend saluda al llegar por la tarde-noche.' },
      { prompt: 'Completa la respuesta formal: Danke, gut. Und ___?', answers: ['Ihnen'], explanation: 'Ihnen corresponde aquí al tratamiento formal Sie y lleva mayúscula. Und Ihnen? significa «¿Y usted?».' },
      { prompt: '¿Qué despedida significa «Hasta mañana»?', options: ['Bis morgen', 'Bis bald', 'Willkommen'], answers: ['Bis morgen'], explanation: 'Bis morgen se refiere a mañana; Bis bald significa «Hasta pronto», sin fijar el día.' },
    ],
  },
  {
    id: 'presentacion', title: 'Mucho gusto, Alemania', subtitle: 'Di quién eres y de dónde vienes.', category: 'CONOCER PERSONAS',
    theory: 'Ich significa «yo». Para presentarte puedes decir Ich heiße… («Me llamo…»). Ich komme aus… expresa procedencia. Los verbos cambian según la persona: ich bin («yo soy/estoy»), du bist («tú eres/estás»). Hoy nos centramos en hablar de ti.',
    tip: 'Du es informal. Sie, con mayúscula, es el tratamiento formal. Con personas desconocidas adultas, Sie suele ser un punto de partida respetuoso; el contexto importa.',
    example: ['Ich heiße Ana. Ich komme aus Peru.', 'Me llamo Ana. Soy de Perú.'],
    words: [
      ['ich', 'ich', 'yo', 'Ich heiße Ana.'],
      ['heissen', 'heißen', 'llamarse', 'Ich heiße Luis.'],
      ['kommen', 'kommen', 'venir', 'Ich komme aus Peru.'],
      ['aus', 'aus', 'de (procedencia)', 'Ich komme aus Spanien.'],
      ['sein', 'sein', 'ser / estar', 'Ich bin Ana.'],
      ['deutschland', 'Deutschland', 'Alemania', 'Ich bin in Deutschland.'],
    ],
    questions: [
      { prompt: '¿Qué frase significa «Me llamo Ana»?', options: ['Ich komme aus Peru.', 'Ich heiße Ana.', 'Guten Tag, Ana.'], answers: ['Ich heiße Ana.'], explanation: 'Ich heiße… introduce tu nombre. Ich komme aus… introduce tu procedencia.' },
      { prompt: 'Completa: Ich komme ___ Peru.', answers: ['aus'], explanation: 'Aus indica procedencia. Con Peru no necesitas artículo en esta frase.' },
      { prompt: 'Completa con sein: Ich ___ Ana. (Soy Ana.)', answers: ['bin'], explanation: 'El verbo sein cambia a bin cuando el sujeto es ich.' },
      { prompt: 'Completa con heißen: Wie ___ du?', answers: ['heißt'], explanation: 'Con du se escribe heißt, sin añadir otra s a la raíz terminada en ß.' },
      { prompt: 'Completa con sprechen: Du ___ Spanisch.', answers: ['sprichst'], explanation: 'Sprechen cambia e por i con du: du sprichst. Con ich se conserva e: ich spreche.' },
      { prompt: '¿Qué pregunta pide el lugar de residencia?', options: ['Wo wohnst du?', 'Woher kommst du?', 'Wie heißt du?'], answers: ['Wo wohnst du?'], explanation: 'Wo wohnst du? pregunta dónde vives. Woher kommst du? pregunta de dónde eres o vienes.' },
    ],
  },
  {
    id: 'cortesia', title: 'Las palabras que abren puertas', subtitle: 'Pide ayuda y agradece con naturalidad.', category: 'VIDA COTIDIANA',
    theory: 'Bitte sirve para pedir algo con cortesía y también para responder «de nada». Danke expresa agradecimiento. Entschuldigung sirve para llamar la atención o disculparse. Si necesitas que repitan algo, usa Noch einmal, bitte.',
    tip: 'No entender es parte de aprender. Ich verstehe nicht («No entiendo») te permite pedir ayuda sin fingir que has comprendido.',
    example: ['Entschuldigung. Noch einmal, bitte. — Ja, gerne.', 'Disculpe. Otra vez, por favor. — Sí, con gusto.'],
    words: [
      ['bitte', 'bitte', 'por favor / de nada', 'Noch einmal, bitte.'],
      ['danke', 'danke', 'gracias', 'Danke für Ihre Hilfe.'],
      ['entschuldigung', 'die Entschuldigung', 'la disculpa', 'Entschuldigung, bitte.'],
      ['ja', 'ja', 'sí', 'Ja, gerne.'],
      ['nein', 'nein', 'no', 'Nein, danke.'],
      ['verstehen', 'verstehen', 'entender', 'Ich verstehe nicht.'],
    ],
    questions: [
      { prompt: 'Alguien te ayuda. ¿Qué dices para agradecer?', options: ['Danke', 'Nein', 'Auf Wiedersehen'], answers: ['Danke'], explanation: 'Danke expresa agradecimiento. Puedes acompañarlo con una sonrisa.' },
      { prompt: 'Pides que repitan: Noch einmal, ___.', answers: ['bitte'], explanation: 'Noch einmal, bitte significa «Otra vez, por favor».' },
      { prompt: '¿Cómo dices «No entiendo»?', options: ['Ich heiße Ana.', 'Ich verstehe nicht.', 'Ja, gerne.'], answers: ['Ich verstehe nicht.'], explanation: 'Nicht niega aquí el verbo: verstehe significa «entiendo»; verstehe nicht, «no entiendo».' },
      { prompt: 'Completa la petición formal: Können Sie ___ helfen? (¿Puede ayudarme?)', answers: ['mir'], explanation: 'Helfen lleva dativo para la persona ayudada: mir significa aquí «a mí». Helfen permanece en infinitivo al final después de können.' },
      { prompt: 'Respondes a un agradecimiento. ¿Qué expresión significa aquí «De nada»?', options: ['Bitte', 'Entschuldigung', 'Nein'], answers: ['Bitte'], explanation: 'Bitte puede responder a Danke. En una petición, la misma palabra significa «por favor».' },
      { prompt: 'Completa con helfen: Du ___ mir.', answers: ['hilfst'], explanation: 'Helfen cambia e por i con du: du hilfst. Mir identifica a la persona ayudada.' },
    ],
  },
];
const guidedLessons = [
  ...initialLessons.map(lesson => ({
    ...lesson, unit: 'a1-primeros', level: 'A1',
    grammar: firstLessonExtras[lesson.id].grammar,
    dialogue: firstLessonExtras[lesson.id].dialogue,
    words: [...lesson.words, ...firstLessonExtras[lesson.id].words],
  })),
  ...advancedLessons,
];
const vocabulary = createVocabularyCourse(guidedLessons);
export const lessons = [...guidedLessons,...vocabulary.lessons];
export const units = [...guidedUnits,...vocabulary.units];
const catalog = new Map();
for (const lesson of lessons) {
  for (const [id, de, es, example] of lesson.words) {
    if (!catalog.has(id)) catalog.set(id, { id, de, es, example, lesson: lesson.id, level: lesson.level });
  }
}
for (const entry of vocabulary.entries) {
  const previous = catalog.get(entry.id);
  catalog.set(entry.id,{...entry,...previous,de:entry.de,example:entry.example,es:entry.editorialNote ? entry.es : previous.es,editorialNote:entry.editorialNote,lemma:entry.lemma,pos:entry.pos,gender:entry.gender,source:entry.source,reviewStatus:entry.reviewStatus,review:entry.review,translations:entry.translations,definitions:entry.definitions,frequencyRank:entry.frequencyRank});
}
export const words = [...catalog.values()];
