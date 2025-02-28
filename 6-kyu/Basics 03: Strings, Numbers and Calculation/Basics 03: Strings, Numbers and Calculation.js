function calculate(s) {
  // Remove all characters that are NOT digits, decimal points, or operators
  // [^\d+*/.()-] matches anything that is NOT a number (0-9), +, *, /, ., (, or - (for negative numbers))
  // `replace` removes unwanted characters, leaving only a valid mathematical expression
  return eval(s.replace(/[^\d+*/.()-]/g, '')).toFixed();
}

console.log(calculate('gdfgdf234dg54gf*23oP42')); // "54929268"

// ### **Explanation:**
// 1. **Remove Unwanted Characters**
//    - The regex `/[^\d+*/.()-]/g` matches any character that **is not**:
//      - `\d` → A digit (0-9)
//      - `+`, `*`, `/`, `-` → Allowed mathematical operators
//      - `.` → Decimal point for floating-point numbers
//      - `()` → Parentheses (if present)
//    - The `replace()` method removes these unwanted characters, leaving only a clean mathematical expression.

// 2. **Evaluate the Expression**
//    - `eval()` executes the cleaned-up mathematical string.
//    - Example:
//      - `"gdfgdf234dg54gf*23oP42"` → `"23454*2342"`
//      - `eval("23454*2342")` → `54929268`

// 3. **Round and Convert to String**
//    - `.toFixed()` rounds the result to the nearest integer.
//    - This ensures the final result is a **string** instead of a number.
