// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}

// single line:
// const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split("").reverse().join("");

// Tests
console.log(isPalindrome("a")); // expected output: true
console.log(isPalindrome("Abba")); // expected output: true
console.log(isPalindrome("AbBa")); // expected output: true
console.log(isPalindrome("Madam")); // expected output: true
console.log(isPalindrome("Bob")); // expected output: true
console.log(isPalindrome("hello")); // expected output: false