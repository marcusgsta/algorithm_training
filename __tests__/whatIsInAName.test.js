const whatIsInAName = require ('../src/whatIsInAName.js');

test('whatIsInAName is a function', () => {
    expect(typeof whatIsInAName).toEqual('function');
});

test(`whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
        should return [{ first: "Tybalt", last: "Capulet" }]`, () => {
    expect(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })).toEqual([{ first: "Tybalt", last: "Capulet" }]);
});

test(`whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, 
                    { "apple": 1, "bat": 2, "cookie": 2 }], 
                    { "apple": 1, "bat": 2 })
                    should return [{ "apple": 1, "bat": 2 },
                                { "apple": 1, "bat": 2, "cookie": 2 }]`, () => {
    expect(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })).toEqual([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]);
});


test(`whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
               should return []`, () => {
    expect(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})).toEqual([]);
});

