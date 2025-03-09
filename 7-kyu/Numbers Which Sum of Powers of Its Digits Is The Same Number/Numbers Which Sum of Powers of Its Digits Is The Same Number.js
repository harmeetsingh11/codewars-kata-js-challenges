function eqSumPowdig(hMax, exp) {
  // Initialize an empty array to store the result
  let result = [];

  // Iterate through numbers starting from 2 up to hMax
  for (let num = 2; num <= hMax; num++) {
    // Convert number to array of digits and compute sum of their powers
    let sum = [...String(num)].reduce(
      (acc, digit) => acc + Math.pow(+digit, exp),
      0
    );

    // If sum equals the number, add it to result
    if (sum === num) result.push(num);
  }

  return result;
}

// Test cases
console.log(eqSumPowdig(100, 2)); // []
console.log(eqSumPowdig(1000, 2)); // []
console.log(eqSumPowdig(200, 3)); // [153]
console.log(eqSumPowdig(370, 3)); // [153, 370]

/* 
### Explanation:
1. **Convert the number to digits:**  
   - Convert `num` to a string, then spread it into an array of digits.
   
2. **Compute the sum of digit powers:**  
   - Use `.reduce()` to calculate the sum of each digit raised to the power of `exp`.

3. **Check if sum equals the number:**  
   - If `sum === num`, add it to the result array.

4. **Return sorted results:**  
   - The result is naturally sorted since we iterate numerically.
*/
