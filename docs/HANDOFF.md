# Traspaso activo

Actualizado: 2026-10-26. Aplicación: 0.3.0. Español breve en conversación; documentación técnica detallada.

## Última entrega — revisión 201–500

El propietario autorizó 300 entradas y pidió máxima fiabilidad y contexto para otro dispositivo.
Un revisor, sin subagentes: inspección de campos de 201–500 y contraste de sentidos/incidencias con fuentes editoriales.
Se completó el lote, pero NO se garantiza100% de exactitud ni se valida todo paradigma/variante. Todas las etiquetas pendientes.
Resultado: 92 registros con ajustes/notas aplicados; 186 sin incidencia en contraste puntual; 21 con contraste parcial;
1 duda de fuente (absolut). Fuentes monolingües implican interpretación española, expresamente señalada.
Informe de 300 filas: reviews/LEX-201-500.md. Total 500 examinadas con alcances documentados; 4500 sin este contraste individual.
Capa editorial 171 registros en total. Importación/IDs/orden/progreso conservados. No se recalificaron logros.
Alter se limita a edad con das Alter/género neutro; Teil a pieza con das Teil. Ejemplos heredados de esos dos se retiran.
La capa admite de/gender/example y content.js respeta esas correcciones en catálogo además de bloques/feedback.
Sin cambios visuales ni nuevas dependencias.

## Validación y siguiente paso

30 pruebas y build de 13 recursos correctos. Nuevo control de 300 filas/índices/lemmas/fuentes documentales;
regresión de artículos/género/respuestas y fragmentos/plantillas. Hooks pre-commit/pre-push ejecutan pnpm check:
recogen esos controles, pero NO escriben documentos ni certifican calidad lingüística.
core.hooksPath=.githooks verificado. Al clonar en otra laptop, ejecutar pnpm prepare (ver OPERATIONS) y pnpm check.
Sin nueva captura visual: esta entrega cambia datos y propagación de campos, no CSS.

Detenerse tras el lote por instrucción del propietario. Esperar lectura actual de cupo; referencia anterior 59%,
no lectura del agente ni garantía de que fuera el valor exacto al comenzar. Próximo índice 501, no repetir 201–500.
Primero resolver absolut/contrastes parciales si se busca mayor profundidad. No iniciar otro lote sin nueva instrucción.
Leer reviews/LEX-201-500 y ARCHITECTURE antes de modificar correcciones. Los informes previos son históricos.

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

## Ajuste posterior: botón de tema
Botón reducido de 48 a 44px, icono22→18px. Conserva etiqueta accesible, foco y alternancia; objetivo táctil44px. Cambio CSS sin lógica nueva. Pruebas existentes pasan por hooks; sin nueva captura de navegador.

Ajuste visual posterior: el propietario no percibió la reducción anterior. El botón conserva área táctil invisible de 44 px, pero el fondo visible ahora es de 28 px, sin contorno, y el icono de 16 px. Solo CSS; comportamiento y foco conservados.
