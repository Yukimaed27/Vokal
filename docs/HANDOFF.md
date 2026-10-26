# Traspaso activo

Actualizado: 2026-10-26. Aplicación: 0.3.0. Español breve en conversación; documentación técnica detallada.

## Última entrega — fiabilidad del vocabulario y header compacto

Prioridad del propietario: fiabilidad del vocabulario sin otro gasto masivo de tokens; header demasiado espaciado.
Se integra evidencia ya documentada del piloto sin subagentes ni nuevas búsquedas.46 registros reciben ajustes
conservadores de sentido/categoría/contexto; no 46 aprobaciones lingüísticas. Ver reviews/APPLIED_CORRECTIONS.md.
Nueva capa src/vocabulary-corrections.js: no modificar el archivo importado. Se aplica al catálogo y a bloques LEX;
las notas de uso se muestran en fichas y explicaciones de ejercicios. Todas las etiquetas siguen pendientes.
Se mantienen IDs/orden/progreso y no se recalifican logros. Besser sigue identificado como comparativo, Seine como río;
no se ha renormalizado el catálogo a lemas base certificados ni ampliado la muestra auditada.
Header escritorio 64 px (antes 88), padding vertical8px, espacio superior del contenido28px (antes 44).

## Verificación y continuidad inmediata

25 pruebas y build de 13 recursos correctos; nuevo recurso público vocabulary-corrections.js.
Hooks existentes ejecutan esas pruebas automáticamente. Capturas Edge escritorio oscuro y lección móvil clara de 375 px;
no CDP completo ni auditoría humana. Reiniciar pnpm dev si el servidor ya estaba abierto para cargar el nuevo módulo.
Siguiente paso: practicar las entradas ajustadas y priorizar futuros lotes por riesgo. No prometer que el resto esté validado.
El propietario reportó93→74% en el piloto; es referencia histórica de su medidor, no consumo calculable por el agente.

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
