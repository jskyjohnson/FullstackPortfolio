import {shuffleArray} from "./shuffleArray";

describe('shuffleArray', () => {
	it("should return an array given an array", () => {
		expect(typeof shuffleArray(["hello", "test", "test2"])).toBe(typeof ["hello","test","test2"]);
	})
})