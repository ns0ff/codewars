// https://www.codewars.com/kata/5aa736a455f906981800360d/javascript

// function feast(beast, dish) {
//     return beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length -1) === dish.charAt(dish.length -1) ? true : false;
// }

// Single line:
let feast = (beast, dish) => beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length -1) === dish.charAt(dish.length -1) ? true : false;

// Tests
console.log(feast("great blue heron", "garlic naan")); // expected output: true
console.log(feast("chickadee", "chocolate cake")); // expected output: true
console.log(feast("brown bear", "bear claw")); // expected output: false