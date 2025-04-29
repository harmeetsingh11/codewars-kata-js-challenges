function sumDigPow(a, b) {
  // Filter the numbers in the range [a, b]
  return Array.from({ length: b - a + 1 }, (_, i) => a + i).filter((num) => {
    // Convert number to string, split into digits, and compute the sum of digits powered by their position (1-based)
    const sum = String(num)
      .split('')
      .reduce((acc, digit, idx) => acc + Math.pow(+digit, idx + 1), 0);
    // Check if the sum equals the original number
    return sum === num;
  });
}

console.log(sumDigPow(1, 10)); // [1,2,3,4,5,6,7,8,9]
console.log(sumDigPow(1, 100)); // [1,2,3,4,5,6,7,8,9,89]
console.log(sumDigPow(90, 100)); // []

/*
### How it works:
- `Array.from({ length: b - a + 1 }, (_, i) => a + i)` generates numbers from `a` to `b`.
- `filter(...)` keeps only the numbers that satisfy the "Eureka" condition.
- Inside the `filter`, we:
  - Convert the number to a string,
  - Split into digits,
  - Use `reduce` to calculate the sum of each digit raised to its (1-based) position power.
- Return only numbers where the computed sum equals the original number.
*/
