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

## Criterio vigente de contraste

El propietario eligió revisión por fuentes, marcando ausencia de revisión humana. Ver [política](reviews/REVIEW_POLICY.md).
[22 sentidos recontrastados](reviews/RECHECK-22.md) tienen estado sense-checked-ai, dos fuentes y fecha;
4978 registros importados siguen pendientes. Capa 193 registros ajustados; 500 examinados históricamente, no 522.
Se limita significado/categoría/artículo y se excluyen ejemplos no comprobados. No aprueba todas las acepciones ni una lección entera.
Los conteos de «todos pendientes» de entregas anteriores son históricos. No convertir este estado en certificación 100% ni revisión humana.

## Estado posterior — revisión501–1000 (2026-10-27)

[Informe de500 filas](reviews/LEX-501-1000.md):497 sentidos contrastados y3 pendientes (zerstört/Hau/Mister).
En la rama Codex se acumulan1000 posiciones examinadas y519 sentidos contrastados, no1000 aprobados.
Hay693 registros editoriales; raw de5000 y sus hashes intactos. Los participios, ordinales y nombres propios no se cuentan como nuevos lemas básicos.
Se selecciona un sentido y categoría por ficha, se distingue el artículo del homógrafo y se retiran variantes/ejemplos sin corroboración.
Sin cambios de IDs, progreso,231 lecciones,40 secciones,5184 fichas combinadas o10981 ejercicios.
Los valores anteriores son históricos; los conteos finales tras combinar1–500 de OpenCode deben leerse en STATUS.

## Meta1000 alcanzada — actualización posterior del2026-10-27

1000 sentidos contrastados entre1005 posiciones examinadas:498 de1–500,497 de501–1000 y5 de1001–1005.
Los498 incluyen22 anteriores. Cinco dudas permanecen sin aprobar, y3995 registros no tienen examen individual;4000 pendientes totales.
Evidencia adicional en reviews/RECHECK-001-500.md. Los módulos conservan raw/IDs/progreso; no se crean lemas básicos artificiales.
Esta cifra no certifica todos los sentidos, paradigmas ni niveles MCER. Los conteos anteriores son históricos.

## Auditoría A1 — 2026-10-27

Codex revisa4 lecciones existentes (48 fichas/14 turnos), amplía gramática y añade12 preguntas específicas.
Separación Entschuldigung como sustantivo/fórmula, Uhr/Stunde y formas que aparecen en las frases de estudio.
Las lecciones tienen30/30/30/28 ejercicios,118 en conjunto. Total10993; fichas5184/lecciones231/secciones40 sin cambios.
Revisión documentada en reviews/A1-CODEX.md; no modifica estados1000/4000 del catálogo ni acredita A1 completo.
OpenCode tiene3 lecciones/36 fichas asignadas y entregó solo resumen preliminar a la fecha de este registro.

## Cierre de auditoría del A1 existente — 2026-10-27

Revisadas las7 lecciones actuales:84 fichas y23 turnos,202 ejercicios finales.
Codex añade9 preguntas a las3 restantes (28 por lección); ciclo completo21 nuevas. Total aplicación11002 ejercicios.
Se amplían casos de artículos/preposiciones, destino/ubicación, plurales y separables, conservando fichas e IDs.
Informes A1-CODEX.md/A1-CIERRE.md: fuentes, usos enseñados y límites. Catálogo1000/4000 sin promoción automática.
El informe fuente de OpenCode no llegó: Codex completó el contraste, sin dejar una dependencia pendiente para este cierre.
Próximo alcance: ampliar currículo y tareas de cuatro destrezas; estas7 lecciones no completan todo A1.
