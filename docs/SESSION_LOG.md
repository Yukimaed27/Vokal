# Historial asíncrono de sesiones y entregas

Este diario conserva el contexto de lo realizado y sus motivos. El estado vigente está en STATUS y el punto de continuidad en HANDOFF.
Las entradas iniciales se reconstruyeron desde los commits y esta sesión; no son una transcripción literal ni contienen datos de alumnos.

## 2026-10-25 — Definición del producto y preparación

### Solicitud y acuerdos

Yohaldo eligió trabajar en `C:\Users\Yohaldo\Documents\Trabajos\Vokal`, inicialmente vacía.
Pidió una herramienta de alemán práctica y entretenida, con explicación antes de los ejercicios, acceso desde varios dispositivos,
objetivo B2/C1 y al menos 10 000 palabras, ampliable a 25 000.

Las rondas de definición acordaron público hispanohablante principiante, inicialmente él y 2–3 probadores;
prioridad a viajes, vida cotidiana y respeto cultural en Alemania; teoría, práctica y repaso; evaluación para saltar lo conocido;
sesiones de 20–30 minutos, sin castigos por faltar; internet inicialmente aceptado y preferencia por servicios gratuitos.
Audio y pronunciación se pospusieron hasta consolidar la base.

Solicitó GitHub como canal para continuar desde Windows/Linux, instrucciones para agentes y hooks de comprobación.
Proporcionó `https://github.com/Yukimaed27/Vokal.git`, que respondió sin ramas al inicio.

### Herramientas de colaboración

Se instalaron grill-me, caveman y ponytail desde sus repositorios con el instalador de skills.
Grill-me solo remitía a grilling: se detectó e instaló esa dependencia para las entrevistas.
También se instaló UI UX Pro Max a petición del propietario y se consultó su guía visual.
Estas instalaciones pertenecen al entorno de Codex original, no al repositorio ni al runtime de Vokal.
No se ejecutó npx para instalar paquetes de aplicación.

### Decisiones de implementación

Se optó por HTML/CSS/JavaScript y herramientas Node sin dependencias para validar el aprendizaje con poco coste y complejidad.
Las recomendaciones visuales iniciales de la skill no encajaban plenamente con un público adulto;
se adaptaron jerarquía, tarjetas y accesibilidad a una interfaz sobria.

## 2026-10-25 — Base 0.1.0

Commit funcional: `06db12b` — crear base de Vokal y primera unidad de aprendizaje.

### Cambios entregados

- Proyecto local ejecutable con servidor restringido a archivos públicos.
- Unidad de saludos, presentación y cortesía: tres lecciones y dieciocho entradas.
- Teoría, ejemplos, corrección de respuestas, evaluación inicial de esa unidad y repaso espaciado.
- Progreso de invitado en navegador y navegación por fragmentos.
- Primera versión visual en marfil/verde/lima.
- README, AGENTS, estado, decisiones, hoja de ruta e historial de cambios.
- Hooks pre-commit/pre-push y CI en Windows/Linux.

### Verificación y compatibilidad

Cinco pruebas Node aprobadas y respuesta HTTP 200 del servidor. En esa entrega no se había validado visualmente en navegador.
Se corrigió la escritura de acentos de los primeros archivos al detectar conversión de codificación de PowerShell/Python.
Se verificó el push y el hash remoto. El servidor de trabajo se detuvo al finalizar.

### Límites explícitos

Solo una muestra A1. Sin cuentas, sincronización, audio, publicación ni curso completo.
El propietario valoró positivamente la estructura visual y pidió refinamientos.

## 2026-10-25 — Refinamientos 0.2.0

Commit funcional: `8002135` — ampliar aprendizaje, renovar temas y preparar sincronización.

### Solicitud

El propietario pidió conservar el diseño pero cambiar la paleta a oscuros rojos/morados,
añadir modo noche/claro y detección del sistema, revisar paquetes/avisos históricos y migrar a pnpm.
También pidió lecciones más amplias, subsecciones por nivel con desbloqueo y progreso en nube de preferencia gratuito.

### Diseño

Se conservaron distribución y tarjetas. Se añadió theme.css con tokens burdeos/morado y claro compatible,
theme.js con preferencia por sistema y guardado local, selector de tres opciones y botón directo de alternancia.
Se añadió cuenta a la navegación y estado visible de guardado local/nube.

### Aprendizaje

Se ampliaron las tres lecciones originales a doce entradas cada una y se añadieron veintiocho lecciones.
Resultado: 31 lecciones, 15 secciones, 372 entradas y 781 ejercicios.
Cada lección incorpora explicación gramatical, contexto y diálogo traducido; se genera reconocimiento y escritura,
además de preguntas específicas de gramática/concepto.
El dominio requiere un 80 %. Una evaluación de sección permite marcarla conocida y abrir la siguiente.
La ruta respeta el orden de prerrequisitos incluso al abrir una lección por URL.
Los repasos pasaron de una decisión general por lección a evidencia por entrada.
Se preservaron IDs/progreso de la versión anterior y se añadió búsqueda paginada y por nivel.

### Seguridad, herramientas y publicación preparada

Se confirmó que no había paquetes externos instalados. Se consultaron avisos oficiales de pnpm y sus rangos afectados.
Se fijó pnpm 11.28.6, con lockfile, espera de siete días, bloqueo de builds de dependencias y fuentes exóticas transitivas.
Se migraron comandos, hooks y CI, y se fijaron acciones de GitHub a SHA.
Se añadió build estático, lista única de archivos públicos y workflow manual de Pages.
La revisión detallada y sus límites se conservan en SECURITY.

### Nube preparada

Se eligió preparar Supabase REST sin SDK: OTP por email, sesión, renovación, caché por usuario y sincronización.
Se escribió la migración SQL con tabla, políticas RLS y combinación transaccional por campo.
La importación de progreso de invitado es explícita. Los resultados del otro usuario no se incorporan a una sesión nueva.
Yohaldo confirmó que no tenía proyecto y pidió **dejarlo preparado**. No se crearon servicios, no se ejecutó SQL real y no se publicó la web.

### Verificación

- 14 pruebas Node aprobadas.
- pnpm audit: cero dependencias externas y cero avisos en el informe del proyecto.
- Controles de pnpm consultados: espera 10080 minutos, strictDepBuilds true, allowBuilds vacío y blockExoticSubdeps true.
- Build estático correcto y git diff --check sin errores.
- Edge real con perfil temporal: temas, botón/selector/sistema, persistencia, ejercicios, evaluación aprobada/reprobada,
  bloqueo por URL, búsqueda y cuenta no configurada.
- Contraste y diseño de inicio comprobados en claro/oscuro a 375, 812 y 1440 px, sin desbordamiento horizontal.
- Capturas en .qa, ignoradas por Git; perfiles de prueba desechables, sin cuentas reales.
- Commit/push verificados contra el hash de origin/main.
- El CI de ese commit se confirmó success durante la siguiente entrega documental:
  [Comprobaciones 40240554393](https://github.com/Yukimaed27/Vokal/actions/runs/40240554393).

### Límites

No se ejecutó la migración en PostgreSQL real ni se comprobó la nube con cuentas reales.
No se llegó a 10 000 palabras ni a un curso completo o acreditación B2/C1.
El material requiere revisión lingüística; faltan audio, producción libre evaluada y reanudación de ejercicios incompletos.

## 2026-10-25 — Traspaso técnico detallado y guía de instalación

### Solicitud y contexto

El propietario está probando la aplicación y quiere que **cada cambio futuro** mantenga contexto detallado en .md,
de forma que otra sesión de IA en otra laptop pueda continuar sin este chat.
También solicitó una guía de instalación de Supabase.

### Cambios documentales

- AGENTS establece lectura inicial y obligación de mantener el traspaso en cada entrega.
- docs/README indexa la documentación por tarea y proporciona un mensaje para una IA nueva.
- HANDOFF fija el punto de continuidad exacto y evita asumir nube/proyecto ya activos.
- ARCHITECTURE detalla archivos, rutas, contenido, preguntas, dominio, intervalos, estado, cachés,
  API REST, SQL/RLS, configuración, build y límites técnicos.
- WORKFLOW establece la matriz de actualización, criterio de finalización y plantilla de historial.
- OPERATIONS documenta Windows/Linux, comandos, hooks, QA, CI, publicación preparada y diagnóstico.
- SESSION_LOG conserva la cronología, decisiones, validaciones y pendientes.
- CLOUD se amplía con organización Personal/Free, campos de proyecto, contraseña privada y datos públicos necesarios.
- README, STATUS, DECISIONS, ROADMAP y CHANGELOG enlazan el protocolo y reflejan la nueva tarea.

No se cambió el código de aplicación, SQL, paquetes ni herramientas en esta entrega.
No se activó Supabase ni se hizo un despliegue. La versión funcional sigue siendo 0.2.0.

### Verificación y continuidad

Se cotejó el detalle con los módulos, scripts, migración y workflows existentes; se verificó el éxito del CI funcional anterior.
Se revisaron enlaces locales Markdown y el diff antes de versionar. Los hooks ejecutan las 14 pruebas al guardar/subir la entrega.
El commit de esta documentación se identifica mediante git log; no se escribe aquí su propio hash.

Continuidad técnica: aplicar la migración, conectar configuración pública y verificar nube real según CLOUD.

### Criterio de documentación afinado

El contexto permanente conserva cambios técnicos, decisiones y pendientes relevantes.
Se excluyen pasos menores del panel y conversaciones incidentales; no hace falta un commit por cada interacción.
La aplicación no cambió al ajustar este criterio.
