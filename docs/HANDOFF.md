# Traspaso activo

Actualizado: 2026-10-26. Aplicación: 0.3.0. Español breve en conversación; documentación técnica detallada.

## Última entrega — criterio de máxima fiabilidad por sentido

El propietario prioriza fiabilidad y eligió «fuentes contrastadas; marcar que no hay revisión humana».
Criterio vigente: reviews/REVIEW_POLICY.md. Se recontrastan las 21 filas parciales y absolut del lote 201–500;
NO es un nuevo lote, el total examinado sigue500, no 522. Evidencia y fuentes: reviews/RECHECK-22.md.
22 sentidos delimitados cumplen contraste bilingüe + categoría/artículo, dos familias editoriales por ficha.
Estado sense-checked-ai con review.date/sources/humanReviewed=false. Otros4978 importados siguen pending.
171 ajustes anteriores +22=193 registros en capa editorial. Ninguno tiene validación humana ni certeza 100%.
Se excluyen variantes no corroboradas y ejemplos no comprobados de estas22 fichas. No se aprueban otros sentidos/paradigmas.
Absolut quedó corroborado mediante extracto indexado Larousse y Netzverb; no afirmar apertura íntegra de Larousse.
Tat se distingue de tat verbal; General se corrobora en la dirección español→alemán; todo queda trazado.

## Código y verificación

vocabulary.js deriva estado desde la evidencia de la capa; content.js conserva review.
wordCard solo muestra distintivo/fuentes cuando de/es coincide; otro sentido continúa pendiente.
Aviso visible «IA, sin revisión humana» y límites desplegables. No confundir word.review con state.reviews del repaso privado.
Lecciones completas mixtas siguen pendientes. IDs/importación/orden/progreso intactos; no se recalifican logros.
33 pruebas y build de 13 recursos correctos. Hooks recogen controles de metadatos, conjunto exacto, render y22 filas documentales.
Captura Edge real de 375 px clara con ficha absolut/distintivo/fuentes; ancho documental 360px, sin desbordamiento.
No recorrido CDP completo ni revisión humana. Servidor QA cerrado al finalizar; no detener servidor del propietario.

## Siguiente acción

Para máxima fiabilidad, aplicar REVIEW_POLICY a sentidos ya examinados aún pendientes y resolver dudas históricas;
no saltar directamente a presentar los 500 como aprobados. Próximo rango nuevo sería501 en adelante.
No iniciar automáticamente un lote masivo. El agente no ve el cupo; última referencia comunicada59% antes del lote 300.
Al añadir fichas contrastadas, actualizar evidencia/registro/pruebas en la misma entrega, manteniendo informes históricos.
Al clonar en otra laptop, seguir OPERATIONS y pnpm prepare; configuración local Git de hooks no viaja con el clon.

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
