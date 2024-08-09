import { test, expect } from "vitest";
import { sumArray , } from "./sumArray.js";


//TEST THAT sumArray FUNCTION IS WORKING

test.skip("Calculate sum of an array", () => {
    expect(sumArray([1, 2, 3, 4, 5])).toEqual(15);
  });
  
  test.skip("Calculate sum of an array", () => {
    expect(sumArray([1, 2, 6, 4, 5])).toEqual(18);
  });
  
  test.skip("Calculate sum of an array", () => {
    expect(sumArray([-6, -13, 4, -56, 21])).toEqual(-50);
  });