import { describe, test, expect } from 'vitest';
import { palindromo } from '../../src/basico/palindromo.js';

describe('palindromo - Exercício 10', () => {
  test('exemplo 1 do livro', () => {
    expect(palindromo([3, 2, 5, 2, 3])).toBe(true);
  });

  test('exemplo 2 do livro', () => {
    expect(palindromo([3, 2, 5, 6, 2, 3])).toBe(false);
  });

  test('lista vazia', () => {
    expect(palindromo([])).toBe(true);
  });

  test('um elemento', () => {
    expect(palindromo([7])).toBe(true);
  });

  test('palíndromo par', () => {
    expect(palindromo([1, 2, 2, 1])).toBe(true);
  });

  test('não muta original', () => {
    const original = [1, 2, 1];
    palindromo(original);
    expect(original).toEqual([1, 2, 1]);
  });
});