# Hoja de ruta

## Base y refinamientos
- [x] Estructura portable, documentación, hooks y CI.
- [x] Negro con rosa/amarillo suave, modo claro neutro y botón sol/luna con detección inicial del sistema; inicio y navegación refinados.
- [x] Migración a pnpm y revisión de paquetes/avisos publicados.
- [x] 15 secciones y 31 lecciones con teoría, diálogos y 781 ejercicios.
- [x] Desbloqueo progresivo con umbral del 80 % y evaluaciones por sección.
- [x] Repasos por palabra y conservación de progreso anterior.
- [x] Validación en navegador y tamaños de celular, horizontal y escritorio.
- [x] Contexto asíncrono detallado: índice, traspaso, arquitectura, operación, diario y protocolo obligatorio en AGENTS.
- [ ] Revisión lingüística externa y prueba con el propietario.

## Acceso real entre dispositivos
- [x] Preparar integración REST de Supabase sin dependencias externas.
- [x] Preparar esquema, políticas RLS y combinación transaccional.
- [x] Preparar build estático y workflow de GitHub Pages.
- [x] Configurar identificadores públicos del proyecto y comprobar API real y rechazo de acceso anónimo.
- [x] Elegir GitHub y habilitar su proveedor en Supabase; external.github=true verificado por API.
- [ ] Implementar botón y flujo GitHub OAuth en Vokal; probar redirección y sesión real.
- [x] Migración aplicada según el propietario; API de tabla/RPC rechaza acceso sin sesión.
- [ ] Probar restricciones de RLS con dos cuentas reales.
- [ ] Comprobar conflictos, recuperación y sincronización en dos dispositivos.
- [ ] Publicar y verificar la web desplegada.

## Catálogo inmediato
- [x] 5000 lemas con traducciones españolas, licencia/procedencia y revisión pendiente indicada.
- [x] 25 secciones de 200 palabras, 200 bloques de 25 y práctica por término.
- [x] Ruta de vocabulario independiente del curso, manteniendo desbloqueo propio.
- [x] Pruebas de conteo, cobertura, unicidad, restauración y tamaño de progreso.
- [ ] Revisión lingüística humana y ejemplos/contextos específicos adicionales por lotes.

## Curso completo
- [ ] Ampliar currículo A1/A2, con evaluación de lectura, escritura, escucha y habla.
- [ ] Revisión de cada lote y registro de fuentes/licencias si se incorpora material externo.
- [ ] Evaluación inicial global que permita situarse en la ruta, aparte de las pruebas de sección.
- [ ] Audio y práctica de pronunciación, después de validar la base.
- [ ] Completar B1/B2 con tareas abiertas y comprobación práctica del dominio.
- [ ] Alcanzar 10 000 lemas revisados y contextualizados, sin inflar flexiones ni expresiones.
- [ ] Completar C1 y ampliar a 25 000 según utilidad y calidad.

Los nombres A1–C1 describen la intención de la ruta. La cantidad de palabras y los tests de vocabulario no certifican esos niveles.

- [x] Revisión 2026-10-26: esquinas suavizadas, negro con rosa/amarillo suave, botón sol/luna y textos sin promoción de cantidad.

- [x] Segunda revisión: negro con acentos rosa/amarillo suave, claro piedra, tarjetas sin contorno y hero adaptado a ambos temas.

- [x] Piloto: auditoría IA documentada de las primeras 100 entradas, cuatro participantes y fuentes por fila.
- [x] Integrar propuestas claras del piloto con mecanismo reproducible, sin retirar etiquetas prematuramente; dudas restantes abiertas.

- [x] Integrar46 ajustes/notas del piloto con capa reproducible, feedback contextual y pruebas de preservación de IDs.
- [x] Compactar header a 64 px sin reducir el botón de tema.
- [ ] Completar revisión de dudas/sentidos restantes; priorizar siguientes lotes por riesgo, sin certificación prematura.

- [x] Compactar botón sol/luna a 44px e icono18px conservando accesibilidad.

- [x] Revisar 101–200 con un revisor y aplicar 33 ajustes conservadores; 3 dudas abiertas.
- [ ] Esperar lectura de consumo antes de continuar 201–300.

- [x] Examinar 201–500 con fuentes, integrar 92 ajustes/notas y documentar 21 contrastes parciales/1 duda.
- [x] Alinear artículo/género/ejemplo del sentido elegido, preservando IDs/progreso.
- [x] Comprobar cobertura documental de 300 índices desde la suite ejecutada por hooks.
- [ ] Corroborar absolut y profundizar contrastes parciales; esperar medición antes de 501–600.
