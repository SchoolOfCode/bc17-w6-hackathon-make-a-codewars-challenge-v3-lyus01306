import { test, expect } from "vitest";
import {  calulator } from "./Calculator.js";


//TEST THAT calculator FUNCTION IS WORKING

test('Multipler in calculator is functioning', () => {
    expect(calulator(5,4,'*')).toEqual(20)
})
test('Divison in calculator is functioning', () => {
    expect(calulator(12,4,'/')).toEqual(3)
})
test('Addition in calculator is functioning', () => {
    expect(calulator(10,8,'+')).toEqual(18)
})
test('Subtraction in calculator is functioning', () => {
    expect(calulator(-4,-2,'-')).toEqual(-2)
})