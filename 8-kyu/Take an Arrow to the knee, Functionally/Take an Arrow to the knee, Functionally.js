// Arrow function to convert an array of numbers to corresponding ASCII characters
const ArrowFunc = (arr) => arr.map((num) => String.fromCharCode(num)).join('');

console.log(ArrowFunc([84, 101, 115, 116])); // Output: "Test"
