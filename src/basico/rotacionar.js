/**
 * Rotaciona uma lista movendo os n primeiros elementos para o final.
 *
 * Generaliza os exercícios 7 e 8 do livro. `rota1 xs` equivale a `rotacionar(1, xs)`.
 * Equivale à definição Haskell `rota n xs = drop n xs ++ take n xs`.
 *
 * Utiliza `slice` para dividir o array sem mutação, mantendo imutabilidade.
 * Se n for 0, retorna cópia da lista original.
 * Se n >= tamanho da lista, retorna cópia da lista original.
 * Exercícios 7 e 8 do Capítulo 1.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice | Array.slice}
 *
 * @param {number} n - Quantidade de elementos a mover do início para o fim.
 * @param {Array} xs - Lista a ser rotacionada.
 * @returns {Array} Nova lista com os n primeiros elementos no final.
 *
 * @example
 * // Exemplo rota1 do livro
 * rotacionar(1, [3, 2, 5, 7]); // [2, 5, 7, 3]
 *
 * @example
 * // Exemplo rota 2 do livro
 * rotacionar(2, [3, 2, 5, 7]); // [5, 7, 3, 2]
 *
 * @example
 * // Rotacionar zero retorna cópia
 * rotacionar(0, [1, 2, 3]); // [1, 2, 3]
 *
 * @example
 * // n maior que tamanho retorna cópia
 * rotacionar(5, [1, 2]); // [1, 2]
 *
 * @example
 * // Lista vazia
 * rotacionar(3, []); // []
 *
 * @example
 * // Funciona com strings
 * rotacionar(2, ['a', 'b', 'c', 'd']); // ['c', 'd', 'a', 'b']
 */
export const rotacionar = (n, xs) => {
  if (n <= 0 || xs.length === 0) return [...xs];
  const k = n % xs.length;
  if (k === 0) return [...xs];
  return [...xs.slice(k),...xs.slice(0, k)];
};