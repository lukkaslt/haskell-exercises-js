import { describe, test, expect } from 'vitest';
import { ultimoDigito } from '../../src/basico/ultimoDigito.js';

describe('ultimoDigito - Exercício 5', () => {
  test('reproduz o exemplo do livro', () => {
    expect(ultimoDigito(325)).toBe(5);
  });

  test('funciona com números de 1 dígito', () => {
    expect(ultimoDigito(0)).toBe(0);
    expect(ultimoDigito(7)).toBe(7);
    expect(ultimoDigito(9)).toBe(9);
  });

  test('funciona com números grandes', () => {
    expect(ultimoDigito(123456789)).toBe(9);
    expect(ultimoDigito(1000)).toBe(0);
  });

  test('preserva sinal em negativos igual Haskell', () => {
    expect(ultimoDigito(-123)).toBe(-3);
    expect(ultimoDigito(-5)).toBe(-5);
  });
});