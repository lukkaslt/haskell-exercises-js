/**
 * Calcula a média aritmética de três números.
 * 
 * Exercício 1, Capítulo 1: Definiciones elementales de funciones.
 * Livro: Ejercicios de programación funcional con Haskell.
 *
 * @param {number} x - Primeiro número.
 * @param {number} y - Segundo número.
 * @param {number} z - Terceiro número.
 * @returns {number} O resultado de (x + y + z) / 3.
 *
 * @example
 * media3(1, 3, 8); // 4
 * @example
 * media3(-1, 0, 7); // 2
 */
export const media3 = (x, y, z) => (x + y + z) / 3;