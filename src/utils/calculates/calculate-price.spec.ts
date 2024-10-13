import { describe, it, expect } from 'vitest';
import { calculatePriceWithDiscount, roundToTwoDecimals } from './calculate-price.ts';

describe('Calculate price', () => {
  describe('roundToTwoDecimals', () => {
    it('should round to two decimal places', () => {
      expect(roundToTwoDecimals(1.2345)).toBe('1.23');
      expect(roundToTwoDecimals(1.2367)).toBe('1.24');
      expect(roundToTwoDecimals(1)).toBe('1.00');
      expect(roundToTwoDecimals(0)).toBe('0.00');
    });
  });

  describe('calculatePriceWithDiscount', () => {
    it('should calculate the price after discount', () => {
      expect(calculatePriceWithDiscount(100, 20)).toBe('80.00');
      expect(calculatePriceWithDiscount(200, 50)).toBe('100.00');
      expect(calculatePriceWithDiscount(150, 0)).toBe('150.00');
      expect(calculatePriceWithDiscount(100, 100)).toBe('0.00');
      expect(calculatePriceWithDiscount(100, 105)).toBe('-5.00'); // Тест на превышение скидки
    });
  });
});
