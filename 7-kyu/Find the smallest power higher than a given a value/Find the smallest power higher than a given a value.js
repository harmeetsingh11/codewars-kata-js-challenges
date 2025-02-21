function closestHigherPower(val, pow_) {
  // Find the smallest integer whose power is strictly greater than val
  let base = Math.ceil(Math.pow(val, 1 / pow_));
  while (Math.pow(base, pow_) <= val) {
    base++;
  }
  return base ** pow_;
}

// Test cases
console.log(closestHigherPower(12385, 3)); // 13824
console.log(closestHigherPower(1245678, 5)); // 1419857
console.log(closestHigherPower(8, 3)); // 27
console.log(closestHigherPower(823543, 7)); // 2097152
