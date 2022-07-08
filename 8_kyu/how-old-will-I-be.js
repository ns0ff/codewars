//

function  calculateAge(a, b) {
    // Single line:
    return a > b ? `You will be born in ${a - b} year${a - b == 1 ? "" : "s"}.`:
           a < b ? `You are ${b - a} year${b - a == 1 ? "" : "s"} old.`:
           `You were born this very year!`

    // First solution:
    // if (b > a && b - a > 1) return 'You are ' + (b - a) + ' years old.';
    // if (b > a && b - a == 1) return 'You are ' + (b - a) + ' year old.';
    // if (a > b && a - b > 1) return 'You will be born in ' + (a - b) + ' years.';
    // if (a > b && a - b == 1) return 'You will be born in ' + (a - b) + ' year.';
    // if (a == b) return 'You were born this very year!';
}
  
// Tests
console.log(calculateAge(2012, 2016)); // expected ouptup: "You are 4 years old."
console.log(calculateAge(1989, 2016)); // expected ouptup: "You are 27 years old."
console.log(calculateAge(2000, 2090)); // expected ouptup: "You are 90 years old."
console.log(calculateAge(2000, 1990)); // expected ouptup: "You will be born in 10 years."
console.log(calculateAge(3400, 3400)); // expected ouptup: "You were born this very year!"
console.log(calculateAge(900, 2900)); // expected ouptup: "You are 2000 years old."
console.log(calculateAge(2010, 1990)); // expected ouptup: "You will be born in 20 years."
console.log(calculateAge(2010, 1500)); // expected ouptup: "You will be born in 510 years."
console.log(calculateAge(2011, 2012)); // expected ouptup: "You are 1 year old."
console.log(calculateAge(2000, 1999)); // expected ouptup: "You will be born in 1 year."
  