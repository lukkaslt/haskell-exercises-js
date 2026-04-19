/**
 * Retorna os n primeiros e os n últimos elementos de uma lista.
 *
 * Equivale à definição Haskell `extremos n xs = take n xs ++ drop (length xs - n) xs`.
 *
 * Demonstra composição de slice para início e fim.
 * Exercício 14 do Capítulo 1.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice | Array.slice}
 *
 * @param {number} n - Quantidade de elementos de cada ponta.
 * @param {Array} xs - Lista original.
 * @returns {Array} Nova lista com início e fim concatenados.
 *
 * @example
 * // Exemplo do livro
 * extremos(3, [2,6,7,1,2,4,5,8,9,2,3]); // [2,6,7,9,2,3]
 *
 * @example
 * // n = 1
 * extremos(1, [5,4,3,2,1]); // [5,1]
 *
 * @example
 * // n = 0
 * extremos(0, [1,2,3]); // []
 *
 * @example
 * // n maior que metade (evita duplicação excessiva)
 * extremos(2, [1,2,3]); // [1,2,2,3]
 *
 * @example
 * // Não muta original
 * const a = [1,2,3,4,5];
 * extremos(2, a); // [1,2,4,5]
 * a; // [1,2,3,4,5]
 */
export const extremos = (n, xs) => {
  if (n <= 0) return [];
  const inicio = xs.slice(0, n);
  const fim = xs.slice(-n);
  return [...inicio,...fim];
};