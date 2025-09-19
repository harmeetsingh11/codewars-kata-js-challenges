/**
 * Checks if a given equation is a valid Turing equation.
 * @param {string} s - Equation string in the form "a+b=c"
 * @returns {boolean} - True if valid in Turing's interpretation, false otherwise
 */
function isTuringEquation(s) {
  // Split into left (a+b) and right (c)
  const [lhs, rhs] = s.split('=');

  // Further split left side into a and b
  const [a, b] = lhs.split('+');

  // Helper: reverse string number and convert to integer
  const reverseNum = (num) => parseInt(num.split('').reverse().join(''), 10);

  // Reverse each number
  const A = reverseNum(a);
  const B = reverseNum(b);
  const C = reverseNum(rhs);

  // Check validity
  return A + B === C;
}

// ✅ Examples
console.log(isTuringEquation('73+42=16')); // true
console.log(isTuringEquation('5+8=13')); // false
console.log(isTuringEquation('10+20=30')); // true

/*
### 🔎 Explanation

We need to check if an equation of the form `"a+b=c"` holds true under **Turing’s interpretation** (reading numbers backwards).

**Steps:**

1. **Split the equation** at `"="` to separate LHS (`a+b`) and RHS (`c`).
2. **Further split LHS** at `"+"` to get `a` and `b`.
3. **Reverse all numbers** (`a`, `b`, `c`) and convert them to integers.

   * Reversing automatically takes care of ignoring leading/trailing zeros.
4. **Check if** `reversed(a) + reversed(b) === reversed(c)`.
5. Return `true` if valid, otherwise `false`.

This approach is **O(n)** (linear in string length), which is optimal.

---

### ✨ Key Notes

* `parseInt("01", 10)` → `1` automatically removes leading zeros.
* Time Complexity: **O(n)** (where `n` is length of string).
* Space Complexity: **O(1)** (only storing numbers).

*/
