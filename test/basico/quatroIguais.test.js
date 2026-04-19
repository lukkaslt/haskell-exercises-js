import { tresIguais } from './tresIguais.js';

/**
 * Verifica se quatro valores são iguais.
 *
 * Equivale à definição Haskell `cuatroIguales x y z u = x == y && tresIguales y z u`.
 *
 * Exercício 18 do Capítulo 1. Nome original: cuatroIguales.
 *
 * @category Básico
 * @since 1.0.0
 *
 * @param {*} x - Primeiro valor.
 * @param {*} y - Segundo valor.
 * @param {*} z - Terceiro valor.
 * @param {*} u - Quarto valor.
 * @returns {boolean} true se x == y == z == u.
 *
 * @example
 * // Exemplo 1 do livro
 * quatroIguais(5, 5, 5, 5); // true
 *
 * @example
 * // Exemplo 2 do livro
 * quatroIguais(5, 5, 4, 5); // false
 *
 * @example
 * // Usa tresIguais internamente
 * quatroIguais('a', 'a', 'a', 'a'); // true
 */
export const quatroIguais = (x, y, z, u) => {
  return x === y && tresIguais(y, z, u);
};