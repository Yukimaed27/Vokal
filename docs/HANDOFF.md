# Traspaso activo

Actualizado: 2026-10-26. Aplicación: 0.3.0. Español breve en conversación; documentación técnica detallada.

## Última entrega — 2026-10-26, segunda revisión visual

El propietario rechazó verde pino/esquinas rígidas: pide negro, acentos suaves inspirados en negro/rojo/amarillo,
modo claro descansado y tarjetas sin contorno, con redondeo ligero. Esta decisión sustituye la revisión anterior.
Implementado: oscuro negro neutro con rosa apagado/amarillo mantequilla; claro piedra sin blanco puro.
Tarjetas sin bordes, radio 12 px; controles conservan foco y campos delimitados. Se mantienen botón sol/luna,
textos discretos, contenido y progreso. Causa del contraste brusco anterior: hero y botones tenían colores oscuros
heredados en ambos modos. Ahora cada paleta define sus cinco tokens hero y sus botones.

## Verificación

23 pruebas aprobadas y build correcto. Contraste de texto, tarjeta principal, botones y acentos >=4.5:1.
Nueva comprobación exige que todos los tokens hero existan en cada paleta y que sus fondos difieran.
Capturas nativas de Edge revisadas en escritorio claro/oscuro y móvil oscuro de 375 px, sin CDP completo.
Hooks pre-commit/pre-push siguen ejecutando pnpm check y recogen automáticamente las 23 pruebas;
core.hooksPath=.githooks comprobado. No generan documentación por sí solos.
Las fuentes y limitaciones lingüísticas permanecen en VOCABULARY_SOURCES.

## Continuidad técnica

- Revisar con el propietario el resultado de diseño y la experiencia de los bloques.
- Reiniciar pnpm dev después de actualizar: la lista de recursos públicos añade vocabulary.js y vocabulary-data.js.
- Implementar GitHub OAuth: el proveedor Supabase ya está habilitado, pero Vokal todavía no tiene el botón/flujo.
- Verificar después sesión real, guardado, RLS con dos cuentas y sincronización entre dispositivos.
- No repetir la migración SQL ya aplicada sin revisar políticas. No pedir Client Secret ni OTP en el chat.
- No contratar SMTP ni Pro: se eligió GitHub para evitar la restricción de plantillas de Free nuevo.

El propietario puede estar ejecutando su servidor en 3000; no detenerlo. Los servidores de QA del agente se cierran al finalizar.
No hay una publicación confirmada. Código/contexto viajan por Git; progreso privado no se guarda en Git.

## Lectura bajo demanda

- STATUS: snapshot vigente y límites.
- ARCHITECTURE: rutas, datos, mezcla de progreso y dos rutas de desbloqueo.
- CONTENT y VOCABULARY_SOURCES: material, conteos, procedencia, licencia e importador.
- OPERATIONS: Windows/Linux, build y comprobaciones.
- CLOUD: estado de acceso y preparación de Supabase.
- WORKFLOW/AGENTS: obligación de mantener contexto técnico relevante, sin bitácora de clics.

Conservar IDs y claves existentes. Un único botón de tema; sin selector ni titulares de volumen. No restaurar verde pino, contornos de tarjetas o hero oscuro fijo en modo claro.
El hash de esta entrega se consulta con git log, evitando referencias autorreferenciales.
