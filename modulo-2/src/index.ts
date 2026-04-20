import type { Asignatura, EstadoMatricula } from './domain/types/index.js';
import { generarReporte } from './domain/reporte-matricula.js';
import { obtenerRecurso } from './services/api-client.js';

const asignaturas: ReadonlyArray<Asignatura> = [
  { id: 'asg-1', nombre: 'Programación I', creditos: 6, cursoAcademico: '2025/2026' }
];

const activa: EstadoMatricula = { tipo: 'ACTIVA', asignaturas };
const suspendida: EstadoMatricula = { tipo: 'SUSPENDIDA', motivo: 'Falta documentación' };
const finalizada: EstadoMatricula = { tipo: 'FINALIZADA', notaMedia: 7.25 };

console.log(generarReporte(activa));
console.log(generarReporte(suspendida));
console.log(generarReporte(finalizada));

const resp = await obtenerRecurso('/estudiantes/demo');
if (resp.ok) {
  console.log('\nAPI simulada (éxito):', resp.datos.email);
} else {
  console.log('\nAPI simulada (error):', resp.error);
}
