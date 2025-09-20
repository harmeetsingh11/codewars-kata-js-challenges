// Sticky Calculator Function
function stickyCalc(operation, val1, val2) {
  // Step 1: Round inputs to nearest integers
  val1 = Math.round(val1);
  val2 = Math.round(val2);

  // Step 2: Stick the two numbers together (convert to string, then back to number)
  const stuck = Number(String(val1) + String(val2));

  // Step 3: Perform operation using eval-like approach but safer
  let result;
  switch (operation) {
    case '+':
      result = stuck + val2;
      break;
    case '-':
      result = stuck - val2;
      break;
    case '*':
      result = stuck * val2;
      break;
    case '/':
      result = stuck / val2;
      break;
    default:
      throw new Error('Invalid operation');
  }

  // Step 4: Round final result to nearest integer
  return Math.round(result);
}

// Example runs:
console.log(stickyCalc('+', 50, 12)); // 5024
console.log(stickyCalc('-', 7, 5)); // 70
console.log(stickyCalc('*', 13, 20)); // 26400
console.log(stickyCalc('/', 10, 10)); // 101
console.log(stickyCalc('/', 12.1, 6.8)); // 18

/*
### 📖 Explanation:

1. **Rounding inputs** → Both `val1` and `val2` are rounded to the nearest integers (since only integers are allowed in this calculator).

   * Example: `12.1 → 12`, `6.8 → 7`.

2. **Sticky concatenation** → Convert both numbers to strings, concatenate them, then back to a number.

   * Example: `12` and `7` → `"12" + "7"` → `"127"` → `127`.

3. **Perform the operation** → Depending on `operation`, apply addition, subtraction, multiplication, or division with the *stuck number* and `val2`.

4. **Final rounding** → Output is always rounded to the nearest integer.

---

✅ **Optimized points:**

* Only minimal conversions (string → number).
* Uses `switch` instead of unsafe `eval`.
* Ensures rounding at both input and output stages.
*/
