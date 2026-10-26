# Estado para retomar

Fecha: 2026-10-26. Versión: 0.3.0.

## Fiabilidad: estado actual

Trabajo detenido a petición del propietario: solo registrar continuidad.
Nueva preferencia: retirar el texto visible «sin revisión humana» al retomar; todavía no implementado.
Usar páginas/información fiables y foros como apoyo de uso/contexto, corroborando fuentes.
Prioridad: completar criterio por sentido en las 478 examinadas aún pendientes antes de ampliar.
La implementación actual mantiene el aviso anterior y sus metadatos reales; no se modificaron datos ni UI en esta pausa.
[Política vigente](reviews/REVIEW_POLICY.md) y [22 sentidos recontrastados](reviews/RECHECK-22.md).
22 fichas tienen sense-checked-ai para el sentido mostrado, con dos fuentes, fecha y humanReviewed=false;
4978 importadas siguen pendientes. No existe aprobación humana ni se garantiza100% de exactitud.
Total 500 registros examinados históricamente (no 522); 4500 sin examen individual. Capa editorial 193 registros.
Este recontraste resuelve evidencia del sentido elegido en 21 filas antes parciales y absolut; otros sentidos,
paradigmas y dudas de lotes anteriores no se consideran aprobados por ello.
Se conservan IDs/importación/progreso. Las fichas muestran el alcance; no se certifica la lección entera.
33 pruebas aprobadas, build de 13 recursos; hooks incluyen coherencia del nuevo registro y estado de revisión.
Captura móvil de 375 px con distintivo y fuentes revisada; no CDP completo. Sin cambios de paleta/header.
Priorizar REVIEW_POLICY en material pendiente antes de ampliar; próximo rango nuevo 501 en adelante.

## Entrega visual anterior

Segunda revisión visual del 2026-10-26: negro neutro con acentos rosa/amarillo pastel, claro piedra sin blanco puro.
Tarjetas sin contorno y radio 12 px. Botón sol/luna conservado; la tarjeta principal cambia completamente con el tema.
Se corrige su paleta anterior oscura compartida, causa del salto visual brusco en modo claro.
23 pruebas aprobadas y build correcto; contraste mínimo 4.5: 1 incluido texto del hero y acento amarillo.
Capturas reales escritorio claro/oscuro y móvil oscuro revisadas. Hooks locales activos con pnpm check.
No se repitió CDP completo; las verificaciones detalladas siguientes corresponden a la ampliación anterior.

Meta acordada y cumplida: catálogo utilizable de **5000 lemas de diccionario con traducción y ejercicios**, marcado como pendiente de revisión.
El propietario aceptó ese alcance; no se prometió revisión humana completa ni un curso A1–C1 terminado.

## Contenido y comportamiento

- Curso guiado conservado: 31 lecciones, 15 secciones, 372 entradas de base.
- Ampliación: 5000 lemas únicos de FreeDict/WikDict, priorizados con FrequencyWords/OpenSubtitles2018.
- 25 secciones de 200 palabras, cada una con ocho bloques de 25: 200 lecciones de vocabulario nuevas.
- Total: 231 lecciones, 40 secciones, 5184 entradas al combinar curso y catálogo, 10 981 ejercicios.
- Los 5000 importados tienen reconocimiento y escritura; se muestra categoría/artículo y matiz de diccionario cuando está disponible.
- No se fabricaron 5000 ejemplos. Las entradas importadas sin ejemplo no se presentan como frases contextualizadas.
- Ruta LEX independiente: empieza disponible sin completar C1; mantiene desbloqueo progresivo entre sus secciones.
- Progreso y preferencias anteriores conservan claves e IDs compatibles.
- Fuente, créditos, licencia y revisión pendiente visibles en la aplicación. Detalle en VOCABULARY_SOURCES.
- Sin dependencias npm nuevas. Python estándar solo para regenerar los datos, no para ejecutar Vokal.

## Verificación de esta entrega

- 22 pruebas aprobadas: las 15 anteriores, control de tema/contraste y cuatro comprobaciones del catálogo/escala.
- 5000 lemas distintos; 5000 entradas con origen y revisión pendiente; 25×200 palabras y 200×25 bloques comprobados.
- Todas las palabras tienen preguntas de reconocimiento/escritura; la ruta independiente y el límite de 4 MB de la RPC están probados.
- Importación repetida determinista y hashes de fuentes contrastados. Datos generados: 1 299 583 bytes.
- Build estático correcto: 12 archivos públicos, incluido el catálogo.
- Capturas reales de Edge sin puerto de depuración: escritorio oscuro, claro y vista de 375 px; ruta de secciones de vocabulario, bloque de estudio móvil y catálogo visibles.
- En un marco local de QA con anchura real 375: innerWidth=375, documentWidth=360; sin desbordamiento horizontal.
- Escritorio: innerWidth=1440, documentWidth=1425, en claro y oscuro.
- Contraste de texto/acentos/botones/estados comprobado matemáticamente en ambas paletas, mínimo 4.5: 1.
- No se repitió el recorrido interactivo CDP completo en esta entrega. La QA visual por capturas no equivale a probar cada ejercicio en navegador.

## Nube: estado que permanece pendiente

El proyecto Supabase tiene configuración pública versionada. La API responde; tabla y RPC rechazan acceso anónimo.
SQL aplicado según el propietario. GitHub está habilitado, verificado por API, pero falta el botón/flujo OAuth en Vokal.
No hay sesión real, guardado autenticado, RLS entre cuentas o sincronización multidispositivo verificados.
OTP por correo requiere SMTP propio para editar plantillas en Free nuevo; se eligió GitHub para evitar ese requisito.
No se ha publicado la web ni contratado un servicio.

## Próximo trabajo

1. Recoger la prueba del propietario sobre diseño y bloques de vocabulario; reiniciar pnpm dev para reconocer módulos nuevos.
2. Implementar GitHub OAuth y verificar acceso, guardado, aislamiento y uso desde dos dispositivos.
3. Revisar lingüísticamente lotes del catálogo y convertir sus términos en material contextualizado más variado.
4. Ampliar hacia 10 000 lemas sin inflar flexiones ni atribuir nivel MCER no validado.

## Límites

Los 5000 son un catálogo de diccionario utilizable con práctica, no vocabulario revisado uno por uno por una persona.
La frecuencia de subtítulos no equivale a importancia para cada viajero, ni a un nivel A1–C1.
La selección usa heurísticas contra nombres/flexiones: puede haber errores o polisemia pendientes.
No hay 5000 frases originales, pronunciación evaluada ni curso completo B2/C1.
Sin cuenta funcional, el progreso sigue local. Una práctica incompleta no se reanuda tras recargar.

Ajuste posterior: botón sol/luna44px (antes 48), icono18px (antes 22), conservando foco y objetivo táctil. Sin cambios de vocabulario.

Ajuste visual posterior: el propietario no percibió la reducción anterior. El botón conserva área táctil invisible de 44 px, pero el fondo visible ahora es de 28 px, sin contorno, y el icono de 16 px. Solo CSS; comportamiento y foco conservados.
