// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}

// Tests
console.log(reverseWords('hello world!')); // return 'world! hello'
console.log(reverseWords("yoda doesn't speak like this")); // return "this like speak doesn't yoda"
console.log(reverseWords('foobar')); // return 'foobar'
console.log(reverseWords('row row row your boat')); // return 'boat your row row row'