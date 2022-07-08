// https://www.codewars.com/kata/568dcc3c7f12767a62000038

const setAlarm = (employed, vacation) => employed && !vacation

// Output:
console.log(setAlarm(true, true)); // expected output: false
console.log(setAlarm(false, true)); // expected output: false
console.log(setAlarm(true, false)); // expected output: true