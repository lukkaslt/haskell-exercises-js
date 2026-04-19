import { describe, test, expect } from 'vitest';
import { extremos } from '../../src/basico/extremos.js';

describe('extremos - Exercício 14', () => {
  test('exemplo do livro', () => {
    expect(extremos(3, [2,6,7,1,2,4,5,8,9,2,3])).toEqual([2,6,7,9,2,3]);
  });

  test('n = 1', () => {
    expect(extremos(1, [5,4,3,2,1])).toEqual([5,1]);
  });

  test('n = 0 retorna vazio', () => {
    expect(extremos(0, [1,2,3])).toEqual([]);
  });

  test('lista pequena', () => {
    expect(extremos(2, [1,2,3])).toEqual([1,2,2,3]);
  });

  test('não muta original', () => {
    const original = [1,2,3,4,5];
    extremos(2, original);
    expect(original).toEqual([1,2,3,4,5]);
  });
});