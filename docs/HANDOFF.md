# Traspaso activo

Actualizado: 2026-10-25. Aplicación: 0.3.0. Español breve en conversación; documentación técnica detallada.

## Última entrega

El propietario pidió mejorar la interfaz, quitar la redundancia entre botón y selector de tema y sustituir el guindo.
Después pidió alcanzar 5000 palabras hoy. Aceptó un catálogo utilizable con traducciones/ejercicios y revisión indicada,
no la afirmación de que estuvieran revisadas manualmente.

Hecho: carbón/rojo coral y claro neutro, un único selector automático/oscuro/claro, inicio más elaborado y progreso visible.
Hecho: 5000 lemas importados con fuente/licencia, 25 secciones de 200 palabras, 200 bloques de 25 y práctica por palabra.
El curso guiado previo se conserva. Totales: 231 lecciones, 40 secciones, 5184 entradas y 10 981 ejercicios.

El catálogo se genera desde fuentes fijadas y verificadas: leer VOCABULARY_SOURCES antes de cambiarlo.
No añadir traducciones automáticas inventadas ni presentar la importación como revisión humana o temario MCER completo.

## Verificación

22 pruebas y build correctos. Importación reproducible; hashes y volumen comprobados.
Capturas de Edge sin depuración remota: inicio oscuro/claro, vista de 375 px y ruta de vocabulario.
Anchura de marco comprobada: 375/360 y escritorio 1440/1425 (viewport/documento), sin overflow horizontal.
Control de tema, persistencia y contraste probados con Node; no se repitió el flujo CDP interactivo completo.
Las capturas y el marco temporal de QA están en .qa, ignorados por Git, no son infraestructura de producción.

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

Conservar IDs y claves existentes. No volver al botón duplicado de tema ni a la paleta guinda.
El hash de esta entrega se consulta con git log, evitando referencias autorreferenciales.
