// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(arr) {
    if (arr && arr.length > 1) {
      let sorted = arr.sort((a, b) => a - b).slice(1, -1)
      return sorted.reduce((a, b) => a + b, 0)
    }
    
    return 0
}

// Single line:
// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

// Output:
console.log(sumArray(null)); // Expected output: 0
console.log(sumArray([])); // Expected output: 0
console.log(sumArray([3])); // Expected output: 0
console.log(sumArray([3, 5])); // Expected output: 0
console.log(sumArray([ 6, 2, 1, 8, 10 ])); // Expected output: 16
console.log(sumArray([ 0, 1, 6, 10, 10 ])); // Expected output: 17
console.log(sumArray([ -6, -20, -1, -10, -12 ])); // Expected output: -28