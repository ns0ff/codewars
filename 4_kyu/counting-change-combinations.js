// https://www.codewars.com/kata/541af676b589989aed0009e7

// const countChange = function (money, coins, i = 0) {
//     if (money < 0) return 0;
//     if (money === 0) return 1;

//     if (i === coins.length && money > 0) {
//         return 0;
//     }

//     return countChange(money - coins[i], coins, i) + countChange(money, coins, i + 1);
// }

// reduce
const countChange = (money, coins) => money === 0 ? 1 : money < 0   ? 0 : coins.reduce((a,c,i) => a + countChange(money - c, coins.slice(i)), 0)

// Output:
console.log(countChange(11, [5,7])) // Expected output: 0
console.log(countChange(10, [5,2,3])) // Expected output: 4