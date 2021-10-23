function testEven(n) {
    return n % 2 == 0 ? true : false;
}

// Tests
console.log(testEven(0)); // return true
console.log(testEven(0.5)); // return false
console.log(testEven(1)); // return false
console.log(testEven(2)); // return true
console.log(testEven(-4)); // return true