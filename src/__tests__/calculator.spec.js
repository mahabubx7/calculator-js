/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it, expect } from 'vitest';
import Calculator from '../lib/Calculator.js';

describe('Unit-Tests: calculator methods', () => {
  it('should return 7 + 5 = 12', () => {
    expect(Calculator.add(7, 5)).toStrictEqual(12);
  });

  it('should return 7 - 5 = 2', () => {
    expect(Calculator.subtract(7, 5)).toStrictEqual(2);
  });

  it('should return 7 * 5 = 35', () => {
    expect(Calculator.multiply(7, 5)).toStrictEqual(35);
  });

  it('should return 70 / 7 = 10', () => {
    expect(Calculator.division(70, 7)).toStrictEqual(10);
  });

  it('should return 72 % 7 = 2', () => {
    expect(Calculator.mod(72, 7)).toStrictEqual(2);
  });
});
