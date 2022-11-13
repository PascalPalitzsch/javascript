// The idea behind a module is that it´s a file of reusables code
// We can import sections of pre-written code to use whenever we want
// Great for any utility values and function
// Helps to make your code more reusable and maintanable
// Think of modules as seperate chapters of a book

import {PI, getCircumference, getArea} from "./math_util.js";

console.log(PI);

let circumference = getCircumference(10);
console.log(circumference);

let area = getArea(10);
console.log(area);





import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference2 = MathUtil.getCircumference(10);
console.log(circumference2);

let area2 = MathUtil.getArea(10);
console.log(area2);
