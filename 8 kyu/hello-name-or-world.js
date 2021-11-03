// https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name) {
    return typeof name === "undefined" || name.length === 0 ? `Hello, World!` : `Hello, ${name[0].toUpperCase()}${name.substring(1, ).toLowerCase()}!`
}

// Tests
console.log(hello('johN')); // expected output: 'Hello, John!'
console.log(hello()); // expected output: 'Hello, World!'
console.log(hello('')); // expected output: 'Hello, World!'
console.log(hello('alIcE')); // expected output: 'Hello, Alice!'