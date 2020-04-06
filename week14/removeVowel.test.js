const removeVowel = require('./removeVowel');

describe("Remove vowels", () => {
    test("vowel search and remove", () => {
        const input = "I am tired of coronavirus";

        const output = " m trd f crnvrs";
        expect(removeVowel(input)).toEqual(output);
    });
});