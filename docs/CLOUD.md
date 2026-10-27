# Activar la nube cuando estés listo

## Estado técnico actual: 0.3.0 — acceso GitHub implementado

El cliente ya ofrece «Continuar con GitHub», PKCE S256, retorno a Mi cuenta y sincronización inicial.
Verificado localmente con pruebas y Edge; pendiente completar una autorización real y comprobar dos cuentas/dispositivos.
GitHub habilitado confirmado por API (HTTP 200, external.github=true) el 2026-10-27. No prueba el secreto ni el callback.

### Prueba inmediata con el propietario

1. En Supabase → Authentication → URL Configuration, autorizar exactamente `http://localhost:3000/` en Redirect URLs.
2. En la aplicación: `http://localhost:3000/#cuenta` → «Continuar con GitHub». Autorizar en la misma pestaña.
3. El callback de la OAuth App de GitHub sigue siendo `https://kgdqpilfitmknkautbhh.supabase.co/auth/v1/callback`.
   No sustituirlo por localhost. Las credenciales del proveedor se guardan solo en Supabase.
4. Al volver debe aparecer «Guardado en la nube». El progreso de invitado se importa únicamente por decisión explícita.
5. Completar una práctica, abrir otra sesión/dispositivo con la misma cuenta y comprobar su aparición.
   Probar también dos cuentas distintas para verificar aislamiento RLS y recuperación tras desconexión.

Para Pages autorizar después la URL exacta de despliegue terminada en `/Vokal/`; el código conserva esa subruta.
No enviar tokens, secretos ni códigos de retorno al chat. Si falla, compartir únicamente el mensaje visible.
El código OAuth se elimina de la barra antes del intercambio. El verificador vive en sessionStorage de esa pestaña,
caduca localmente a los diez minutos y se elimina tras éxito o cancelación. Una nueva solicitud reemplaza la anterior.
Solo se guardan tokens de Supabase, expiración e identidad mínima; no tokens del proveedor GitHub.
La renovación pendiente no puede restaurar una sesión cerrada. Las cachés locales de invitado/cuenta siguen separadas.

El resto de esta guía describe preparación e historia del método por correo; la interfaz vigente usa GitHub.

El proyecto Vokal está configurado en src/config.js con URL y clave publishable públicas. No hay claves administrativas.
La API de autenticación responde y el proveedor email está habilitado, con confirmaciones activas.
El propietario informó SQL ejecutado sin errores; tabla y RPC rechazaron solicitudes sin sesión (401, código 42501).
Faltan primer acceso real, pruebas autenticadas y sincronización entre dispositivos; OTP no es requisito del método elegido.
Sin iniciar sesión, el progreso sigue siendo local. No se ha publicado la web ni contratado un servicio.


## 1. Crear organización y proyecto desde cero

Esta sección es una guía de instalación reutilizable, no un registro de la navegación del propietario.

### Organización

Una organización agrupa proyectos y su plan de facturación. No necesitas constituir una empresa para usarla personalmente.

| Campo si aparece | Valor para esta primera instalación |
| --- | --- |
| Name / Nombre | Vokal, o un nombre personal identificable |
| Type / Tipo | Personal, si esa opción está disponible |
| Plan | Free, sin seleccionar Pro ni añadir extras de pago |

Pulsa **Create organization / Crear organización**.
Las etiquetas pueden variar: no cambies a un plan de pago solo porque otra pantalla tenga un diseño diferente.
Referencia: [organizaciones y planes](https://supabase.com/docs/guides/platform/billing-on-supabase).

### Proyecto

Dentro de la organización, pulsa **New project / Nuevo proyecto** si no se abre el formulario automáticamente.

| Campo | Qué elegir o hacer |
| --- | --- |
| Organization | La organización Free que acabas de crear |
| Project name | Vokal |
| Database password | Generar una contraseña fuerte y guardarla en un gestor privado |
| Region | Una región cercana a los usuarios; para pruebas desde Perú, considerar São Paulo si aparece |
| Opciones de API/seguridad | Mantener las predeterminadas mientras se revisan; Vokal necesita la Data API para su RPC REST |

La región afecta ubicación y latencia; no representa por sí sola una garantía de rendimiento.
Consulta las [regiones disponibles](https://supabase.com/docs/guides/platform/regions) si el panel ofrece grupos o regiones específicas.
La migración del proyecto habilita RLS explícitamente para la tabla de progreso.
Pulsa **Create new project / Crear proyecto** y espera a que el panel esté listo.
La contraseña de la base de datos no se pega en el chat, no se escribe en config.js y no se necesita para el login del alumno.

### Datos que necesitaremos después

1. En la configuración de conexión/API, localiza la URL `https://TU-PROYECTO.supabase.co` y la clave pública `sb_publishable_…`.
2. Según la versión del panel, la URL puede aparecer en Connect/Data API y la clave en API Keys. Comprueba los nombres, no copies el primer secreto que aparezca.
3. No uses `sb_secret_…`, `service_role`, la contraseña de PostgreSQL ni un token personal en el navegador.
4. No compartas una captura que incluya credenciales administrativas. Para conectar el frontend bastan los dos identificadores públicos.

El [plan Free](https://supabase.com/pricing) incluye actualmente 500 MB de base de datos y 50 000 usuarios activos mensuales.
Puede pausarse después de una semana sin actividad. Son límites del proveedor, no una garantía de servicio gratuito permanente.
No cambies a Pro para estas primeras pruebas.

## 2. Preparar la base de datos

En **SQL Editor**, ejecuta una vez el contenido de `supabase/migrations/001_progress.sql`.
La migración crea la tabla, habilita RLS y permite que cada sesión lea o modifique solo su propio progreso.
La función `sync_progress` combina los logros y resuelve los repasos/resultados por su marca de modificación dentro de una transacción.

La ejecución SQL fue confirmada por el propietario. No hace falta repetir la migración salvo revisión técnica: las políticas no son idempotentes.
La comprobación anónima de tabla/RPC es correcta, pero no demuestra aislamiento entre usuarios autenticados. Antes de usar datos importantes:

1. Comprueba que una solicitud sin sesión no puede leer la tabla ni llamar a `sync_progress`.
2. Con dos usuarios, verifica que A no puede consultar ni modificar la fila de B.
3. Practica desde dos dispositivos y confirma que se conservan ambos avances al sincronizar.
4. Comprueba que un error de conexión conserva la copia local y muestra estado pendiente.

## 3. Activar el código por correo

### Requisito previo: SMTP propio en proyectos Free nuevos

Desde el 3 de junio de 2026, los proyectos Free nuevos que usan el correo predeterminado de Supabase no pueden editar las plantillas.
Por tanto, la instrucción de insertar {{ .Token }} requiere primero configurar un proveedor SMTP propio.
La recomendación inicial de editar directamente las plantillas era incompleta y no debe repetirse.
Fuente: [cambio oficial de Supabase](https://supabase.com/changelog/46599-changes-to-email-template-customisation-on-free-tier).

SMTP es el servicio que envía los mensajes, no la base de datos. No hace falta contratar Pro para usar un SMTP propio,
pero sus condiciones, dominio y posibles costos deben verificarse con el proveedor antes de configurarlo.
No solicitar la contraseña SMTP ni claves secretas por chat ni guardarlas en el frontend; se configuran únicamente en Supabase.

Método elegido: acceso con GitHub mediante Supabase OAuth, sin envío de correo de acceso ni edición de plantillas.
El proveedor ya está habilitado, comprobado con Auth settings (external.github=true).
Botón y flujo OAuth implementados; falta su verificación real. El valor true no prueba Client Secret, callback ni guardado.
Referencia: [acceso con GitHub](https://supabase.com/docs/guides/auth/social-sign-in/auth-github).
No contratar servicios de correo ni cambiar de nuevo el método sin acordarlo con el propietario.

### Plantillas, después de configurar SMTP

En **Authentication**, mantén habilitado el proveedor Email y las confirmaciones.
En las plantillas de **Magic Link** y, si corresponde, **Confirm signup**, incluye el código:

```html
<h2>Tu código para Vokal</h2>
<p>{{ .Token }}</p>
```

Vokal solicita el código y lo verifica como OTP de email; no necesita recibir tokens en la URL.
Consulta la [guía oficial de OTP](https://supabase.com/docs/guides/auth/auth-email-passwordless).

**Límite relevante:** el correo integrado de Supabase solo envía a direcciones autorizadas del equipo del proyecto,
y actualmente limita los envíos a dos por hora. Para empezar, prueba con tu correo de propietario.
No concedas acceso administrativo a los probadores para sortear ese límite: para otros destinatarios configura SMTP
con un proveedor y revisa sus condiciones/precio antes de activarlo.
Fuente: [restricciones del SMTP integrado](https://supabase.com/docs/guides/auth/auth-smtp).

## 4. Conectar en tu computadora

El proyecto Vokal ya está configurado en `src/config.js`; para usarlo no hace falta crear un archivo local ni volver a copiar su clave.
Para apuntar a otro proyecto o sobrescribir la configuración en una instalación, crea `src/config.local.js` con datos **públicos**:

```js
export const cloudConfig = {
  supabaseUrl: 'https://TU-PROYECTO.supabase.co',
  supabasePublishableKey: 'sb_publishable_TU_CLAVE_PUBLICA',
};
```

Ese archivo está ignorado por Git. El servidor usa sus datos y nunca publica el archivo local completo.
Reinicia `pnpm dev`. En **Mi cuenta**, pulsa **Continuar con GitHub** y completa la autorización.
El progreso de invitado solo se importa si pulsas el botón correspondiente.
La clave pública identifica el proyecto; la protección de los datos depende de la sesión y de RLS.

En otra computadora, conecta al mismo proyecto o usa la web publicada. Accede con la misma cuenta de GitHub.
La apariencia queda en cada dispositivo; los resultados, logros y repasos se sincronizan al terminar una práctica o repaso.
Una práctica a medias no se reanuda al recargar. El cierre de sesión conserva la copia del usuario separada de la de invitado.

## 5. Publicar con GitHub Pages

El workflow está preparado y es **manual**. No se ha ejecutado.

1. En el repositorio, **Settings → Pages → Source**, elige **GitHub Actions**.
2. En **Settings → Secrets and variables → Actions → Variables**, añade `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY`.
   Son los dos identificadores públicos anteriores. Nunca añadas una clave administrativa para el frontend.
3. En **Actions**, ejecuta **Publicar web (manual)** con **Run workflow**.
4. Abre la URL que devuelva el trabajo `Publicar`; comprueba inicio de sesión y progreso en celular y computadora.

Las variables de Pages son opcionales si se utiliza el proyecto configurado en Git.
Sin ellas, o si están vacías, se mantienen los identificadores públicos de src/config.js.
La compilación rechaza claves secretas conocidas. La sincronización requiere además una sesión válida y la base configurada.
El build contiene únicamente la lista de archivos públicos. Las rutas relativas permiten alojar la web bajo `/Vokal/`.
No publiques la raíz del repositorio como si todos sus archivos fueran recursos de la aplicación.

Referencia: [workflows de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Sesiones y seguridad

Se usan solicitudes HTTPS a Supabase sin instalar un SDK. Los tokens se almacenan en el navegador para mantener la sesión,
igual que el progreso de caché, y nunca se incluyen en Git. El cierre de sesión intenta revocar solo esa sesión.
Las cuentas del navegador no protegen de alguien que tenga acceso físico a tu perfil: cierra sesión en equipos compartidos.
Las políticas SQL y los límites deben verificarse en el proyecto real antes de considerar la nube lista.
