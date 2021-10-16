function addBinary(a,b) {
    let sum = a + b;
    return sum.toString(2);
    // One line function:
    // return (a+b).toString(2)
}

console.log(addBinary(1, 2)); // return 11;