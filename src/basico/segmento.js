/**
 * Retorna o segmento de uma lista entre duas posições.
 *
 * Equivale à definição Haskell `segmento m n xs = take (n-m+1) (drop (m-1) xs)`.
 * Posições são 1-indexadas. Se m > n, retorna array vazio.
 *
 * Demonstra uso de slice para extrair subsequências.
 * Exercício 13 do Capítulo 1. Nome original no livro: segmento.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice | Array.slice}
 *
 * @param {number} m - Posição inicial (1 é o primeiro elemento).
 * @param {number} n - Posição final (inclusiva).
 * @param {Array} xs - Lista original.
 * @returns {Array} Nova lista com elementos de m a n.
 *
 * @example
 * // Exemplo 1 do livro
 * segmento(3, 4, [3, 4, 1, 2, 7, 9, 0]); // [1, 2]
 *
 * @example
 * // Exemplo 2 do livro
 * segmento(3, 5, [3, 4, 1, 2, 7, 9, 0]); // [1, 2, 7]
 *
 * @example
 * // Exemplo 3 do livro (m > n)
 * segmento(5, 3, [3, 4, 1, 2, 7, 9, 0]); // []
 *
 * @example
 * // n além do tamanho
 * segmento(2, 10, [1, 2, 3]); // [2, 3]
 *
 * @example
 * // m igual a n
 * segmento(2, 2, [5, 6, 7]); // [6]
 *
 * @example
 * // Não muta original
 * const a = [1, 2, 3, 4];
 * segmento(2, 3, a); // [2, 3]
 * a; // [1, 2, 3, 4]
 */
export const segmento = (m, n, xs) => {
  if (m > n) return [];
  const inicio = Math.max(m - 1, 0);
  return xs.slice(inicio, n);
};