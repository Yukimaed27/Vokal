# Muestra de revisión lingüística — primeras 100 entradas

Fecha: 2026-10-26. Base auditada: b43562e, `dictionaryEntries` en `src/vocabulary-data.js`.
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
