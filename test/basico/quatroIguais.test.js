import { describe, test, expect } from 'vitest';
import { quatroIguais } from '../../src/basico/quatroIguais.js';

describe('quatroIguais - Exercício 18', () => {
  test('exemplo 1 do livro', () => {
    expect(quatroIguais(5, 5, 5, 5)).toBe(true);
  });

  test('exemplo 2 do livro', () => {
    expect(quatroIguais(5, 5, 4, 5)).toBe(false);
  });

  test('com strings', () => {
    expect(quatroIguais('a', 'a', 'a', 'a')).toBe(true);
  });

  test('primeiro diferente', () => {
    expect(quatroIguais(1, 2, 2, 2)).toBe(false);
  });
});