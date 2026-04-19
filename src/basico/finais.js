/**
 * Retorna os n últimos elementos de uma lista.
 *
 * Equivale à definição Haskell `finales n xs = drop (length xs - n) xs`.
 * Se n <= 0 retorna []. Se n >= tamanho, retorna cópia da lista.
 *
 * Demonstra uso de slice com índice negativo.
 * Exercício 12 do Capítulo 1. Nome original no livro: finales.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice | Array.slice}
 *
 * @param {number} n - Quantidade de elementos finais.
 * @param {Array} xs - Lista original.
 * @returns {Array} Nova lista com os últimos n elementos.
 *
 * @example
 * // Exemplo do livro
 * finais(3, [2, 5, 3, 9, 2]); // [3, 9, 2]
 *
 * @example
 * // n maior que tamanho
 * finais(5, [1, 2]); // [1, 2]
 *
 * @example
 * // n zero
 * finais(0, [1, 2, 3]); // []
 *
 * @example
 * // n negativo
 * finais(-1, [1, 2, 3]); // []
 *
 * @example
 * // Lista vazia
 * finais(3, []); // []
 *
 * @example
 * // Não muta original
 * const a = [1, 2, 3, 4];
 * finais(2, a); // [3, 4]
 * a; // [1, 2, 3, 4]
 */
export const finais = (n, xs) => {
  if (n <= 0) return [];
  if (n >= xs.length) return [...xs];
  return xs.slice(-n);
};