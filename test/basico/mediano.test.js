import { describe, test, expect } from 'vitest';
import { mediano } from '../../src/basico/mediano.js';

describe('mediano - Exercício 15', () => {
  test('exemplo 1 do livro', () => {
    expect(mediano(3, 2, 5)).toBe(3);
  });

  test('exemplo 2 do livro', () => {
    expect(mediano(2, 4, 5)).toBe(4);
  });

  test('exemplo 3 do livro', () => {
    expect(mediano(2, 6, 5)).toBe(5);
  });

  test('exemplo 4 do livro', () => {
    expect(mediano(2, 6, 6)).toBe(6);
  });

  test('com negativos', () => {
    expect(mediano(-1, 0, 1)).toBe(0);
  });

  test('todos iguais', () => {
    expect(mediano(7, 7, 7)).toBe(7);
  });
});