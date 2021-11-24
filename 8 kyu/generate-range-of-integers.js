// https://www.codewars.com/kata/55eca815d0d20962e1000106

function generateRange(min, max, step){
    const len = Math.floor((max - min) / step) + 1;
    return [...Array(len).keys()].map(x => x * step + min);

    // For loop:
    /* let arr = [];
    for (i = min; i <= max; i += step) {
        arr.push(i);
    }
    return arr; */
}

// Other way:
// let generateRange = (min, max, step) => min > max ? [] : [min, ...generateRange(min + step, max, step)]


// Output:
console.log(generateRange(2, 10, 2)); // expected output: [2,4,6,8,10]