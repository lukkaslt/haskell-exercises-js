/**
 * Verifica se três valores são todos diferentes entre si.
 *
 * Equivale à definição Haskell `tresDiferentes x y z = x /= y && x /= z && y /= z`.
 *
 * Exercício 17 do Capítulo 1.
 *
 * @category Básico
 * @since 1.0.0
 *
 * @param {*} x - Primeiro valor.
 * @param {*} y - Segundo valor.
 * @param {*} z - Terceiro valor.
 * @returns {boolean} true se x, y e z forem distintos.
 *
 * @example
 * // Exemplo 1 do livro
 * tresDiferentes(3, 5, 2); // true
 *
 * @example
 * // Exemplo 2 do livro
 * tresDiferentes(3, 5, 3); // false
 *
 * @example
 * // Dois iguais
 * tresDiferentes(1, 1, 2); // false
 *
 * @example
 * // Todos iguais
 * tresDiferentes(7, 7, 7); // false
 */
export const tresDiferentes = (x, y, z) => {
  return x !== y && x !== z && y !== z;
};