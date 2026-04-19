import { describe, test, expect } from 'vitest';
import { tresDiferentes } from '../../src/basico/tresDiferentes.js';

describe('tresDiferentes - Exercício 17', () => {
  test('exemplo 1 do livro', () => {
    expect(tresDiferentes(3, 5, 2)).toBe(true);
  });

  test('exemplo 2 do livro', () => {
    expect(tresDiferentes(3, 5, 3)).toBe(false);
  });

  test('dois iguais', () => {
    expect(tresDiferentes(1, 1, 2)).toBe(false);
  });

  test('todos iguais', () => {
    expect(tresDiferentes(7, 7, 7)).toBe(false);
  });
});