/**
 * Simulación de acceso asíncrono a datos.
 * `RespuestaAPI<T>` es una unión discriminada: si `ok` es true, `datos` existe siempre.
 */

import type { Estudiante } from '../domain/types/estudiante.js';

export type RespuestaAPI<T> =
  | { readonly ok: true; readonly datos: T }
  | { readonly ok: false; readonly error: string };

function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/** Ruta simulada con respuesta fuertemente tipada (sin genérico ambiguo). */
export async function obtenerRecurso(
  endpoint: '/estudiantes/demo'
): Promise<RespuestaAPI<Estudiante>>;

/** Rutas genéricas: solo devuelve éxito si en el futuro añades más simulaciones coherentes con `T`. */
export async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>>;

export async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  await esperar(100 + Math.floor(Math.random() * 120));

  if (!endpoint.startsWith('/')) {
    return { ok: false, error: 'El endpoint debe comenzar por /' };
  }

  if (endpoint === '/estudiantes/demo') {
    const datos: Estudiante = {
      id: 'est-001',
      nombre: 'Ana',
      apellidos: 'García López',
      email: 'ana.garcia@uni.example'
    };
    return { ok: true, datos } as RespuestaAPI<T>;
  }

  return { ok: false, error: `Recurso no simulado: ${endpoint}` };
}
