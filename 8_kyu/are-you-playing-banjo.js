// https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() == 'r' ? name + ' plays banjo' : name + ' does not play banjo';
}

// Tests
console.log(areYouPlayingBanjo("Adam")); // expected output: "Adam does not play banjo"
console.log(areYouPlayingBanjo("Paul")); // expected output: "Paul does not play banjo"
console.log(areYouPlayingBanjo("Ringo")); // expected output: "Ringo plays banjo"
console.log(areYouPlayingBanjo("bravo")); // expected output: "bravo does not play banjo"
console.log(areYouPlayingBanjo("rolf")); // expected output: "rolf plays banjo"
