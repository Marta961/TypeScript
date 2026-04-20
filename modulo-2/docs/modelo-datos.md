# Modelo de datos — Gestión universitaria

## `Estudiante` y `Asignatura` como `interface`

Se usan `interface` porque representan **objetos JSON** con forma estable y extensible. Los identificadores son `readonly` para evitar reasignaciones accidentales en tiempo de compilación.

## `EstadoMatricula` como `type` (unión discriminada)

La unión de tres interfaces con `tipo` literal (`"ACTIVA" | "SUSPENDIDA" | "FINALIZADA"`) permite **narrowing** en `switch` sin casts.

## `generarReporte` y `never`

El `default` delega en `assertNever(estado)` donde `estado` tiene tipo `never` si el `switch` es exhaustivo. Si añades un nuevo estado al union y olvidas un `case`, TypeScript fallará en compilación.

## Cliente genérico y `RespuestaAPI<T>`

`RespuestaAPI<T>` es una **unión discriminada** (`ok: true` con `datos` obligatorio vs `ok: false` con `error`). Así, tras comprobar `ok`, TypeScript estrecha el tipo y no permite acceder a `datos` cuando hubo error.

`obtenerRecurso` declara una **sobrecarga** para `'/estudiantes/demo'`, devolviendo `RespuestaAPI<Estudiante>` sin ambigüedad. Para otras rutas se mantiene la versión genérica (hoy solo devuelve error simulado).
