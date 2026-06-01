import { add } from "../../src/calculator.js";

describe("add", () => {

    test("2 + 3 = 5", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("-1 + 1 = 0", () => {
        expect(add(-1, 1)).toBe(0);
    });

});