# Índice del contexto de Vokal

Este repositorio es el canal de comunicación asíncrona entre sesiones de desarrollo.
El chat puede desaparecer; las decisiones, pruebas, pendientes y procedimientos deben poder recuperarse desde Git.
Los documentos describen lo observado, no certifican funciones todavía pendientes.

## Para un agente que acaba de llegar

1. Lee [AGENTS.md](../AGENTS.md): instrucciones permanentes y obligación de mantener este contexto.
2. Lee [HANDOFF.md](HANDOFF.md): conversación pendiente y siguiente acción específica.
3. Lee [STATUS.md](STATUS.md): capacidades implementadas, verificadas y pendientes.
4. Consulta [WORKFLOW.md](WORKFLOW.md) para operar y documentar sin perder trabajo.
5. Abre únicamente las referencias técnicas necesarias para la tarea. No necesitas leer todos los archivos en cada turno.

## Documentos y responsabilidad

| Documento | Qué resuelve | Cuándo actualizarlo |
| --- | --- | --- |
| [HANDOFF](HANDOFF.md) | Dónde se interrumpió la conversación y qué hacer inmediatamente | Antes de pausar o terminar; al cambiar la tarea activa |
| [STATUS](STATUS.md) | Estado vigente de la aplicación y evidencia disponible | Después de avances o verificaciones relevantes |
| [SESSION_LOG](SESSION_LOG.md) | Historia acumulativa de entregas, motivos y límites | En cada entrega o sesión con cambios significativos |
| [DECISIONS](DECISIONS.md) | Qué quiere el propietario y por qué se eligió cada enfoque | Al aceptar o cambiar una decisión |
| [ROADMAP](ROADMAP.md) | Trabajo pendiente y orden de ejecución | Al completar, añadir o cambiar alcance |
| [ARCHITECTURE](ARCHITECTURE.md) | Archivos, rutas, contratos, lógica y relaciones | Cuando cambie la implementación descrita |
| [OPERATIONS](OPERATIONS.md) | Preparar Windows/Linux, comprobar, ejecutar y diagnosticar | Cuando cambien herramientas, comandos o procedimientos |
| [CLOUD](CLOUD.md) | Crear organización/proyecto Supabase, configurar RLS y publicar | Al avanzar la conexión o cambiar requisitos del proveedor |
| [CONTENT](CONTENT.md) | Qué se enseña, qué se cuenta y cómo ampliar el material | Al cambiar contenido o criterios de calidad |
| [VOCABULARY_SOURCES](VOCABULARY_SOURCES.md) | Fuentes, hashes, licencia y reproducción de los 5000 lemas | Al cambiar datos, filtros, selección o procedencia |
| [SECURITY](SECURITY.md) | Paquetes, avisos revisados y controles de suministro | Al revisar avisos o modificar dependencias/configuración |
| [CHANGELOG](../CHANGELOG.md) | Cambios entregados por versión | En cada entrega |
| [README](../README.md) | Entrada breve para ejecutar y comprender el producto | Cuando cambie la experiencia de arranque o el alcance |

## Cómo pedir a otra IA que continúe

Después de clonar o actualizar el repositorio, puedes pegar:

> Trabajaremos en Vokal, repositorio https://github.com/Yukimaed27/Vokal.git.
> Lee AGENTS.md, docs/HANDOFF.md y docs/STATUS.md; consulta docs/WORKFLOW.md.
> Revisa git status antes de editar. Continúa por la siguiente acción indicada sin asumir que la nube ya está activa.
> Mantén actualizados los .md con cada avance y deja un nuevo traspaso verificable antes de terminar.
> Explícame las cosas en español y brevemente; no omitas los detalles en la documentación.

## Fuentes de verdad

- Código y pruebas: comportamiento implementado; si contradicen el texto, investiga y corrige la documentación o el código.
- Git: qué está versionado y qué puede llegar a otra computadora.
- Resultado real de una comprobación: qué se verificó; distinguir de una prueba solo descrita.
- HANDOFF/STATUS: situación conocida hasta la última entrega. Comprueba si el propietario avanzó después en un servicio externo.
- GitHub Actions: evidencia remota, no se debe inferir su resultado solo por un push exitoso.

Los secretos y archivos ignorados no deben convertirse en una fuente de contexto compartida. Documenta su propósito y ubicación,
pero no su contenido sensible. Un enlace a un servicio tampoco demuestra que ya esté configurado.

- [Piloto lingüístico:100 entradas, alcance y fuentes](reviews/README.md).
