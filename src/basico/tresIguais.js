/**
 * Verifica se três valores são iguais.
 *
 * Equivale à definição Haskell `tresIguales x y z = x == y && y == z`.
 *
 * Exercício 16 do Capítulo 1.
 *
 * @category Básico
 * @since 1.0.0
 *
 * @param {*} x - Primeiro valor.
 * @param {*} y - Segundo valor.
 * @param {*} z - Terceiro valor.
 * @returns {boolean} true se x == y == z.
 *
 * @example
 * // Exemplo 1 do livro
 * tresIguais(4, 4, 4); // true
 *
 * @example
 * // Exemplo 2 do livro
 * tresIguais(4, 3, 4); // false
 *
 * @example
 * // Com strings
 * tresIguais('a', 'a', 'a'); // true
 *
 * @example
 * // Tipos diferentes
 * tresIguais(1, '1', 1); // false
 */
export const tresIguais = (x, y, z) => {
  return x === y && y === z;
};