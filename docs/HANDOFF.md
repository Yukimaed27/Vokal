# Traspaso activo para la próxima sesión

Actualizado: 2026-10-25. Aplicación: 0.2.0. Idioma de colaboración: español.

## Continuidad técnica

La aplicación local está entregada. La siguiente tarea es conectar y verificar Supabase.
El propietario dispone de un proyecto Vokal; no hay migración aplicada ni conexión real verificadas.
La guía de instalación reutilizable está en [CLOUD](CLOUD.md).
No mantener aquí un registro de pantallas, clics o pasos menores del propietario.

## Próxima acción concreta

1. Aplicar una vez `supabase/migrations/001_progress.sql` en SQL Editor.
2. Conectar únicamente URL del proyecto y clave pública publishable/anon; nunca contraseña ni service_role.
3. Configurar OTP por correo y verificar el primer acceso.
4. Probar RLS y sincronización con cuentas/dispositivos reales antes de declarar la nube lista.

El SMTP de prueba tiene restricciones de destinatarios y frecuencia. Leer CLOUD antes de prometer acceso por correo a los probadores.
No añadir a los probadores como administradores del proyecto para eludir esos límites.

## Último trabajo funcional entregado

Commit `8002135`: temas burdeos/morado, botón y selección por sistema; ampliación a 31 lecciones, 15 secciones,
372 entradas y 781 ejercicios; desbloqueo al 80 %; pnpm; nube y publicación preparadas.
Está subido a `origin/main`. La entrega documental posterior se identifica con `git log -1` para evitar un hash autorreferencial.

La versión inicial está en `06db12b`. No hay que reconstruir el proyecto ni reinstalar dependencias de aplicación: no tiene ninguna.

## Situación que no debe confundirse

| Área | Situación conocida |
| --- | --- |
| Aplicación local | Implementada y comprobada en Windows con Node y navegador Edge |
| Linux | CI de la entrega funcional completado correctamente en la matriz Windows/Linux |
| Nube | Cliente y SQL preparados; sin proyecto real conectado ni migración ejecutada confirmados |
| Sitio público | Workflow manual preparado; ninguna publicación confirmada |
| Curso | Base de 372 entradas; no se cumplieron las 10 000 palabras ni un curso completo B2/C1 |
| Calidad lingüística | Primera redacción asistida, pendiente de revisión externa |
| Sesión de desarrollo | No requiere recuperar procesos anteriores; el agente detuvo su servidor y cerró el navegador de QA |

El propietario puede estar ejecutando su propio servidor mientras prueba. No detener procesos ajenos.
Las imágenes de QA y perfiles temporales no se suben al repositorio; otra laptop debe regenerar la evidencia si la necesita.

## Qué se documentó en esta entrega

- Entrada única de contexto y protocolo obligatorio en AGENTS.
- Mapa de archivos, rutas, datos, algoritmos y flujo de nube.
- Operación Windows/Linux, hooks, pruebas, build y recuperación de contexto.
- Historial de trabajo y decisiones con límites explícitos.
- Guía de Supabase ampliada desde crear organización, sin activar ni contratar recursos.

Esta entrega modifica documentación; no cambia la interfaz ni el comportamiento del aprendizaje.

## Preferencias que continúan vigentes

- Respuestas al propietario breves; documentación técnica detallada y actualizada, sin registrar pasos menores.
- Mantener la estructura visual que le gustó, con tonos oscuros rojos/morados.
- Aprendizaje práctico con teoría, sesiones de 20–30 minutos, progreso sin castigos por faltar.
- Cuentas para él y eventualmente 2–3 probadores; acceso desde celular, laptop o tableta.
- Simplicidad de implementación, evitar dependencias y costos innecesarios.
- Contexto e historial en GitHub, compatible con Windows y Linux.

## Antes de terminar la próxima sesión

Actualizar este documento si cambió la continuidad técnica, STATUS con las verificaciones nuevas,
SESSION_LOG con el trabajo realizado y los documentos específicos afectados. Incluirlo en el commit de la tarea.
Si hay errores, archivos sin commit, configuración local faltante o un push fallido, dejarlo escrito con una acción de recuperación.
No copiar secretos ni progreso personal. Lee [WORKFLOW](WORKFLOW.md) para la plantilla de cierre.
