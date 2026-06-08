import { add, subtract } from "../../src/calculator.js";

describe("add", () => {

    test("2 + 3 = 5", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("-1 + 1 = 0", () => {
        expect(add(-1, 1)).toBe(0);
    });

});
test('10 - 3 = 7', () => {
    expect(subtract(10, 3)).toBe(7);
});

test('-1 - 1 = -2', () => {
    expect(subtract(-1, 1)).toBe(-2);
});