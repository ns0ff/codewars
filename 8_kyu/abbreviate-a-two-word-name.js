// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name){
    let splitName = name.toUpperCase().trim().split(' ');
    return splitName[0].charAt(0) + '.' + splitName[1].charAt(0);
}
// Tests
console.log(abbrevName('Sam Harris'));