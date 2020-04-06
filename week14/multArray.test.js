const multiplyByEven = require('./multArray');

describe("Multiply every odd number by the previous even number", () => {
    test("Return a new array multiplying even and odd", () => {
        const input = [ 2, 33, 4, 41, 6, 9, 77, 11, 13, 27 ];

        const output = [ 66, 164, 54, 462, 66, 78, 162 ];

        expect(multiplyByEven(input)).toEqual(output);
    });
});