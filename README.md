# Vokal

Alemán práctico para hispanohablantes. Comprende, conversa, escribe y repasa sin penalizaciones por faltar.

## Retomar desde otra IA o computadora

Empieza por [el traspaso activo](docs/HANDOFF.md) y [el índice del contexto](docs/README.md).
El proyecto conserva instrucciones, arquitectura, historial de sesiones, verificaciones y procedimientos en Markdown.
AGENTS exige actualizar ese contexto con cada avance antes de entregar o cambiar de sesión.
El chat y los archivos ignorados no sustituyen el contexto versionado.

## Ejecutar en Windows o Linux

Requiere Git, Node.js 22 o superior y Corepack/pnpm. No tiene dependencias externas.

```sh
git clone https://github.com/Yukimaed27/Vokal.git
cd Vokal
corepack enable
pnpm install --frozen-lockfile --ignore-scripts
pnpm prepare
pnpm check
pnpm dev
```

Abre http://localhost:3000. Detén el servidor con Ctrl+C. El proyecto fija pnpm 11.28.6; Corepack lo selecciona automáticamente.
Si ya clonaste el proyecto, comienza con `git pull --ff-only`.
Después de actualizar esta versión, reinicia pnpm dev para que reconozca los módulos nuevos.
Python 3 solo es necesario para regenerar el catálogo; los datos ya vienen incluidos para usar la aplicación.

## Qué incluye

- Diseño carbón/rojo coral y modo claro neutro. Un único selector automático/oscuro/claro, con preferencia persistente.
- Curso guiado: 31 lecciones y 15 secciones A1–C1.
- Catálogo añadido: 5000 lemas con traducción y ejercicios, en 25 secciones de 200 palabras y bloques de 25.
- Total: 231 lecciones, 40 secciones, 5184 entradas y 10 981 ejercicios. Vocabulario accesible sin completar C1.
- Teoría, explicación gramatical, diálogos traducidos y ejemplos contextualizados.
- Comprensión y escritura. Alcanzar un 80 % permite dominar la lección; completar una sección abre la siguiente.
- Evaluaciones de sección para saltar conocimientos ya dominados y repasos por palabra.
- Búsqueda de vocabulario por texto/nivel con paginación.
- Integración de nube preparada: correo con código, progreso por usuario y combinación entre dispositivos.

La ruta es una base ampliada en desarrollo, no un curso completo ni una certificación A1–C1.
Los 5000 lemas importados son utilizables con práctica y revisión pendiente indicada; no están revisados manualmente uno por uno.
La meta de 10 000 sigue pendiente. Las entradas del curso incluyen palabras y expresiones; no se suman como lemas para inflar la meta.
El material requiere revisión lingüística externa. No hay todavía audio ni evaluación automática del habla.
Las sesiones apuntan a 20–30 minutos, pero no imponemos una duración artificial.

## Nube y publicación

Sin iniciar sesión, el progreso permanece en este navegador. No se muestra como sincronizado.
Sigue [la guía de nube](docs/CLOUD.md) para completar el acceso GitHub, verificar la sincronización y publicar con GitHub Pages.
El proyecto Supabase ya está configurado con sus identificadores públicos en el repositorio.
La API responde y rechaza acceso sin sesión. El proveedor GitHub está habilitado, pero falta su botón/flujo en Vokal y comprobar el guardado con una cuenta real.
No hay un despliegue público verificado.

`pnpm build` genera únicamente los archivos públicos en `dist/`. No subas documentos, credenciales o datos personales como archivos estáticos.

## Continuar desde otro equipo

Antes: `git pull --ff-only`, lee [STATUS](docs/STATUS.md) y ejecuta `pnpm install --frozen-lockfile --ignore-scripts` y `pnpm prepare`.
Después: `pnpm check`, actualiza documentos, crea un commit descriptivo y ejecuta `git push`.
Los cambios sin commit/push no aparecen en otro equipo. El progreso del alumno viaja por la nube, no por Git.

Los hooks ejecutan comprobaciones antes de commit y push. GitHub Actions verifica Windows/Linux, auditoría y build.
No hay que volver a instalar las skills para ejecutar la aplicación; las skills solo ayudan durante el desarrollo.

- [Decisiones](docs/DECISIONS.md)
- [Estado actual](docs/STATUS.md)
- [Traspaso para otra sesión](docs/HANDOFF.md)
- [Índice de documentación](docs/README.md)
- [Historial de sesiones](docs/SESSION_LOG.md)
- [Arquitectura y contratos](docs/ARCHITECTURE.md)
- [Operación Windows/Linux](docs/OPERATIONS.md)
- [Protocolo de actualización](docs/WORKFLOW.md)
- [Hoja de ruta](docs/ROADMAP.md)
- [Revisión de seguridad](docs/SECURITY.md)
- [Contenido y ampliación](docs/CONTENT.md)
- [Fuentes y licencia de los 5000 lemas](docs/VOCABULARY_SOURCES.md)
- [Cambios](CHANGELOG.md)
