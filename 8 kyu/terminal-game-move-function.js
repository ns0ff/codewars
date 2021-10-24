function move (position, roll) {
    return position+(roll*2);
}

// Tests
console.log(move(0, 4)); // return 8
console.log(move(3, 6)); // return 15
console.log(move(2, 5)); // return 12
console.log(move(7, 3)); // return 13