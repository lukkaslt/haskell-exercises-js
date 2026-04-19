/**
 * Retorna o maior valor entre três números.
 *
 * Utiliza `Math.max` para comparação direta. Equivale à definição Haskell
 * `maxTres x y z = max x (max y z)`, mas simplificada com Math.max que
 * aceita múltiplos argumentos.
 *
 * Demonstra composição com funções built-in de comparação.
 * Exercício 6 do Capítulo 1.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max | Math.max}
 *
 * @param {number} x - Primeiro número.
 * @param {number} y - Segundo número.
 * @param {number} z - Terceiro número.
 * @returns {number} O maior valor entre x, y e z.
 *
 * @example
 * // Exemplo do livro
 * maiorDeTres(6, 2, 4); // 6
 *
 * @example
 * // Ordem diferente
 * maiorDeTres(1, 9, 3); // 9
 *
 * @example
 * // Números negativos
 * maiorDeTres(-5, -1, -10); // -1
 *
 * @example
 * // Todos iguais
 * maiorDeTres(7, 7, 7); // 7
 *
 * @example
 * // Com decimais
 * maiorDeTres(1.5, 1.55, 1.4); // 1.55
 */
export const maiorDeTres = (x, y, z) => Math.max(x, y, z);