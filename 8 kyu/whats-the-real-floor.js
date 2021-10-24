function getRealFloor(n) {
    if ( n <= 0) return n;
    if (n > 13) return n-2;
    return n-1;
}

// Tests
console.log(getRealFloor(1)); // return 0
console.log(getRealFloor(8)); // return 7
console.log(getRealFloor(15)); // return 13
console.log(getRealFloor(0)); // return 0
console.log(getRealFloor(-2)); // return -2