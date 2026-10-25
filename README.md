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

## Qué incluye

- Temas oscuro y claro en tonos burdeos/morado. Detecta el sistema; puedes cambiarlo y guardar tu elección.
- 31 lecciones distribuidas en 15 secciones A1–C1, con 372 entradas únicas y 781 ejercicios.
- Teoría, explicación gramatical, diálogos traducidos y ejemplos contextualizados.
- Comprensión y escritura. Alcanzar un 80 % permite dominar la lección; completar una sección abre la siguiente.
- Evaluaciones de sección para saltar conocimientos ya dominados y repasos por palabra.
- Búsqueda de vocabulario por texto/nivel con paginación.
- Integración de nube preparada: correo con código, progreso por usuario y combinación entre dispositivos.

La ruta es una base ampliada en desarrollo, no un curso completo ni una certificación A1–C1.
El catálogo de 10 000 palabras sigue pendiente. Las 372 entradas incluyen palabras y expresiones.
El material requiere revisión lingüística externa. No hay todavía audio ni evaluación automática del habla.
Las sesiones apuntan a 20–30 minutos, pero no imponemos una duración artificial.

## Nube y publicación

Sin iniciar sesión, el progreso permanece en este navegador. No se muestra como sincronizado.
Sigue [la guía de nube](docs/CLOUD.md) para completar el acceso por correo, verificar la sincronización y publicar con GitHub Pages.
El proyecto Supabase ya está configurado con sus identificadores públicos en el repositorio.
La API responde y rechaza acceso sin sesión. Falta configurar/probar OTP y comprobar el guardado con una cuenta real.
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
- [Cambios](CHANGELOG.md)
