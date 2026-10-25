# Traspaso activo para la próxima sesión

Actualizado: 2026-10-25. Aplicación: 0.2.0. Idioma de colaboración: español.

## Punto exacto de continuidad

Yohaldo está probando Vokal y ha abierto Supabase. Su pantalla muestra **Crear organización**.
Solicitó instrucciones paso a paso desde ahí y una documentación exhaustiva en .md para retomar desde otra IA/laptop.
Todavía no confirmó haber creado la organización, el proyecto, la tabla o una cuenta de alumno.
No asumir que avanzar en una pantalla implica que la integración esté activada.

Se le ha indicado: organización Vokal, tipo Personal si aparece y plan Free; después proyecto Vokal.
La contraseña de PostgreSQL debe guardarse de forma privada. La guía completa está en [CLOUD](CLOUD.md).

## Próxima acción concreta

1. Continuar la guía desde la pantalla en la que realmente esté el propietario.
2. Tras crear el proyecto Free, abrir SQL Editor y ejecutar una vez `supabase/migrations/001_progress.sql`.
3. Obtener únicamente URL de proyecto y clave pública publishable/anon; nunca contraseña ni service_role.
4. Configurar OTP por correo, conectar la configuración local y verificar el primer acceso del propietario.
5. Probar RLS y sincronización con cuentas/dispositivos reales antes de declarar la nube lista.

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

- Respuestas al propietario breves; documentación detallada y actualizada.
- Mantener la estructura visual que le gustó, con tonos oscuros rojos/morados.
- Aprendizaje práctico con teoría, sesiones de 20–30 minutos, progreso sin castigos por faltar.
- Cuentas para él y eventualmente 2–3 probadores; acceso desde celular, laptop o tableta.
- Simplicidad de implementación, evitar dependencias y costos innecesarios.
- Contexto e historial en GitHub, compatible con Windows y Linux.

## Antes de terminar la próxima sesión

Actualizar este documento con la pantalla/paso realmente alcanzado, STATUS con las verificaciones nuevas,
SESSION_LOG con el trabajo realizado y los documentos específicos afectados. Incluirlo en el commit de la tarea.
Si hay errores, archivos sin commit, configuración local faltante o un push fallido, dejarlo escrito con una acción de recuperación.
No copiar secretos ni progreso personal. Lee [WORKFLOW](WORKFLOW.md) para la plantilla de cierre.
