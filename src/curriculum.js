export const units = [
  ['a1-primeros','A1','Primeros pasos','Saluda, preséntate y pide ayuda.'],
  ['a1-diario','A1','Expresiones del día a día','Horarios, números y tu primera visita a una cafetería.'],
  ['a1-ciudad','A1','Muévete por Alemania','Encuentra lugares y utiliza el transporte.'],
  ['a2-hogar','A2','Tu vida cotidiana','Habla de tu casa y organiza tus rutinas.'],
  ['a2-gestiones','A2','Resuelve lo cotidiano','Compra con criterio y explica cómo te sientes.'],
  ['a2-experiencias','A2','Cuenta y planea','Relata experiencias y propone planes.'],
  ['b1-trabajo','B1','Trabajar y colaborar','Busca empleo y coordina tareas.'],
  ['b1-viajes','B1','Viajar con autonomía','Organiza una estancia y resuelve imprevistos.'],
  ['b1-opiniones','B1','Conversaciones con fondo','Explica tus opiniones y mantén vínculos.'],
  ['b2-sociedad','B2','Entiende tu entorno','Contrasta información y debate sobre sostenibilidad.'],
  ['b2-profesional','B2','Comunica con precisión','Argumenta propuestas y escribe correos formales.'],
  ['b2-matices','B2','Más allá de lo literal','Negocia y comprende expresiones en contexto.'],
  ['c1-discurso','C1','Construye un discurso','Estructura argumentos y distingue registros.'],
  ['c1-sociedad','C1','Perspectivas y matices','Analiza cultura, participación y dilemas.'],
  ['c1-investigacion','C1','Explica ideas complejas','Evalúa evidencias y sintetiza con precisión.'],
].map(([id, level, title, description]) => ({id, level, title, description}));

export const firstLessonExtras = {
  saludos: {
    grammar:'Guten Morgen saluda por la mañana; Guten Tag, durante el día; Guten Abend, por la tarde-noche. Son expresiones fijas: conserva Guten en esos saludos y Gute en Gute Nacht, que se usa al despedirse para dormir. En Wie geht es Ihnen? («¿Cómo está usted?»), Ihnen es la forma de cortesía y lleva mayúscula. Para alguien cercano: Wie geht es dir? («¿Cómo estás?»). Responde Mir geht es gut («Estoy bien»); gut expresa aquí bienestar, no «bueno» delante de un nombre. Auch significa «también». Bis bald no fija una fecha; Bis morgen sí: hasta mañana. Willkommen in Berlin! da la bienvenida, sin cambiar willkommen según el género de la persona. En schlaf gut («duerme bien»), schlaf es una petición informal a una persona; no es la forma de cortesía.',
    dialogue:[['Guten Morgen! Wie geht es Ihnen?','¡Buenos días! ¿Cómo está usted?'],['Danke, gut. Und Ihnen?','Bien, gracias. ¿Y usted?'],['Auch gut. Auf Wiedersehen!','También bien. ¡Hasta luego!']],
    words:[['gute-nacht','Gute Nacht','Buenas noches (al ir a dormir)','Gute Nacht und schlaf gut!'],['bis-bald','Bis bald','Hasta pronto','Tschüss, bis bald!'],['bis-morgen','Bis morgen','Hasta mañana','Bis morgen, Anna!'],['willkommen','willkommen','bienvenido/a','Willkommen in Berlin!'],['gut','gut','bien / bueno','Mir geht es gut.'],['auch','auch','también','Mir geht es auch gut.']],
  },
  presentacion: {
    grammar:'En estas afirmaciones, el verbo conjugado ocupa la segunda posición: Ich heiße Ana. Una posición puede contener varias palabras; no significa «segunda palabra». En Wie heißt du? y Woher kommst du?, la palabra interrogativa va delante del verbo. Presente de sein: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind. Presente de heißen: ich heiße, du heißt, er/sie/es heißt, wir heißen, ihr heißt, sie/Sie heißen. Kommen y wohnen siguen aquí las terminaciones -e, -st, -t, -en, -t, -en: ich komme, du kommst; ich wohne, du wohnst. Sprechen cambia la vocal con du y er/sie/es: ich spreche, du sprichst, er spricht, wir sprechen, ihr sprecht, sie/Sie sprechen. Sie se dirige formalmente a una o varias personas; sie puede significar «ella» o «ellos/ellas». Woher kommst du? pide procedencia; Wo wohnst du? pide residencia. Aus Peru expresa procedencia; in Lima, ubicación. Deutschland, Peru y Spanien se usan aquí sin artículo; otros países sí lo necesitan, como die Schweiz: aus der Schweiz.',
    dialogue:[['Hallo! Wie heißt du?','¡Hola! ¿Cómo te llamas?'],['Ich heiße Luis. Und du?','Me llamo Luis. ¿Y tú?'],['Ich bin Anna. Woher kommst du?','Soy Anna. ¿De dónde eres?'],['Ich komme aus Peru.','Soy de Perú.']],
    words:[['du','du','tú','Wie heißt du?'],['sie-formal','Sie','usted / ustedes (formal)','Wie heißen Sie?'],['wer','wer','quién','Wer ist das?'],['woher','woher','de dónde','Woher kommst du?'],['wohnen','wohnen','vivir / residir','Ich wohne in Lima.'],['sprechen','sprechen','hablar','Ich spreche Spanisch.']],
  },
  cortesia: {
    grammar:'Können Sie mir helfen? significa «¿Puede ayudarme?» y sirve también para dirigirse formalmente a varias personas. En esta pregunta de sí/no, können va primero y helfen permanece en infinitivo al final. Helfen lleva dativo para la persona ayudada: mir («a mí»), dir («a ti»), Ihnen («a usted/ustedes»). Presente de helfen: ich helfe, du hilfst, er/sie/es hilft, wir helfen, ihr helft, sie/Sie helfen. Verstehen conserva la raíz en presente: ich verstehe, du verstehst, er/sie/es versteht, wir verstehen, ihr versteht, sie/Sie verstehen. Ich verstehe nicht niega «entiendo»; Nein responde «no» a una pregunta. Nicht no tiene una posición fija en todas las oraciones: aquí va al final. Die Entschuldigung es el sustantivo «la disculpa», para disculpas concretas, plural die Entschuldigungen; Entschuldigung! sin artículo es la fórmula «¡Disculpe!/¡Perdón!». Bitte significa «por favor» al pedir y «de nada» al responder a Danke. Gerne expresa disposición: Ja, gerne («Sí, con gusto»). Noch einmal, bitte pide repetir; Sprechen Sie bitte langsam pide hablar despacio. Natürlich expresa aquí «por supuesto».',
    dialogue:[['Entschuldigung, können Sie mir helfen?','Disculpe, ¿puede ayudarme?'],['Ja, gerne.','Sí, con gusto.'],['Ich verstehe nicht. Langsam, bitte.','No entiendo. Despacio, por favor.'],['Natürlich.','Por supuesto.']],
    words:[['helfen','helfen','ayudar','Können Sie mir helfen?'],['langsam','langsam','despacio / lento','Sprechen Sie bitte langsam.'],['noch-einmal','noch einmal','otra vez','Noch einmal, bitte.'],['gerne','gerne','con gusto','Ja, gerne.'],['natuerlich','natürlich','por supuesto / naturalmente','Natürlich helfe ich Ihnen.'],['nicht','nicht','no (negación)','Ich verstehe nicht.']],
  },
};

const grammarChecks = {
  tiempo:['Completa con la preposición para la hora exacta: Wir treffen uns ___ acht Uhr.',['um'],'Um introduce la hora acordada: a las ocho.',[
    {prompt:'Completa la hora: Es ist ___ Uhr. (Es la una.)',answers:['ein'],explanation:'Se cuenta eins, pero delante de Uhr se usa ein: ein Uhr.'},
    {prompt:'Completa con el sustantivo para duración: Ich lerne eine ___. (Estudio una hora.)',answers:['Stunde'],explanation:'Stunde mide una duración. Uhr se usa para el reloj o para indicar la hora.'},
    {prompt:'Completa con el plural de Minute: Drei ___, bitte.',answers:['Minuten'],explanation:'Minute es femenino y su plural es Minuten: eine Minute, drei Minuten.'},
  ]],
  cafeteria:['Completa: Ich möchte ___ Kaffee.',['einen'],'Kaffee es masculino y aquí funciona como objeto en acusativo: einen Kaffee.'],
  orientacion:['Pregunta por una ubicación: ___ ist der Bahnhof?',['Wo'],'Wo pregunta dónde está algo; wohin pregunta por el destino.'],
  transporte:['Completa: Ich fahre ___ Berlin.',['nach'],'Nach se utiliza aquí con una ciudad sin artículo.'],
  vivienda:['Completa: Es gibt ___ Balkon.',['einen'],'Es gibt lleva acusativo. Balkon es masculino: einen Balkon.'],
  rutinas:['Completa el verbo separable: Ich stehe um sieben Uhr ___.',['auf'],'Aufstehen separa auf al final en esta oración principal.'],
  compras:['Completa la comparación: Diese Jacke ist günstiger ___ die andere.',['als'],'Als introduce el segundo término en una comparación de desigualdad.'],
  salud:['Completa «desde ayer»: ___ gestern.',['seit'],'Seit indica un inicio en el pasado que continúa siendo relevante.'],
  pasado:['Completa: Gestern ___ ich Deutsch gelernt.',['habe'],'El Perfekt de lernen se forma con haben: ich habe gelernt.'],
  planes:['Completa: Wir können am Samstag ___. (hacer senderismo)',['wandern'],'Después de können, el otro verbo aparece aquí en infinitivo al final.'],
  empleo:['Completa: Ich bewerbe ___ um die Stelle.',['mich'],'Sich bewerben es reflexivo; con ich se utiliza mich.'],
  equipo:['Completa: Weißt du, ___ er kommt? (si viene o no)',['ob'],'Ob introduce una pregunta indirecta cuya respuesta sería sí o no.'],
  estancia:['Completa una petición cortés: Ich ___ gern ein ruhiges Zimmer.',['hätte'],'Hätte gern expresa un deseo o una petición de forma cortés.'],
  imprevistos:['Completa el contraste: Es regnet. ___ gehen wir los. (Aun así)',['Trotzdem'],'Trotzdem inicia aquí una oración principal; el verbo gehen aparece antes del sujeto wir.'],
  opiniones:['Completa: Ich finde, ___ der Plan sinnvoll ist.',['dass'],'Dass introduce la subordinada y el verbo ist aparece al final.'],
  amistades:['Completa una ilusión por el futuro: Ich freue mich ___ deinen Besuch.',['auf'],'Sich freuen auf expresa ilusión por algo que todavía está por ocurrir.'],
  informacion:['Completa el discurso indirecto: Die Sprecherin erklärt, die Lage ___ stabil.',['sei'],'Sei es una forma de Konjunktiv I de sein utilizada para atribuir la afirmación.'],
  sostenibilidad:['Completa el pasivo en presente: Die Emissionen ___ reduziert.',['werden'],'El pasivo de proceso usa werden conjugado y un participio.'],
  propuestas:['Completa: Je klarer das Ziel ist, ___ leichter lässt sich der Erfolg prüfen.',['desto'],'Je…desto relaciona dos variaciones comparativas.'],
  correos:['Completa una solicitud cortés: ___ Sie mir die Unterlagen zusenden?',['Könnten'],'Könnten es Konjunktiv II y suaviza aquí la petición.'],
  negociacion:['Completa «siempre que»: Wir stimmen zu, ___ die Frist verlängert wird.',['sofern'],'Sofern introduce la condición que limita la aceptación.'],
  expresiones:['¿Qué expresión de esta lección equivale a «dar en el clavo»?', ['den Nagel auf den Kopf treffen'],'La expresión significa acertar con precisión, no golpear un objeto literalmente.'],
  argumentacion:['Completa: Zwar ist der Ansatz plausibel, ___ die Daten reichen nicht aus.',['aber'],'Zwar…aber concede un punto y después introduce el contraste.'],
  registros:['Nominaliza prüfen en «die ___ der Unterlagen».',['Prüfung'],'Prüfung convierte el proceso de revisar en un sustantivo; debe escribirse con mayúscula.'],
  cultura:['Completa el participio: die in der Studie ___ Personen. (las personas encuestadas)',['befragten'],'Befragten modifica a Personen dentro del grupo nominal; una relativa puede expresar la misma relación.'],
  dilemas:['Completa la concesión hipotética: ___ wenn die Maßnahme wirkt, bleibt die Frage der Verhältnismäßigkeit.',['Selbst'],'Selbst wenn plantea una concesión que puede ser hipotética, sin afirmar necesariamente que la medida funcione.'],
  evidencia:['Completa una inferencia prudente: Die Ergebnisse legen ___, dass weitere Forschung nötig ist.',['nahe'],'Nahelegen presenta aquí una inferencia sugerida por los resultados.'],
  sintesis:['Completa la consecuencia: Die Daten fehlen, ___ bleibt die Frage offen.',['folglich'],'Folglich marca una consecuencia; demgegenüber marcaría contraste.'],
};

function make(id, unit, title, subtitle, theory, grammar, tip, dialogue, terms) {
  const level = units.find(u => u.id === unit).level;
  const wordRows = terms.trim().split('\n').map(line => {
    const [de, es, example] = line.split('|');
    const key = de.toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    return [`term-${key}`, de, es, example];
  });
  const [prompt,answers,explanation,extraQuestions = []] = grammarChecks[id];
  return {id, unit, level, title, subtitle, category: units.find(u => u.id === unit).title.toUpperCase(), theory, grammar, tip, dialogue, example: dialogue[0], words:wordRows, questions:[{prompt,answers,explanation},...extraQuestions]};
}

export const advancedLessons = [
  make('tiempo','a1-diario','El tiempo a tu favor','Di la hora y organiza un encuentro.',
    'Para preguntar la hora usa Wie spät ist es? Para acordar una hora, um indica el momento: um acht Uhr. Heute, morgen y gestern te sitúan en el calendario. Primero distingue cuándo ocurre algo; no necesitas aprender todos los números de una vez.',
    'Es ist acht Uhr significa «Son las ocho»; ist es la forma de sein para es. Um acht Uhr significa «a las ocho». Die Uhr es el reloj (plural die Uhren); al decir la hora, Uhr no cambia: ein Uhr, acht Uhr. Die Stunde mide duración: eine Stunde, zwei Stunden. Die Minute forma el plural die Minuten. Morgen como sustantivo significa «la mañana»; morgen como adverbio, «mañana», aunque al iniciar una oración también lleva mayúscula. Heute es «hoy» y gestern, «ayer». En Gestern war ich hier, war es el pasado de sein para ich («estaba/estuve»). En Morgen habe ich Zeit, habe viene de haben («tengo»); el presente puede expresar un plan futuro con morgen. En Wir treffen uns, uns significa aquí «nos»: nos encontramos. Treffen cambia con du/er: du triffst, er trifft. En Wann kommst du?, wann pregunta «cuándo», mientras que Wie spät ist es? pregunta la hora. Eins sirve al contar; delante de Uhr se dice ein Uhr, sin s. Ante un sustantivo femenino: eine Minute, eine Stunde.',
    'Los horarios de transporte suelen expresarse con el sistema de 24 horas. Comprueba siempre el día y la hora.',
    [['Wann treffen wir uns?','¿Cuándo nos encontramos?'],['Morgen um acht Uhr.','Mañana a las ocho.'],['Gut, bis morgen!','Bien, ¡hasta mañana!']],
    `heute|hoy|Heute lerne ich Deutsch.
morgen|mañana|Morgen habe ich Zeit.
gestern|ayer|Gestern war ich hier.
die Uhr|el reloj / la hora|Es ist acht Uhr.
die Minute|el minuto|Eine Minute, bitte.
die Stunde|la hora (duración)|Ich lerne eine Stunde.
eins|uno|Eins, zwei, drei.
zwei|dos|Ich habe zwei Karten.
drei|tres|Drei Minuten, bitte.
acht|ocho|Wir kommen um acht Uhr.
wann|cuándo|Wann kommst du?
spät|tarde (hora avanzada)|Es ist schon spät.`),
  make('cafeteria','a1-diario','Un café, por favor','Pide algo, pregunta el precio y paga.',
    'Ich möchte… significa «Quisiera…» y sirve para pedir de manera amable. Puedes señalar el menú mientras practicas. Para pedir la cuenta: Die Rechnung, bitte. Para preguntar cuánto cuesta algo: Was kostet das?',
    'Los sustantivos alemanes comienzan con mayúscula. Aprende su artículo desde el inicio: der Kaffee, die Rechnung, das Wasser. Después de Ich möchte, un sustantivo masculino como Kaffee usa einen: Ich möchte einen Kaffee. Los femeninos usan eine y los neutros ein.',
    'En algunos locales te preguntarán Zusammen oder getrennt? Quieren saber si van a pagar juntos o por separado.',
    [['Ich möchte einen Tee, bitte.','Quisiera un té, por favor.'],['Mit Zucker?','¿Con azúcar?'],['Nein, danke. Die Rechnung, bitte.','No, gracias. La cuenta, por favor.']],
    `der Kaffee|el café|Ich möchte einen Kaffee.
der Tee|el té|Der Tee ist heiß.
das Wasser|el agua|Ein Wasser, bitte.
die Milch|la leche|Mit Milch, bitte.
der Zucker|el azúcar|Ohne Zucker, bitte.
die Rechnung|la cuenta / factura|Die Rechnung, bitte.
bezahlen|pagar|Ich möchte bezahlen.
kosten|costar|Was kostet das?
zusammen|juntos|Wir bezahlen zusammen.
getrennt|por separado|Wir bezahlen getrennt.
mit|con|Einen Kaffee mit Milch, bitte.
ohne|sin|Ich trinke Tee ohne Zucker.`),
  make('orientacion','a1-ciudad','Encuentra tu camino','Pregunta dónde está un lugar y sigue indicaciones.',
    'Wo ist…? pregunta dónde está algo. Usa links, rechts y geradeaus para seguir indicaciones. Combina un saludo, Entschuldigung y tu pregunta. Antes de caminar, confirma el lugar que buscas.',
    'Wo pregunta por ubicación. Wohin pregunta por destino. Hoy practicamos Wo ist der Bahnhof? Puedes entender in der Nähe como «cerca» sin resolver todavía todas las declinaciones. Aprende las expresiones completas y después analiza sus partes.',
    'Las indicaciones pueden darse por calles o puntos de referencia. Repite la dirección si tienes dudas: Also links? («¿Entonces, a la izquierda?»).',
    [['Entschuldigung, wo ist der Bahnhof?','Disculpe, ¿dónde está la estación?'],['Geradeaus und dann links.','Recto y después a la izquierda.'],['Vielen Dank!','¡Muchas gracias!']],
    `links|a la izquierda|Gehen Sie links.
rechts|a la derecha|Dann gehen Sie rechts.
geradeaus|todo recto|Gehen Sie geradeaus.
der Bahnhof|la estación de tren|Wo ist der Bahnhof?
die Straße|la calle|Die Straße ist lang.
der Platz|la plaza|Der Platz ist hier.
die Apotheke|la farmacia|Die Apotheke ist rechts.
der Supermarkt|el supermercado|Der Supermarkt ist dort.
hier|aquí|Ich bin hier.
dort|allí|Die Apotheke ist dort.
in der Nähe|cerca|Der Bahnhof ist in der Nähe.
weit|lejos / lejano|Ist es weit?`),
  make('transporte','a1-ciudad','Tu próximo destino','Compra un billete y encuentra tu transporte.',
    'Un billete puede llamarse Fahrkarte o Ticket. Pregunta por el destino antes de subir. Ich fahre nach Berlin expresa un destino urbano. Abfahrt es salida y Ankunft es llegada: distinguirlas te ayuda a leer una pantalla.',
    'El verbo fahren cambia a fahre con ich. Para ciudades sin artículo se usa normalmente nach: nach Berlin. Para el medio de transporte puedes decir mit dem Bus. Esta forma de dem se estudiará con el dativo; de momento, practica la expresión.',
    'La necesidad de validar un billete depende del sistema de transporte y del tipo de billete. Comprueba las instrucciones locales.',
    [['Eine Fahrkarte nach Berlin, bitte.','Un billete a Berlín, por favor.'],['Der Zug fährt von Gleis drei.','El tren sale de la vía tres.'],['Danke. Ist der Zug pünktlich?','Gracias. ¿El tren va puntual?']],
    `die Fahrkarte|el billete de transporte|Ich brauche eine Fahrkarte.
der Zug|el tren|Der Zug kommt.
der Bus|el autobús|Ich fahre mit dem Bus.
die Haltestelle|la parada|Wo ist die Haltestelle?
das Gleis|la vía ferroviaria|Der Zug steht an Gleis drei.
die Abfahrt|la salida (transporte)|Die Abfahrt ist um acht Uhr.
die Ankunft|la llegada|Die Ankunft ist um zehn Uhr.
fahren|ir en vehículo / conducir|Ich fahre nach Berlin.
einsteigen|subir a un vehículo|Bitte hier einsteigen.
aussteigen|bajar de un vehículo|Ich muss hier aussteigen.
pünktlich|puntual|Der Zug ist pünktlich.
die Verspätung|el retraso|Der Bus hat Verspätung.`),
  make('vivienda','a2-hogar','Un lugar para vivir','Describe tu vivienda y lo que necesitas.',
    'Para describir tu casa usa Es gibt… («Hay…»). Puedes añadir tamaño, precio y ubicación. Distingue Miete, el alquiler, de Kaution, la fianza. Una descripción útil combina un lugar, una característica y una necesidad.',
    'Es gibt lleva acusativo: Es gibt einen Balkon. Con wohnen y una ubicación aparecen formas como in einer Wohnung. Los adjetivos delante de un nombre cambian su terminación: eine kleine Wohnung; después de sein no la llevan: Die Wohnung ist klein.',
    'Antes de alquilar, distingue Warmmiete y Kaltmiete: los gastos incluidos varían. Pide una explicación del contrato y de los costes.',
    [['Wie ist die Wohnung?','¿Cómo es el piso?'],['Sie ist klein, aber hell.','Es pequeño, pero luminoso.'],['Gibt es einen Balkon?','¿Hay un balcón?']],
    `die Wohnung|el piso / apartamento|Die Wohnung ist hell.
das Zimmer|la habitación|Das Zimmer ist ruhig.
die Küche|la cocina|Die Küche ist klein.
das Bad|el baño|Das Bad hat ein Fenster.
der Balkon|el balcón|Es gibt einen Balkon.
die Miete|el alquiler|Die Miete ist hoch.
die Kaution|la fianza|Wie hoch ist die Kaution?
der Schlüssel|la llave|Hier ist der Schlüssel.
hell|luminoso / claro|Das Zimmer ist hell.
ruhig|tranquilo / silencioso|Die Straße ist ruhig.
mieten|alquilar (como inquilino)|Ich möchte eine Wohnung mieten.
umziehen|mudarse|Wir ziehen im Mai um.`),
  make('rutinas','a2-hogar','Así transcurre mi día','Cuenta tu rutina y reparte responsabilidades.',
    'Los verbos separables aparecen a menudo en las rutinas. Aufstehen se convierte en Ich stehe um sieben Uhr auf. Al contar tu día, comienza con una referencia temporal y conserva el verbo conjugado en segunda posición.',
    'Morgens stehe ich früh auf. El adverbio ocupa la primera posición, stehe la segunda y el sujeto aparece después. Con un modal, el infinitivo permanece junto: Ich muss früh aufstehen. Usa primero dos o tres frases conectadas con dann.',
    'Al convivir, acordar turnos y horarios ayuda más que suponer hábitos iguales. Puedes preguntar Wann passt es dir? («¿Cuándo te viene bien?»).',
    [['Wann stehst du auf?','¿Cuándo te levantas?'],['Meistens um sieben Uhr.','Normalmente a las siete.'],['Danach bereite ich das Frühstück vor.','Después preparo el desayuno.']],
    `aufstehen|levantarse|Ich stehe früh auf.
frühstücken|desayunar|Wir frühstücken zusammen.
aufräumen|ordenar|Ich räume mein Zimmer auf.
einkaufen|hacer la compra|Am Freitag kaufe ich ein.
kochen|cocinar|Abends koche ich.
putzen|limpiar|Wir putzen die Küche.
schlafen|dormir|Ich schlafe acht Stunden.
früh|temprano|Ich komme früh.
danach|después de eso|Danach gehe ich nach Hause.
meistens|la mayoría de las veces|Meistens esse ich zu Hause.
manchmal|a veces|Manchmal arbeite ich abends.
täglich|diariamente|Ich lerne täglich.`),
  make('compras','a2-gestiones','Comprar sin perderte','Compara productos y explica qué buscas.',
    'Beim Einkaufen significa «al hacer compras». Para pedir una talla o un tamaño usa Haben Sie das in…? Si algo no sirve, explica el motivo con zu: zu klein, demasiado pequeño. Guarda el comprobante cuando pueda hacer falta.',
    'El comparativo añade normalmente -er: günstig → günstiger. Algunas palabras cambian la vocal: groß → größer. Als introduce el segundo término de una comparación: Diese Jacke ist günstiger als die andere. No confundas als con wie, usado para igualdad.',
    'Las condiciones de devolución no son iguales para todas las compras. Pregunta por las condiciones de la tienda sin asumir un derecho específico.',
    [['Haben Sie diese Jacke in Größe M?','¿Tiene esta chaqueta en talla M?'],['Ja. Möchten Sie sie anprobieren?','Sí. ¿Quiere probársela?'],['Gerne. Wo ist die Umkleide?','Con gusto. ¿Dónde está el probador?']],
    `die Größe|la talla / el tamaño|Welche Größe brauchen Sie?
die Jacke|la chaqueta|Die Jacke ist zu klein.
die Hose|el pantalón|Die Hose passt gut.
der Schuh|el zapato|Der Schuh ist bequem.
der Preis|el precio|Der Preis ist niedrig.
der Kassenbon|el recibo de compra|Bewahren Sie den Kassenbon auf.
anprobieren|probarse ropa|Ich möchte die Jacke anprobieren.
passen|quedar bien / encajar|Die Hose passt mir.
günstig|económico / favorable|Das Angebot ist günstig.
teuer|caro|Der Mantel ist teuer.
größer|más grande|Ich brauche eine Nummer größer.
umtauschen|cambiar un producto|Kann ich die Jacke umtauschen?`),
  make('salud','a2-gestiones','Explica cómo te sientes','Describe síntomas y pide una cita.',
    'Para explicar una molestia puedes decir Ich habe Schmerzen o Mir tut der Kopf weh. Ich brauche einen Termin sirve para solicitar una cita. Practicamos comunicación cotidiana; estas frases no reemplazan una consulta médica.',
    'Mir es una forma de dativo de ich. En Mir ist kalt, la persona que siente frío aparece en dativo. Para una duración: seit gestern («desde ayer»). Para preguntar desde cuándo: Seit wann haben Sie Schmerzen?',
    'En una consulta, pregunta si no entiendes una indicación. Wiederholen Sie das bitte permite pedir que la repitan.',
    [['Ich brauche einen Termin.','Necesito una cita.'],['Welche Beschwerden haben Sie?','¿Qué molestias tiene?'],['Ich habe seit gestern Kopfschmerzen.','Me duele la cabeza desde ayer.']],
    `der Termin|la cita / el compromiso|Ich brauche einen Termin.
die Praxis|la consulta médica|Die Praxis ist geöffnet.
der Schmerz|el dolor|Der Schmerz ist stark.
der Kopf|la cabeza|Mein Kopf tut weh.
der Bauch|el vientre / la barriga|Ich habe Bauchschmerzen.
der Husten|la tos|Ich habe Husten.
das Fieber|la fiebre|Haben Sie Fieber?
müde|cansado|Ich bin müde.
krank|enfermo|Heute bin ich krank.
seit|desde / desde hace|Ich warte seit einer Stunde.
weh tun|doler|Mein Rücken tut weh.
die Hilfe|la ayuda|Ich brauche Hilfe.`),
  make('pasado','a2-experiencias','Lo que pasó ayer','Cuenta una experiencia sencilla.',
    'En conversación, el Perfekt es frecuente para hablar del pasado. Se forma con haben o sein y un participio. Ich habe gelernt significa «he estudiado / estudié». Ich bin gefahren utiliza sein porque describe aquí un desplazamiento.',
    'El auxiliar conjugado ocupa la segunda posición y el participio suele ir al final: Gestern habe ich Deutsch gelernt. Muchos participios regulares usan ge- y -t. Los verbos con prefijos como be- y ver- no siguen esa pauta: besucht, verstanden.',
    'No traduzcas todos los tiempos del español de forma literal. Empieza contando qué hiciste, cuándo y cómo te resultó.',
    [['Was hast du gestern gemacht?','¿Qué hiciste ayer?'],['Ich habe ein Museum besucht.','Visité un museo.'],['Und danach bin ich nach Hause gefahren.','Y después volví a casa en transporte.']],
    `lernen|aprender / estudiar|Ich habe Deutsch gelernt.
besuchen|visitar|Wir haben ein Museum besucht.
machen|hacer|Was hast du gemacht?
sehen|ver|Ich habe den Film gesehen.
essen|comer|Wir haben zusammen gegessen.
trinken|beber|Ich habe Wasser getrunken.
bleiben|quedarse|Ich bin zu Hause geblieben.
ankommen|llegar|Wir sind spät angekommen.
das Erlebnis|la vivencia|Das war ein schönes Erlebnis.
das Museum|el museo|Das Museum war interessant.
interessant|interesante|Der Besuch war interessant.
letzte Woche|la semana pasada|Letzte Woche war ich in Berlin.`),
  make('planes','a2-experiencias','¿Qué hacemos el fin de semana?','Propón una actividad y llega a un acuerdo.',
    'En alemán el presente puede hablar del futuro si el momento está claro: Am Samstag gehen wir ins Kino. Wollen wir…? propone una actividad compartida. Ich würde gern… expresa un deseo de forma amable.',
    'Los modales como wollen y können se conjugan y dejan el otro verbo en infinitivo al final: Wir können am Samstag wandern. Con weil, el verbo conjugado se coloca al final de la subordinada: Ich bleibe zu Hause, weil ich müde bin.',
    'Aceptar o rechazar una invitación puede ser breve y amable. Si no puedes, propone otra fecha en lugar de dejar una respuesta ambigua.',
    [['Wollen wir am Samstag wandern?','¿Vamos de excursión el sábado?'],['Gern, wenn das Wetter gut ist.','Con gusto, si hace buen tiempo.'],['Dann treffen wir uns um neun.','Entonces nos vemos a las nueve.']],
    `das Wochenende|el fin de semana|Am Wochenende habe ich Zeit.
der Samstag|el sábado|Am Samstag bin ich frei.
der Sonntag|el domingo|Am Sonntag bleiben wir hier.
das Wetter|el tiempo atmosférico|Das Wetter ist gut.
die Einladung|la invitación|Danke für die Einladung.
vorschlagen|proponer|Ich schlage einen Spaziergang vor.
vereinbaren|acordar / concertar|Wir vereinbaren einen Termin.
wandern|hacer senderismo|Wir wollen wandern.
frei|libre|Am Samstag bin ich frei.
vielleicht|quizá|Vielleicht komme ich mit.
leider|lamentablemente|Leider kann ich nicht kommen.
weil|porque|Ich bleibe, weil es regnet.`),
  make('empleo','b1-trabajo','Tu experiencia cuenta','Presenta tus capacidades y solicita un empleo.',
    'En una candidatura, vincula una capacidad con una experiencia concreta. Ich habe Erfahrung im… introduce un ámbito de experiencia. Ich interessiere mich für… explica tu interés. Distingue una afirmación general de una evidencia.',
    'Sich bewerben um lleva acusativo: Ich bewerbe mich um die Stelle. El pronombre reflexivo cambia con el sujeto. Para describir experiencia continuada usa seit con presente: Ich arbeite seit zwei Jahren im Verkauf.',
    'Las expectativas de una candidatura dependen del puesto y del empleador. Lee el anuncio y adapta el texto a sus requisitos.',
    [['Warum interessieren Sie sich für die Stelle?','¿Por qué le interesa el puesto?'],['Ich habe Erfahrung im Kundenservice.','Tengo experiencia en atención al cliente.'],['Außerdem arbeite ich gern im Team.','Además, me gusta trabajar en equipo.']],
    `die Bewerbung|la candidatura laboral|Ich sende meine Bewerbung.
der Lebenslauf|el currículum|Mein Lebenslauf ist aktuell.
die Stelle|el puesto de trabajo|Ich bewerbe mich um die Stelle.
die Erfahrung|la experiencia|Ich habe Erfahrung im Verkauf.
die Fähigkeit|la capacidad / habilidad|Diese Fähigkeit ist wichtig.
die Ausbildung|la formación profesional|Ich habe eine Ausbildung abgeschlossen.
das Vorstellungsgespräch|la entrevista de trabajo|Morgen habe ich ein Vorstellungsgespräch.
zuverlässig|fiable|Ich bin zuverlässig.
zuständig|responsable / competente para algo|Wer ist dafür zuständig?
sich bewerben|presentarse a una candidatura|Ich möchte mich bewerben.
der Vertrag|el contrato|Ich lese den Vertrag.
das Gehalt|el sueldo|Wie hoch ist das Gehalt?`),
  make('equipo','b1-trabajo','Un equipo que se entiende','Coordina tareas y aclara responsabilidades.',
    'Una coordinación clara responde qué hay que hacer, quién lo hace y para cuándo. Ich übernehme… indica que asumes una tarea. Könntest du…? formula una petición amable. Si algo no está claro, pide una aclaración antes de confirmar.',
    'Las preguntas indirectas ayudan a pedir información con cortesía: Kannst du mir sagen, wann die Besprechung beginnt? La subordinada coloca beginnt al final. Ob introduce una pregunta indirecta de sí o no: Weißt du, ob er kommt?',
    'Pedir una aclaración no demuestra falta de capacidad. Una confirmación breve evita malentendidos entre compañeros.',
    [['Wer übernimmt die Aufgabe?','¿Quién se encarga de la tarea?'],['Ich kümmere mich darum.','Yo me ocupo de ello.'],['Gut. Kannst du mir bis Freitag Bescheid geben?','Bien. ¿Puedes avisarme antes del viernes?']],
    `die Aufgabe|la tarea|Ich übernehme die Aufgabe.
die Besprechung|la reunión de trabajo|Die Besprechung beginnt um neun.
die Frist|el plazo|Die Frist endet morgen.
der Vorschlag|la propuesta|Das ist ein guter Vorschlag.
die Rückmeldung|la respuesta / retroalimentación|Danke für die Rückmeldung.
übernehmen|asumir / encargarse de|Ich übernehme den ersten Teil.
erledigen|realizar / resolver una tarea|Ich erledige das heute.
klären|aclarar|Wir müssen die Frage klären.
verschieben|posponer / trasladar|Wir verschieben den Termin.
rechtzeitig|a tiempo|Bitte antworte rechtzeitig.
gemeinsam|en conjunto|Wir lösen das gemeinsam.
Bescheid geben|avisar|Ich gebe dir morgen Bescheid.`),
  make('estancia','b1-viajes','Una estancia sin sorpresas','Reserva alojamiento y expresa tus preferencias.',
    'Una reserva útil incluye fechas, número de personas y condiciones. Ich hätte gern… expresa una preferencia de forma cortés. Pregunta qué está incluido y confirma por escrito los detalles importantes.',
    'Hätte es una forma de Konjunktiv II utilizada para deseos y peticiones. Ich hätte gern ein ruhiges Zimmer. Las oraciones relativas añaden información: Ich suche ein Hotel, das in der Nähe liegt. Das se refiere a Hotel y el verbo liegt va al final.',
    'Llegada, salida y cancelación pueden tener condiciones distintas. Comprender una condición no es lo mismo que aceptar automáticamente su conveniencia.',
    [['Ist das Frühstück im Preis enthalten?','¿El desayuno está incluido en el precio?'],['Ja, und Sie können bis elf Uhr auschecken.','Sí, y puede dejar la habitación hasta las once.'],['Könnten Sie mir das schriftlich bestätigen?','¿Podría confirmármelo por escrito?']],
    `die Unterkunft|el alojamiento|Wir suchen eine Unterkunft.
die Buchung|la reserva|Ich bestätige die Buchung.
die Übernachtung|la noche de alojamiento|Was kostet eine Übernachtung?
die Anreise|el viaje de llegada|Die Anreise ist am Freitag.
die Abreise|la salida de una estancia|Die Abreise ist am Montag.
die Verpflegung|la alimentación incluida / manutención|Die Verpflegung ist nicht enthalten.
enthalten|incluido / contenido|Das Frühstück ist enthalten.
bestätigen|confirmar|Bitte bestätigen Sie die Buchung.
stornieren|cancelar una reserva|Ich muss die Buchung stornieren.
verfügbar|disponible|Ist ein Zimmer verfügbar?
schriftlich|por escrito|Ich brauche eine schriftliche Bestätigung.
die Bedingung|la condición|Bitte lesen Sie die Bedingungen.`),
  make('imprevistos','b1-viajes','Cuando algo cambia','Explica un problema y busca una alternativa.',
    'Para resolver un imprevisto, describe primero los hechos y después lo que necesitas. Mein Zug ist ausgefallen informa del problema. Welche Alternative gibt es? abre la búsqueda de una solución. Evita atribuir una causa si no la conoces.',
    'Obwohl expresa una concesión: Obwohl ich früh losgefahren bin, habe ich den Anschluss verpasst. La subordinada termina en bin y ocupa la primera posición de la oración principal; después aparece habe. Trotzdem conecta una nueva oración con sentido de contraste.',
    'Conserva la información de tu viaje para explicar lo ocurrido. Las soluciones disponibles dependen del operador y de las condiciones aplicables.',
    [['Mein Zug ist ausgefallen.','Mi tren ha sido cancelado.'],['Haben Sie eine andere Verbindung?','¿Tiene otra conexión?'],['Ja, aber Sie müssen einmal umsteigen.','Sí, pero debe hacer un transbordo.']],
    `der Ausfall|la cancelación / el fallo|Der Ausfall wurde angekündigt.
der Anschluss|la conexión de transporte|Ich habe den Anschluss verpasst.
die Verbindung|la conexión / el enlace|Gibt es eine andere Verbindung?
die Alternative|la alternativa|Wir suchen eine Alternative.
die Erstattung|el reembolso|Ich frage nach einer Erstattung.
verpassen|perder una ocasión o transporte|Ich habe den Bus verpasst.
ausfallen|cancelarse / dejar de funcionar|Der Zug fällt aus.
umsteigen|hacer transbordo|Wir müssen in Köln umsteigen.
sich verspäten|retrasarse|Der Zug verspätet sich.
obwohl|aunque|Obwohl es regnet, gehen wir los.
trotzdem|aun así|Es regnet. Trotzdem gehen wir.
dringend|urgente / urgentemente|Ich brauche dringend eine Auskunft.`),
  make('opiniones','b1-opiniones','Tu punto de vista','Expresa una opinión y explica tus motivos.',
    'Una opinión resulta más clara cuando separas tu postura, el motivo y un ejemplo. Ich finde, dass… introduce una valoración. Meiner Meinung nach… señala que presentas tu perspectiva, no un hecho indiscutible.',
    'Dass introduce una subordinada con el verbo al final: Ich finde, dass der Plan sinnvoll ist. Denn conecta dos oraciones sin mover el verbo al final: Ich bleibe, denn ich habe Zeit. Weil sí cambia el orden: weil ich Zeit habe.',
    'Puedes discrepar con respeto: Ich sehe das etwas anders. Después explica el motivo sin atribuir intenciones a la otra persona.',
    [['Was hältst du von dem Vorschlag?','¿Qué opinas de la propuesta?'],['Ich finde ihn sinnvoll, weil er Zeit spart.','Me parece sensata porque ahorra tiempo.'],['Ich sehe das etwas anders.','Yo lo veo algo diferente.']],
    `die Meinung|la opinión|Meine Meinung ist anders.
der Grund|el motivo / la razón|Was ist der Grund?
das Beispiel|el ejemplo|Ich gebe dir ein Beispiel.
der Vorteil|la ventaja|Das ist ein großer Vorteil.
der Nachteil|la desventaja|Es gibt auch Nachteile.
zustimmen|estar de acuerdo|Ich stimme dir zu.
ablehnen|rechazar|Ich lehne den Vorschlag ab.
begründen|justificar con razones|Kannst du das begründen?
sinnvoll|sensato / con sentido|Der Plan ist sinnvoll.
deshalb|por eso|Ich bin müde, deshalb gehe ich.
außerdem|además|Außerdem ist es günstiger.
meiner Meinung nach|en mi opinión|Meiner Meinung nach hilft das.`),
  make('amistades','b1-opiniones','Vínculos y malentendidos','Habla de relaciones y aclara lo que quisiste decir.',
    'En una conversación personal, describe cómo te sentiste sin presentar tu interpretación como un hecho. Ich hatte den Eindruck, dass… significa «Tuve la impresión de que…». Pide aclaración y escucha antes de responder.',
    'Los pronombres reflexivos aparecen en sich freuen y sich entschuldigen. Ich freue mich auf… expresa ilusión por algo futuro; Ich freue mich über… alegría por algo que ocurre o ha ocurrido. La preposición cambia el significado.',
    'La comunicación directa y las preferencias personales varían. Evita convertir una experiencia con alguien en una regla sobre toda una cultura.',
    [['Ich glaube, wir haben uns missverstanden.','Creo que nos hemos entendido mal.'],['So habe ich das nicht gemeint.','No lo quise decir así.'],['Danke, dass du es erklärst.','Gracias por explicarlo.']],
    `die Freundschaft|la amistad|Unsere Freundschaft ist wichtig.
das Vertrauen|la confianza|Vertrauen braucht Zeit.
das Missverständnis|el malentendido|Das war ein Missverständnis.
die Beziehung|la relación|Wir haben eine gute Beziehung.
die Stimmung|el estado de ánimo / ambiente|Die Stimmung ist entspannt.
sich freuen|alegrarse / tener ilusión|Ich freue mich auf deinen Besuch.
sich entschuldigen|disculparse|Ich möchte mich entschuldigen.
zuhören|escuchar con atención|Ich höre dir zu.
erklären|explicar|Kannst du das erklären?
ehrlich|sincero / honestamente|Ich möchte ehrlich sein.
enttäuscht|decepcionado|Sie ist enttäuscht.
Rücksicht nehmen|tener consideración|Wir nehmen aufeinander Rücksicht.`),
  make('informacion','b2-sociedad','Información bajo la lupa','Distingue una afirmación de su evidencia.',
    'Al comentar una noticia, identifica quién afirma qué y con qué respaldo. Eine Quelle nennt… atribuye información a una fuente. Entre una Beobachtung y una Schlussfolgerung hay un paso interpretativo que conviene explicar.',
    'El Konjunktiv I puede marcar discurso indirecto: Die Sprecherin erklärt, die Lage sei stabil. Sei transmite la afirmación sin adoptarla necesariamente como propia. Cuando la forma no se distingue del indicativo, se usan otras soluciones; no toda atribución necesita este modo.',
    'Contrasta fecha, autoría y contexto. Una palabra como angeblich señala distancia respecto de una afirmación y puede insinuar duda.',
    [['Auf welche Quelle stützt sich der Bericht?','¿En qué fuente se apoya el informe?'],['Er verweist auf eine aktuelle Untersuchung.','Remite a una investigación actual.'],['Dann sollten wir die Ergebnisse genauer prüfen.','Entonces deberíamos examinar mejor los resultados.']],
    `die Quelle|la fuente|Die Quelle ist öffentlich zugänglich.
die Behauptung|la afirmación no demostrada|Die Behauptung ist unbelegt.
der Beleg|la prueba / el respaldo documental|Dafür fehlt ein Beleg.
die Untersuchung|la investigación / el estudio|Die Untersuchung wurde veröffentlicht.
die Schlagzeile|el titular|Die Schlagzeile ist verkürzt.
die Berichterstattung|la cobertura informativa|Die Berichterstattung ist ausführlich.
überprüfen|comprobar / verificar|Wir müssen die Angaben überprüfen.
darstellen|representar / exponer|Der Bericht stellt die Lage dar.
angeblich|supuestamente|Er ist angeblich schon abgereist.
nachweislich|de forma demostrable|Die Methode wirkt nachweislich.
verlässlich|confiable|Die Daten sind verlässlich.
hingegen|en cambio|Die zweite Quelle hingegen widerspricht.`),
  make('sostenibilidad','b2-sociedad','Debatir sobre el futuro','Compara medidas y sus consecuencias.',
    'Una discusión sobre sostenibilidad exige distinguir objetivos, medidas y consecuencias. Una medida puede tener un Nutzen y también Kosten. Formula qué cambiaría, para quién y en qué plazo, en vez de limitarte a una etiqueta positiva o negativa.',
    'El pasivo destaca el proceso: Die Emissionen werden reduziert. La persona que actúa puede añadirse con von. Para expresar finalidad, usa damit con sujeto propio o um…zu cuando el sujeto coincide: Wir sparen Energie, um Kosten zu senken.',
    'Las prácticas de separación de residuos y movilidad varían entre municipios. Preguntar por las reglas locales evita generalizaciones.',
    [['Welche Maßnahme wäre am wirksamsten?','¿Qué medida sería más eficaz?'],['Zunächst sollten wir den Verbrauch senken.','Primero deberíamos reducir el consumo.'],['Dabei müssen die Kosten berücksichtigt werden.','Al hacerlo deben tenerse en cuenta los costes.']],
    `die Nachhaltigkeit|la sostenibilidad|Nachhaltigkeit betrifft viele Bereiche.
der Verbrauch|el consumo|Der Verbrauch ist gesunken.
die Emission|la emisión|Die Emissionen werden reduziert.
die Ressource|el recurso|Wir schonen natürliche Ressourcen.
die Maßnahme|la medida|Die Maßnahme wird geprüft.
die Auswirkung|la repercusión|Die Auswirkungen sind langfristig.
vermeiden|evitar|Wir möchten Abfall vermeiden.
verringern|reducir / disminuir|Das verringert den Verbrauch.
berücksichtigen|tener en cuenta|Wir berücksichtigen die Kosten.
wirksam|eficaz|Die Maßnahme ist wirksam.
langfristig|a largo plazo|Wir planen langfristig.
erneuerbar|renovable|Wir nutzen erneuerbare Energie.`),
  make('propuestas','b2-profesional','Una propuesta que convence','Relaciona objetivos, recursos y resultados.',
    'Una propuesta sólida describe el problema, propone una acción y reconoce límites. Usa criterios concretos para comparar alternativas. En lugar de asegurar un resultado, explica bajo qué condiciones lo consideras probable.',
    'Je…desto relaciona dos cambios: Je klarer das Ziel ist, desto leichter lässt sich der Erfolg prüfen. En la primera parte el verbo va al final. En la segunda, el grupo comparativo precede al verbo. Practica una relación real, no solo el patrón.',
    'En reuniones, distingue una decisión de una sugerencia. Una confirmación escrita de acuerdos ayuda a evitar interpretaciones distintas.',
    [['Wie lässt sich der Vorschlag umsetzen?','¿Cómo se puede llevar a la práctica la propuesta?'],['Wir brauchen klare Zuständigkeiten.','Necesitamos responsabilidades claras.'],['Außerdem sollten wir den Aufwand abschätzen.','Además deberíamos estimar el esfuerzo necesario.']],
    `das Ziel|el objetivo|Das Ziel ist klar definiert.
der Aufwand|el esfuerzo / coste de recursos|Der Aufwand ist überschaubar.
der Nutzen|el beneficio / la utilidad|Der Nutzen überwiegt.
die Umsetzung|la puesta en práctica|Die Umsetzung beginnt im Mai.
die Voraussetzung|el requisito / la condición previa|Das ist eine wichtige Voraussetzung.
die Zuständigkeit|la competencia / responsabilidad asignada|Die Zuständigkeiten sind geklärt.
abschätzen|estimar|Wir müssen den Aufwand abschätzen.
umsetzen|llevar a la práctica|Wir setzen den Plan um.
gewährleisten|garantizar / asegurar|Wir müssen den Zugang gewährleisten.
nachvollziehbar|comprensible en su razonamiento|Die Entscheidung ist nachvollziehbar.
gegebenenfalls|si procede / dado el caso|Gegebenenfalls passen wir den Plan an.
in Betracht ziehen|tomar en consideración|Wir ziehen diese Lösung in Betracht.`),
  make('correos','b2-profesional','Escribir con intención','Redacta solicitudes formales claras.',
    'Un correo formal necesita un asunto concreto, un motivo identificable y una petición clara. Ich wende mich an Sie, weil… presenta el motivo. Termina indicando qué respuesta necesitas y evita fórmulas que prometan una obligación inexistente.',
    'El Konjunktiv II suaviza peticiones: Könnten Sie mir die Unterlagen zusenden? En referencia a un documento puede usarse bezüglich con genitivo: bezüglich Ihrer Anfrage. Una forma formal no debe volver confuso el mensaje; las frases cortas también son profesionales.',
    'Sehr geehrte Frau… y Sehr geehrter Herr… son saludos formales habituales. Si no conoces el tratamiento adecuado, adapta el saludo al destinatario y al contexto.',
    [['Bezüglich Ihrer Anfrage sende ich Ihnen die Unterlagen.','Respecto a su consulta, le envío la documentación.'],['Könnten Sie den Eingang kurz bestätigen?','¿Podría confirmar brevemente la recepción?'],['Vielen Dank im Voraus.','Muchas gracias de antemano.']],
    `die Anfrage|la consulta / solicitud de información|Vielen Dank für Ihre Anfrage.
die Unterlagen|la documentación|Die Unterlagen sind vollständig.
der Anhang|el archivo adjunto|Die Datei finden Sie im Anhang.
der Betreff|el asunto de un correo|Der Betreff ist eindeutig.
die Bestätigung|la confirmación|Ich bitte um eine Bestätigung.
die Rückfrage|la pregunta de aclaración|Für Rückfragen bin ich erreichbar.
zusenden|enviar a alguien|Bitte senden Sie mir die Unterlagen zu.
mitteilen|comunicar / informar|Bitte teilen Sie mir Ihre Entscheidung mit.
bezüglich|con respecto a|Ich schreibe bezüglich Ihrer Anfrage.
vollständig|completo|Die Angaben sind vollständig.
verbindlich|vinculante / firme|Ist die Zusage verbindlich?
im Voraus|de antemano|Vielen Dank im Voraus.`),
  make('negociacion','b2-matices','Encontrar un punto común','Negocia condiciones sin perder claridad.',
    'Negociar no consiste solo en aceptar o rechazar. Identifica qué es imprescindible, qué puede cambiar y qué contrapropuesta resuelve la necesidad de ambas partes. Expresa condiciones de forma explícita y confirma su alcance.',
    'Sofern introduce una condición: Wir stimmen zu, sofern die Frist verlängert wird. Falls también introduce una condición posible. En ambos casos, el verbo conjugado va al final de la subordinada. Una condición no equivale a una promesa incondicional.',
    'El tono cortés puede coexistir con límites claros. Das kommt für mich nicht infrage rechaza una opción sin necesidad de atacar a la otra persona.',
    [['Unter welchen Bedingungen wäre das möglich?','¿Bajo qué condiciones sería posible?'],['Sofern die Frist verlängert wird, können wir zustimmen.','Si se amplía el plazo, podemos aceptar.'],['Dann halten wir das schriftlich fest.','Entonces lo dejamos por escrito.']],
    `der Kompromiss|el compromiso negociado / acuerdo intermedio|Wir suchen einen Kompromiss.
das Zugeständnis|la concesión|Das ist ein großes Zugeständnis.
die Einigung|el acuerdo alcanzado|Wir haben eine Einigung erzielt.
der Spielraum|el margen de maniobra|Es gibt noch Spielraum.
der Einwand|la objeción|Ich habe einen Einwand.
aushandeln|negociar hasta acordar|Wir handeln die Bedingungen aus.
einräumen|conceder / reconocer|Wir räumen mehr Zeit ein.
festhalten|dejar constancia / mantener|Wir halten das Ergebnis fest.
entgegenkommen|hacer una concesión a alguien|Wir können Ihnen entgegenkommen.
sofern|siempre que / con tal de que|Wir kommen, sofern es möglich ist.
vertretbar|aceptable / defendible|Die Lösung ist vertretbar.
unter Vorbehalt|con reservas / sujeto a confirmación|Ich sage unter Vorbehalt zu.`),
  make('expresiones','b2-matices','Lo que las palabras sugieren','Comprende expresiones sin traducirlas literalmente.',
    'Una expresión fija tiene un sentido que no siempre se obtiene palabra por palabra. Tomar etwas auf die leichte Schulter significa restarle importancia. Aprende la expresión con un ejemplo, su intención y el registro en que encaja.',
    'Muchas expresiones conservan un artículo o una preposición específicos. En den Nagel auf den Kopf treffen, modificar esas partes rompe la expresión usual. Algunas permiten cambios de tiempo y persona, pero no una sustitución libre de cada palabra.',
    'No fuerces un modismo en cada frase. Entenderlo antes de usarlo evita sonar inadecuado o dar un tono distinto del buscado.',
    [['Du hast den Nagel auf den Kopf getroffen.','Has dado en el clavo.'],['Dann sollten wir jetzt Nägel mit Köpfen machen.','Entonces deberíamos pasar a hechos concretos.'],['Einverstanden, aber nichts überstürzen.','De acuerdo, pero sin precipitarnos.']],
    `auf jeden Fall|en cualquier caso / sin duda|Ich komme auf jeden Fall.
im Großen und Ganzen|en líneas generales|Im Großen und Ganzen passt das.
eine Rolle spielen|desempeñar un papel|Zeit spielt eine wichtige Rolle.
in Frage kommen|ser una opción viable|Das kommt für uns in Frage.
auf die leichte Schulter nehmen|tomarse algo a la ligera|Nimm das nicht auf die leichte Schulter.
den Nagel auf den Kopf treffen|dar en el clavo|Damit triffst du den Nagel auf den Kopf.
Nägel mit Köpfen machen|pasar a hechos concretos|Wir sollten Nägel mit Köpfen machen.
auf dem Laufenden bleiben|mantenerse al corriente|Ich möchte auf dem Laufenden bleiben.
ins Auge fassen|considerar como objetivo|Wir fassen einen Umzug ins Auge.
zu Wort kommen|tener ocasión de hablar|Alle sollen zu Wort kommen.
überstürzen|precipitar / hacer con demasiada prisa|Wir sollten nichts überstürzen.
auf Anhieb|a la primera|Es hat auf Anhieb geklappt.`),
  make('argumentacion','c1-discurso','Argumentos con estructura','Construye y limita una tesis.',
    'Una argumentación avanzada distingue la tesis, sus premisas y el vínculo entre evidencia y conclusión. Reconoce una objeción pertinente y delimita lo que tu argumento permite afirmar. Más vocabulario no sustituye una inferencia clara.',
    'Zwar…aber concede un punto y lo contrasta: Zwar ist der Ansatz plausibel, aber die Daten reichen nicht aus. Insofern…als delimita en qué sentido algo es válido. Coloca conectores por su función lógica, no solo para que el texto parezca más formal.',
    'En debates, reformula la postura contraria de manera que su autor pueda reconocerla. Después identifica el desacuerdo concreto.',
    [['Die These ist plausibel, bedarf aber einer Einschränkung.','La tesis es plausible, pero requiere una matización.'],['Welche Prämisse halten Sie für problematisch?','¿Qué premisa considera problemática?'],['Die Schlussfolgerung geht über die Befunde hinaus.','La conclusión va más allá de los hallazgos.']],
    `die These|la tesis / proposición central|Die These wird begründet.
die Prämisse|la premisa|Diese Prämisse ist umstritten.
die Schlussfolgerung|la conclusión inferida|Die Schlussfolgerung ist nicht zwingend.
die Einschränkung|la limitación / matización|Das gilt mit einer Einschränkung.
der Widerspruch|la contradicción|Darin liegt ein Widerspruch.
die Plausibilität|la plausibilidad|Wir prüfen die Plausibilität.
widerlegen|refutar|Die Daten widerlegen die These.
einwenden|objetar|Dagegen lässt sich einwenden, dass Daten fehlen.
einleuchten|resultar convincente / claro|Das Argument leuchtet mir ein.
stichhaltig|sólido como argumento|Die Begründung ist stichhaltig.
insofern|en ese sentido / en la medida en que|Insofern ist der Einwand berechtigt.
zwingend|necesario / concluyente|Dieser Schluss ist nicht zwingend.`),
  make('registros','c1-discurso','El tono adecuado','Adapta el registro sin cambiar el significado.',
    'El registro depende del destinatario, del propósito y de la relación. Un texto académico no necesita sonar como una conversación, ni un mensaje cercano como un trámite. Cambiar el tono exige conservar la información relevante y reconocer lo que cada formulación implica.',
    'La nominalización compacta procesos: Wir prüfen die Unterlagen → die Prüfung der Unterlagen. Puede ser útil, pero una cadena larga de nombres dificulta la lectura. Elige la forma verbal cuando aclare quién actúa y qué sucede.',
    'Las formulaciones pueden sonar más directas o más distantes según el contexto. Pregunta por la intención antes de interpretar una frase como descortés.',
    [['Wie lässt sich der Satz neutraler formulieren?','¿Cómo puede formularse la frase de manera más neutral?'],['Wir könnten die Wertung weglassen.','Podríamos omitir la valoración.'],['Dann bleibt die Aussage präzise und sachlich.','Así la afirmación sigue siendo precisa y objetiva.']],
    `die Ausdrucksweise|la manera de expresarse|Die Ausdrucksweise ist angemessen.
der Sprachgebrauch|el uso de la lengua|Der Sprachgebrauch verändert sich.
die Wertung|la valoración implícita o explícita|Der Satz enthält eine Wertung.
die Nuance|el matiz|Diese Nuance ist entscheidend.
die Anspielung|la alusión|Die Anspielung bleibt unklar.
das Register|el registro lingüístico|Das Register passt zum Anlass.
formulieren|formular|Bitte formulieren Sie das genauer.
umformulieren|reformular|Wir müssen den Satz umformulieren.
andeuten|insinuar / dar a entender|Der Text deutet einen Konflikt an.
sachlich|objetivo / centrado en hechos|Bleiben wir sachlich.
angemessen|adecuado al contexto|Der Ton ist angemessen.
umgangssprachlich|coloquial|Der Ausdruck ist umgangssprachlich.`),
  make('cultura','c1-sociedad','Cultura sin simplificaciones','Analiza pertenencia, diversidad y perspectivas.',
    'Hablar de cultura con precisión implica distinguir tendencias, instituciones y experiencias individuales. Evita atribuir una característica a toda una población. Una perspectiva situada explica quién habla, desde dónde y con qué límites.',
    'Las construcciones participiales pueden condensar información: die in der Studie befragten Personen. Antes de usarlas, comprueba qué nombre modifican y si la relación queda clara. Una oración relativa puede ser más accesible: die Personen, die in der Studie befragt wurden.',
    'Alemania reúne historias regionales, trayectorias migratorias y formas de vida diversas. La curiosidad respetuosa permite aprender sin convertir diferencias en estereotipos.',
    [['Wie wird Zugehörigkeit in diesem Text dargestellt?','¿Cómo se representa la pertenencia en este texto?'],['Als etwas, das sich im Alltag aushandelt.','Como algo que se negocia en la vida cotidiana.'],['Dabei sollten unterschiedliche Perspektiven sichtbar bleiben.','Al hacerlo deberían seguir visibles distintas perspectivas.']],
    `die Zugehörigkeit|el sentimiento o condición de pertenencia|Zugehörigkeit ist vielschichtig.
die Vielfalt|la diversidad|Die Vielfalt prägt den Alltag.
die Prägung|la influencia formativa|Die kulturelle Prägung ist unterschiedlich.
die Wahrnehmung|la percepción|Die Wahrnehmung hängt vom Kontext ab.
die Zuschreibung|la atribución de características|Diese Zuschreibung ist pauschal.
die Auseinandersetzung|el análisis crítico / la confrontación|Die Auseinandersetzung mit dem Thema ist nötig.
hinterfragen|cuestionar críticamente|Wir sollten die Annahme hinterfragen.
verallgemeinern|generalizar|Das lässt sich nicht verallgemeinern.
differenzieren|distinguir con matices|Wir müssen stärker differenzieren.
vielschichtig|de múltiples capas / complejo|Das Thema ist vielschichtig.
pauschal|generalizador / indiscriminado|Die Aussage ist zu pauschal.
wechselseitig|recíproco|Die Einflüsse sind wechselseitig.`),
  make('dilemas','c1-sociedad','Decisiones con consecuencias','Sopesa intereses y reconoce tensiones.',
    'Un dilema no se resuelve solo nombrando un valor. Explica qué intereses entran en tensión, qué alternativas existen y qué consecuencias asumes. Distingue una preferencia personal de un criterio que propones para todos.',
    'Las expresiones concesivas permiten reconocer objeciones: Selbst wenn die Maßnahme wirkt, bleibt die Frage der Verhältnismäßigkeit. Selbst wenn admite una situación hipotética. Obwohl suele presentar una situación como un hecho. La elección modifica el compromiso con lo afirmado.',
    'En cuestiones sociales controvertidas, atribuye las posturas con precisión y evita presentar consenso donde hay desacuerdo.',
    [['Welche Interessen müssen gegeneinander abgewogen werden?','¿Qué intereses deben ponderarse entre sí?'],['Es geht um Sicherheit und Selbstbestimmung.','Se trata de seguridad y autodeterminación.'],['Entscheidend ist, ob der Eingriff verhältnismäßig ist.','Lo decisivo es si la intervención es proporcionada.']],
    `die Abwägung|la ponderación|Die Entscheidung erfordert eine Abwägung.
der Zielkonflikt|el conflicto entre objetivos|Hier besteht ein Zielkonflikt.
die Selbstbestimmung|la autodeterminación|Selbstbestimmung ist ein wichtiges Gut.
die Verhältnismäßigkeit|la proporcionalidad|Wir prüfen die Verhältnismäßigkeit.
der Eingriff|la intervención / injerencia|Der Eingriff muss begründet werden.
die Tragweite|el alcance de las consecuencias|Die Tragweite ist erheblich.
abwägen|sopesar / ponderar|Wir müssen die Interessen abwägen.
rechtfertigen|justificar la legitimidad|Lässt sich der Eingriff rechtfertigen?
beeinträchtigen|perjudicar / menoscabar|Das beeinträchtigt die Teilhabe.
unverhältnismäßig|desproporcionado|Der Aufwand wäre unverhältnismäßig.
vertretungsweise|en representación / sustitución|Sie entscheidet vertretungsweise.
ungeachtet|con independencia de / pese a|Das gilt ungeachtet der Herkunft.`),
  make('evidencia','c1-investigacion','Lo que los datos permiten decir','Interpreta resultados y reconoce incertidumbre.',
    'Un resultado necesita contexto: muestra, método, comparación y limitaciones. Una correlación no demuestra por sí sola causalidad. Explica qué observas y qué interpretación propones, con un grado de certeza ajustado a la evidencia.',
    'Formulaciones como Die Ergebnisse legen nahe, dass… expresan una inferencia prudente. Es lässt sich nicht ausschließen, dass… reconoce una posibilidad sin presentarla como probable. No acumules reservas hasta volver indescifrable una conclusión.',
    'Puedes entender una explicación especializada sin aceptar todas sus conclusiones. Revisa qué datos respaldan cada paso del razonamiento.',
    [['Sind die Ergebnisse auf andere Gruppen übertragbar?','¿Los resultados son extrapolables a otros grupos?'],['Das ist aufgrund der Stichprobe nur eingeschränkt möglich.','Debido a la muestra, eso solo es posible de forma limitada.'],['Dann sollte diese Unsicherheit ausdrücklich benannt werden.','Entonces esa incertidumbre debería señalarse expresamente.']],
    `die Stichprobe|la muestra de un estudio|Die Stichprobe ist klein.
der Befund|el hallazgo / resultado observado|Der Befund ist bemerkenswert.
die Korrelation|la correlación|Eine Korrelation beweist keine Ursache.
die Kausalität|la causalidad|Die Kausalität bleibt ungeklärt.
die Unsicherheit|la incertidumbre|Die Unsicherheit wird angegeben.
die Verzerrung|el sesgo / la distorsión|Die Auswahl kann eine Verzerrung erzeugen.
ableiten|deducir / derivar|Daraus lässt sich wenig ableiten.
nahelegen|sugerir como inferencia|Die Daten legen das nahe.
übertragen|extrapolar / transferir|Das lässt sich nicht direkt übertragen.
einschränken|limitar / matizar|Wir müssen die Aussage einschränken.
repräsentativ|representativo|Die Stichprobe ist nicht repräsentativ.
vorläufig|provisional|Die Ergebnisse sind vorläufig.`),
  make('sintesis','c1-investigacion','Mucho sentido en pocas palabras','Resume, conecta y conserva los matices.',
    'Una síntesis selecciona las ideas centrales y explica cómo se relacionan. No es una sucesión de citas ni una reducción mecánica. Conserva las atribuciones, los desacuerdos y las condiciones que cambian el sentido de una conclusión.',
    'Conectores como demgegenüber y folglich señalan relaciones distintas: contraste y consecuencia. Al reformular, evita cambiar puede por debe o algunos por todos. El alcance de una afirmación forma parte de su contenido.',
    'Para comprobar una síntesis, pregúntate si alguien podría distinguir la postura de cada fuente y reconocer dónde empieza tu interpretación.',
    [['Wie lassen sich die Positionen zusammenführen?','¿Cómo pueden integrarse las posturas?'],['Sie teilen das Ziel, unterscheiden sich aber im Ansatz.','Comparten el objetivo, pero difieren en el enfoque.'],['Das sollte in der Zusammenfassung deutlich werden.','Eso debería quedar claro en el resumen.']],
    `die Zusammenfassung|el resumen|Die Zusammenfassung ist präzise.
die Kernaussage|la idea central|Die Kernaussage bleibt erhalten.
der Zusammenhang|la relación / el contexto|Der Zusammenhang wird erklärt.
die Übereinstimmung|la coincidencia / concordancia|Es gibt eine teilweise Übereinstimmung.
die Abweichung|la divergencia / desviación|Die Abweichung ist erheblich.
die Gewichtung|la ponderación relativa|Die Gewichtung wird begründet.
zusammenführen|integrar / reunir|Wir führen die Ergebnisse zusammen.
herausarbeiten|poner de relieve mediante análisis|Der Text arbeitet die Unterschiede heraus.
präzisieren|precisar|Wir müssen den Begriff präzisieren.
demgegenüber|en contraposición|Demgegenüber betont sie die Risiken.
folglich|por consiguiente|Die Daten fehlen, folglich bleibt die Frage offen.
im Wesentlichen|en lo esencial|Die Aussagen stimmen im Wesentlichen überein.`),
];
