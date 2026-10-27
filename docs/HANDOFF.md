# Traspaso activo

Actualizado: 2026-10-27. Vokal0.3.0. Español breve; documentación técnica en Markdown.

## Tarea activa: cuenta y sincronización

Último ajuste: account-actions usa align-items:center; evita estirar «Sincronizar ahora» por márgenes de Cerrar sesión.
Edge con fixture de clases reales/CSS vigente: los tres botones miden48px de alto;42 pruebas correctas.
QA6081 cerrada. No se tocó3000. Usuario confirma acceso GitHub y mensaje «Guardado en la nube»;
confirmación del propietario, no verificación independiente del agente. Falta recuperación en otro equipo y RLS entre cuentas.
Uso acordado por ahora: pnpm dev en cada PC; despliegue pospuesto. No pedir repetir el primer acceso ya confirmado.

El propietario aceptó continuar con cuenta, sincronización y preparación de publicación.
Botón GitHub y OAuth PKCE S256 implementados en cloud.js/app.js, sin dependencias nuevas.
Retorno a #cuenta, limpieza inmediata del código de la URL, carga de caché propia y sincronización inicial.
No se importa invitado automáticamente. El verificador temporal está aislado por pestaña; no se guardan tokens GitHub.
También se corrige la carrera de cierre durante renovación: no puede reaparecer la sesión cerrada.
42 pruebas locales y build15; Edge renderiza el botón, sin formulario OTP, y rechaza callback sin verificador.
API real: HTTP200/external.github=true. No autorización real, escritura autenticada ni RLS con dos cuentas verificadas.
QA6080 cerrada; servidor3000 intacto. GitHub CLI no está disponible; no hay conector GitHub de administración.
No se ejecutó workflow ni se publicó. No hay Docker añadido: consulta del propietario, recomendado opcional más adelante.

Siguiente acción del propietario: importar invitado si lo desea y comprobar recuperación en otro navegador o PC con la misma cuenta.
Consultar CLOUD para distinguir esa URL del callback GitHub hacia Supabase. Nunca pedir secretos ni tokens.
Después comprobar guardado real, dos dispositivos, dos cuentas y desconexión; luego publicación manual con la guía.
El nuevo trabajo sustituye el pendiente antiguo de implementar OAuth; siguen vigentes los resultados léxicos inferiores.

## Resultado léxico

Meta de1000 sentidos contrastados integrada y comprobada en main. Push de6bd2312 confirmado; consultar Git para el último cierre documental.
Se examinaron1005 posiciones:498 contrastadas en1–500 (incluye22 previas),497 en501–1000 y5 adicionales1001–1005.
Total1000 contrastadas,4000 pendientes:5 examinadas con evidencia insuficiente y3995 sin examen individual.
Pendientes explícitos:scheiße/getötet/zerstört/Hau/Mister. No se aprobaron para ajustar la cifra.
Nuevos contrastes de esta sesión:978, no1000; los22 previos conservan fuentes/fecha/sentido.
No significa1000 lemas básicos distintos: hay sustantivaciones, nombres propios, participios y ordinales.

## Archivos efectivos y evidencia

- [Recontraste1–500 y complemento5](reviews/RECHECK-001-500.md):505 filas, incluidas las22 anteriores.
- [Lote501–1000](reviews/LEX-501-1000.md):500 filas,497C/3P.
- src/vocabulary-review-001-500.js:478 ajustes/estados del tramo inicial +5 complementos; no sobrescribe las22 anteriores.
- src/vocabulary-review-501-1000.js:500 ajustes/estados;497 con review.
- Ambos se mezclan al final de vocabulary-corrections.js. Editar el módulo efectivo, no un literal base que queda sobrescrito.
- humanReviewed=false siempre; no se certifican otras acepciones, ejemplos, pronunciación, paradigmas completos ni MCER.
- Se conservan IDs/progreso/orden/raw. Hash raw77f90566bf008d9e34af4ce76d10caea8e50c8674cc8fe06850c00bb49e75992.

Las notas delimitan sentidos y registros. Se retiran definiciones/ejemplos no acotados de las fichas actualizadas.
POS incluye part/num/conj/prep/pron. Nombres usuales sin artículo se excluyen de preguntas de artículo.
Los sentidos reflexivos muestran sich cuando corresponde, manteniendo el ID original.

## Verificación y coordinación

37 pruebas locales y build de15 recursos correctos. Sin dependencias nuevas.
Total5184 fichas/231 lecciones/40 secciones/10981 ejercicios, sin cambios de cantidad o progreso.
Smoke real Edge headless: catálogo renderizado y módulos cargados. No recorrido completo de todos los ejercicios ni nube.
Hooks existentes ejecutan pnpm check; no escriben contexto ni consultan fuentes. Al clonar ejecutar pnpm prepare.

OpenCode retiró la frase visual solicitada en app.js y su aserción. Codex conserva ese trabajo y documenta la integración.
Coordinación en comunicacion.md de Vokal; Codex usó worktree Vokal-codex-review, rama review/codex-501-1000.
El archivo no despierta automáticamente otro agente. Durante el cierre apareció el contraste de gut de OpenCode: se conservó en ab6de75 y coincidió con la evidencia del complemento, sin doble conteo.
No sobrescribir avances nuevos de OpenCode si aparecen. Los informes históricos y SESSION_LOG se conservan.

## Siguiente paso

1. Comprobar último commit/push de main al abrir otra sesión; retirada visual y suite combinada ya comprobadas localmente.
2. Mantener la política por sentido al revisar siguientes lotes o resolver las5 dudas; siguiente posición nueva1006.
3. Para producción: verificar GitHub OAuth ya implementado y probar sesión, guardado, RLS con dos cuentas y sincronización real.

Supabase público configurado, SQL aplicado según el propietario; API anónima rechaza tabla/RPC y proveedor GitHub habilitado.
Eso no verifica el flujo de usuario ni multidispositivo. No hay despliegue confirmado. Sin cuenta funcional el progreso es local.
No pedir secretos/OTP, repetir SQL sin revisar, contratar SMTP/Pro ni publicar por inferencia.
No detener servidor del propietario en3000 ni modificar diseño/tema/header durante este trabajo.
Cachés .qa no viajan ni son necesarias: fuentes/decisiones útiles en informes versionados. Consultar STATUS y WORKFLOW.
