// https://www.codewars.com/kata/56c24c58e0c0f741d4001aef

const isReallyNaN = v => Number.isNaN(v)

// Output:
console.log(isReallyNaN(37) === false);
console.log(isReallyNaN('37') === false);
console.log(isReallyNaN(NaN) === true);
console.log(isReallyNaN(undefined) === false);