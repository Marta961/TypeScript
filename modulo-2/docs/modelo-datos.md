# Modelo de datos — Gestión universitaria
## `Estudiante` y `Asignatura` como `interface`
Se usan `interface` para poder representar **objetos JSON** de forma estable y extensible. Por otro lado, los identificadores son `readonly` para poder evitar reasignaciones accidentales.
## `EstadoMatricula` como `type` de unión discriminada
La unión de 3 interfaces con `tipo` literal (`"ACTIVA" | "SUSPENDIDA" | "FINALIZADA"`) permite **narrowing** en `switch` sin casts.
## `generarReporte` y `never`
El `default` delega en `assertNever(estado)` cuando el `estado` tiene tipo `never` si el `switch` es exhaustivo. En cambio, si añado un nuevo estado al union y olvido un `case`, no me compilará.
## Cliente genérico y `RespuestaAPI<T>`
`RespuestaAPI<T>` es una unión discriminada: `ok: true` con `datos` obligatorio vs `ok: false` con `error`. Por lo tanto, tras comprobar `ok`, TypeScript  me permitirá acceder a `datos` cuando este con un error.
`obtenerRecurso` declara una **sobrecarga** para `'/estudiantes/demo'`, devolviendo `RespuestaAPI<Estudiante>` sin ambigüedad. En cambio, para otras rutas se mantiene la versión genérica: devuelve un error.