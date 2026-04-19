import { describe, test, expect } from 'vitest';
import { maiorDeTres } from '../../src/basico/maiorDeTres.js';

describe('maiorDeTres - Exercício 6', () => {
  test('reproduz o exemplo do livro', () => {
    expect(maiorDeTres(6, 2, 4)).toBe(6);
  });

  test('identifica o maior em posições diferentes', () => {
    expect(maiorDeTres(10, 5, 1)).toBe(10); // primeiro
    expect(maiorDeTres(1, 10, 5)).toBe(10); // segundo
    expect(maiorDeTres(1, 5, 10)).toBe(10); // terceiro
  });

  test('funciona com negativos', () => {
    expect(maiorDeTres(-5, -1, -10)).toBe(-1);
    expect(maiorDeTres(-100, -200, -50)).toBe(-50);
  });

  test('funciona quando todos são iguais', () => {
    expect(maiorDeTres(7, 7, 7)).toBe(7);
  });

  test('funciona com decimais', () => {
    expect(maiorDeTres(1.5, 1.55, 1.4)).toBe(1.55);
  });
});