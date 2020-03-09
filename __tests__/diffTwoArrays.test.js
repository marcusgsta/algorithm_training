const diffTwoArrays = require ('../src/diffTwoArrays.js');

test('diffTwoArrays is a function', () => {
    expect(typeof diffTwoArrays).toEqual('function');
});

test('diffTwoArrays should return an array', () => {
    expect(Array.isArray(diffTwoArrays([1, 2, 3, 5], [1, 2, 3, 4, 5])
    )).toBe(true);
});

test('diffTwoArrays should return ["pink wool"]', () => {
    expect(diffTwoArrays(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
     ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(["pink wool"]);
});

test('diffTwoArrays should return ["pink wool"]', () => {
    expect(diffTwoArrays([1, "calf", 3, "piglet"], [7, "filly"])).toEqual([1, "calf", 3, "piglet", 7, "filly"]);
});

