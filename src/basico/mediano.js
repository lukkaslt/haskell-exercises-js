/**
 * Retorna o valor mediano de três números.
 *
 * Equivale à definição Haskell `mediano x y z = x + y + z - minimum [x,y,z] - maximum [x,y,z]`.
 *
 * Demonstra uso de Math.min e Math.max.
 * Exercício 15 do Capítulo 1.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/min | Math.min}
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max | Math.max}
 *
 * @param {number} x - Primeiro número.
 * @param {number} y - Segundo número.
 * @param {number} z - Terceiro número.
 * @returns {number} O valor do meio.
 *
 * @example
 * // Exemplo 1 do livro
 * mediano(3, 2, 5); // 3
 *
 * @example
 * // Exemplo 2 do livro
 * mediano(2, 4, 5); // 4
 *
 * @example
 * // Exemplo 3 do livro
 * mediano(2, 6, 5); // 5
 *
 * @example
 * // Exemplo 4 do livro (valores repetidos)
 * mediano(2, 6, 6); // 6
 *
 * @example
 * // Com negativos
 * mediano(-1, 0, 1); // 0
 *
 * @example
 * // Todos iguais
 * mediano(7, 7, 7); // 7
 */
export const mediano = (x, y, z) => {
  return x + y + z - Math.min(x, y, z) - Math.max(x, y, z);
};