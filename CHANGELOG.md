# Cambios

## 2026-10-26 — Negro y acentos suaves

- Tarjetas sin contorno con redondeo ligero, negro/rosa/amarillo y claro piedra.
- Corregida la tarjeta principal que conservaba colores oscuros al activar modo claro.
- Paletas completas y nueva prueba de regresión; 23 pruebas aprobadas.

## 2026-10-26 — Ajuste visual

- Grafito/verde pino, tarjetas cuadradas y botón sol/luna accesible.
- Inicio más sobrio, sin ilustración decorativa ni cifras promocionales del catálogo.
- Contenido y progreso conservados; sin dependencias nuevas.

## 0.3.0 — 2026-10-25
- Paleta carbón/rojo coral y claro neutro; un solo selector automático/oscuro/claro, sin botón redundante.
- Inicio, navegación por iconos, tarjeta de estudio, plan de sesión, progreso y tarjetas refinados; foco inicial sin ocultar encabezado.
- 5000 lemas de FreeDict/WikDict, priorizados por frecuencia, con traducciones españolas y revisión pendiente visible.
- 25 secciones de 200 palabras y 200 bloques de 25, en una ruta independiente del curso.
- Total combinado: 231 lecciones, 40 secciones, 5184 entradas y 10 981 ejercicios.
- Importador Python sin dependencias, fuentes/hash fijados, selección reproducible y atribución/licencia CC BY-SA 4.0.
- Se conservan curso, IDs y progreso anteriores; cada palabra importada tiene reconocimiento/escritura.
- 22 pruebas aprobadas, build de 12 archivos y capturas de escritorio claro/oscuro y anchura real 375 px sin overflow.
- Revisión lingüística humana, ejemplos específicos de todos los términos y acceso GitHub funcional siguen pendientes.

## Corrección documental de autenticación — 2026-10-25
- Se aclara el requisito de SMTP propio para editar plantillas en proyectos Free nuevos de Supabase.
- Autenticación pendiente de elección entre OTP con SMTP y alternativa GitHub OAuth; sin cambios de código ni servicios contratados.

## 0.2.1 — 2026-10-25
- Configuración pública del proyecto Supabase incorporada para continuar desde otra computadora sin volver a copiarla.
- Variables de Pages vacías ya no desactivan los valores públicos configurados.
- Prueba de regresión de configuración; quince pruebas y build aprobados.
- API real: autenticación disponible y acceso a tabla/RPC sin sesión rechazado; guardado autenticado todavía pendiente.
- QA admite otra URL y cuenta configurada. Nueva ejecución visual bloqueada por revisión automática; comprobación local por HTTP realizada.

## Documentación posterior a 0.2.0 — 2026-10-25
- Traspaso activo y punto exacto para continuar desde otra IA o laptop.
- Índice de contexto, mapa detallado de arquitectura y contratos, operación Windows/Linux e historial de sesiones.
- Protocolo obligatorio en AGENTS y WORKFLOW para actualizar Markdown con cada avance y entregar contexto junto al código.
- Guía Supabase ampliada desde Crear organización; nube todavía no activada.
- CI funcional anterior confirmado correcto. Esta entrega no modifica la aplicación ni su versión.

## 0.2.0 — 2026-10-25
- Paleta burdeos/morado, modo noche/claro, botón y detección del sistema con preferencia persistente.
- Ampliación de 3 a 31 lecciones y de 18 a 372 entradas; 15 secciones A1–C1 y 781 ejercicios.
- Teoría gramatical, diálogos, reconocimiento y escritura; umbral del 80 % y desbloqueo por sección.
- Evaluaciones por sección y repasos ajustados por palabra, conservando identificadores anteriores.
- Búsqueda paginada y filtro por nivel.
- Migración de comandos, hooks y CI a pnpm; versión fija, lockfile y controles de instalación.
- Integración Supabase preparada: OTP, sesión, caché por usuario, sincronización y migración con RLS.
- Build estático, publicación manual preparada y acciones fijadas por SHA.
- 14 pruebas automatizadas aprobadas y comprobación en navegador a 375, 812 y 1440 px, claro/oscuro.
- Pendientes: activar/verificar nube real, revisión lingüística y meta de 10 000 palabras.

## 0.1.0 — 2026-10-25
- Primera unidad A1 con teoría, ejemplos, vocabulario y práctica corregida.
- Evaluación de la unidad, progreso por lección y repaso espaciado local.
- Base sin dependencias, pruebas, hooks y CI Windows/Linux.
- Contexto, decisiones y hoja de ruta para continuar entre equipos.
