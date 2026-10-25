# Estado para retomar

Fecha: 2026-10-25. Versión: 0.2.0.

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

## Decisión del propietario
No tiene proyecto Supabase y solicitó dejar la integración preparada. No pedir claves secretas.
Guía: docs/CLOUD.md. Falta activar el servicio y verificar nube con dos cuentas/dispositivos reales.
La web no se ha publicado en esta revisión; existe un workflow manual para hacerlo después.

## Siguiente tarea
1. Revisar el diseño y una lección ampliada con Yohaldo.
2. Crear Supabase Free, ejecutar la migración y conectar solo URL/clave pública.
3. Verificar aislamiento entre cuentas y recuperación del progreso en dos dispositivos.
4. Publicar y comprobar el sitio desplegado.
5. Ampliar el currículo con revisión lingüística; no cargar miles de traducciones sin validar.

## Límites
- 372 entradas no cumplen todavía la meta de 10 000 palabras. La ruta no acredita B2/C1.
- El contenido es redacción propia asistida, pendiente de revisión externa; el nivel de cada sección es orientativo.
- La nube está implementada y probada con respuestas simuladas, no contra un proyecto Supabase real.
- No se ejecutó la migración SQL en PostgreSQL real. Validación de RLS y concurrencia real pendientes.
- Sin nube activa, borrar los datos del navegador elimina la copia de progreso de ese navegador.
- Un ejercicio incompleto no se reanuda después de recargar; los resultados se guardan al terminar la práctica.
