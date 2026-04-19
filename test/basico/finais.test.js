import { describe, test, expect } from 'vitest';
import { finais } from '../../src/basico/finais.js';

describe('finais - Exercício 12', () => {
  test('exemplo do livro', () => {
    expect(finais(3, [2, 5, 3, 9, 2])).toEqual([3, 9, 2]);
  });

  test('n maior que tamanho retorna cópia', () => {
    expect(finais(5, [1, 2])).toEqual([1, 2]);
  });

  test('n zero retorna vazio', () => {
    expect(finais(0, [1, 2, 3])).toEqual([]);
  });

  test('n negativo retorna vazio', () => {
    expect(finais(-1, [1, 2, 3])).toEqual([]);
  });

  test('lista vazia', () => {
    expect(finais(3, [])).toEqual([]);
  });

  test('não muta original', () => {
    const original = [1, 2, 3, 4];
    finais(2, original);
    expect(original).toEqual([1, 2, 3, 4]);
  });
});