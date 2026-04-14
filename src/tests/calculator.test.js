const calc = require('../calculator');

describe('calculator basic operations (image examples)', () => {
  test('2 + 3 = 5', () => expect(calc.add(2, 3)).toBe(5));
  test('10 - 4 = 6', () => expect(calc.subtract(10, 4)).toBe(6));
  test('45 * 2 = 90', () => expect(calc.multiply(45, 2)).toBe(90));
  test('20 / 5 = 4', () => expect(calc.divide(20, 5)).toBe(4));
});

describe('compute() wrapper and edge cases', () => {
  test('compute with symbol +', () => expect(calc.compute('+', 2, 3)).toBe(5));
  test('compute with name add', () => expect(calc.compute('add', 2, 3)).toBe(5));
  test('compute with symbol -', () => expect(calc.compute('-', 10, 4)).toBe(6));
  test('compute with symbol *', () => expect(calc.compute('*', 45, 2)).toBe(90));
  test('compute with symbol /', () => expect(calc.compute('/', 20, 5)).toBe(4));
  test('floating point division', () => expect(calc.compute('/', 7, 2)).toBeCloseTo(3.5));
  test('negative numbers', () => expect(calc.compute('-', -2, -3)).toBe(1));
  test('division by zero throws', () => expect(() => calc.divide(1, 0)).toThrow('Division by zero'));
  test('compute division by zero throws', () => expect(() => calc.compute('/', 1, 0)).toThrow('Division by zero'));
});
