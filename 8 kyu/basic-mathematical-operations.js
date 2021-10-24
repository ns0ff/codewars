// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
function basicOp(operation, a, b) {
    // The eval() function evaluates or executes an argument.This function take string a it parameter.
    return eval(a+operation+b);
}

// Tests
console.log(basicOp('+', 4, 7)); // return 11
console.log(basicOp('-', 15, 18)); // return -3
console.log(basicOp('*', 5, 5)); // return 25
console.log(basicOp('/', 49, 7)); // return 7