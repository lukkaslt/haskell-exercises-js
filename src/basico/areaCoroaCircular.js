/**
 * Calcula a área de uma coroa circular dados os raios interno e externo.
 *
 * Uma coroa circular é a região entre dois círculos concêntricos. A área é
 * obtida subtraindo a área do círculo interno da área do círculo externo.
 *
 * Fórmula: A = π × (r2² - r1²), onde r2 > r1.
 * Equivale à definição Haskell `areaDeCoronaCircular r1 r2 = pi*(r2^2 - r1^2)`.
 *
 * Demonstra composição com subtração e reutilização de Math.PI.
 * Exercício 4 do Capítulo 1.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://pt.wikipedia.org/wiki/Coroa_circular | Coroa Circular}
 *
 * @param {number} r1 - Raio interno da coroa. Deve ser menor que r2.
 * @param {number} r2 - Raio externo da coroa. Deve ser maior que r1.
 * @returns {number} A área da coroa circular em unidades quadradas.
 *
 * @example
 * // Exemplo do livro: r1=1, r2=2
 * areaCoroaCircular(1, 2); // 9.42477796076938
 *
 * @example
 * // Coroa fina: r1=9, r2=10
 * areaCoroaCircular(9, 10); // 59.690260418206066
 *
 * @example
 * // Caso extremo: r1=0 vira círculo completo de raio r2
 * areaCoroaCircular(0, 5); // 78.53981633974483
 *
 * @example
 * // Cuidado: se r1 > r2 o resultado é negativo
 * areaCoroaCircular(5, 3); // -50.26548245743669
 */
export const areaCoroaCircular = (r1, r2) => Math.PI * (r2 ** 2 - r1 ** 2);