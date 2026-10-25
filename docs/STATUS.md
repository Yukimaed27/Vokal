# Estado para retomar

Fecha: 2026-10-25. Versión: 0.2.1.

## Tarea activa y contexto entre sesiones

El proyecto Supabase está configurado con URL y clave pública. La API real responde y rechaza lectura/RPC sin sesión.
El propietario confirmó SQL ejecutado sin errores. GitHub está habilitado según la API real. Faltan botón/flujo OAuth de Vokal, acceso real, RLS entre usuarios y guardado.
El punto de continuidad está en [HANDOFF](HANDOFF.md), con detalle en [CLOUD](CLOUD.md).
El [índice](README.md), [arquitectura](ARCHITECTURE.md), [operación](OPERATIONS.md) y [diario](SESSION_LOG.md)
permiten continuar sin recuperar este chat. [WORKFLOW](WORKFLOW.md) y AGENTS obligan a actualizar los .md en cada entrega.
La entrega 0.2.1 conecta la configuración pública y evita que variables vacías de Pages la desactiven.

## Implementado
- Tema por sistema, botón noche/claro y selector para volver a automático. Persistencia local.
- 31 lecciones, 15 secciones, 372 entradas y 781 ejercicios de vocabulario y gramática.
- Teoría, diálogo, comprensión, escritura y repaso. Desbloqueo con dominio del 80 %.
- Evaluación por sección; conserva identificadores y progreso de la versión anterior.
- pnpm 11.28.6 fijado, lockfile, bloqueo de scripts de dependencias y espera de siete días para nuevas versiones.
- Autenticación por código y cliente REST de Supabase sin SDK externo. Caché separada por usuario.
- Migración SQL con RLS y combinación transaccional de progreso por campo.
- Build estático y publicación manual a GitHub Pages preparada.
- Hooks y CI migrados a pnpm; acciones fijadas por SHA.

## Validación
- 15 pruebas automatizadas (incluida regresión de configuración de Pages): repasos, migración, desbloqueo, combinación, autenticación/errores y servidor.
- Auditoría pnpm: cero dependencias y cero avisos conocidos en el proyecto.
- Navegador Edge real con perfil desechable: práctica, evaluación aprobada/reprobada, bloqueo por URL,
  búsqueda, cuenta sin configurar, tema de sistema, selector y persistencia.
- Diseño comprobado en claro/oscuro a 375, 812 y 1440 px; sin desbordamiento horizontal en inicio.
  Contraste de texto principal/secundario, botones y estados comprobado en ambos temas.
- Build estático generado correctamente. Evidencia visual local en .qa/ (ignorada por Git).
- El CI del commit funcional 8002135 se confirmó completado con success en Windows/Linux:
  [run 40240554393](https://github.com/Yukimaed27/Vokal/actions/runs/40240554393).
  No confundir esa evidencia con el resultado de futuros commits.

## Conexión verificada en 0.2.1

- GET /auth/v1/settings: 200; email habilitado, registro permitido y confirmación requerida.
- GET /rest/v1/learning_progress sin sesión: 401, código 42501; acceso denegado.
- POST /rest/v1/rpc/sync_progress sin sesión: 401, código 42501; acceso denegado.
- No se crearon usuarios, enviaron códigos ni modificaron registros durante estas comprobaciones.
- Quince pruebas y build correctos; servidor temporal de QA verificó por HTTP el módulo público configurado.

## Decisión del propietario
Los identificadores públicos se versionan para usar el mismo proyecto desde otra laptop. No pedir claves secretas.
Documentar solo avances técnicos, decisiones y pendientes relevantes; excluir pasos menores del panel.
Guía: docs/CLOUD.md. Falta verificar acceso y guardado con cuentas/dispositivos reales.
La web no se ha publicado en esta revisión; existe un workflow manual para hacerlo después.

## Siguiente tarea
1. Implementar GitHub OAuth en Vokal: el proveedor ya está habilitado y verificado por API.
2. Verificar redirección e inicio de sesión real; no confundir proveedor activo con integración completa.
3. Verificar aislamiento entre cuentas y recuperación del progreso en dos dispositivos.
4. Publicar y comprobar el sitio desplegado.
5. Ampliar el currículo con revisión lingüística; no cargar miles de traducciones sin validar.

Mantener la revisión del diseño/lecciones en paralelo según lo que observe el propietario al probar.

## Límites
- 372 entradas no cumplen todavía la meta de 10 000 palabras. La ruta no acredita B2/C1.
- El contenido es redacción propia asistida, pendiente de revisión externa; el nivel de cada sección es orientativo.
- Pruebas de sesión/guardado autenticado simuladas; comprobaciones reales solo sin sesión.
- SQL aplicado según el propietario; no se inspeccionaron políticas ni se verificó RLS con dos usuarios.
- La nueva comprobación visual fue bloqueada por revisión automática (blocked by policy, sin detalle adicional); configuración y aplicación verificadas por HTTP.
- Sin nube activa, borrar los datos del navegador elimina la copia de progreso de ese navegador.
- Un ejercicio incompleto no se reanuda después de recargar; los resultados se guardan al terminar la práctica.
