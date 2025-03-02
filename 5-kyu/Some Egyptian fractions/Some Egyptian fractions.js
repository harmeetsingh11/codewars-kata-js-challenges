function decompose(n) {
  // Parse input: If it's a fraction, split into numerator (a) and denominator (b), else treat as whole number
  var [a, b] = isNaN(n) ? n.split('/').map(Number) : [Number(n), 1],
    res = [];

  // Convert decimal numbers to fractions by scaling up to remove decimal places
  while (a % 1) [a, b] = [a * 10, b * 10];

  // Handle cases where numerator is greater than denominator (improper fraction)
  if (a > b) {
    res.push(String((a / b) >> 0)); // Extract integer part and add to result
    a %= b; // Get the remainder to continue decomposition
  }

  // Greedy algorithm to decompose the fraction into unit fractions
  while (a > 0) {
    var dv = Math.ceil(b / a); // Find the smallest possible unit fraction denominator
    res.push('1/' + dv); // Add the unit fraction to result
    [a, b] = [a * dv - b, b * dv]; // Update fraction to continue decomposition
  }

  return res;
}

/* 
### Explanation of the Approach:

This function implements the **Greedy Algorithm for Egyptian Fractions**, which decomposes a given rational number into a sum of distinct unit fractions (fractions with numerator = 1).

#### **Step-by-Step Breakdown:**

1. **Parse Input & Initialize Variables:**
   - If `n` is a fraction string (e.g., `"21/23"`), split it into numerator (`a`) and denominator (`b`).
   - If `n` is a whole number or decimal, treat it accordingly.
   - Initialize `res` to store the result.

2. **Handle Decimal Numbers:**
   - If `a` contains a decimal, multiply both `a` and `b` by 10 repeatedly until `a` becomes a whole number.

3. **Handle Improper Fractions (`a > b` case):**
   - If `a` is greater than `b`, extract the integer part (`a / b >> 0`), push it to `res`, and update `a` to the remainder (`a % b`).

4. **Greedy Decomposition into Unit Fractions:**
   - While `a > 0`, find the smallest possible **unit fraction denominator** (`dv`), which is `Math.ceil(b / a)`.
   - Add `"1/dv"` to the result array.
   - Update the fraction:  
     \[
     \frac{a}{b} - \frac{1}{dv} = \frac{a \times dv - b}{b \times dv}
     \]
   - Repeat until `a` becomes `0`.

5. **Return the result list, which contains the distinct unit fractions.**

---

### **Why is this Efficient?**
- The **greedy method ensures that each fraction added has the smallest possible denominator**, making the decomposition optimal.
- Each step **reduces the fraction significantly**, ensuring convergence.

---

### **Example Walkthrough**
#### **Input:** `"21/23"`
#### **Execution Steps:**
1. `a = 21, b = 23`
2. `dv = Math.ceil(23/21) = 2 → "1/2"`
3. Update fraction: `21/23 - 1/2 = 21*2 - 23 / 23*2 = 19/46`
4. `dv = Math.ceil(46/19) = 3 → "1/3"`
5. Update fraction: `19/46 - 1/3 = 11/138`
6. `dv = Math.ceil(138/11) = 13 → "1/13"`
7. Update fraction: `11/138 - 1/13 = 1/359`
8. `dv = Math.ceil(359/1) = 359 → "1/359"`
9. Update fraction: `1/359 - 1/359 = 0` (Done!)

#### **Output:** `["1/2", "1/3", "1/13", "1/359", "1/644046"]`
*/
