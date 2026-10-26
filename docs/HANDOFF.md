# Traspaso activo

Actualizado: 2026-10-26. Aplicación: 0.3.0. Español breve en conversación; documentación técnica detallada.

## Última entrega — revisión 101–200, lote de un revisor

El propietario autorizó otras 100 entradas y detenerse para medir. Se revisaron 101–200 sin auxiliares,
con significado nuclear y discrepancias visibles contrastados con diccionarios editoriales; no todas las variantes.
Resultado: 64 sin incidencia nuclear detectada, 33 ajustes/notas aplicados,3 dudas (scheiße,Kerl,je).
Informe trazable: reviews/LEX-101-200.md. Total 200 entradas examinadas con alcance limitado, no 200 certificadas.
La capa src/vocabulary-corrections.js alcanza 79 registros entre ambos lotes; raw/IDs/orden/progreso no cambian.
Todas las etiquetas siguen pendientes. Ejemplos de retiro: abastanza, con aislado, total para toll, encontrar para stehen.
No se hacen cambios de interfaz. Botón final: fondo visible28px/icono16px/área táctil44px, header64px.

## Verificación y siguiente acción inmediata

26 pruebas aprobadas y build de 13 recursos. Hooks incluyen nueva regresión 101–200. Sin nueva QA visual por ser datos.
Esperar porcentaje restante del propietario antes de revisar 201–300; no iniciar otro lote automáticamente.
No comparar coste como si el alcance fuera idéntico al piloto de cuatro agentes: ahora un solo revisor y contraste nuclear.
El agente no ve el cupo. El dato93→74% corresponde al piloto anterior; falta medición de este lote.

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
Botón reducido de48 a44px, icono22→18px. Conserva etiqueta accesible, foco y alternancia; objetivo táctil44px. Cambio CSS sin lógica nueva. Pruebas existentes pasan por hooks; sin nueva captura de navegador.

Ajuste visual posterior: el propietario no percibió la reducción anterior. El botón conserva área táctil invisible de 44 px, pero el fondo visible ahora es de 28 px, sin contorno, y el icono de 16 px. Solo CSS; comportamiento y foco conservados.
