function one(sequence, callback) {
  // Use Array.filter to find all elements where the callback returns true
  return sequence.filter(callback).length === 1;
}

// Example
const bigger_than_ten = (x) => x > 10;

console.log(one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten)); // true
console.log(one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten)); // false
console.log(one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten)); // false
