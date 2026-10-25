# Estado para retomar

Fecha: 2026-10-25. Versión: 0.2.0.

## Tarea activa y contexto entre sesiones

El propietario está probando la web y ha llegado a **Crear organización** en Supabase.
Se le guía para crear organización/proyecto Free; no hay confirmación de haber completado ese proceso externo.
El punto de continuidad está en [HANDOFF](HANDOFF.md), con detalle en [CLOUD](CLOUD.md).
El [índice](README.md), [arquitectura](ARCHITECTURE.md), [operación](OPERATIONS.md) y [diario](SESSION_LOG.md)
permiten continuar sin recuperar este chat. [WORKFLOW](WORKFLOW.md) y AGENTS obligan a actualizar los .md en cada entrega.
La entrega actual modifica únicamente documentación; el comportamiento de la aplicación sigue siendo 0.2.0.

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
- 14 pruebas automatizadas: repasos, migración, desbloqueo, combinación, autenticación/errores y servidor.
- Auditoría pnpm: cero dependencias y cero avisos conocidos en el proyecto.
- Navegador Edge real con perfil desechable: práctica, evaluación aprobada/reprobada, bloqueo por URL,
  búsqueda, cuenta sin configurar, tema de sistema, selector y persistencia.
- Diseño comprobado en claro/oscuro a 375, 812 y 1440 px; sin desbordamiento horizontal en inicio.
  Contraste de texto principal/secundario, botones y estados comprobado en ambos temas.
- Build estático generado correctamente. Evidencia visual local en .qa/ (ignorada por Git).
- El CI del commit funcional 8002135 se confirmó completado con success en Windows/Linux:
  [run 40240554393](https://github.com/Yukimaed27/Vokal/actions/runs/40240554393).
  No confundir esa evidencia con el resultado de futuros commits.

## Decisión del propietario
Primero solicitó dejar Supabase preparado. Ahora está iniciando la creación de la organización y pidió acompañamiento.
No hay un proyecto creado/conectado confirmado. No pedir claves secretas.
Guía: docs/CLOUD.md. Falta activar el servicio y verificar nube con dos cuentas/dispositivos reales.
La web no se ha publicado en esta revisión; existe un workflow manual para hacerlo después.

## Siguiente tarea
1. Acompañar desde Crear organización: nombre Vokal, tipo Personal si aparece, plan Free; crear el proyecto.
2. Abrir SQL Editor, ejecutar la migración una vez y conectar solo URL/clave pública.
3. Verificar aislamiento entre cuentas y recuperación del progreso en dos dispositivos.
4. Publicar y comprobar el sitio desplegado.
5. Ampliar el currículo con revisión lingüística; no cargar miles de traducciones sin validar.

Mantener la revisión del diseño/lecciones en paralelo según lo que observe el propietario al probar.

## Límites
- 372 entradas no cumplen todavía la meta de 10 000 palabras. La ruta no acredita B2/C1.
- El contenido es redacción propia asistida, pendiente de revisión externa; el nivel de cada sección es orientativo.
- La nube está implementada y probada con respuestas simuladas, no contra un proyecto Supabase real.
- No se ejecutó la migración SQL en PostgreSQL real. Validación de RLS y concurrencia real pendientes.
- Sin nube activa, borrar los datos del navegador elimina la copia de progreso de ese navegador.
- Un ejercicio incompleto no se reanuda después de recargar; los resultados se guardan al terminar la práctica.
