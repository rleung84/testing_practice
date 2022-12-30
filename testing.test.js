import {
  capitalize, reverseString, calculator, caesarCipher, analyzeArray,
} from './testing';

test('capitalizes "odin" to equal "Odin"', () => {
  expect(capitalize('odin')).toBe('Odin');
});

test('reverses "odin" to equal "nido"', () => {
  expect(reverseString('odin')).toBe('nido');
});
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test('subtracts 8 - 3 to equal 5', () => {
  expect(calculator.subtract(8, 3)).toBe(5);
});
test('divides 27 / 3 to equal 9', () => {
  expect(calculator.divide(27, 3)).toBe(9);
});
test('multiplies 3 * 6 to equal 18', () => {
  expect(calculator.multiply(3, 6)).toBe(18);
});
test('shifts "odin" string by "5" characters', () => {
  expect(caesarCipher('odin', 5)).toBe('tins');
});
test('analyzes an array [1,8,3,4,2,6] to return average: 4, min: 1, max: 8, length: 6', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4, min: 1, max: 8, length: 6,
  });
});
