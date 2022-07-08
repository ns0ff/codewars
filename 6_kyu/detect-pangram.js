function isPangram(string){
    string = string.toLowerCase();
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
    return abc.every(x => string.includes(x));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // return true
console.log(isPangram("This is not a pangram.")); // return false