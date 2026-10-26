# Revisión de dependencias y herramientas

Revisado: 2026-10-25. Alcance: este repositorio y el gestor seleccionado; no es una auditoría del equipo completo.

## Qué se había instalado

La versión 0.1.0 utilizaba `npm run` para ejecutar scripts propios, pero no había instalado paquetes del registro npm.
`npm ls --all --json` mostraba solo el proyecto: sin dependencias directas, transitivas o de desarrollo.
Tampoco había `node_modules`, `package-lock.json` ni dependencias en `package.json`.
Las skills se descargaron desde GitHub mediante el instalador Python; no se ejecutó el comando npx sugerido inicialmente.

No hay una lista de paquetes de aplicación sobre la que atribuir incidentes históricos. La ausencia de dependencias reduce
esa superficie; no demuestra que toda la aplicación, Node, una skill o el sistema operativo estén libres de riesgos.

## Resultado actual

`pnpm audit --json` devuelve cero dependencias y cero vulnerabilidades conocidas (info/low/moderate/high/critical).
No se han añadido SDKs, frameworks, librerías de interfaz ni paquetes de pruebas.
Las pruebas usan Node, y la comprobación visual utiliza Edge instalado y el protocolo de depuración del navegador.
Una auditoría del lockfile no inspecciona malware desconocido ni las dependencias internas del propio gestor.

## Migración a pnpm

- Versión fijada: **11.28.6**, publicada el 2026-10-15 según el registro oficial.
- Corepack selecciona esa versión dentro del proyecto. No se cambió a ciegas el pnpm global de otros proyectos.
- `pnpm-lock.yaml` se conserva en Git; CI instala con `--frozen-lockfile --ignore-scripts`.
- `minimumReleaseAge: 10080`: espera de siete días para resolver nuevas versiones de dependencias.
- `strictDepBuilds: true` y `allowBuilds: {}`: ninguna dependencia tiene permiso para ejecutar compilaciones de instalación.
- `blockExoticSubdeps: true`: evita fuentes exóticas en dependencias transitivas.
- `verifyStoreIntegrity: true` y versiones exactas al añadir dependencias.
- Hooks, documentación, CI y build usan pnpm.
- Acciones de GitHub fijadas a SHA en vez de etiquetas flotantes; permisos reducidos a lo necesario.

pnpm no garantiza por sí solo la ausencia de paquetes comprometidos. Estas medidas reducen oportunidades de ejecución y actualización inesperadas.
No desactives controles para silenciar un warning: investiga primero qué paquete lo produce y por qué necesita ejecutarse.

## Datos externos de vocabulario en 0.3.0

No se añadieron paquetes npm ni Python. El importador usa la biblioteca estándar y trata las descargas como datos, no como código.
FreeDict y FrequencyWords están fijados a versión/commit y checksum; se comprueban antes del análisis.
El miembro TEI se lee en memoria y no se extraen rutas del tar al sistema de archivos.
El resultado JavaScript se genera serializando JSON; no se ejecuta contenido recibido del diccionario.
Los textos se escapan al renderizar tarjetas, opciones y definiciones. Licencias/procedencia: VOCABULARY_SOURCES.
La protección de anonimato/RLS no cambió; la nueva prueba de 5000 repasos confirma que el JSON cabe bajo el límite actual de la RPC.

## Historial de avisos consultado

Se consultó la [lista oficial de avisos de pnpm](https://github.com/pnpm/pnpm/security/advisories) y sus rangos afectados.
Existen incidentes publicados; no se presenta pnpm como un gestor sin vulnerabilidades históricas.

Ejemplos revisados:

| Aviso | Problema | Corrección en la rama 11 |
| --- | --- | --- |
| [GHSA-vq4v-j7r6-jq4m](https://github.com/pnpm/pnpm/security/advisories/GHSA-vq4v-j7r6-jq4m) | Escritura fuera del destino mediante nombre de dependencia | 11.11.0 |
| [GHSA-c59q-g84q-2gj5](https://github.com/pnpm/pnpm/security/advisories/GHSA-c59q-g84q-2gj5) | Recorrido de rutas en el enlazador | 11.11.0 |
| [GHSA-vx52-2968-3vc6](https://github.com/pnpm/pnpm/security/advisories/GHSA-vx52-2968-3vc6) | Exposición de variables a través de configuración de proxy | 11.11.0 |
| [GHSA-hg3w-7f8c-63hp](https://github.com/pnpm/pnpm/security/advisories/GHSA-hg3w-7f8c-63hp) | Integridad de descargas de codeload | 11.0.7 |

La versión 11.28.6 está fuera de los rangos afectados publicados consultados en esta revisión.
No se afirma ausencia de vulnerabilidades futuras o no publicadas.

## Configuración pública conectada en 0.2.1

La URL y clave publishable entregadas por el propietario se versionan en src/config.js. No es una clave secreta ni service_role.
Supabase documenta que las publishable se pueden distribuir en componentes públicos; no distinguen entre alumnos y no sustituyen RLS.
Referencia: [tipos y uso de claves](https://supabase.com/docs/guides/getting-started/api-keys).

Comprobaciones reales sin sesión: Auth settings respondió 200 y la tabla/RPC rechazaron acceso con 401/código 42501.
No se crearon cuentas, enviaron correos ni guardaron datos de alumno. El aislamiento entre dos usuarios sigue sin probarse.
Quince pruebas y build correctos. La verificación visual adicional no se ejecutó: el arranque del navegador fue rechazado por revisión automática
con el motivo blocked by policy, sin más detalle. Se completó comprobación HTTP del servidor/configuración, sin reintentar el arranque bloqueado.

Referencias: [mitigación de ataques de suministro](https://pnpm.io/supply-chain-security),
[configuración](https://pnpm.io/settings), [metadatos oficiales de pnpm 11.28.6](https://registry.npmjs.org/pnpm/11.28.6).

## Antes de añadir un paquete

Comprueba que sea necesario, su origen, licencia, avisos publicados y dependencias transitivas.
Usa una versión exacta, revisa el diff del lockfile y ejecuta `pnpm audit`, `pnpm check` y `pnpm build`.
La espera de siete días es un filtro, no sustituye esa revisión. Si aparece un aviso posterior, evalúa su alcance y actualiza de forma controlada.
