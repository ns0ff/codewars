// https://www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(num) {
    return num >= 0 ? num - (num * 2) : num; 

    // Other solution:
    // return num < 0 ? num : -num;
}

// Tests
console.log(makeNegative(42)); // expected output: -42