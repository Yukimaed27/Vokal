# Procedencia, licencia y reproducción de los 5000 lemas

Catálogo incorporado en 0.3.0. El propietario aceptó explícitamente un catálogo utilizable con traducciones y ejercicios,
indicando revisión lingüística pendiente. No se prometieron 5000 palabras revisadas manualmente ni un curso completo.

## Qué contiene

- Exactamente **5000 lemas de diccionario**, únicos al normalizar Unicode NFC y minúsculas alemanas.
- Una forma léxica por registro: no se generan conjugaciones, plurales o frases para inflar el contador.
- Categoría gramatical, género de los sustantivos, traducciones españolas, sentidos y definiciones alemanas de referencia.
- Frecuencia relativa del token en un corpus de subtítulos, usada para priorizar la selección.
- Todos los importados se marcan `reviewStatus: pending`.
- 25 secciones de 200 palabras; ocho bloques de 25 por sección. Cada palabra tiene reconocimiento y escritura.

El catálogo unido al material previo tiene 5184 entradas. Esa cifra incluye expresiones del curso y sentidos que no deben presentarse
como 5184 lemas simples. La meta verificable de este lote es **5000 lemas importados**, no el número de tarjetas, ejercicios o variantes.
188 registros reutilizan identificadores compatibles del material anterior para conservar sus repasos.
La unión conserva los ejemplos redactados de esas entradas; no inventa ejemplos para las demás.

## Fuente de traducciones

**Deutsch-español FreeDict+WikDict dictionary**, edición **2025.11.23**, 36 744 cabeceras declaradas.

- Publicación y mantenimiento: **Karl Bartel**.
- Proyecto: **FreeDict / WikDict**.
- Datos de origen atribuidos por el archivo: **Wiktionary.org, vía DBnary**.
- [Listado oficial](https://freedict.org/downloads/).
- [Metadatos oficiales](https://freedict.org/freedict-database.json).
- [Archivo de fuentes utilizado](https://download.freedict.org/dictionaries/deu-spa/2025.11.23/freedict-deu-spa-2025.11.23.src.tar.xz).
- Licencia declarada por el encabezado TEI: [CC BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/).

Tamaño de la descarga: 1 922 240 bytes. SHA-512 contrastado con el metadato oficial:

```text
37d5e623cf6c8ccb419d85b463953ec91577013a1737771895521f6d0fc5a5ed3e9253ae9b5e80faae1d8124d9b2c1efd65e65a3e3754289f56ea966df50b028
```

Se extrae `entry/form/orth` como lema. Solo se toman traducciones de citas TEI con `type=trans` y `xml:lang=es`.
Las definiciones `def` son alemanas: se guardan separadas y la interfaz las presenta como matices en alemán, no como traducciones españolas.
El archivo tiene sentidos múltiples; se conservan hasta tres, con hasta cuatro traducciones por sentido y dos definiciones de referencia.

## Fuente de frecuencia

**FrequencyWords**, de **Hermit Dave**, lista alemana 2018 de 50 000 tokens basada en **OpenSubtitles2018**.

- [Repositorio y licencia](https://github.com/hermitdave/FrequencyWords#license).
- [Archivo fijado al commit utilizado](https://raw.githubusercontent.com/hermitdave/FrequencyWords/072bbed282316a23651aa7068c7173aa7898cf80/content/2018/de/de_50k.txt).
- Commit: `072bbed282316a23651aa7068c7173aa7898cf80`.
- **Contenido: CC BY-SA 4.0**. La licencia MIT del código del repositorio no sustituye la licencia de sus listas.

Tamaño: 662 497 bytes. SHA-256:

```text
d9e50546fd7e8b6fe6542a2b33c51d1331092b2a3916ec09f80d97856068705b
```

La lista mide frecuencia de formas superficiales en subtítulos, no frecuencia de lemas, utilidad universal ni nivel MCER.
Se cruza con lemas existentes del diccionario; no se crean traducciones ni palabras nuevas a partir del corpus.

## Licencia de la selección adaptada

El archivo generado `src/vocabulary-data.js`, su selección y orden se distribuyen como adaptación bajo
[Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/).
Se conservan los créditos y enlaces originales de ambas fuentes. La adaptación del diccionario 3.0 usa una versión posterior
de los mismos elementos BY-SA, conforme a su cláusula de adaptaciones; la lista de frecuencia conserva BY-SA 4.0.

Modificaciones de Vokal: extracción de campos, normalización, filtros, selección de 5000 lemas, priorización por frecuencia,
conversión a módulo JavaScript y asociación con material previo. Los autores/proyectos de origen no han revisado ni avalado Vokal.
La atribución y el aviso de revisión aparecen en el catálogo y en la ruta de vocabulario, además de este documento.
No se añade mediante este aviso una licencia al resto del código del repositorio.

Al redistribuir la selección, conservar atribución, enlaces, indicación de modificaciones y licencia BY-SA 4.0.
No retirar el comentario de procedencia del archivo generado. Una futura fuente necesita su propia revisión de licencia y atribución.

## Filtros y límites de calidad

El importador conserva sustantivos, verbos, adjetivos y adverbios con traducción española no vacía y coincidencia en la lista de frecuencia.
Para sustantivos exige un género reconocido y añade su artículo en la interfaz.
Descarta afijos, abreviaturas en mayúsculas, espacios en lemas, marcas de plantilla y registros ofensivos/vulgares identificados por la fuente.
Aplica heurísticas a definiciones para excluir nombres propios/geográficos y descripciones explícitas de flexión.
También descarta nominalizaciones de partículas/pronombres que el corpus haría parecer vocabulario básico de otra categoría.

Se deduplica por lema en minúsculas sin convertir ß a ss. Si coinciden formas de distintas categorías se prefiere verbo, adjetivo,
adverbio y después sustantivo; no se suman como palabras diferentes para alcanzar el objetivo.
No se borran artículos del registro de origen para producir variantes ficticias.

Estas reglas no equivalen a revisión humana. Puede quedar polisemia, registro inadecuado, errores de clasificación o traducciones discutibles.
La frecuencia de subtítulos puede priorizar términos que no sean los más útiles para cada viajero.
Los bloques no son temarios A1–C1 validados ni diálogos únicos para las 5000 palabras.
Hay una guía y diálogo de estudio compartidos, y práctica por término; no se afirma tener 5000 frases de ejemplo completas.
No se asignó nivel MCER a los importados: su nivel interno es `LEX`, una ruta independiente.

## Reproducción

Se requiere Python 3 para regenerar el catálogo, no para ejecutar la aplicación ya compilada.
No se instala ningún paquete Python/npm. Se usan urllib, tarfile, hashlib, ElementTree y otras bibliotecas estándar.

```sh
python scripts/import-vocabulary.py
pnpm check
pnpm build
```

El script descarga las dos fuentes fijadas y comprueba los hashes antes de interpretarlas.
Los originales se cachean en el directorio temporal del sistema, fuera del repositorio.
El miembro TEI se lee en memoria sin extraer rutas del archivo tar al disco.
El único resultado versionado de la importación es `src/vocabulary-data.js`.

Si ya tienes los originales exactos:

```sh
python scripts/import-vocabulary.py --dictionary /ruta/freedict-deu-spa-2025.11.23.src.tar.xz --frequency /ruta/de_50k.txt
```

Los hashes también se verifican con archivos locales. No omitir la comprobación si falla: revisar la fuente y documentar una actualización.
La salida UTF-8 con LF es determinista para esos datos y filtros. SHA-256 generado en esta entrega: `77f90566bf008d9e34af4ce76d10caea8e50c8674cc8fe06850c00bb49e75992`. Cambiar filtros exige revisar el diff y la preservación de IDs.

## Pruebas que respaldan el lote

- 5000 lemas distintos y 5000 registros del catálogo con procedencia y revisión pendiente.
- Traducciones y sentidos no vacíos; artículos y categorías reconocidos.
- Ejemplos de correspondencia: Haus/casa, Wasser/agua, gehen/ir y Hotel/hotel.
- Nombres propios problemáticos conocidos excluidos.
- Todos los términos tienen reconocimiento y escritura en los 200 bloques.
- Ruta de vocabulario abierta sin exigir C1, con desbloqueo propio por sección.
- Restauración de 5000 repasos y tamaño inferior al límite de cuatro millones de bytes de la RPC.

Estas pruebas validan estructura, coherencia y casos conocidos; no certifican exactitud lingüística de cada traducción.

## Capa editorial posterior

El hash anterior corresponde exclusivamente al archivo importado, sin cambios en esta integración.
src/vocabulary-corrections.js aplica 46 ajustes/notas del piloto al material visible y práctica LEX.
Ver [registro y límites](reviews/APPLIED_CORRECTIONS.md). No es nueva fuente importada ni certificación humana;
se conservan atribución y revisión pendiente. Matices nuevos son paráfrasis editoriales, no copias extensas de diccionarios.

## Revisión 201–500

La capa editorial alcanza 171 registros ajustados; [registro de 300 entradas](reviews/LEX-201-500.md).
Se preserva el hash del raw. No se convierten consultas fallidas, traducciones inferidas desde fuente monolingüe
ni pruebas de estructura en certificación 100% de fidelidad. Revisión pendiente permanece en la aplicación.

## Evidencia editorial por sentido

22 sentidos se corroboran mediante dos fuentes editoriales/gramaticales según [REVIEW_POLICY](reviews/REVIEW_POLICY.md);
fuentes/alcance en [RECHECK-22](reviews/RECHECK-22.md). No se redistribuyen páginas completas de diccionarios.
El raw, su hash y su licencia permanecen intactos. La capa editorial 193 registros incluye metadatos de revisión pública,
no progreso del alumno. Sense-checked-ai no significa revisión humana ni certificación 100% de exactitud.
