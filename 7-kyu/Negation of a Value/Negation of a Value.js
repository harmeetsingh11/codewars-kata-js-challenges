const negationValue = (negations, value) => {
  // Convert value to boolean for consistent behavior with falsy/truthy values
  let result = !!value;

  // Check if the number of negations is odd or even
  // Odd -> flip the boolean value once
  // Even -> no change (double negation cancels out)
  if (negations.length % 2 !== 0) {
    result = !result;
  }

  return result;
};

// Test cases
console.log(negationValue('!', false)); // true
console.log(negationValue('!!!!!', true)); // false
console.log(negationValue('!!', [])); // true
console.log(negationValue('', true)); // true (no negation, value stays the same)
console.log(negationValue('!!!', 0)); // true (0 is falsy, triple negation -> true)

/*
### **Explanation:**
1. **Convert to boolean:** 
   - The `!!value` ensures that the input value is treated as a boolean, regardless of its original type. This makes `0`, `""`, `null`, and `undefined` behave as `false`, while non-falsy values behave as `true`.

2. **Odd vs. Even negations:**
   - If the number of negations is **odd**, it flips the boolean value once.
   - If it's **even**, the negations cancel out, and the value remains the same.

3. **Time and Space Complexity:**
   - **Time Complexity:** \(O(1)\) → Only a single modulo operation and negation check.
   - **Space Complexity:** \(O(1)\) → Only a few variables are used.
*/
