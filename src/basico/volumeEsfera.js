/**
 * Calcula o volume de uma esfera dado seu raio.
 *
 * Implementa a fórmula geométrica V = (4/3) × π × r³. Equivale à definição
 * Haskell `volumenEsfera r = (4/3)*pi*r^3`.
 *
 * Demonstra uso de constante matemática `Math.PI` e operador de potência `**`.
 * Exercício 3 do Capítulo 1.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://pt.wikipedia.org/wiki/Esfera | Volume da Esfera}
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/PI | Math.PI}
 *
 * @param {number} r - O raio da esfera. Deve ser número não-negativo.
 * @returns {number} O volume da esfera em unidades cúbicas.
 *
 * @example
 * // Exemplo do livro: raio 10
 * volumeEsfera(10); // 4188.790204786391
 *
 * @example
 * // Esfera unitária: raio 1
 * volumeEsfera(1); // 4.1887902047863905
 *
 * @example
 * // Caso extremo: raio zero
 * volumeEsfera(0); // 0
 *
 * @example
 * // Raio decimal
 * volumeEsfera(2.5); // 65.44984694978736
 */
export const volumeEsfera = (r) => (4 / 3) * Math.PI * r ** 3;