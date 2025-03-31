function sum_dig_nth_term(initVal, patternL, nthTerm) {
  const patternLen = patternL.length;

  // Efficiently find the nth term using modular arithmetic
  let cycles = Math.floor((nthTerm - 1) / patternLen);
  let remainder = (nthTerm - 1) % patternLen;

  // Calculate the nth term
  let nthValue = initVal + cycles * patternL.reduce((a, b) => a + b, 0);

  // Add the remaining pattern values
  for (let i = 0; i < remainder; i++) {
    nthValue += patternL[i];
  }

  // Sum the digits of the nth term
  return nthValue
    .toString()
    .split('')
    .reduce((sum, digit) => sum + +digit, 0);
}

// test cases
console.log(sum_dig_nth_term(10, [2, 1, 3], 6)); // ➝ 10 (6th term = 19 → 1 + 9 = 10)
console.log(sum_dig_nth_term(10, [1, 2, 3], 15)); // ➝ 10 (15th term = 37 → 3 + 7 = 10)

/*
### **Explanation:**
1. **Input Parsing:**
   - `initVal`: Starting value of the sequence.
   - `patternL`: Array of differences to be applied cyclically.
   - `nthTerm`: The desired position of the term.
2. **Optimization:**
   - The sequence follows a repeating pattern. To efficiently find the `nth` term:
     - Calculate how many **full cycles** of the pattern occur before reaching the nth term:  
       `cycles = Math.floor((nthTerm - 1) / patternLen)`
     - Find the **remainder** to determine how far into the next cycle you go:  
       `remainder = (nthTerm - 1) % patternLen`
   - The value of the sequence after full cycles:  
     `nthValue = initVal + cycles * sumOfPattern`
   - Add the remainder values to reach the exact `nth` term.
3. **Summing the Digits:**
   - Convert the `nthValue` to a string.
   - Split it into individual digits.
   - Sum the digits using `reduce()`.
4. **Complexity:**
   - Time Complexity: \(O(N)\) for pattern length \(N \leq 6\) → Essentially constant time due to the small max length.
   - Space Complexity: \(O(1)\).

### **Why it's Efficient:**
- Instead of iterating through all the terms (which would be slow for large \(n\)), this solution uses modular arithmetic and pattern repetition to directly calculate the `nth` term in \(O(1)\) time.
- It handles large inputs (up to 1,500,000 terms) efficiently and concisely.
*/
