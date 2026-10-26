# Muestra de revisión lingüística — primeras 100 entradas

Estado histórico del piloto: 2026-10-26.

Actualización posterior: [integración de 46 ajustes/notas](APPLIED_CORRECTIONS.md). Las afirmaciones de propuestas
no aplicadas de los informes describen la auditoría inicial, antes de esa integración.
 Base auditada: b43562e, `dictionaryEntries` en `src/vocabulary-data.js`.
El propietario autorizó 100 palabras con cuatro agentes para medir consumo antes de decidir si amplía la revisión.

## Reparto y alcance

Cuatro participantes en total: tres auxiliares y el coordinador, 25 entradas distintas por participante.
No son cuatro revisiones independientes de cada palabra ni un consenso de cuatro sobre las 100.
Se revisan traducciones/sentidos, categoría, género cuando procede y adecuación de los datos disponibles.
Se contrastan fuentes editoriales enlazadas por fila. No se verifican paradigmas completos de conjugación,
pronunciación ni ejemplos inexistentes. Revisión asistida por IA, no certificación de un docente/nativo.

- [001–025](LEX-001-025.md): primer auxiliar.
- [026–050](LEX-026-050.md): segundo auxiliar.
- [051–075](LEX-051-075.md): tercer auxiliar.
- [076–100](LEX-076-100.md): coordinador.

## Resultado agregado

100 entradas auditadas: **56 sin incidencia detectada, 38 con corrección propuesta y 6 dudas**.
Las 38 propuestas no son 38 traducciones falsas: incluyen registro, contexto, categoría y selección pedagógica.
Cobertura comprobada: índices 1–100 una vez cada uno y lemas coincidentes con el archivo de origen.

## Interpretación

«Sin incidencia detectada» no significa certeza ni que se hayan contrastado todas las acepciones secundarias.
«Corrección propuesta» incluye errores, desalineaciones y mejoras pedagógicas: no contar todo como traducción falsa.
«Duda» indica corroboración insuficiente, pendiente de resolver. Cada fila precisa el alcance real.
Los informes registran propuestas; datos, ejercicios y etiquetas de la aplicación permanecen sin cambios.
No modificar el archivo generado directamente: una integración posterior debe ser reproducible, preservar IDs,
resolver contradicciones, actualizar los ejercicios afectados y comprobar que no reaparezcan al regenerar.

## Medición de consumo

El propietario informó 93 % restante antes del lote. No tenemos acceso a su medidor ni consumo facturado.
Esperar su lectura posterior antes de estimar. No inventar tokens ni porcentajes desde el número de agentes.
Si tras el lote queda R %, el descenso observado es 93−R puntos porcentuales.
Multiplicar ese descenso por 49 solo da una extrapolación lineal muy aproximada para las 4900 entradas restantes;
no es presupuesto garantizado: hay redondeo, contexto compartido, integración documental y dificultad variable.
Esta muestra de primeras entradas por frecuencia no es aleatoria; no extrapolar su tasa de errores al catálogo entero.
No iniciar otro lote hasta nueva instrucción del propietario.

## Continuación autorizada: 101–200

[Lote de un revisor](LEX-101-200.md): 64 sin incidencia nuclear detectada, 33 ajustes/notas aplicados, 3 dudas.
Total 200 examinadas con alcances limitados; 79 registros ajustados. No 200 certificadas ni variantes exhaustivamente revisadas.
Se detiene al acabar el lote por instrucción del propietario para medir consumo. Próximo índice 201.

## Lote 201–500 completado

[Informe de 300 filas](LEX-201-500.md): 92 registros ajustados, 186 sin incidencia puntual, 21 contrastes parciales, 1 duda fuente.
500 entradas examinadas en total con los límites descritos, no 500 aprobadas.171 registros con ajustes/notas en la app.
Dudas anteriores permanecen abiertas. Detenerse para medir; próxima entrada 501. No afirmar100% de exactitud.

## Estado vigente: contraste por sentido

El propietario elige fuentes contrastadas sin revisión humana obligatoria: [política](REVIEW_POLICY.md).
[Recontraste de 22 casos](RECHECK-22.md): 22 sentidos con dos fuentes, fecha y distintivo IA sin revisión humana.
193 registros con ajustes; 500 examinados históricamente. No522 ni 500 aprobados. Otros4978 importados siguen pendientes.
Los informes anteriores conservan su estado histórico; este documento y HANDOFF/STATUS apuntan a la actualización vigente.
