import { describe, test, expect } from 'vitest';
import { minimoEMaximo } from '../../src/basico/minimoEMaximo.js';

describe('minimoEMaximo - Exercício 9', () => {
  test('reproduz exemplo do livro', () => {
    expect(minimoEMaximo([3, 2, 7, 5])).toEqual([2, 7]);
  });

  test('lista vazia retorna vazia', () => {
    expect(minimoEMaximo([])).toEqual([]);
  });

  test('lista com um elemento retorna [x, x]', () => {
    expect(minimoEMaximo([4])).toEqual([4, 4]);
  });

  test('funciona com negativos', () => {
    expect(minimoEMaximo([-5, 0, 3, -2])).toEqual([-5, 3]);
  });

  test('lista já ordenada', () => {
    expect(minimoEMaximo([1, 2, 3, 4])).toEqual([1, 4]);
  });

  test('não muta original', () => {
    const original = [5, 1, 9];
    minimoEMaximo(original);
    expect(original).toEqual([5, 1, 9]);
  });
});