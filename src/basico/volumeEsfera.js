/**
 * Calcula o volume de uma esfera dado o raio.
 *
 * Exercício 3, Capítulo 1: Definiciones elementales de funciones.
 * Nome original Haskell: volumenEsfera
 * Fórmula: V = (4/3) * π * r³
 *
 * @param {number} r - O raio da esfera.
 * @returns {number} O volume da esfera.
 *
 * @example
 * volumeEsfera(10); // 4188.790204786391
 */
export const volumeEsfera = (r) => (4 / 3) * Math.PI * r ** 3;