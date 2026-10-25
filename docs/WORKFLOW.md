# Protocolo de trabajo y actualización del contexto

Este procedimiento aplica a cada sesión de Vokal, cualquiera que sea la IA, el sistema operativo o el editor.
Responde a la petición explícita del propietario de mantener una comunicación asíncrona completa en Markdown.

## 1. Inicio de sesión

1. Confirma que estás dentro del repositorio Vokal. No crees un proyecto nuevo por falta de historial del chat.
2. Lee AGENTS.md, HANDOFF y STATUS. Consulta el índice para abrir detalles bajo demanda.
3. Ejecuta `git status --short` y `git log -5 --oneline`.
4. Revisa el remoto con `git remote -v`. El esperado es `https://github.com/Yukimaed27/Vokal.git`.
5. Si el árbol está limpio, actualiza con `git pull --ff-only` antes de implementar.
6. Si existen cambios locales, inspecciónalos y no los borres ni sobrescribas para hacer pull.
7. Identifica la tarea activa, el resultado deseado y qué evidencia falta. No confundas una propuesta con una decisión aceptada.

Las preferencias anteriores permanecen vigentes. No vuelvas a preguntar si se quiere pnpm, modo noche, nube o .md:
ya están acordados. Consulta al propietario solo por información que realmente falta o por decisiones nuevas.

## 2. Durante la tarea

- Lee los archivos afectados y sus consumidores antes de editar.
- Haz el cambio mínimo que resuelva el alcance completo; no agregues un framework para sustituir una función sencilla.
- Conserva IDs de contenido, progreso y contratos; si deben cambiar, diseña una migración y documéntala.
- Evita dependencias nuevas. Si son necesarias, aplica el procedimiento de SECURITY y registra la decisión.
- No inventes resultados ni ocultes fallos. Un mock confirma el contrato probado, no la conectividad real.
- Registra los hallazgos que cambien el siguiente paso: un límite de correo, un error de SQL, una decisión del propietario o un fallo de CI.
- Actualiza la documentación afectada al cerrar cada bloque significativo, no únicamente cuando termine todo el proyecto.
- Registra una confirmación externa solo si cambia un requisito técnico, recurso necesario o bloqueo. Distingue lo declarado de lo verificado; no registres clics, pantallas ni pasos incidentales.

Una lectura o un comando sin cambios no necesita una entrada de diario separada por sí solo.
Sí se documenta si produce información necesaria para retomar, modifica una conclusión o deja una operación técnica pendiente.
Los intercambios de acompañamiento y pasos menores del propietario no requieren commits ni entradas de diario.

## 3. Matriz obligatoria de actualizaciones

| Qué ocurrió | Documentos que deben cambiar |
| --- | --- |
| Se completó una tarea o se dejó a medias | HANDOFF, STATUS y SESSION_LOG |
| Cambió una decisión de producto o implementación | DECISIONS y, si cambia la tarea activa, HANDOFF |
| Se añadió/completó/reordenó alcance | ROADMAP |
| Cambió una función entregada | CHANGELOG y STATUS |
| Cambiaron rutas, almacenamiento, algoritmos, API o SQL | ARCHITECTURE y guía técnica correspondiente |
| Cambiaron instalación, comandos, hooks, CI o diagnóstico | OPERATIONS y README |
| Se añadieron materiales o cambió cómo se cuentan | CONTENT; contadores donde aparezcan; ARCHITECTURE si cambió el esquema |
| Se revisaron paquetes, permisos, avisos o controles | SECURITY y SESSION_LOG con fecha y alcance |
| Cambió la conexión, configuración o validación técnica de Supabase o Pages | Actualizar el contrato/estado relevante; no registrar navegación del panel |
| El usuario cambió una preferencia | DECISIONS y HANDOFF; AGENTS solo si es una instrucción permanente |
| Se dejó un proceso, archivo local o push pendiente | HANDOFF con responsable, ubicación no sensible y cómo retomarlo |

No edites todos los .md mecánicamente si solo uno de sus contratos cambió.
Actualiza las fuentes de verdad y sus referencias para evitar contradicciones o copias difíciles de mantener.
Los documentos cortos deben remitir al detalle en lugar de repetirlo íntegramente.

## 4. Definición de tarea terminada

Antes de afirmar que una tarea terminó:

1. El comportamiento o documento solicitado existe en el repositorio.
2. Se ejecutaron las comprobaciones pertinentes y se guardaron sus resultados reales.
3. HANDOFF identifica el siguiente paso y el punto de interrupción.
4. STATUS distingue implementación, preparación y verificaciones.
5. El historial registra motivo, archivos, resultado y pendientes.
6. El cambio y su documentación están en el mismo commit cuando corresponde.
7. Si se hizo push, se comprobó que tuvo éxito. Un commit local no basta para cambiar de laptop.
8. La respuesta al propietario informa lo importante sin sustituir la documentación detallada.

El usuario ya autorizó conservar avances y contexto en su repositorio. Continuar con commits y push de trabajo terminado
dentro de ese alcance; no pedir la misma autorización de nuevo ni publicar servicios o contratar planes por inferencia.

## 5. Registro de cada entrega

Añade a SESSION_LOG una entrada como esta, usando solo apartados que aporten información real:

```md
## FECHA — Nombre concreto de la entrega

### Solicitud y motivo
Qué pidió el propietario y qué problema resuelve.

### Cambios
- Comportamiento final, archivos afectados y decisiones relevantes.
- Compatibilidad/migración si corresponde.

### Verificación
- Comando o recorrido, resultado observado y plataforma.
- Evidencia remota si se comprobó; no inventar éxito de CI.

### Límites y pendientes
Qué no se verificó, qué falta y qué necesita una acción del propietario.

### Continuidad
Paso inmediato, estado de archivos/commit/push y documentos a leer.
```

En HANDOFF, reemplaza el punto activo por el más reciente; conserva la historia en SESSION_LOG.
No incluyas el hash del mismo commit dentro de su contenido: es autorreferencial.
Se pueden citar hashes anteriores y usar `git log -1` para identificar la entrega documental actual.

## 6. Comprobaciones y Git

Los comandos están en OPERATIONS. Para cambios funcionales utiliza `pnpm check` y las comprobaciones específicas afectadas.
Si cambia el build/configuración o se necesita un artefacto, ejecuta `pnpm build`.
Si cambian dependencias o su resolución, revisa `pnpm audit` y los avisos pertinentes.
Para interfaz usa QA real cuando esté disponible; no afirmes que una pantalla se probó por haber leído su CSS.

Un cambio solo de documentación no requiere crear pruebas de código nuevas.
Revisa enlaces locales, comandos y consistencia de los hechos. Los hooks existentes repetirán pnpm check en commit/push.
No hagas más rondas de pruebas sin cambios, fallos o incertidumbres que las justifiquen.

Antes de commit:

```sh
git diff --check
git diff --stat
git status --short
```

Añade solo los archivos de la tarea. Si `git add .` incluiría cambios ajenos, usa rutas explícitas.
Después del commit y push:

```sh
git status --short
git log -1 --oneline
git ls-remote origin refs/heads/main
```

Si el remoto avanzó, integra con cuidado. Nunca fuerces un push o descartes trabajo sin autorización explícita.
Si un hook falla, corrige la causa; no uses `--no-verify` para aparentar una entrega correcta.

## 7. Si no puedes terminar

Deja documentado:

- Qué sí funciona y cuál fue la última comprobación correcta.
- Qué intentaste, el error relevante sin secretos y qué queda sin resolver.
- Qué archivos modificaste y cuáles son ajenos.
- Si hay commit local sin push o un remoto que no se pudo actualizar.
- Qué información externa falta y cómo conseguirla.
- Una siguiente acción ejecutable, no «seguir trabajando».

No marques ROADMAP como completo si solo se preparó la infraestructura.
No prometas que otra sesión verá archivos ignorados o cambios que no llegaron al remoto.

## 8. Confidencialidad y mantenimiento

Los .md se suben a GitHub. No guardar tokens, contraseñas, valores de cookies, sesiones, correos de alumnos,
progreso privado ni volcados completos de respuestas autenticadas.
Documentar nombres de variables, archivos de configuración, contratos y procedimiento para obtener valores de forma segura.
No usar el diario para replicar conversaciones completas ni generar ruido con cada comando de lectura.
El objetivo es que otro agente pueda decidir y actuar con el contexto necesario, sin depender de este chat.

Los hooks actuales comprueban código, no redactan el traspaso ni garantizan que una IA lo lea.
La obligación se conserva en AGENTS y en este protocolo; cada agente es responsable de cumplirla.
