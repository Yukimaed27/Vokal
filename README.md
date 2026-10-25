# Vokal

Alemán práctico para hispanohablantes. Teoría breve antes de practicar, situaciones reales y repasos sin penalizaciones.

## Ejecutar (Windows o Linux)

Requiere Git y Node.js 22 o superior. No hay dependencias externas.

```sh
git clone https://github.com/Yukimaed27/Vokal.git
cd Vokal
npm run prepare
npm run check
npm run dev
```

Abre http://localhost:3000. Detén el servidor con Ctrl+C.

## Estado real

Primera unidad A1: tres lecciones, vocabulario, ejercicios con explicación, evaluación de la unidad y repaso espaciado.
El progreso se guarda en este navegador. Todavía no hay cuentas, sincronización, alojamiento público ni evaluación A1–C1.
El audio y la pronunciación se incorporarán después. El objetivo de sesión es 20–30 minutos; esta muestra no garantiza esa duración.

## Continuar desde otro equipo

Antes de trabajar: `git pull --ff-only` y lee [el estado](docs/STATUS.md).
Después: `npm run check`, actualiza documentos, crea un commit y ejecuta `git push`.
Los cambios sin commit/push no aparecen en el otro equipo. El progreso del alumno no viaja con Git.

- [Decisiones](docs/DECISIONS.md)
- [Próximos pasos](docs/ROADMAP.md)
- [Cambios](CHANGELOG.md)

Los hooks validan antes de cada commit y push. GitHub Actions repite los controles en Windows y Linux.
