// https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x, n) {
    let z = [];
    const limit = x * n
  
    for (let i = 1; i <= limit; i++) {
      if (i % x === 0) z.push(i)
    }
    
    return z
}

// Single line:
// const countBy = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);

// Output:
console.log(countBy(1,10)); // Expected output: [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2,5)); // Expected output: [2,4,6,8,10]