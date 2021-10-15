var isSquare = function(n){
    let value = Math.floor(Math.sqrt(n));
        if (value * value == n){
            return true;
        } else {
            return false; // fix me
        }
}

console.log(isSquare(-1)); // false
console.log(isSquare(0)); // true
console.log(isSquare(3)); // false
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true
console.log(isSquare(26)); // false