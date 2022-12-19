// https://www.codewars.com/kata/577a6e90d48e51c55e000217

// const hotpo = (num) => {
//   let counter = 0
//   while (num !== 1){
//     num%2 ? num = 3 * num + 1 : num = num / 2
//     counter++
//   }
//   return counter
// } 

const hotpo = n => n === 1 ? 0 : 1 + hotpo(n % 2 ? (n * 3 + 1) : n / 2)

// Output:
console.log(hotpo(5)); // Expected output: 5
console.log(hotpo(6)); // Expected output: 8
console.log(hotpo(23)); // Expected output: 15
console.log(hotpo(1)); // Expected output: 0