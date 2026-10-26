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

## 2026-10-26 — Interfaz discreta y botón de tema
El propietario reemplaza su preferencia previa de coral y selector: grafito/verde pino, tarjetas cuadradas,
sol/luna como único control y cifras del catálogo fuera de titulares promocionales.
Se retiran decoración y sombras; se mantienen contraste, datos, progreso y avisos de revisión.
El modo inicial sigue al sistema; el botón guarda light/dark. No se añade una tercera acción para restablecer automático.

## 2026-10-26 — Segunda revisión: negro, pastel y superficies sin contorno
El propietario rechaza verde y tarjetas rígidas. Prefiere negro neutro con rojo rosado/amarillo suaves,
claro piedra descansado y tarjetas ligeramente redondeadas sin contorno. Sustituye la decisión anterior.
La tarjeta principal y botones deben cambiar con la paleta; no conservar colores oscuros fijos en modo claro.

## 2026-10-26 — Piloto lingüístico acotado
El propietario autoriza 100 entradas con cuatro agentes para medir consumo. Se reparten25 por participante
(incluido coordinador). No ampliar hasta nueva instrucción. Auditoría y propuestas documentadas, sin aprobación humana
ni modificación automática del catálogo. No extrapolar tasa de errores de esta muestra no aleatoria.

## 2026-10-26 — Fiabilidad con evidencia existente y bajo consumo

El propietario prioriza fiabilidad y ahorro de tokens; se integra el piloto sin nueva revisión masiva/subagentes.
Ajustes por lema fuera del archivo generado para sobrevivir a regeneración. Se acotan sentidos y añaden notas,
sin certificar entradas ni borrar progreso. Header se reduce manteniendo botón de 48 px y navegación accesible.

## 2026-10-26 — Continuación de 100 entradas, un revisor

El propietario elige explícitamente otras 100 y detenerse para medir. Alcance 101–200, sin auxiliares;
contraste nuclear con fuentes, sin certificar todas las variantes ni retirar etiquetas pendientes.
Se aplican ajustes respaldados por la capa existente, se preservan dudas y se espera medición antes de ampliar.

## 2026-10-26 — Lote 300 y límites de fiabilidad

El propietario autoriza 201–500, solicita fiabilidad total y continuidad documental. Se realiza el lote completo,
pero no se promete100% de exactitud: se conservan etiquetas y se distinguen respaldo bilingüe, monolingüe y fuente insuficiente.
Se permite corregir forma visible/género/ejemplo en la capa editorial, conservando identificadores y datos importados.
Se añaden controles de cobertura documental a la suite existente que ejecutan los hooks; no se añaden dependencias.
Se detiene después de 300 para medir consumo. Próximo índice 501; continuación requiere nueva instrucción.

## 2026-10-26 — Máxima fiabilidad sin validación humana

El propietario eligió explícitamente «fuentes contrastadas; marcar que no hay revisión humana».
Se fija umbral por sentido: corroboración bilingüe y gramatical con dos familias editoriales, fecha/URLs,
contexto delimitado y aviso IA sin revisión humana. Sin aprobación global de palabras, ejemplos o conjugaciones.
Las fichas que lo cumplen tienen sense-checked-ai; no se elimina la incertidumbre ni se promete100% de exactitud.
Se recontrastan 22 casos anteriores, no se amplía el rango examinado. Se conservan todos los IDs/progreso.

## 2026-10-26 — Pausa y preferencia de presentación

El propietario pide solo registrar para continuar en otro dispositivo. Retirar después el aviso «sin revisión humana»:
esta instrucción sustituye el requisito visual anterior. No equivale a declarar revisión humana o certeza absoluta.
Usar también foros y páginas fiables para contrastar usos/contextos, diferenciando opiniones de evidencia verificable.
No se modifica la aplicación ni se inicia otro lote durante la pausa. Prioridad siguiente:478 examinadas pendientes.
