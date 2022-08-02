// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// single line:

const bonusTime = (salary, bonus) => bonus ? "\u00A3" + (salary * 10) : "\u00A3" + salary

// Output:
console.log(bonusTime(10000, true)); // Expected output: '£100000'
console.log(bonusTime(2, true)); // Expected output: '£20'
console.log(bonusTime(78, false)); // Expected output: '£78'