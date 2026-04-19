/**
 * Verifica se uma lista é um palíndromo.
 *
 * Uma lista é palíndromo quando é igual à sua reversa.
 * Equivale à definição Haskell `palindromo xs = xs == reverse xs`.
 *
 * Demonstra uso de spread e reverse sem mutação.
 * Exercício 10 do Capítulo 1.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse | Array.reverse}
 *
 * @param {Array} xs - Lista a verificar.
 * @returns {boolean} true se xs for palíndromo, false caso contrário.
 *
 * @example
 * // Exemplo 1 do livro
 * palindromo([3, 2, 5, 2, 3]); // true
 *
 * @example
 * // Exemplo 2 do livro
 * palindromo([3, 2, 5, 6, 2, 3]); // false
 *
 * @example
 * // Lista vazia é palíndromo
 * palindromo([]); // true
 *
 * @example
 * // Um elemento é palíndromo
 * palindromo([1]); // true
 *
 * @example
 * // String como array de chars
 * palindromo(['a','r','a','r','a']); // true
 *
 * @example
 * // Não muta original
 * const a = [1, 2, 1];
 * palindromo(a); // true
 * a; // [1, 2, 1]
 */
export const palindromo = (xs) => {
  const reverso = [...xs].reverse();
  return xs.length === reverso.length && xs.every((v, i) => v === reverso[i]);
};