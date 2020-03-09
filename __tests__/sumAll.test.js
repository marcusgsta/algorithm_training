const sumAll = require ('../src/sumAll');

test('sums numbers in array and all numbers between them', () => {
    expect(sumAll([1,3])).toBe(6);
});

test('sums numbers in array and all numbers between them', () => {
    expect(sumAll([4,1])).toBe(10);
});

test('sums numbers in array and all numbers between them', () => {
    expect(sumAll([5,10])).toBe(45);
});

test('sums numbers in array and all numbers between them', () => {
    expect(sumAll([10,5])).toBe(45);
});