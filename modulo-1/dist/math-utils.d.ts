/**
 * Utilidades estadísticas con tipado estricto.
 * Arrays vacíos: media y mediana devuelven `null`.
 */
/** Media aritmética; `null` si el array está vacío. */
export declare function calcularMedia(valores: readonly number[]): number | null;
/** Mediana; `null` si el array está vacío. */
export declare function calcularMediana(valores: readonly number[]): number | null;
/**
 * Filtra atípicos: conserva valores dentro de `limite` desviaciones típicas respecto a la media.
 * - `limite` > 0.
 * - Si σ = 0, se devuelve copia del array (sin eliminar por dispersión nula).
 * - Array vacío → [].
 */
export declare function filtrarAtipicos(valores: readonly number[], limite: number): number[];
