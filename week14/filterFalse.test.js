const filterFalse = require('./filterFalse');

describe("Find false values", () => {
    test("Search the one contain a false value", () => {
        const input = [
            {authenticated: true, user_id: "1_abcd"},
            {authenticated: true, user_id: "2_casa123"},
            {authenticated: false, user_id: "3_corona"},
            {authenticated: false, user_id: "4_aaaaaa"},
            {authenticated: true, user_id: "5_lololol"}
        ];

        const output = [
            {authenticated: true, user_id: "1_abcd"},
            {authenticated: true, user_id: "2_casa123"},
            {authenticated: true, user_id: "5_lololol"}
        ];

        expect(filterFalse(input)).toEqual(output);
    });
});