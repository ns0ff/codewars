// https://www.codewars.com/kata/5b853229cfde412a470000d0

function twiceAsOld(dad, son) {
    return Math.abs(dad - 2 * son);
}

// Tests
console.log(twiceAsOld(36,7)); // expected output: 22;
console.log(twiceAsOld(29,0)); // expected output: 29;
console.log(twiceAsOld(22,1)); // expected output: 20;