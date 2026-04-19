import { describe, test, expect } from 'vitest';
import { rotacionar } from '../../src/basico/rotacionar.js';

describe('rotacionar - Exercícios 7 e 8', () => {
  test('reproduz rota1 do livro', () => {
    expect(rotacionar(1, [3, 2, 5, 7])).toEqual([2, 5, 7, 3]);
  });

  test('reproduz rota 2 do livro', () => {
    expect(rotacionar(2, [3, 2, 5, 7])).toEqual([5, 7, 3, 2]);
  });

  test('rotacionar zero retorna cópia da lista', () => {
    const lista = [1, 2, 3];
    const resultado = rotacionar(0, lista);
    expect(resultado).toEqual([1, 2, 3]);
    expect(resultado).not.toBe(lista); // verifica que é cópia, não mesma referência
  });

  test('n maior que tamanho usa módulo', () => {
    expect(rotacionar(5, [1, 2, 3])).toEqual([3, 1, 2]); // 5 % 3 = 2
    expect(rotacionar(3, [1, 2, 3])).toEqual([1, 2, 3]); // 3 % 3 = 0
  });

  test('lista vazia retorna lista vazia', () => {
    expect(rotacionar(10, [])).toEqual([]);
  });

  test('funciona com strings', () => {
    expect(rotacionar(2, ['a', 'b', 'c', 'd'])).toEqual(['c', 'd', 'a', 'b']);
  });

  test('não muta a lista original', () => {
    const original = [1, 2, 3, 4];
    rotacionar(2, original);
    expect(original).toEqual([1, 2, 3, 4]); // original intacta
  });
});