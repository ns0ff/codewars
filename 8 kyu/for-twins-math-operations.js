// https://www.codewars.com/kata/59c287b16bddd291c700009a

const iceBrickVolume = (radius, bottleLength, rimLength) => (bottleLength - rimLength) * radius * 2 * radius

// Output:
console.log(iceBrickVolume(1, 10, 2)); // Expected output: 16
console.log(iceBrickVolume(5, 30, 7)); // Expected output: 1150