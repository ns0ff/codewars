function getRealFloor(n) {
    // single line solution:
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;

    // Previous solution
    // if ( n <= 0) return n;
    // if (n > 13) return n-2;
    // return n-1;
}


// Tests
console.log(getRealFloor(1)); // return 0
console.log(getRealFloor(8)); // return 7
console.log(getRealFloor(15)); // return 13
console.log(getRealFloor(0)); // return 0
console.log(getRealFloor(-2)); // return -2