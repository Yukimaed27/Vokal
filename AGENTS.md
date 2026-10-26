# Vokal · instrucciones para continuar

Lee primero docs/HANDOFF.md y docs/STATUS.md. Después consulta docs/WORKFLOW.md.
El índice docs/README.md indica qué documento leer para cada tarea; consulta los detalles bajo demanda.
Trabaja en español. Mantén mensajes breves y código sencillo. No elimines funciones acordadas para simplificar.
Antes de editar: revisa git status y los archivos afectados. No sobrescribas cambios ajenos.
Al terminar: ejecuta pnpm check y actualiza STATUS, ROADMAP y CHANGELOG con hechos comprobables.
Nunca guardes credenciales ni progreso personal en Git. No declares sincronización o niveles completos si no existen.
La rama principal debe permanecer ejecutable. Usa commits pequeños con mensajes descriptivos.
Los hooks no se instalan al clonar: ejecuta pnpm prepare. No omitas fallos de comprobación.
El objetivo final es A1–C1, con B2 como primer objetivo completo y catálogo de 10 000 palabras ampliable a 25 000.
Una muestra A1 no acredita nivel. No rellenes el catálogo con traducciones sin revisar ni cuentes flexiones como palabras nuevas.

Usa pnpm y conserva su versión fijada, lockfile y controles. Revisa docs/SECURITY.md antes de añadir dependencias.
No actives servicios de pago. El proyecto Supabase público ya está configurado; faltan autenticación y sincronización reales verificadas. Consulta docs/CLOUD.md.

## Documentación obligatoria y comunicación entre sesiones

El propietario requiere documentar avances técnicos, decisiones y pendientes relevantes en Markdown para continuar desde otra IA, sesión o laptop. No registrar cada paso de navegación, clic, pantalla o comentario incidental.
No dependas del historial del chat, memoria del modelo, archivos locales ignorados o skills instaladas en esta máquina.

- Después de cada cambio significativo, hallazgo que altere el plan o instrucción nueva del propietario, actualiza el contexto afectado.
- Antes de entregar trabajo significativo o dejar una tarea técnica pendiente, actualiza HANDOFF y STATUS si cambió el contexto útil. No generar cambios documentales por cada respuesta conversacional.
- Toda entrega debe registrar lo realizado, motivo, archivos afectados, validaciones y resultados, límites y siguiente acción concreta.
- Mantén SESSION_LOG como historial acumulativo. No borres entradas anteriores para presentar solo la última versión.
- Actualiza DECISIONS cuando cambie una decisión, ROADMAP cuando avance o cambie el alcance y CHANGELOG cuando haya una entrega.
- Si cambias contratos, rutas, datos, configuración, seguridad o comandos, actualiza su documentación técnica específica.
- Incluye esos .md en el mismo commit que la implementación relacionada y súbelos si está autorizado; no declares un push sin verificarlo.
- Si debes dejar trabajo sin commit, enumera los archivos y cambios pendientes en HANDOFF. No digas que están disponibles en otra laptop.
- Distingue expresamente: implementado, preparado, verificado localmente, verificado en CI y verificado contra un servicio real.
- Nunca copies contraseñas, tokens, cookies, claves secretas, correos de alumnos o progreso personal a la documentación.

Esta regla aplica a cambios técnicos, incluidas correcciones pequeñas. Documentar utilidad para continuar, no una transcripción de la actividad del usuario.
Los hooks actuales ejecutan pruebas; no redactan ni verifican automáticamente la documentación. Esa responsabilidad es del agente.
Sigue la matriz y la plantilla de cierre de docs/WORKFLOW.md. No crees documentos duplicados si existe uno adecuado.

## Continuidad de revisión léxica

Antes de ampliar vocabulario auditado, consultar docs/reviews/README.md y HANDOFF para el próximo índice.
Distinguir contraste bilingüe, inferencia con fuente monolingüe y duda. No afirmar100% de fiabilidad ni revisión humana.
Conservar IDs/progreso e importación; aplicar correcciones en la capa editorial y actualizar informe/alcance.
Los hooks comprueban cobertura documental y código; no garantizan corrección lingüística ni redactan contexto.

La prioridad vigente es fiabilidad por sentido. Leer docs/reviews/REVIEW_POLICY.md antes de cambiar estados:
solo fuentes contrastadas, humanReviewed=false explícito; no atribuir aprobación a variantes/ejemplos no comprobados.
La decisión del propietario permite continuar sin profesor, no afirmar revisión humana ni certeza 100%.
