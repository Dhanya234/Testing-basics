//describe() - Test plan
// it() / test() - test case
//expect() - assertion
//expect().toEqual()
//expect().toBe()
//expect().toBeTruthy()
//expect().toBeFalsy()
//ecpect().toBeNull()
const {add} = require("./calculator");
describe("Add feature of the calculator",()=>{
    test("Add 2 positive numbers",()=>{
        expect(add(5,10)).toBe(15);
    });
    test("Add 2 negative numbers",()=>{
        expect(add(-5,-10)).toBe(-15);
    });
});
const {sub} = require("./calculator");
describe("Sub feature of the calculator",()=>{
    test("Sub 2 positive numbers",()=>{
        expect(sub(10,5)).toBe(5);
    });
    test("Sub 2 negative numbers",()=>{
        expect(sub(-10,-5)).toBe(-5);
    });
});
const {mul} = require("./calculator");
describe("Mul feature of the calculator",()=>{
    test("Mul 2 positive numbers",()=>{
        expect(mul(5,10)).toBe(50);
    });
    test("Mul 2 negative numbers",()=>{
        expect(mul(-5,-10)).toBe(50);
    });
});
const {div} = require("./calculator");
describe("Div feature of the calculator",()=>{
    test("Div 2 positive numbers",()=>{
        expect(div(10, 5)).toBe(2);
    });
    test("Div 2 negative numbers",()=>{
        expect(div(-10, -5)).toBe(2);
    });
});