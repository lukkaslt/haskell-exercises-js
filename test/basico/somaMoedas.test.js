import { describe, test, expect } from 'vitest';
import { somaMoedas } from '../../src/basico/somaMoedas.js';

describe('somaMoedas - Exercício 2', () => {
  test('reproduz os exemplos do livro', () => {
    expect(somaMoedas(0, 0, 0, 0, 1)).toBe(20);
    expect(somaMoedas(0, 0, 8, 0, 3)).toBe(100);
    expect(somaMoedas(1, 1, 1, 1, 1)).toBe(38);
  });

  test('funciona com zero moedas', () => {
    expect(somaMoedas(0, 0, 0, 0, 0)).toBe(0);
  });

  test('funciona com muitas moedas', () => {
    expect(somaMoedas(10, 5, 2, 1, 1)).toBe(60);
    // 10*1 + 5*2 + 2*5 + 1*10 + 1*20 = 10+10+10+10+20 = 60
  });
});