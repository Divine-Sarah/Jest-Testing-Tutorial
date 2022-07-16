let animals = [];

beforeEach(() => {
    console.log("BEFORE EACH");
    animals = ['elephant', 'cat', 'goat', 'bear', 'tiger']
})

 
describe("animals array", () => {
    it("should add animal to the end of the array", () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]).toBe("aligator")
    })

    it("should add animal to the beginning of the array", () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey")
    })

    it("should have initial length of 5", () => {
        expect(animals.length).toBe(5)
    })
});

