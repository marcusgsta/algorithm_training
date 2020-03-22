const smallestCommons = require ('../src/smallestCommons');

test('should find the smallest common multiple', () => {
    expect(smallestCommons([1,5])).toBe(60);
});

test('should find the smallest common multiple', () => {
    expect(smallestCommons([2,10])).toBe(2520);
});

test('should find the smallest common multiple', () => {
    expect(smallestCommons([5,1])).toBe(60);
});

test('should find the smallest common multiple', () => {
    expect(smallestCommons([23,18])).toBe(6056820);
});