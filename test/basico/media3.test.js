import { describe, test, expect } from 'vitest';
import { media3 } from '../../src/basico/media3.js';

describe('media3 - Exercício 1', () => {
  test('calcula os exemplos do livro', () => {
    expect(media3(1, 3, 8)).toBe(4);
    expect(media3(-1, 0, 7)).toBe(2);
    expect(media3(-3, 0, 3)).toBe(0);
  });
});