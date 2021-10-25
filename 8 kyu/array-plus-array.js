// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
    let newArr = [];
    newArr.push((arr1.reduce((a, b) => a + b, 0)) + (arr2.reduce((a, b) => a + b, 0)));

    return +newArr; //something went wrong
}

// Tests
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // return 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // return -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); // return 15
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); // return 2100