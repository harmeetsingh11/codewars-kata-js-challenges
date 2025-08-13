/**
 * Converts any number to the nearest even number.
 * If halfway between two evens, rounds away from zero.
 * @param {number} num - The number to convert.
 * @returns {number} - The nearest even number.
 */
function nearestEven(num) {
  // Divide by 2 to convert problem to "nearest integer" rounding
  // Math.round() by default rounds .5 away from zero
  // Multiply back by 2 to get the nearest even
  return Math.round(num / 2) * 2;
}

// Example runs:
console.log(nearestEven(1)); // 2
console.log(nearestEven(0.5)); // 0
console.log(nearestEven(-1)); // -2
console.log(nearestEven(-0.5)); // 0

/*
This is essentially **rounding to the nearest even number**, with the twist that when exactly halfway between two even numbers, we **round away from zero**.

### **Explanation**

1. **Key idea** → Even numbers are just multiples of `2`.
   So if we **divide the number by 2**, finding the *nearest integer* to that gives the *nearest even number* when we multiply back by 2.

2. **Rounding rule** →
   JavaScript’s `Math.round()`:

   * Rounds `.5` **away from zero** automatically.
   * Works for both positive and negative numbers.

3. **Why this is optimal**:

   * **Time complexity:** O(1) (just math operations)
   * **Space complexity:** O(1)
   * No conditionals or loops.
   * Handles positive, negative, fractional, and halfway cases in one step.
*/
