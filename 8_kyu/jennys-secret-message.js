// https://www.codewars.com/kata/55225023e1be1ec8bc000390

// function greet(name){
//     return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
// }

// Single line:
let greet = name => `Hello, ${name == "Johnny" ? "my love" : name}!`;

// Tests
console.log(greet("Jim")); // expected output: "Hello, Jim!"
console.log(greet("Jane")); // expected output: "Hello, Jane!"
console.log(greet("Simon")); // expected output: "Hello, Simon!"
console.log(greet("Johnny")); // expected output: "Hello, my love!"