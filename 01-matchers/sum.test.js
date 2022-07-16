

const sum = require("./sum")

describe("test example",() => {
    it("should add 5 + 5 to equal 10",() => {
        const result = sum(5,5)
        expect(result).toBe(10)
    })

    it("object Assignment", () => {
        const obj = {};
        expect(obj).toEqual({})
    })
})

describe("truthy or falsy",() => {
    it("null",() => {
        const n = null;
        expect(n).toBeFalsy()
    })
})

describe("numbers",() => {
    it("two plus two",() => {
        const value = 2+2;
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(3)
    })

    it("add floats",() => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.29999999)
    })
})

describe("strings", () => {
    it("there is no I in team",() => {
        expect("team").not.toMatch(/I/)
    })
})

describe("arrays", () => {
    const shoppingLists = [
        'diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'
    ]

    expect(shoppingLists).toContain('milk')
})


function compileAndriodCode(){
    throw new Error("you are using the wrong JDK")
}

describe("exceptions", () => {
    it("compiling andriod goes as expected", () => {
        expect(() => compileAndriodCode()).toThrow("you are using the wrong JDK")
    })
    
})