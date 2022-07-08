// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

const areaOrPerimeter = (a, b) => a == b ? Math.pow(a, 2) : (2 * (a + b))

// Tests
console.log(areaOrPerimeter(4 , 4)); // Expected output: 16
console.log(areaOrPerimeter(6 , 10)); // Expected output: 32
console.log(areaOrPerimeter(3 , 3)); // Expected output: 9