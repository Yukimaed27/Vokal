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

## 2026-10-25 — Configuración pública y API real, versión 0.2.1

### Motivo y cambios

El propietario proporcionó identificadores públicos del proyecto para conectar Vokal y previamente informó ejecución SQL sin errores.
Se configuró src/config.js con URL y clave publishable; no se usaron credenciales administrativas.
La configuración se versiona para que una nueva copia del repositorio apunte al mismo proyecto.

Se corrigió scripts/config.mjs: las variables de Pages vacías o con espacios se ignoran, manteniendo la configuración local/predeterminada.
Se añadió una prueba de regresión. El QA de navegador ahora acepta una URL alternativa y verifica el formulario de cuenta si hay nube configurada,
sin enviar códigos ni autenticar personas. La versión del paquete pasó a 0.2.1; no se añadieron dependencias.

### Evidencia

- API real de Auth settings: HTTP 200; email habilitado, signup permitido y confirmación requerida.
- Lectura anónima de learning_progress: HTTP 401, código 42501.
- Llamada anónima a sync_progress: HTTP 401, código 42501; rechazada sin modificar datos.
- Quince pruebas Node aprobadas; build correcto e inclusión de la configuración pública comprobada.
- Servidor de QA separado del servidor del propietario: aplicación y configuración servidas correctamente por HTTP.
- La revisión automática rechazó iniciar el navegador con blocked by policy, sin detalle adicional. No se reintentó esa operación.
  La QA visual anterior corresponde a 0.2.0; no se presenta como una prueba nueva del acceso a nube.

### Límites y continuidad

La API pública conectada no prueba el guardado de un alumno ni el aislamiento entre cuentas autenticadas.
Faltan plantillas OTP, primer inicio de sesión del propietario y pruebas reales de progreso/RLS en dos dispositivos.
No se solicitaron códigos, no se crearon usuarios, no se envió correo y no se hizo un despliegue.
El siguiente paso está en HANDOFF/CLOUD: mostrar {{ .Token }} en Magic Link/Confirm signup y probar Mi cuenta.
Actualizar estado técnico cuando haya verificación real; no registrar navegación incidental del panel.

## 2026-10-25 — Requisito de SMTP y corrección de la guía de autenticación

Se verificó en el changelog oficial que desde 2026-06-03 los proyectos Free nuevos con correo predeterminado no permiten editar plantillas.
Esto bloquea la configuración OTP indicada: primero hace falta SMTP propio. La instrucción anterior omitió ese requisito.
Se corrigieron CLOUD, HANDOFF, STATUS y ROADMAP para evitar que otra sesión repita el mismo paso inviable.

Se plantean dos opciones, aún sin elección: conservar OTP con SMTP o implementar GitHub OAuth para evitar correo de acceso.
GitHub OAuth no está implementado ni configurado; no se cambió el cliente, no se enviaron mensajes y no se contrataron servicios.
No se investigaron ni prometieron condiciones gratuitas de un proveedor SMTP concreto.
Este es un bloqueo técnico del diseño de acceso, no un registro de navegación incidental del propietario.

Fuente primaria: https://supabase.com/changelog/46599-changes-to-email-template-customisation-on-free-tier.

## 2026-10-25 — Proveedor GitHub habilitado, pendiente cliente OAuth

Verificación real solicitada por el propietario: Auth settings respondió 200 con external.github=true y email habilitado.
Este hito confirma el proveedor activo, no el intercambio OAuth ni guardado autenticado.
Se actualizó el contexto técnico para implementar el botón/flujo en Vokal; no se modificó código, envió correo ni inició una sesión.
No se solicitaron ni registraron credenciales privadas del proveedor.

## 2026-10-25 — Rediseño y catálogo de 5000 lemas, versión 0.3.0

### Solicitud y alcance acordado

El propietario pidió reemplazar el guindo por un color mejor integrado en oscuro, quitar la redundancia entre botón y selector
y mejorar el diseño con Ponytail. Durante el trabajo pidió ampliar secciones y llegar a 5000 palabras en la entrega del día.
Mediante la entrevista de grilling aceptó un catálogo utilizable con traducción/ejercicios y revisión pendiente indicada.
No se acordó presentarlo como 5000 palabras revisadas manualmente ni como todo el curso avanzado terminado.

### Diseño implementado

Se reescribió style.css y se separaron tokens en theme.css: carbón con rojo coral y modo claro neutro.
Se eliminó theme-toggle de HTML/JS, conservando un único selector con sistema/oscuro/claro y la clave de preferencia anterior.
Se añadieron iconos SVG nativos de navegación, tarjeta visual, plan de sesión y progreso real por sección.
Se refinó jerarquía, espaciado, estados y adaptación móvil. El primer render no fuerza scroll/foco ocultando el encabezado.
La guía UI UX Pro Max se consultó para dashboard adulto/jerarquía; su paleta automática no se aplicó sobre la preferencia del propietario.
No se instalaron fuentes, iconos o frameworks externos.

### Vocabulario y procedencia

Se investigó y verificó FreeDict/WikDict alemán-español 2025.11.23, con 36 744 cabeceras declaradas y licencia BY-SA 3.0.
Se utilizó la lista alemana FrequencyWords/OpenSubtitles2018 para priorizar; su contenido es BY-SA 4.0, no la licencia MIT del código.
El importador estándar valida hashes, extrae solo traducciones españolas, filtra nombres/flexiones/registros mediante heurísticas,
deduplica lemas y selecciona 5000. Se reprodujo la generación obteniendo exactamente el mismo SHA-256 del archivo resultante.
La selección adaptada se atribuye bajo BY-SA 4.0, con créditos visibles y detalle en VOCABULARY_SOURCES.

Se añadieron vocabulary-data.js y vocabulary.js. Generan 25 secciones de 200 lemas y 200 bloques de 25.
La ruta LEX empieza abierta y se desbloquea independientemente del curso A1–C1.
Se reutilizan 188 identificadores compatibles y no se altera el progreso del curso previo.
Resultado unido: 231 lecciones, 40 secciones, 5184 entradas, 10 981 ejercicios.
Los 5000 importados están marcados como pendientes de revisión, con tipo/artículo, traducción y matices originales.
No se inventaron 5000 ejemplos ni se asignó un nivel MCER no validado a la importación.

### Verificación y límites

- 22 pruebas aprobadas, incluidos conteo/unicidad, sentidos, cobertura de reconocimiento/escritura, tamaños,
  conservación de preferencias, desbloqueo independiente y restauración de 5000 repasos bajo el límite de cuatro MB de la RPC.
- Importación determinista; checksums de ambos originales verificados; Python analizado sintácticamente sin instalar paquetes.
- Build de 12 archivos correcto. Catálogo generado: 1 299 583 bytes, cargado por módulos; la vista pagina 24 resultados.
- Capturas reales de Edge sin depuración remota en perfiles temporales; inicio oscuro/claro y ruta de vocabulario revisados.
- En marco local de QA, viewport/documento 375/360 y 1440/1425: sin desbordamiento horizontal del documento.
  El marco solo existió en .qa y no se publica. No se cambió la protección de los recursos de producción.
- Se actualizó el script CDP al nuevo control y catálogo, pero no se volvió a ejecutar todo el recorrido interactivo.

Los datos están preparados y utilizables, pero requieren revisión lingüística humana por lotes y más contexto específico.
Frecuencia no equivale a nivel, utilidad individual o dominio del alumno. La meta final de 10 000 lemas sigue pendiente.
La autenticación GitHub del cliente y guardado real permanecen pendientes: el rediseño no incorpora ese flujo.

### Continuidad

Reiniciar pnpm dev tras actualizar para que el servidor reconozca los nuevos módulos públicos.
Recoger feedback del propietario sobre interfaz y bloques. Después completar OAuth y revisar catálogo por lotes.
Actualizar los .md solo por cambios técnicos relevantes, no por navegación incidental.

## 2026-10-26 — Interfaz sobria y tema sol/luna

Solicitud: sustituir apariencia pastel/coral y tarjetas redondeadas por una interfaz discreta orientada al aprendizaje.
Cambios: index.html, src/style.css, src/theme.css, src/theme.js y src/app.js; tarjetas/controles cuadrados,
paleta grafito/verde pino, claro neutro, sin gradiente/sombras/ilustración decorativa; titulares sin volumen de catálogo.
Un único botón nativo sol/luna con nombre accesible actualizado. Conserva preferencias previas y almacenamiento;
sigue al sistema antes de la primera elección. Contenido, IDs y progreso no cambian. Sin dependencias nuevas.
Pruebas y browser-check adaptados al botón. 22 pruebas aprobadas y build estático de 12 archivos correcto.
Contraste medido >=4.5:1; capturas reales Edge escritorio oscuro y móvil claro de 375 px revisadas.
La revisión móvil detectó una regresión de media queries durante la edición; fue corregida antes de entregar.
No se ejecutó CDP completo ni se verificó autenticación real. La precisión lingüística sigue pendiente.
Contexto: HANDOFF/STATUS/DECISIONS/ARCHITECTURE actualizados. Siguiente paso funcional: GitHub OAuth y sincronización real.

## 2026-10-26 — Negro y acentos pastel; corrección del modo claro

Motivo: el propietario rechazó verde pino, bordes marcados y contraste brusco del modo claro.
Causa identificada: tokens hero/botones compartidos mantenían una superficie oscura al cambiar de modo.
Cambios: theme.css define paletas completas por tema; oscuro negro/rosa/amarillo y claro piedra sin blanco puro.
style.css elimina bordes de tarjetas, usa radio 12 px y mantiene campos/foco identificables; se retiran colores hero fijos.
Se actualizan meta theme-color en index.html/theme.js y pruebas de contraste, más una regresión de tokens hero.
Verificación: 23 pruebas y build correctos, contraste >=4.5:1; capturas Edge escritorio claro/oscuro y móvil oscuro 375 px.
Hooks pre-commit/pre-push inspeccionados: ambos ejecutan pnpm check; core.hooksPath=.githooks activo.
No fue necesario reescribir hooks: incorporan automáticamente la nueva prueba. No generan contexto documental.
HANDOFF/STATUS/DECISIONS/ARCHITECTURE/README/ROADMAP/CHANGELOG actualizados. Sin dependencias ni cambios de contenido/progreso.
Límites: no recorrido CDP completo, OAuth y revisión lingüística siguen pendientes. Próximo paso: evaluar interfaz con propietario.

## 2026-10-26 — Auditoría piloto de100 entradas con cuatro participantes

Solicitud: revisar100 palabras con cuatro agentes y esperar lectura del cupo para estimar ampliación.
Se repartieron las primeras100 filas originales en cuatro grupos de25: tres auxiliares y coordinador.
Revisión de traducciones/categoría/género/sentidos consultando diccionarios editoriales independientes de WikDict.
Informes individuales y metodología en docs/reviews. Se distinguen errores, propuestas de adecuación y dudas.
Sin cambios de datos, ejercicios, etiquetas, dependencias o progreso. No se presentan como100 entradas aprobadas.
Se comprobó cobertura de filas/índices; hooks de commit/push mantienen las pruebas de código existentes.
No se midieron tokens ni cupo: solo el propietario ve su medidor. Inicio declarado93%; falta lectura final.
Siguiente paso: esperar medición/decisión del propietario. Para integrar propuestas, mecanismo reproducible y pruebas de ejercicios.

## 2026-10-26 — Integración editorial económica y header compacto

Solicitud: priorizar vocabulario fiable, ahorrar tokens y reducir espaciado del header.
Sin nuevos subagentes/búsquedas: reutilizada evidencia del piloto. src/vocabulary-corrections.js define 46 ajustes/notas,
consumidos por vocabulary.js/content.js: sentidos acotados, POS partícula en nicht, definiciones coherentes y notas.
App muestra notas escapadas; learning.js las añade al feedback. Tupla opcional de quinta posición conserva compatibilidad.
Importación sin cambios; IDs/orden/progreso conservados. No se recalifican logros ni se eliminan etiquetas pendientes.
Header88→64px/padding de 8 px; main superior44→28px. Sin dependencias ni nueva infraestructura.
25 pruebas aprobadas y build de 13 recursos; capturas Edge escritorio oscuro/lección móvil clara de 375 px. No CDP completo.
Registro de aplicación, fuentes y límites en reviews/APPLIED_CORRECTIONS.md. Hooks existentes ejecutan nuevas pruebas.
Próximo paso: reiniciar servidor para nuevo módulo y probar; continuar revisión selectiva, no una auditoría total afirmada.

## 2026-10-26 — Botón de tema más compacto
Petición: reducir botón y explicar notas de uso. src/style.css: botón48→44px con min-height explícito, SVG22→18px; comportamiento/etiquetas intactos. Notas de uso son aclaraciones de contexto, no actividades ni aprobaciones lingüísticas. Hooks ejecutan las25 pruebas existentes; sin nuevas dependencias, pruebas específicas o capturas para este ajuste CSS.

Ajuste visual posterior: el propietario no percibió la reducción anterior. El botón conserva área táctil invisible de 44 px, pero el fondo visible ahora es de 28 px, sin contorno, y el icono de 16 px. Solo CSS; comportamiento y foco conservados.

## 2026-10-26 — Lote 101–200 con consumo acotado

Petición: continuar revisión. Ante necesidad de controlar cupo, propietario eligió otras 100 y detenerse.
Sin subagentes: contraste nuclear/casos visibles en Langenscheidt, Duden/PONS para excepciones, fuentes por fila.
Resultado: 64 sin incidencia nuclear, 33 ajustes de sentido/categoría/contexto aplicados,3 dudas (scheiße,Kerl,je).
Se registra alcance limitado: no todas las variantes/paradigmas. Fuentes inaccesibles o homógrafos insuficientes quedan señalados.
Capa editorial alcanza 79 registros. Archivo importado, IDs, progreso y UI intactos. Nueva regresión de fragmentos/traducciones.
26 pruebas aprobadas y build de 13 recursos; hooks vigentes. Sin nueva captura para cambios de datos.
Informe reviews/LEX-101-200.md; contexto actualizado. Próximo paso: lectura de porcentaje del propietario; no seguir 201 sin instrucción.
