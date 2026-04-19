import { describe, test, expect } from 'vitest';
import { segmento } from '../../src/basico/segmento.js';

describe('segmento - Exercício 13', () => {
  test('exemplo 1 do livro', () => {
    expect(segmento(3, 4, [3, 4, 1, 2, 7, 9, 0])).toEqual([1, 2]);
  });

  test('exemplo 2 do livro', () => {
    expect(segmento(3, 5, [3, 4, 1, 2, 7, 9, 0])).toEqual([1, 2, 7]);
  });

  test('exemplo 3 do livro (m > n)', () => {
    expect(segmento(5, 3, [3, 4, 1, 2, 7, 9, 0])).toEqual([]);
  });

  test('n além do tamanho', () => {
    expect(segmento(2, 10, [1, 2, 3])).toEqual([2, 3]);
  });

  test('m igual a n', () => {
    expect(segmento(2, 2, [5, 6, 7])).toEqual([6]);
  });

  test('não muta original', () => {
    const original = [1, 2, 3, 4];
    segmento(2, 3, original);
    expect(original).toEqual([1, 2, 3, 4]);
  });
});