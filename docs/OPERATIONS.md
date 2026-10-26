# Operación, comprobaciones y diagnóstico

Aplicable a la base 0.3.0. Comandos desde la raíz del repositorio, salvo indicación contraria.

## 1. Entornos y portabilidad

- Carpeta de trabajo original: `C:\Users\Yohaldo\Documents\Trabajos\Vokal`.
- Remoto: `https://github.com/Yukimaed27/Vokal.git`.
- Rama actual de trabajo: `main`.
- Node mínimo: 22. Entorno Windows usado: Node 22.22.3, Git 2.51.0.windows.1, Corepack 0.34.6.
- Gestor del proyecto: pnpm 11.28.6 fijado en package.json; no actualizarlo solo porque aparezca un aviso de nueva versión.
- No hay dependencias externas. Instalar prepara/verifica el lockfile y la configuración, no un framework.
- La carpeta de Linux puede ser distinta; no copiar rutas absolutas de Windows dentro del código.
- Los archivos de texto usan LF. Los hooks son ejecutables en Git.

Las skills de Codex no son dependencias de ejecución. En la computadora original se usaron grill-me/grilling,
ponytail, caveman y UI UX Pro Max. Otro agente puede leer las decisiones y continuar sin instalarlas.
Grill-me invocaba una dependencia grilling que fue instalada después; no ejecutar comandos npx arbitrarios para poder abrir Vokal.

## 2. Primera instalación

### Windows PowerShell

```powershell
Set-Location 'C:\Users\Yohaldo\Documents\Trabajos'
git clone https://github.com/Yukimaed27/Vokal.git
Set-Location Vokal
corepack enable
pnpm install --frozen-lockfile --ignore-scripts
pnpm prepare
pnpm check
pnpm dev
```

Si esa carpeta ya existe con el proyecto, no clones encima: entra, revisa git status y sigue el procedimiento para una copia existente.
Corepack enable puede necesitar permisos según cómo se instaló Node; si pnpm ya está disponible no hay que reconfigurar su shim.
No repares el entorno desactivando controles de seguridad o instalando una versión global distinta sin revisar.

### Linux

```sh
mkdir -p ~/Projects
cd ~/Projects
git clone https://github.com/Yukimaed27/Vokal.git
cd Vokal
corepack enable
pnpm install --frozen-lockfile --ignore-scripts
pnpm prepare
pnpm check
pnpm dev
```

Requiere una instalación de Node 22+ con Corepack disponible. Si la distribución no incluye Corepack,
resolver esa instalación con instrucciones oficiales vigentes antes de tocar la aplicación.
No usar sudo indiscriminadamente sobre el repositorio ni cambiar permisos de archivos del usuario.

## 3. Continuar en una copia existente

```sh
git status --short
git pull --ff-only
pnpm install --frozen-lockfile --ignore-scripts
pnpm prepare
```

Haz pull después de comprobar que no hay trabajo local que deba preservarse.
Si hay divergencia, revisa commits/cambios antes de integrar. No uses reset --hard como forma de cambiar de laptop.
Lee HANDOFF/STATUS tras actualizar para conocer lo último que dejó el otro agente.

`pnpm prepare` configura `core.hooksPath=.githooks` en esta copia. Git no instala hooks al clonar.
La opción `--ignore-scripts` de instalación también evita el prepare automático, por eso se ejecuta explícitamente.

## 4. Comandos disponibles

| Comando | Resultado |
| --- | --- |
| `pnpm dev` | Servidor local en http://localhost:3000 |
| `pnpm check` | Sintaxis de módulos de src/scripts y todas las pruebas Node |
| `pnpm test` | Solo pruebas Node |
| `pnpm audit:deps` | Auditoría de dependencias; falla desde severidad low |
| `pnpm audit --json` | Informe estructurado para registrar alcance y resultado |
| `pnpm build` | Genera dist con archivos públicos y configuración validada |
| `pnpm prepare` | Activa hooks del repositorio en esta copia |
| `node scripts/browser-check.mjs` | QA con un Chromium desechable ya iniciado en puerto 9223 |

Detén únicamente tu servidor con Ctrl+C en su terminal. No mates todos los procesos Node del equipo.
No abras el index.html como file://: los módulos y solicitudes deben pasar por HTTP/HTTPS.

## 5. Verificaciones existentes y su alcance

### Node

Hay 22 pruebas: las 15 de la base anterior, tres de tema/contraste y cuatro del catálogo de 5000 lemas. Cubren corrección, intervalos, validación y migración de estado, contenido coherente, bloqueos,
combinación de dos avances, configuración de nube, OTP y autorización simulados, renovación concurrente en una instancia,
fallos de red/cierre de sesión y ocultación de recursos privados del servidor.

Los tests de nube simulan fetch. No ejecutan SQL ni prueban un proveedor real.
Se prueba restaurar 5000 repasos y que caben bajo el límite de la RPC; eso no es una prueba de carga de producción.
No hay pruebas de pronunciación, validación lingüística humana, accesibilidad completa o reanudación de ejercicios.

### Navegador sin paquetes de pruebas

La comprobación usa Edge/Chromium instalado, su DevTools Protocol y WebSocket nativo de Node.
No requiere instalar Playwright, Selenium ni paquetes del registro.

Requisitos: un servidor de Vokal activo y un navegador con **perfil temporal exclusivo**, depuración en 9223 y sin sesiones reales.
El script usa por defecto http://localhost:3000/; acepta otra URL como primer argumento para no interferir con un servidor del propietario.
Nunca conectes este script al perfil habitual del propietario: modifica el progreso de prueba y cierra el navegador de QA al terminar.
El script no está diseñado para conservar datos personales.

Ejemplo PowerShell para el navegador Edge instalado en la ruta habitual:

```powershell
$vokalQaProfile = Join-Path $env:TEMP ('vokal-qa-' + [guid]::NewGuid().ToString())
Start-Process -FilePath 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' -ArgumentList @('--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9223',('--user-data-dir=' + $vokalQaProfile),'about:blank') -WindowStyle Hidden
node scripts/browser-check.mjs
```

En Linux utiliza un Chromium disponible con esos puertos y un directorio temporal exclusivo; no lo instales solo para repetir una verificación documental.
El script espera brevemente el arranque del puerto. Escribe capturas en `.qa/`, que no se versiona.
La comprobación de cuenta se adapta a configuración activa/inactiva y no envía correos ni inicia una sesión real.
En la revisión 0.2.1 no pudo repetirse la parte visual: la revisión automática bloqueó iniciar el navegador, sin motivo más específico.
Se completó la verificación local mediante HTTP; la QA visual anterior sigue correspondiendo a 0.2.0.

Recorridos comprobados:

1. Tema inicial del sistema y botón sol/luna; preferencia manual conservada al recargar.
2. Práctica aprobada de saludos y persistencia de progreso (recorrido CDP disponible).
3. Evaluación de primeros pasos aprobada y desbloqueo de siguiente sección.
4. Evaluación de siguiente sección reprobada, sin abrir la posterior.
5. Bloqueo por URL directa, búsqueda y estado de cuenta sin nube.
6. Contraste de tokens de texto/botones/estados en ambos temas.
7. Pantalla de inicio a 1440×1000, 375×812 y 812×375, sin desbordamiento horizontal.

Este recorrido no es una auditoría exhaustiva de todas las pantallas o tecnologías de asistencia.

### GitHub Actions

El workflow Comprobaciones corre en push y pull_request, con ubuntu-latest y windows-latest.
Instala el lockfile sin scripts, ejecuta check, auditoría y build. Las acciones están fijadas por SHA.
Entrega funcional comprobada: [run 40240554393](https://github.com/Yukimaed27/Vokal/actions/runs/40240554393), resultado success.
Cada entrega posterior necesita consultar su propio resultado; el éxito anterior no certifica archivos nuevos.

## 6. Build y publicación

`pnpm build` crea doce archivos públicos en dist, incluidos vocabulary.js y vocabulary-data.js. El módulo de configuración se genera con valores públicos.
No se copian documentación, SQL, .git, variables privadas ni el archivo config.local.js íntegro.
El build no limpia archivos preexistentes del directorio: revisa dist si se reutilizó para otros fines.
La carpeta dist se ignora en Git y puede regenerarse en otra laptop.

El workflow Publicar web es manual. Necesita Pages con origen GitHub Actions.
SUPABASE_URL y SUPABASE_PUBLISHABLE_KEY permiten sobrescribir el proyecto.
Si faltan o están vacías, se usan los identificadores públicos versionados en src/config.js.
Leer CLOUD para configurar y verificar; no declarar un sitio publicado solo porque existe el YAML.

## 7. Qué no se sincroniza por Git

| Elemento | Cómo recuperarlo en otra computadora |
| --- | --- |
| Código/documentación con commit y push | git pull |
| Cambios sin commit/push | No están en GitHub; deben guardarse antes de cambiar de equipo |
| Progreso de invitado | Está en el navegador original; no migra por clonar |
| Progreso de cuenta | Se recuperará tras activar la nube y entrar con la misma cuenta |
| URL/clave pública | El proyecto Vokal se hereda de src/config.js; recrear config.local.js solo para sobrescrituras locales |
| Contraseña PostgreSQL/tokens | Gestor privado; nunca documentación ni Git |
| Apariencia | Preferencia de cada navegador, no de la nube |
| Capturas QA/dist | Regenerar si hace falta |
| Skills de Codex | Opcionales para colaborar; su instalación es externa al repositorio |

## 8. Diagnóstico frecuente

| Síntoma | Qué revisar primero |
| --- | --- |
| pnpm no existe | Node/Corepack y shim; consultar versión fijada antes de instalar |
| El lockfile no coincide | Revisar diff de package/workspace/lock; no omitir frozen-lockfile sin explicar el cambio |
| Puerto 3000 ocupado | Identificar el proceso y su dueño; puede ser el servidor del propietario |
| Aparece progreso local | Configuración vacía, sesión ausente o nube todavía sin conectar |
| Cambié config.local.js y no se refleja | Reiniciar pnpm dev; la configuración se carga al arrancar |
| Build ignora el valor local | Revisar si una variable de entorno no vacía lo sobrescribe; las vacías ahora se ignoran |
| No llega el código | Plantillas OTP, destinatario autorizado, carpeta de spam y límite SMTP; ver CLOUD |
| Error al ejecutar SQL otra vez | Políticas ya existentes; revisar qué se creó antes de repetir o borrar nada |
| Datos no aparecen en otro equipo | Misma cuenta/proyecto, RPC, resultado de guardado y conexión; no confundir caché con nube |
| Una palabra correcta se rechaza | Lista de answers y normalización; no hay corrección semántica libre |
| Un nivel está bloqueado | Todas las lecciones de secciones anteriores deben figurar en completed |
| Los hooks no corren | pnpm prepare en esta copia y git config --get core.hooksPath |
| CI está en cola o falla | Abrir el run de ese commit y registrar el resultado real en STATUS/HANDOFF |
| Se cambió de laptop y falta contexto | Verificar push y pull antes de reconstruir decisiones desde cero |

Antes de modificar datos, borrar caché, reinstalar herramientas o eliminar un directorio, determina si hay trabajo/progreso que preservar.
No publiques respuestas autenticadas completas para diagnosticar. Copia solo el error necesario, sin secretos.

## 9. Catálogo y validación visual de 0.3.0

El catálogo de 5000 lemas ya está versionado: Python solo se necesita para regenerarlo.
Consulta VOCABULARY_SOURCES para fuentes fijadas, hashes, licencia, filtros y comandos del importador.
No edites el módulo generado sin mantener una regeneración o corrección reproducible.
El archivo tiene aproximadamente 1.3 MB sin comprimir; se carga una vez con los módulos y las vistas paginan 24 resultados.

Reinicia pnpm dev al actualizar esta entrega: el proceso anterior conserva en memoria la lista de archivos públicos sin los dos módulos nuevos.
No detener el servidor del propietario automáticamente; indicar Ctrl+C y pnpm dev en su terminal.

En esta entrega se usó captura nativa de Edge en perfiles temporales, sin puerto de depuración.
Para anchos pequeños, Edge puede imponer un ancho de ventana superior al solicitado. No interpretar una imagen recortada como overflow real.
Se utilizó un marco local de QA de 375 px y se registró innerWidth=375/documentWidth=360; en escritorio 1440/1425.
El marco solo existió en .qa, no se sirve ni se incluye en dist. No se relajaron cabeceras de producción.
Se revisaron inicio claro/oscuro y ruta de vocabulario; el contraste se prueba también por cálculo.
El script CDP fue actualizado al botón sol/luna único y a los recorridos del catálogo, pero no se ejecutó íntegramente en esta entrega.

No hace falta instalar paquetes de navegador para usar el catálogo. Si la infraestructura no permite una prueba visual,
registrar el límite y completar las comprobaciones seguras disponibles sin eludir el bloqueo.
