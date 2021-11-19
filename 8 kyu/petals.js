// 

function howMuchILoveYou(nbPetals) {
    const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  
  for (let i = 0; i <= nbPetals-1; i += 1) {
    if (i === nbPetals-1) {
      return arr[i%6];
    }
  }
}

// Tests
console.log(howMuchILoveYou(7)); // expected output: "I love you"
console.log(howMuchILoveYou(3)); // expected output: "a lot"
console.log(howMuchILoveYou(6)); // expected output: "not at all"