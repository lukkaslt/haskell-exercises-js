/**
 * Retorna a lista sem o primeiro e o último elemento.
 *
 * Equivale à definição Haskell `interior xs = tail (init xs)`.
 * Se a lista tiver menos de 2 elementos, retorna array vazio.
 *
 * Demonstra uso de slice para extrair subsequências sem mutação.
 * Exercício 11 do Capítulo 1.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice | Array.slice}
 *
 * @param {Array} xs - Lista original.
 * @returns {Array} Nova lista sem extremos.
 *
 * @example
 * // Exemplo do livro
 * interior([3, 2, 5, 6, 7]); // [2, 5, 6]
 *
 * @example
 * // Lista com 2 elementos
 * interior([1, 2]); // []
 *
 * @example
 * // Lista com 1 elemento
 * interior([5]); // []
 *
 * @example
 * // Lista vazia
 * interior([]); // []
 *
 * @example
 * // Não muta original
 * const a = [1, 2, 3, 4];
 * interior(a); // [2, 3]
 * a; // [1, 2, 3, 4]
 *
 * @example
 * // Com strings
 * interior(['a','b','c','d']); // ['b','c']
 */
export const interior = (xs) => {
  if (xs.length < 2) return [];
  return xs.slice(1, -1);
};