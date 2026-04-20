/**
 * Utilidades estadísticas con tipado estricto.
 * Arrays vacíos: media y mediana devuelven `null`.
 */
function suma(valores) {
    return valores.reduce((acc, v) => acc + v, 0);
}
/** Media aritmética; `null` si el array está vacío. */
export function calcularMedia(valores) {
    if (valores.length === 0)
        return null;
    return suma(valores) / valores.length;
}
function ordenarCopia(valores) {
    return [...valores].sort((a, b) => a - b);
}
/** Mediana; `null` si el array está vacío. */
export function calcularMediana(valores) {
    if (valores.length === 0)
        return null;
    const ordenados = ordenarCopia(valores);
    const mitad = Math.floor(ordenados.length / 2);
    if (ordenados.length % 2 === 1) {
        return ordenados[mitad];
    }
    const a = ordenados[mitad - 1];
    const b = ordenados[mitad];
    return (a + b) / 2;
}
function desviacionTipicaMuestral(valores, media) {
    if (valores.length <= 1)
        return 0;
    const varianza = valores.reduce((acc, v) => acc + (v - media) ** 2, 0) / (valores.length - 1);
    return Math.sqrt(varianza);
}
/**
 * Filtra atípicos: conserva valores dentro de `limite` desviaciones típicas respecto a la media.
 * - `limite` > 0.
 * - Si σ = 0, se devuelve copia del array (sin eliminar por dispersión nula).
 * - Array vacío → [].
 */
export function filtrarAtipicos(valores, limite) {
    if (valores.length === 0)
        return [];
    if (limite <= 0)
        throw new Error('limite debe ser un número positivo');
    const media = calcularMedia(valores);
    if (media === null)
        return [];
    const sigma = desviacionTipicaMuestral(valores, media);
    if (sigma === 0)
        return [...valores];
    return valores.filter((v) => Math.abs(v - media) <= limite * sigma);
}
//# sourceMappingURL=math-utils.js.map