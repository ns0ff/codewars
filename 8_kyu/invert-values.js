

function invert(arr) {
    return arr.map((el) => (el == 0 ? -0 : el * (-1)));
}

// Tests
console.log(invert([1,2,3,4,5])); // expected output: [-1,-2,-3,-4,-5]
console.log(invert([1,-2,3,-4,5])); // expected output: [-1,2,-3,4,-5]
console.log(invert([])); // expected output: []
console.log(invert([0])); // expected output: [-0] ??? don't ask me why. Hardcoded.