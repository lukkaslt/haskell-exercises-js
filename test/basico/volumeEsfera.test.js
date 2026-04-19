import { describe, test, expect } from 'vitest';
import { volumeEsfera } from '../../src/basico/volumeEsfera.js';

describe('volumeEsfera - Exercício 3', () => {
  test('reproduz o exemplo do livro', () => {
    expect(volumeEsfera(10)).toBeCloseTo(4188.790204786391);
  });

  test('casos básicos', () => {
    expect(volumeEsfera(0)).toBe(0);
    expect(volumeEsfera(1)).toBeCloseTo(4.1887902047863905);
  });
});