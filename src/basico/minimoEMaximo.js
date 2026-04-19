/**
 * Retorna uma lista com o menor e o maior elemento de uma lista.
 *
 * Equivale à definição Haskell `rango xs = [minimum xs, maximum xs]`.
 * Se a lista estiver vazia, retorna array vazio.
 * Se tiver um elemento, retorna [x, x].
 *
 * Demonstra uso de Math.min e Math.max com spread operator.
 * Exercício 9 do Capítulo 1. Nome original no livro: rango.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/min | Math.min}
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max | Math.max}
 *
 * @param {number[]} xs - Lista de números.
 * @returns {number[]} Array com [menor, maior]. Vazio se xs for vazia.
 *
 * @example
 * // Exemplo do livro
 * minimoEMaximo([3, 2, 7, 5]); // [2, 7]
 *
 * @example
 * // Lista com um elemento
 * minimoEMaximo([4]); // [4, 4]
 *
 * @example
 * // Lista vazia
 * minimoEMaximo([]); // []
 *
 * @example
 * // Com negativos
 * minimoEMaximo([-5, 0, 3, -2]); // [-5, 3]
 *
 * @example
 * // Já ordenada
 * minimoEMaximo([1, 2, 3, 4]); // [1, 4]
 *
 * @example
 * // Não muta original
 * const a = [5, 1, 9];
 * minimoEMaximo(a); // [1, 9]
 * a; // [5, 1, 9]
 */
export const minimoEMaximo = (xs) => {
  if (xs.length === 0) return [];
  return [Math.min(...xs), Math.max(...xs)];
};