// Extend the Array prototype with the required methods
Array.prototype.square = function () {
  // Return a new array with all values squared
  return this.map((num) => num ** 2);
};

Array.prototype.cube = function () {
  // Return a new array with all values cubed
  return this.map((num) => num ** 3);
};

Array.prototype.average = function () {
  // Handle the case of an empty array by returning NaN
  return this.length === 0 ? NaN : this.sum() / this.length;
};

Array.prototype.sum = function () {
  // Calculate the sum of all array values
  return this.reduce((acc, num) => acc + num, 0);
};

Array.prototype.even = function () {
  // Filter out all even numbers from the array
  return this.filter((num) => num % 2 === 0);
};

Array.prototype.odd = function () {
  // Filter out all odd numbers from the array
  return this.filter((num) => num % 2 !== 0);
};

// Example Usage
var numbers = [1, 2, 3, 4, 5];

console.log(numbers.square()); // [1, 4, 9, 16, 25]
console.log(numbers.cube()); // [1, 8, 27, 64, 125]
console.log(numbers.average()); // 3
console.log(numbers.sum()); // 15
console.log(numbers.even()); // [2, 4]
console.log(numbers.odd()); // [1, 3, 5]
