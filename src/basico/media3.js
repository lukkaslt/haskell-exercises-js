/**
 * Calcula a média aritmética de três números.
 *
 * Função elementar que demonstra composição básica: somar três valores
 * e dividir pela quantidade. Equivale à definição Haskell `media3 x y z = (x+y+z)/3`.
 *
 * Esta é a primeira função do Capítulo 1 do livro "Ejercicios de programación
 * funcional con Haskell", usada para introduzir definições simples sem recursão.
 *
 * @category Básico
 * @since 1.0.0
 * @see {@link https://pt.wikipedia.org/wiki/M%C3%A9dia_aritm%C3%A9tica | Média Aritmética}
 *
 * @param {number} x - Primeiro valor numérico.
 * @param {number} y - Segundo valor numérico.
 * @param {number} z - Terceiro valor numérico.
 * @returns {number} A média aritmética: (x + y + z) / 3.
 *
 * @example
 * // Exemplo 1 do livro
 * media3(1, 3, 8); // 4
 *
 * @example
 * // Funciona com negativos
 * media3(-1, 0, 7); // 2
 *
 * @example
 * // Funciona com decimais
 * media3(1.5, 2.5, 5); // 3
 *
 * @example
 * // Caso extremo: todos iguais
 * media3(5, 5, 5); // 5
 */
export const media3 = (x, y, z) => (x + y + z) / 3;