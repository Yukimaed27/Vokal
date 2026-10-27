# Traspaso activo

Actualizado: 2026-10-27. Aplicación: 0.3.0. Español breve; contexto técnico en Markdown.

## Tarea vigente y coordinación

El propietario reanuda con Codex y OpenCode para llegar a 1000 fichas contrastadas y preparar producción.
La coordinación compartida se realiza en comunicacion.md de la carpeta principal Vokal.
OpenCode asumió 1–500; Codex 501–1000. No sobrescribir cambios ajenos.
Esta entrega de Codex está en review/codex-501-1000, worktree hermano Vokal-codex-review.
Al integrar, conservar la retirada visual que hizo OpenCode en app.js y su prueba; no restaurar la frase anterior.
En esta rama app.js no se editó: esa retirada existe en el trabajo local de OpenCode, no en esta base aislada.

## Resultado del tramo 501–1000

[Informe de 500 filas y fuentes](reviews/LEX-501-1000.md). 497 sentidos cumplen REVIEW_POLICY; 3 pendientes: zerstört, Hau, Mister.
519 sentidos contrastados en esta rama (22 anteriores + 497), 4481 pendientes. Actualizar al integrar el tramo de OpenCode.
1000 posiciones examinadas acumuladas históricamente NO significan 1000 aprobadas ni 1000 lemas básicos distintos.
Capa editorial de 693 registros; no se añadieron palabras al archivo importado.
Se selecciona un sentido por ficha, se corrigen homografías/género y se retiran traducciones, definiciones y ejemplos no acotados.
Raw conserva SHA256 77f90566bf008d9e34af4ce76d10caea8e50c8674cc8fe06850c00bb49e75992.
IDs, orden, progreso y 10981 preguntas conservados; total 5184 fichas/231 lecciones/40 secciones.
No se certifican pronunciación, todos los sentidos, conjugaciones completas o nivel MCER.

## Implementación y comprobación

src/vocabulary-review-501-1000.js contiene 500 filas y exporta vocabularyReview5011000, mezclado al final de la capa editorial.
497 filas tienen review con fecha, fuentes y humanReviewed=false; 3 mantienen pending. Fuentes recuperadas y contrastadas, no URLs inventadas.
Categorías nuevas: part/num/conj/prep. Nombres de uso sin artículo conservan su forma; las preguntas de artículo los excluyen.
Loch se acota a das Loch/agujero; Tor a das Tor/gol; See a die See/mar; Band a der Band/tomo.
Se presentan sich freuen/sich verhalten para sus sentidos reflexivos. El ID antiguo se conserva.
Tests históricos mantienen sus 22 como subconjunto en vez de impedir futuras revisiones legítimas.
36 pruebas locales aprobadas y build de 14 recursos correcto. Sin dependencias nuevas; hooks existentes ejecutan la suite.
No se repitió un recorrido completo de navegador ni se validó un servicio remoto autenticado durante este lote.

## Siguiente acción concreta

1. Leer la última respuesta de OpenCode en comunicacion.md y conservar su trabajo 1–500/UI.
2. Integrar esta rama: módulo, import/spread final, whitelist, categorías, tests y contexto; resolver conteos del estado real combinado.
3. Ejecutar pnpm check y pnpm build combinados; registrar commit/push real. No afirmar CI sin comprobarlo.
4. Completar los 3 pendientes del lote y los casos de 1–500 sin REVIEW_POLICY. No marcar 1000 por alcanzar una cifra.
5. Antes de producción, implementar/verificar OAuth GitHub, sesión, guardado, RLS de dos cuentas y sincronización real.

## Continuidad general

Supabase público configurado; SQL aplicado según el propietario. API anónima rechaza tabla/RPC; GitHub habilitado.
Falta botón/flujo OAuth y verificar sesión/guardado/aislamiento/sincronización. Sin despliegue confirmado.
No pedir secretos/OTP ni repetir SQL sin revisar; no contratar SMTP/Pro. Sin cuenta funcional el progreso es local.
No detener el servidor del propietario en 3000. Solo cerrar servidores de QA propios.
Al clonar en Windows/Linux: seguir OPERATIONS y pnpm prepare. La configuración Git de hooks no viaja.
Cachés .qa no viajan y no son necesarias: evidencia útil en el informe versionado.
No modificar paleta/header/botón de tema; conservar diseño acordado y claves de progreso.
Consultar STATUS, WORKFLOW y el índice de docs. Los hooks ejecutan pruebas; no redactan contexto ni verifican semántica.
