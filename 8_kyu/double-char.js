// https://www.codewars.com/kata/56b1f01c247c01db92000076
function doubleChar(str) {
    return str.split('').map(function(char){return char + char;}).join('');
}
// Tests
console.log(doubleChar("String"));  // return "SSttrriinngg"
console.log(doubleChar("Hello World")); // return  "HHeelllloo  WWoorrlldd"
console.log(doubleChar("1234!_ ")); // return  "11223344!!__  "