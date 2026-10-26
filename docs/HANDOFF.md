# Traspaso activo

Actualizado: 2026-10-26. Aplicación: 0.3.0. Español breve en conversación; documentación técnica detallada.

## Última entrega — 2026-10-26

El propietario pidió una interfaz discreta, sin tonos pastel/coral, tarjetas cuadradas,
un botón de sol/luna y quitar protagonismo a las cifras del catálogo.
Implementado: grafito/verde pino, claro gris neutro, esquinas rectas, sin gradiente/sombras ni tarjeta decorativa.
Inicio y vocabulario usan textos breves centrados en estudiar. Se conservan contenido, IDs, progreso y avisos de revisión.
El botón reemplaza el selector: sigue inicialmente al sistema, respeta preferencias existentes y guarda cada alternancia.
Esta preferencia nueva sustituye la decisión anterior de conservar un selector único o la paleta coral.

## Verificación

22 pruebas aprobadas y build correcto; contraste matemático mínimo 4.5:1 en ambas paletas.
Pruebas del botón cubren sistema inicial, alternancia, nombre accesible, persistencia y almacenamiento bloqueado.
Capturas nativas de Edge revisadas en escritorio oscuro y móvil claro de 375 px; sin flujo CDP completo.
Las fuentes y limitaciones lingüísticas del catálogo permanecen en VOCABULARY_SOURCES.

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

Conservar IDs y claves existentes. Un único botón de tema; no restaurar selector, coral ni titulares de volumen.
El hash de esta entrega se consulta con git log, evitando referencias autorreferenciales.
