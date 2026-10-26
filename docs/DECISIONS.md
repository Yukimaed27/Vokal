# Decisiones acordadas

- Público: principiantes hispanohablantes; inicialmente el propietario y 2–3 probadores.
- Propósito: desenvolverse en Alemania con respeto por su cultura; viaje, conversación y trabajo.
- Ruta: básico, intermedio y avanzado. B2 es el primer objetivo completo; C1, la continuación.
- Sesiones de 20–30 minutos sin castigos por faltar.
- Explicación antes de practicar, ejemplos, diálogos, evaluación y repasos según errores.
- Secciones progresivas dentro de cada nivel; dominio del 80 % para desbloquear la siguiente.
- Se puede demostrar dominio mediante evaluación de sección, sin repetir todas sus lecciones.
- Web adaptable. Nube con cuenta individual; internet requerido inicialmente.
- Meta de 10 000 palabras, ampliable a 25 000. El catálogo actual es una base, no el objetivo cumplido.
- Primero aprendizaje y base didáctica; después audio/pronunciación. Evitar costos de IA.
- GitHub conserva código y contexto. El progreso personal no se versiona en Git.
- Cada avance debe dejar comunicación asíncrona detallada en Markdown para otra sesión/IA/laptop.
  HANDOFF y STATUS mantienen el presente; SESSION_LOG conserva historia; el detalle técnico se consulta bajo demanda.
  La actualización de contexto es parte de terminar cada tarea, no una mejora opcional.

## Cambios solicitados en 0.2.0
- Conservar diseño y distribución; sustituir verde/lima por tonos oscuros burdeos, rojo y morado.
- Detectar tema del sistema, permitir noche/claro y recordar elección manual.
- Migrar de npm a pnpm y revisar dependencias/avisos de seguridad.
- Ampliar contenido y secciones; no representar niveles vacíos como disponibles.
- Preparar nube gratuita. El propietario confirmó que aún no tiene Supabase: dejarlo preparado.

## Implementación
- HTML/CSS/JavaScript y Node para herramientas; sin dependencias externas.
- pnpm 11.28.6 fijado, publicado el 2026-10-15. Configuración de seguridad y lockfile en Git.
- Supabase REST: OTP por correo, caché por usuario y sincronización transaccional en PostgreSQL con RLS.
- Entrada de invitados separada. Importar progreso de invitado requiere una elección explícita.
- Los logros se combinan por unión; los repasos y resultados se resuelven por su marca de modificación.
- GitHub Pages preparado mediante publicación manual, sin activar alojamientos ni costos.
- UI UX Pro Max: guía de contraste consultada; la paleta final adapta la preferencia del propietario.

## Continuidad y Supabase: actualización posterior

El propietario pidió ampliar la documentación de todo lo realizado y mantenerla siempre al día.
Se estableció el protocolo permanente en AGENTS y WORKFLOW, con índice, traspaso, arquitectura, operación e historial.
La documentación es Markdown versionado; no depende de skills de una computadora ni de memoria del modelo.

Aclaración del propietario: no documentar pasos menores de navegación ni conversaciones incidentales.
Mantener contexto técnico suficiente, sin convertirlo en una bitácora de clics.
La siguiente tarea de nube es verificar un acceso real y su progreso; no asumir que la configuración pública demuestra aislamiento entre cuentas.
Se conserva la preferencia por costo cero; no hay autorización para contratar planes ni complementos de pago.

## Conexión pública en 0.2.1

El propietario proporcionó la URL y una clave publishable de su proyecto para conectarlo.
Se guardan en src/config.js porque son identificadores del frontend, no secretos administrativos, y permiten continuar desde otra laptop.
No se reproducen en el diario ni se añaden contraseñas o tokens. La separación de usuarios depende de autenticación/RLS.
Las variables de entorno no vacías siguen permitiendo sobrescribirlos; una variable de Pages ausente/vacía no debe desconectarlos.
El acceso por correo y el guardado deben verificarse con el propietario sin solicitar su OTP.

## Acceso por GitHub

Se eligió GitHub OAuth para evitar el requisito de SMTP de plantillas OTP. El proveedor está habilitado y verificado por API.
La integración en Vokal aún está pendiente; Client Secret permanece exclusivamente en Supabase.

## Rediseño y alcance inmediato en 0.3.0

El propietario rechazó el tono guindo y la duplicidad botón/selector. Se usa carbón/rojo coral, claro neutro y un solo selector con modo automático.
Se mejora el inicio con iconos, tarjeta de estudio, plan de sesión y progreso real, manteniendo implementación nativa sin dependencias.
La guía UI UX Pro Max recomendó jerarquía/tarjetas de dashboard; la paleta se adaptó a la preferencia explícita del propietario.

Pidió 5000 palabras para la entrega inmediata y aceptó expresamente catálogo utilizable con traducción/ejercicios y revisión indicada.
Se cumple con 5000 lemas de FreeDict/WikDict priorizados por FrequencyWords, atribución y licencia visibles.
La ruta de vocabulario es independiente del curso y no recibe nivel MCER ficticio. No se promete revisión humana ni 5000 ejemplos completos.
