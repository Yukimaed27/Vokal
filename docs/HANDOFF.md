# Traspaso activo

Actualizado: 2026-10-26. Aplicación: 0.3.0. Español breve en conversación; documentación técnica detallada.

## Última entrega — piloto de revisión lingüística

El propietario autorizó revisar 100 entradas con cuatro agentes para medir consumo, partiendo de 93 % restante.
Tres auxiliares y coordinador revisaron 25 entradas distintas cada uno, no cuatro revisiones de cada palabra.
Informes y fuentes por entrada en reviews/README.md y sus cuatro lotes. Revisión IA, no validación humana.
Se documentan errores, propuestas pedagógicas y dudas. No se aplicaron correcciones al catálogo ni se retiraron etiquetas.
La interfaz de la entrega anterior se conserva (negro/rosa/amarillo suave, claro piedra, tarjetas sin contorno).

## Siguiente acción inmediata

Esperar porcentaje restante del propietario; estimar el coste de ampliar con cautela (medidor no disponible al agente).
No iniciar otro lote automáticamente. Antes de integrar propuestas: resolver dudas, crear correcciones reproducibles
sin romper IDs/progreso y probar ejercicios afectados. Ver reviews/README.md para alcance, límites y medición.

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
