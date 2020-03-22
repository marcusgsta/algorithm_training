const sumPrimes = require ('../src/sumPrimes');

test('return sum of all prime numbers less than or equal to number', () => {
    expect(sumPrimes(10)).toBe(17);
});

test('return sum of all prime numbers less than or equal to number', () => {
    expect(sumPrimes(977)).toBe(73156);
});

