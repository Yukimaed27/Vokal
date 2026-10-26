# Contenido, conteo y ampliación

Estado: 0.3.0. La meta inmediata acordada es un catálogo utilizable de 5000 lemas con revisión pendiente explícita.

## Dos tipos de material

### Curso guiado A1–C1

Se conservan las 31 lecciones, 15 secciones y 372 entradas originales.
Tienen teoría, explicación gramatical, contexto, diálogo traducido, ejemplos y práctica de comprensión/escritura.
Las etiquetas MCER son orientativas: no equivalen a currículo completo, validación externa ni certificación.
El texto es redacción propia asistida, pendiente de revisión lingüística externa.

### Ampliación de vocabulario

5000 lemas del diccionario FreeDict/WikDict, seleccionados con una lista de frecuencia de subtítulos.
25 secciones de 200 palabras, con ocho lecciones de 25 cada una: 200 lecciones nuevas.
Cada término tiene reconocimiento y escritura, traducción al español, tipo y, para sustantivos, género/artículo.
Se conservan sentidos y definiciones alemanas, presentadas como matices del diccionario.
Las importadas llevan revisión pendiente visible. El vocabulario está en la ruta LEX, sin nivel MCER asignado.

La guía/diálogo del bloque enseña a estudiar y distinguir tipos de palabras; se reutiliza entre bloques.
No se inventaron ejemplos individuales para llegar a la cifra. Una entrada sin ejemplo no muestra un campo vacío como si fuera una frase.
Las equivalencias pueden depender del sentido: las preguntas hablan del significado trabajado en ese bloque.

## Qué se cuenta

- 5000 lemas importados, distintos por forma normalizada NFC/minúsculas; no se convierten ß/ss en una sola forma.
- 5184 entradas en la unión del catálogo y el curso, incluyendo expresiones y sentidos de material previo.
- 231 lecciones y 40 secciones totales.
- 10 981 ejercicios: no se cuentan como palabras nuevas.
- 188 IDs compatibles del curso se reutilizan para no duplicar su progreso al incorporar el diccionario.

El contador del catálogo es de entradas de aprendizaje. La cifra de lemas importados se muestra por separado.
Los artículos no son palabras nuevas y los ejercicios de una entrada no multiplican el total.
La cifra no significa que el alumno ya haya aprendido esas palabras.

La meta de 10 000 lemas útiles sigue pendiente. No completar el contador generando flexiones, repitiendo grafías o cambiando IDs.

## Desbloqueo y práctica

El curso y la ampliación son rutas independientes. La primera sección de cada ruta está abierta.
Secciones posteriores exigen las lecciones anteriores de su propia ruta; no hace falta terminar C1 para estudiar vocabulario.
Alcanzar 80 % permite completar una lección o aprobar una evaluación de sección.
La evaluación incluye una muestra de vocabulario y un concepto; no comprueba exhaustivamente las 200 palabras ni certifica nivel.
Los repasos solo incluyen entradas con evidencia de práctica y no se inventa dominio de las demás.

## Procedencia y licencia

Leer [VOCABULARY_SOURCES](VOCABULARY_SOURCES.md) para hashes, versiones, autores, filtros, límites y reproducción.
El catálogo adaptado se distribuye bajo CC BY-SA 4.0, conservando los créditos de FreeDict/WikDict y FrequencyWords/OpenSubtitles2018.
No retirar avisos de revisión/atribución. Los datos importados no han sido revisados ni avalados por sus autores para este curso.

## Modificar material

Para cambiar el curso: editar curriculum.js/content.js preservando IDs y revisar los consumidores de las preguntas.
Para regenerar el vocabulario: ejecutar scripts/import-vocabulary.py con Python estándar y fuentes verificadas.
Para cambiar tamaños de bloques/rutas: revisar vocabulary.js, unitUnlocked, vistas de ruta/sección, pruebas y conteos documentados.
No editar a mano miles de filas del archivo generado sin reflejar el cambio en el importador o en una corrección versionada reproducible.

Antes de incorporar otra fuente: verificar licencia, atribución, idioma real de los campos y proceso de filtrado.
Distinguir revisión automática estructural de revisión lingüística por una persona.
Los tests detectan forma, IDs, cobertura y casos conocidos, no toda la semántica de 5000 traducciones.

## Próximas mejoras

Revisión por lotes, respuestas alternativas, uso contextual, género/plural más detallados y tareas con menos traducción literal.
Después: audio, pronunciación, escritura extensa y evaluación de todas las competencias de cada nivel.
No introducir dependencia de una IA de pago para utilizar el catálogo básico.

## Piloto de revisión lingüística
Las primeras100 entradas fueron auditadas por IA en cuatro bloques de 25; ver [informes](reviews/README.md).
No se han integrado propuestas ni validado paradigmas completos. Las etiquetas de revisión pendiente permanecen.

## Ajustes editoriales aplicados

46 registros del piloto reciben correcciones o notas de contexto; [registro](reviews/APPLIED_CORRECTIONS.md).
La práctica se limita a sentidos respaldados donde había mezcla/duda. No declarar las 6 dudas resueltas ni 46 aprobaciones.
No cambian IDs, tamaños ni archivo importado. Lecciones LEX y catálogo usan ajustes; guiadas originales conservan sus sentidos.
Las notas acompañan fichas y feedback; etiquetas pendientes conservadas. No hay nuevas entradas ni validación humana.

## Lote 101–200

Contraste nuclear por un solo revisor: 64 sin incidencia nuclear detectada, 33 ajustes aplicados, 3 dudas.
[Cien filas y fuentes](reviews/LEX-101-200.md). La capa editorial acumula 79 registros; todas las etiquetas pendientes.
No se auditan todas las variantes ni conjugaciones. Las4800 entradas restantes no se presentan como contrastadas.

## Lote 201–500

[300 filas con fuentes y alcance](reviews/LEX-201-500.md). Se inspeccionaron campos y se contrastaron sentidos/incidencias,
sin validar todas las variantes o paradigmas ni garantizar100% de exactitud.92 ajustes/notas aplicados,
186 sin incidencia en contraste puntual, 21 contrastes parciales, 1 duda (absolut). Total 500 examinadas; 4500 por contrastar.
La capa editorial 171 registros conserva IDs/progreso/importación y todas las etiquetas pendientes.
Se corrigen artículo/género de Alter para edad y se acota das Teil a pieza. Sus ejemplos heredados se retiran.
No declarar los 500 examinados ni los 171 ajustados como vocabulario aprobado completamente o lemas base certificados.
