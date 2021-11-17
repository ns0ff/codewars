// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter((el) => !geese.includes(el))
};

// Tests
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])); // expected output: ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])); // expected output: ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])); // expected output: []