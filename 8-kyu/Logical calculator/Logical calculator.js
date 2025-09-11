/**
 * Sequentially applies a logical operator to an array of booleans.
 * @param {boolean[]} values - Array of boolean values.
 * @param {string} operator - Logical operator: "AND", "OR", "XOR".
 * @returns {boolean} - Final boolean result.
 */
function logicalCalc(values, operator) {
  return values.reduce((acc, val) => {
    if (operator === 'AND') return acc && val;
    if (operator === 'OR') return acc || val;
    if (operator === 'XOR') return acc !== val; // XOR as inequality
  });
}

console.log(logicalCalc([true, true, false], 'AND')); // false
console.log(logicalCalc([true, true, false], 'OR')); // true
console.log(logicalCalc([true, true, false], 'XOR')); // false

/*
### Explanation

1. **Inputs**

   * An array of booleans (`true`/`false`).
   * A string specifying the operator: `"AND"`, `"OR"`, or `"XOR"`.

2. **Approach**

   * Use `reduce` to iterate through the array.
   * For each pair of accumulated value (`acc`) and current value (`val`), apply the logical operator.
   * Logical operations are:

     * `AND` → `acc && val`
     * `OR` → `acc || val`
     * `XOR` → `acc !== val` (true if they differ).

3. **Efficiency**

   * Time Complexity: **O(n)** → Each element is processed once.
   * Space Complexity: **O(1)** → No extra memory used.
   * Works for arrays up to length 50 as required.

*/
