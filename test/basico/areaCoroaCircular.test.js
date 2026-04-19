import { describe, test, expect } from 'vitest';
import { areaCoroaCircular } from '../../src/basico/areaCoroaCircular.js';

describe('areaCoroaCircular - Exercício 4', () => {
  test('reproduz o exemplo do livro', () => {
    expect(areaCoroaCircular(1, 2)).toBeCloseTo(9.42477796076938);
  });

  test('coroa fina com diferença pequena', () => {
    expect(areaCoroaCircular(9, 10)).toBeCloseTo(59.690260418206066);
  });

  test('r1 zero equivale a círculo completo de raio r2', () => {
    const areaCirculo = Math.PI * 5 ** 2;
    expect(areaCoroaCircular(0, 5)).toBeCloseTo(areaCirculo);
  });

  test('retorna zero quando raios são iguais', () => {
    expect(areaCoroaCircular(7, 7)).toBe(0);
  });
});