// https://www.codewars.com/kata/5713bc89c82eff33c60009f7

function toFreud(string) {
    if (string.length == 0) return '';
    let newStr = 'sex ';
    return newStr.repeat(string.split(' ').length).slice(0, -1);
}
// single line:
// let toFreud = s => s.replace(/\w+/g, 'sex');


// Tests
console.log(toFreud("")); // expected output: ''
console.log(toFreud("test")); // expected output: "sex"
console.log(toFreud("This is a longer test")); // expected output: "sex sex sex sex sex"
console.log(toFreud("You're becoming a true freudian expert")); // expected output: "sex sex sex sex sex sex"