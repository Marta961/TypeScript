import type { EstadoMatricula } from './types/estado-matricula.js';

function assertNever(valor: never): never {
  throw new Error(`Estado de matrícula no contemplado: ${JSON.stringify(valor)}`);
}

/**
 * `switch` exhaustivo: el `default` usa `never` para obligar a actualizar esta función
 * si se amplía el union `EstadoMatricula`.
 */
export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case 'ACTIVA': {
      const n = estado.asignaturas.length;
      return `Matrícula activa con ${n} asignatura(s).`;
    }
    case 'SUSPENDIDA':
      return `Matrícula suspendida. Motivo: ${estado.motivo}`;
    case 'FINALIZADA':
      return `Matrícula finalizada. Nota media: ${estado.notaMedia.toFixed(2)}`;
    default:
      return assertNever(estado);
  }
}
