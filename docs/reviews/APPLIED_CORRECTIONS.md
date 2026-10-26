# Integración del piloto: correcciones y contexto

Fecha: 2026-10-26. Base de evidencia: los cuatro informes LEX-001-025 a LEX-076-100,
recogidos en [el piloto](README.md). No se repitieron búsquedas ni se inició otro lote de agentes.

## Resultado y límites

46 registros reciben ajustes de significado/categoría o notas de uso en `src/vocabulary-corrections.js`.
Incluyen los 38 casos con propuesta, los 6 con dudas y 2 homografías adicionales con contexto preventivo.
No son 46 entradas certificadas ni 46 errores demostrados. Las dudas no se declaran resueltas: se restringe
la práctica al sentido respaldado y se indica lo que queda pendiente. No cambia reviewStatus=pending.
Ejemplos: propiedad corrige propriedad; se elimina just inglés; morgen deja de aceptar cras;
selbst deja fuera aún temporal; meinen no practica intentar en el sentido de referirse a alguien.
Se retiran sentidos sexuales/arcaicos/especializados de la práctica de estas entradas, sin declarar que sean falsos.
Seine/Heute/Zwei/besser conservan IDs y notas que distinguen topónimo, sustantivación y comparativo;
no se ha renormalizado el recuento a lemas base certificados ni ampliado el catálogo.

## Contrato reproducible

El archivo importado permanece intacto y conserva su hash/procedencia. La capa editorial se aplica en vocabulary.js
antes de generar bloques y ejercicios; no depende de cachés locales ni de modificar manualmente el archivo generado.
Cada clave coincide exactamente con el lema del piloto. translations/definitions/pos son opcionales;
note se muestra en la ficha y en las explicaciones tras responder, sin revelar respuestas dentro de la pregunta.
Se corrigen significados visibles incluso cuando el ID se reutiliza de una lección guiada. Las lecciones guiadas
originales conservan sus propios ejemplos/sentidos; no se atribuye a estas notas una auditoría de ese material.
Los identificadores, orden, tamaños de bloques y progreso permanecen. Los logros anteriores no se recalifican:
un alumno puede querer repasar las fichas afectadas, pero no se borran rachas/repasos automáticamente.

## Registro de aplicación

| Lema | Ajuste aplicado | Contexto / pendiente |
| --- | --- | --- |
| nicht | Categoría: particle | Partícula de negación: no. No sustituye a nein como respuesta aislada. |
| zu | Nota de contexto | Uso coloquial: cerrado. Aquí no se estudia la preposición zu ni el sentido demasiado. |
| auf | Nota de contexto | Uso coloquial: abierto, referido a algo que no está cerrado. No es la preposición auf. |
| so | Significado de estudio: así / de esta manera; Matiz alemán alineado | En esta ficha se estudia la manera de hacer algo, no una condición. |
| haben | Significado de estudio: tener; Matiz alemán alineado | Aquí: posesión. Como auxiliar de un tiempo compuesto se explica por separado; no traducir siempre por tener. |
| Habe | Significado de estudio: propiedad / bienes | Sustantivo femenino para lo que se posee. No es habe, forma de haben. |
| an | Nota de contexto | Uso coloquial: encendido. No es la preposición an. |
| noch | Significado de estudio: todavía / aún; Matiz alemán alineado | Sentido temporal. La conjunción weder … noch significa ni … ni y no se trabaja en esta ficha. |
| gut | Significado de estudio: bueno; Matiz alemán alineado | Se limita al sentido adjetivo bueno; fiel queda sin corroborar y fuera de esta práctica. |
| Mal | Significado de estudio: vez; Matiz alemán alineado | En esta ficha: vez, como en una repetición. El sentido marca se deja fuera. |
| weiß | Significado de estudio: blanco; Matiz alemán alineado | Adjetivo de color. No es weiß, forma verbal de wissen. |
| werden | Significado de estudio: volverse / llegar a ser; Matiz alemán alineado | Aquí: cambio de estado. El auxiliar de futuro con infinitivo se aprende por separado. |
| wo | Significado de estudio: dónde; Matiz alemán alineado | Uso interrogativo. El relativo donde requiere su propia explicación. |
| also | Significado de estudio: por tanto / así que / entonces | Introduce una conclusión; no describe simplemente cómo se hace algo. |
| warum | Significado de estudio: por qué; Matiz alemán alineado | Pregunta por la razón. No es el sustantivo español el porqué. |
| alle | Significado de estudio: agotado; Categoría: adj | Uso coloquial referido a existencias que se han terminado. No significa todos en esta ficha. |
| über | Significado de estudio: más de | Uso cuantitativo: superar una cantidad. No se trabaja aquí la preposición espacial. |
| okay | Significado de estudio: aceptable / bien | Adjetivo coloquial referido a un estado satisfactorio; la respuesta vale es otro uso. |
| viel | Nota de contexto | Mucho: la función gramatical depende de la frase. Su clasificación detallada sigue pendiente. |
| Würde | Significado de estudio: dignidad; Matiz alemán alineado | Se conserva solo dignidad. Otras traducciones del registro quedan pendientes; no es würde verbal. |
| einfach | Significado de estudio: simple / fácil; Matiz alemán alineado | Sentido no difícil. Se retiran de esta práctica las acepciones mezcladas y la intrusión inglesa just. |
| kommen | Significado de estudio: venir / llegar; Matiz alemán alineado | Aquí se practica movimiento. Otros usos, incluido el sexual coloquial, se dejan fuera. |
| Heute | Significado de estudio: el presente / la actualidad | Sustantivo das Heute. Para decir hoy normalmente se usa el adverbio heute sin artículo. |
| ganz | Significado de estudio: intacto / entero; Matiz alemán alineado | Aquí significa que no está roto. Todo corresponde a otros usos y no es equivalente universal. |
| Frau | Significado de estudio: mujer / esposa; Matiz alemán alineado | Mujer/esposa según contexto. El tratamiento Frau + apellido se enseña por separado como señora. |
| lassen | Significado de estudio: dejar / permitir; Matiz alemán alineado | Se estudia el sentido de permitir. La construcción causativa con infinitivo queda fuera. |
| meinen | Significado de estudio: pensar / creer; Matiz alemán alineado | Se estudia expresar una opinión. Referirse a y querer decir son usos distintos; intentar no corresponde al sentido importado. |
| Seine | Significado de estudio: río Sena | Nombre propio: río de Francia. No es el posesivo seine ni vocabulario gramatical básico. |
| Zwei | Significado de estudio: el número dos | Sustantivo die Zwei para la cifra o el número. Para contar se usa zwei sin artículo. |
| genau | Significado de estudio: exacto | Uso adjetivo. Precisamente corresponde a un uso adverbial que no se practica aquí. |
| morgen | Significado de estudio: mañana | Adverbio del día siguiente. Se retira el arcaísmo español cras; no es der Morgen (la mañana). |
| ab | Significado de estudio: lejos / fuera | Sentido adverbial de alejamiento, dependiente de la construcción. La preposición desde/a partir de es otro uso. |
| Tag | Significado de estudio: día / jornada; Matiz alemán alineado | Se excluye de esta práctica la acepción histórica de asamblea, no un régimen alimenticio. |
| Liebe | Significado de estudio: amor; Matiz alemán alineado | Se conserva amor; pasión y sentidos secundarios quedan pendientes y fuera de esta práctica. |
| Geld | Significado de estudio: dinero / plata | Plata es una variante americana. Billete no se usa aquí como equivalente general de dinero. |
| besser | Nota de contexto | Comparativo de gut: mejor. No es un lema base independiente para contar vocabulario sin flexiones. |
| wieso | Matiz alemán alineado | Por qué: se usa en preguntas directas e indirectas. |
| selbst | Significado de estudio: incluso / hasta / aun | Sentido inclusivo, equivalente a sogar. Aun va sin tilde; aún temporal no corresponde a este sentido. |
| helfen | Significado de estudio: ayudar; Matiz alemán alineado | Aprende jemandem helfen: la persona ayudada va en dativo. Otros usos se dejan fuera. |
| lange | Significado de estudio: mucho tiempo / durante mucho tiempo | Adverbio de duración, no una cantidad genérica. |
| gar | Significado de estudio: cocido / hecho; Matiz alemán alineado | Sentido gastronómico. El regional finalizado sigue pendiente y no se practica; gar nicht es otra construcción. |
| recht | Significado de estudio: verdadero / auténtico; Matiz alemán alineado | Se limita al sentido de auténtico. El sentido espacial derecho sigue pendiente; tener razón requiere otra construcción. |
| Ordnung | Significado de estudio: orden; Matiz alemán alineado | Aquí: orden cotidiano. Las definiciones especializadas de taxonomía no describen este sentido. |
| einen | Nota de contexto | Verbo unir, no el artículo indefinido einen. Es un lema real, aunque poco útil como primer vocabulario. |
| Hast | Significado de estudio: prisa / apuro; Matiz alemán alineado | Sustantivo die Hast. No es hast, forma verbal de haben. |
| Nichts | Significado de estudio: la nada; Matiz alemán alineado | Sustantivo das Nichts, no el pronombre nichts. Se deja fuera el sentido despectivo referido a personas. |

## Verificación

25 pruebas aprobadas: ajustes presentes en catálogo, bloques y respuestas/explicaciones, importación sin mutación,
IDs/artículos/ejemplos conservados al reutilizar una entrada y controles previos de progreso/servidor/tema.
Build de 13 archivos públicos, incluido vocabulary-corrections.js. Capturas reales Edge escritorio oscuro
con header compacto y lección móvil clara de 375 px; no flujo CDP completo. No equivalen a aprobación lingüística.

Siguiente trabajo económico: revisar por riesgo las entradas aún pendientes, con un solo revisor y contraste
solo de dudas; conservar evidencia y no abrir una nueva revisión masiva sin acordar alcance.
