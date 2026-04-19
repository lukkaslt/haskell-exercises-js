/**
 * Calcula o valor total em euros de um conjunto de moedas.
 *
 * Exercício 2, Capítulo 1: Definiciones elementales de funciones.
 * Livro: Ejercicios de programación funcional con Haskell.
 *
 * @param {number} a - Quantidade de moedas de 1 euro.
 * @param {number} b - Quantidade de moedas de 2 euros.
 * @param {number} c - Quantidade de moedas de 5 euros.
 * @param {number} d - Quantidade de moedas de 10 euros.
 * @param {number} e - Quantidade de moedas de 20 euros.
 * @returns {number} O valor total em euros.
 *
 * @example
 * somaMoedas(0, 0, 0, 0, 1); // 20
 * @example
 * somaMoedas(0, 0, 8, 0, 3); // 100
 * @example
 * somaMoedas(1, 1, 1, 1, 1); // 38
 */
export const somaMoedas = (a, b, c, d, e) => 1 * a + 2 * b + 5 * c + 10 * d + 20 * e;