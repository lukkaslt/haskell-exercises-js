import { describe, test, expect } from 'vitest';
import { tresIguais } from '../../src/basico/tresIguais.js';

describe('tresIguais - Exercício 16', () => {
  test('exemplo 1 do livro', () => {
    expect(tresIguais(4, 4, 4)).toBe(true);
  });

  test('exemplo 2 do livro', () => {
    expect(tresIguais(4, 3, 4)).toBe(false);
  });

  test('com strings', () => {
    expect(tresIguais('a', 'a', 'a')).toBe(true);
  });

  test('tipos diferentes', () => {
    expect(tresIguais(1, '1', 1)).toBe(false);
  });
});