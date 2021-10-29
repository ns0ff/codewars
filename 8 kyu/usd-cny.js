// https://www.codewars.com/kata/5977618080ef220766000022

function usdcny(usd) {
    let cny = parseFloat(usd).toFixed(2) * 6.75;
    return  cny.toFixed(2) + ' Chinese Yuan';
}

 // usdcny = usd => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;

// Tests
console.log(usdcny(15)); // expected output: '101.25 Chinese Yuan'
console.log(usdcny(465)); // expected output: '3138.75 Chinese Yuan'