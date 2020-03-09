const destroyer = require ('../src/destroyer.js');

test('destroyer is a function', () => {
    expect(typeof destroyer).toEqual('function');
});

test('[1, 2, 3, 1, 2, 3], 2, 3 should return [1, 1]', () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1,1]);
});

test(`["possum", "trollo", 12, "safari", "hotdog",
         92, 65, "grandma", "bugati", "trojan", "yacht"],
          "yacht", "possum", "trollo", "safari", "hotdog",
           "grandma", "bugati", "trojan"
            should return [12,92,65]`, () => {
    expect(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", 
    "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")).toEqual([12,92,65]);
});


