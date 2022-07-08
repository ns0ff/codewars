// https://www.codewars.com/kata/5866fc43395d9138a7000006

function ensureQuestion(s) {
    return /\?$/.test(s) ? s : s+'?'
}

// Single line:
// const ensureQuestion = s => s.endsWith('?') ? s : s+'?'

// Tests
console.log(ensureQuestion("")); // expected output: '?'
console.log(ensureQuestion("Yes")); // expected output: 'Yes?'
console.log(ensureQuestion("No?")); // expected output: 'No?'