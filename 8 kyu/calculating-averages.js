// https://www.codewars.com/kata/529f32794a6db5d32a00071f

var Calculator = {
    average: function(...arr) {
     return arr.length == 0 ? 0 : arr.reduce((a, b) => b + a ) / arr.length;
    }
};