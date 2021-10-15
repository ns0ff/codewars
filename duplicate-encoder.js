function duplicateEncode(word){
  var letterCount = {};
  var letters = word.toLowerCase().split('');

  letters.forEach(function(letter) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });

  return letters.map(function(letter) {
    return letterCount[letter] === 1 ? '(' : ')';
  }).join('');
}

console.log(duplicateEncode("aleluia"))
console.log(duplicateEncode("AleLuia"))    
console.log(duplicateEncode("No duplicates"))
console.log(duplicateEncode("All duplicated ALL DUPLICATED"))