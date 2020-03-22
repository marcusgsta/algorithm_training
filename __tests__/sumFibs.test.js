const sumFibs = require ('../src/sumFibs');

test('should sum odd fibonacci numbers', () => {
    expect(typeof sumFibs(1)).toBe(typeof 1);
});

test('should sum odd fibonacci numbers', () => {
    expect(sumFibs(1000)).toBe(1785);
});

test('should sum odd fibonacci numbers', () => {
    expect(sumFibs(4000000)).toBe(4613732);
});

test('should sum odd fibonacci numbers', () => {
    expect(sumFibs(4)).toBe(5);
});


