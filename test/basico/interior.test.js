import { describe, test, expect } from 'vitest';
import { interior } from '../../src/basico/interior.js';

describe('interior - Exercício 11', () => {
  test('exemplo do livro', () => {
    expect(interior([3, 2, 5, 6, 7])).toEqual([2, 5, 6]);
  });

  test('lista com 2 elementos retorna vazia', () => {
    expect(interior([1, 2])).toEqual([]);
  });

  test('lista com 1 elemento retorna vazia', () => {
    expect(interior([5])).toEqual([]);
  });

  test('lista vazia retorna vazia', () => {
    expect(interior([])).toEqual([]);
  });

  test('não muta original', () => {
    const original = [1, 2, 3, 4];
    interior(original);
    expect(original).toEqual([1, 2, 3, 4]);
  });

  test('funciona com strings', () => {
    expect(interior(['a', 'b', 'c', 'd'])).toEqual(['b', 'c']);
  });
});