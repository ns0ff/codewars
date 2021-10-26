// 

function makeNegative(num) {
    return num >= 0 ? num - (num * 2) : num; 
}

// Tests
console.log(makeNegative(42)); // expected output: -42