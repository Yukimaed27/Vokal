# Traspaso activo para la próxima sesión

Actualizado: 2026-10-25. Aplicación: 0.2.1. Idioma de colaboración: español.

## Continuidad técnica

La configuración pública de Supabase está en src/config.js y funciona en el servidor/build.
El propietario informó SQL ejecutado sin errores. La API real responde y tabla/RPC rechazan acceso sin sesión.
Falta el primer acceso OTP y probar guardado/aislamiento con usuarios autenticados.
La guía de instalación reutilizable está en [CLOUD](CLOUD.md).
No mantener aquí un registro de pantallas, clics o pasos menores del propietario.

## Próxima acción concreta

1. Resolver el requisito de autenticación: Free nuevo no permite editar plantillas sin SMTP propio. La guía inicial omitió esa restricción y ya fue corregida.
2. Acordar si se mantiene OTP con SMTP o se implementa acceso con GitHub mediante Supabase OAuth. La alternativa GitHub todavía no está implementada.
3. Tras configurar el método elegido, el propietario inicia sesión; no solicitar ni guardar OTP o secretos del proveedor en el chat.
4. Verificar guardado y luego aislamiento/sincronización con cuentas/dispositivos reales. No repetir la migración sin revisar su estado.

El SMTP de prueba tiene restricciones de destinatarios y frecuencia. Leer CLOUD antes de prometer acceso por correo a los probadores.
No añadir a los probadores como administradores del proyecto para eludir esos límites.

## Último trabajo funcional entregado

0.2.1: proyecto público conectado, variables vacías de Pages ya no anulan configuración y prueba de regresión añadida.
Quince pruebas y build aprobados. La comprobación visual nueva fue bloqueada automáticamente; se verificó por HTTP.
No se envió ningún código ni se creó una sesión real. No confundir API disponible con sincronización comprobada.


Commit `8002135`: temas burdeos/morado, botón y selección por sistema; ampliación a 31 lecciones, 15 secciones,
372 entradas y 781 ejercicios; desbloqueo al 80 %; pnpm; nube y publicación preparadas.
Está subido a `origin/main`. La entrega documental posterior se identifica con `git log -1` para evitar un hash autorreferencial.

La versión inicial está en `06db12b`. No hay que reconstruir el proyecto ni reinstalar dependencias de aplicación: no tiene ninguna.

## Situación que no debe confundirse

| Área | Situación conocida |
| --- | --- |
| Aplicación local | Implementada y comprobada en Windows con Node y navegador Edge |
| Linux | CI de la entrega funcional completado correctamente en la matriz Windows/Linux |
| Nube | Configuración y API verificadas; SQL aplicado según el propietario. Acceso/guardado autenticado y RLS entre cuentas pendientes |
| Sitio público | Workflow manual preparado; ninguna publicación confirmada |
| Curso | Base de 372 entradas; no se cumplieron las 10 000 palabras ni un curso completo B2/C1 |
| Calidad lingüística | Primera redacción asistida, pendiente de revisión externa |
| Sesión de desarrollo | No requiere recuperar procesos anteriores; el agente detuvo su servidor y cerró el navegador de QA |

El propietario puede estar ejecutando su propio servidor mientras prueba. No detener procesos ajenos.
Las imágenes de QA y perfiles temporales no se suben al repositorio; otra laptop debe regenerar la evidencia si la necesita.

## Referencias de contexto disponibles

- Entrada única de contexto y protocolo obligatorio en AGENTS.
- Mapa de archivos, rutas, datos, algoritmos y flujo de nube.
- Operación Windows/Linux, hooks, pruebas, build y recuperación de contexto.
- Historial de trabajo y decisiones con límites explícitos.
- Guía de Supabase: instalación, configuración pública, límites OTP y validaciones autenticadas pendientes.

La última entrega configura la conexión; no modifica el contenido de aprendizaje ni su diseño.

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
