const fearNotLetter = require ('../src/fearNotLetter');

test('should return missing letter in range', () => {
    expect(fearNotLetter("abce")).toBe("d");
});

test('should return missing letter in range', () => {
    expect(fearNotLetter("abcdefghjklmno")).toBe("i");
});

test('should return missing letter in range', () => {
    expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).toBe(undefined);
});

test('should return missing letter in range', () => {
    expect(fearNotLetter("bcdf")).toBe("e");
});




