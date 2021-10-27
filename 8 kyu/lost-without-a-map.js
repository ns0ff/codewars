// https://www.codewars.com/kata/57f781872e3d8ca2a000007e

function maps(x){
    return x.map(el => el * 2);
}

// Tests
console.log(maps([1, 2, 3])); // expected output: [2, 4, 6]
console.log(maps([4, 1, 1, 1, 4])); // expected output: [8, 2, 2, 2, 8]
console.log(maps([2, 2, 2, 2, 2, 2])); // expected output: [4, 4, 4, 4, 4, 4]