/**
 * Retorna o último dígito de um número inteiro.
 *
 * Utiliza o operador de resto da divisão por 10. Equivale à definição
 * Haskell `ultimaCifra x = rem x 10`.
 *
 * Para números negativos, mantém o sinal: ultimoDigito(-123) retorna -3.
 * Demonstra o uso do operador `%` para extrair dígitos.
 * Exercício 5 do Capítulo 1.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Remainder | Operador %}
 *
 * @param {number} x - Número inteiro do qual extrair o último dígito.
 * @returns {number} O último dígito de x. Mesmo sinal de x.
 *
 * @example
 * // Exemplo do livro
 * ultimoDigito(325); // 5
 *
 * @example
 * // Número de 1 dígito
 * ultimoDigito(7); // 7
 *
 * @example
 * // Número negativo mantém o sinal
 * ultimoDigito(-123); // -3
 *
 * @example
 * // Zero
 * ultimoDigito(0); // 0
 *
 * @example
 * // Número terminando em zero
 * ultimoDigito(120); // 0
 */
export const ultimoDigito = (x) => x % 10;