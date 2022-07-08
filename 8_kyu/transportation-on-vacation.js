// https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost(d) {
    let ttl = 0;
    if (d >= 7) {
      ttl = (d * 40) - 50;
    } else if (d >= 3){
      ttl = (d * 40) - 20;
    } else {
      ttl = d * 40;
    }
    
    return ttl;
    // single line func
    // return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));

}

// Tests
console.log(rentalCarCost(1)); // retrun 40
console.log(rentalCarCost(2)); // retrun 80
console.log(rentalCarCost(3)); // retrun 100
console.log(rentalCarCost(5)); // retrun 180
console.log(rentalCarCost(6)); // retrun 220
console.log(rentalCarCost(7)); // retrun 230
console.log(rentalCarCost(10)); // retrun 350