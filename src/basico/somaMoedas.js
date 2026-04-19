/**
 * Calcula o valor total em euros de um conjunto de moedas.
 *
 * Recebe a quantidade de cada tipo de moeda euro e retorna a soma total.
 * Valores fixos: 1€, 2€, 5€, 10€ e 20€. Equivale à definição Haskell
 * `sumaMonedas a b c d e = 1*a + 2*b + 5*c + 10*d + 20*e`.
 *
 * Demonstra composição com multiplicação e soma sobre múltiplos argumentos.
 * Exercício 2 do Capítulo 1.
 *
 * @category Básico
 * @since 1.0.0
 *
 * @param {number} a - Quantidade de moedas de 1 euro. Deve ser inteiro não-negativo.
 * @param {number} b - Quantidade de moedas de 2 euros. Deve ser inteiro não-negativo.
 * @param {number} c - Quantidade de moedas de 5 euros. Deve ser inteiro não-negativo.
 * @param {number} d - Quantidade de moedas de 10 euros. Deve ser inteiro não-negativo.
 * @param {number} e - Quantidade de moedas de 20 euros. Deve ser inteiro não-negativo.
 * @returns {number} O valor total em euros.
 *
 * @example
 * // Exemplo 1 do livro: só uma moeda de 20€
 * somaMoedas(0, 0, 0, 0, 1); // 20
 *
 * @example
 * // Exemplo 2: 8 moedas de 5€ + 3 moedas de 20€
 * somaMoedas(0, 0, 8, 0, 3); // 100
 *
 * @example
 * // Exemplo 3: uma de cada tipo
 * somaMoedas(1, 1, 1, 1, 1); // 38
 *
 * @example
 * // Caso extremo: zero moedas
 * somaMoedas(0, 0, 0, 0, 0); // 0
 */
export const somaMoedas = (a, b, c, d, e) => 1 * a + 2 * b + 5 * c + 10 * d + 20 * e;