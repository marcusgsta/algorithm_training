const sortedUnion = require ('../src/sortedUnion');

test('should return new array of unique values in the order of the original provided arrays', () => {
    expect(sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1])).toMatchObject([1, 3, 2, 5, 4]);
});
