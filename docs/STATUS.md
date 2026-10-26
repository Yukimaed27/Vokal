# Estado para retomar

Fecha: 2026-10-26. Versión: 0.3.0.

## Entrega actual

Revisión visual del 2026-10-26: grafito/verde pino, modo claro gris neutro, tarjetas y controles cuadrados.
Botón sol/luna accesible; detecta el sistema inicialmente y conserva la elección manual.
Sin ilustración decorativa, gradiente, sombras o cifras promocionales del catálogo. Contenido/progreso conservados.
22 pruebas aprobadas, build correcto y contraste mínimo 4.5:1. Capturas reales escritorio oscuro/móvil claro revisadas.
No se repitió el recorrido CDP completo; las verificaciones detalladas siguientes corresponden a la ampliación anterior.

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
- Contraste de texto/acentos/botones/estados comprobado matemáticamente en ambas paletas, mínimo 4.5:1.
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
