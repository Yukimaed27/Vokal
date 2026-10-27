# Estado para retomar

Fecha: 2026-10-27. Versión: 0.3.0. Snapshot de review/codex-501-1000 antes de integrar OpenCode.

## Vocabulario

- 5000 registros importados; no todos son lemas básicos: hay homógrafos, participios, ordinales y nombres propios.
- 1000 posiciones examinadas acumuladas: 1–500 históricas y 501–1000 actuales. No duplicar los 22 recontrastes.
- 519 sentidos contrastados en esta rama: 22 anteriores + 497 nuevos; 4481 pendientes. No 1000 aprobados.
- 693 registros con curación editorial. Importación/orden/IDs/progreso conservados.
- Tramo 501–1000: 500 examinadas, 497 con evidencia suficiente, 3 pendientes (zerstört, Hau, Mister).
- [Fuentes por fila](reviews/LEX-501-1000.md); [criterio](reviews/REVIEW_POLICY.md).
- Fuentes bilingües Langenscheidt/PONS y gramaticales Duden. Sin atribuir validación humana ni certeza 100%.
- Se acotan traducciones, categoría/artículo y usos reflexivos; no se certifican ejemplos o paradigmas completos.

## Aplicación y controles

5184 fichas al combinar catálogo/curso, 231 lecciones, 40 secciones y 10981 ejercicios.
Módulo editorial separado, incluido en los 14 recursos públicos del build.
Etiquetas de participio/numeral/conjunción/preposición; nombres sin artículo excluidos de preguntas de artículo.
36 pruebas locales aprobadas y build correcto. Hooks recogen los tests; no verifican lingüística ni escriben documentos.
Sin dependencias nuevas ni cambio visual. No se repitió un recorrido completo de navegador durante el lote.

OpenCode confirmó retirada del texto visual solicitado y 33 pruebas en su carpeta principal; Codex conservó esos cambios.
Su revisión 1–500 y la integración se coordinan mediante comunicacion.md. No contar trabajo declarado como integrado antes de verificarlo.
Los snapshots deben actualizarse con los conteos combinados al integrar.

## Producción: pendiente

Supabase con configuración pública y migración aplicada según el propietario; API anónima rechaza tabla/RPC.
GitHub habilitado, pero faltan botón/flujo OAuth y pruebas reales de sesión, guardado, RLS entre cuentas y sincronización.
Sin cuenta funcional el progreso permanece local. Sin despliegue confirmado ni curso completo B2/C1.
La revisión léxica no sustituye esos recorridos. No publicar ni contratar planes por inferencia.

## Próximo paso

Integrar con OpenCode sin pisar 1–500/UI; verificar el resultado y subir código/contexto a GitHub.
Resolver los pendientes hasta alcanzar 1000 realmente contrastados y cerrar los requisitos de producción.
