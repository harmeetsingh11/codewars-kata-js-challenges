// Add hexNumber method to String prototype
String.prototype.hexNumber = function () {
  // Regular expression to match valid hex numbers
  const hexRegex = /^(?:0x)?[0-9A-Fa-f]+$/;

  // Test the string against regex
  return hexRegex.test(this);
};

// ---- Example usage ----
console.log('0x1A'.hexNumber()); // true
console.log('FF'.hexNumber()); // true
console.log('0Xabc'.hexNumber()); // true
console.log('123'.hexNumber()); // true
console.log('0x'.hexNumber()); // false
console.log('G1'.hexNumber()); // false
console.log(''.hexNumber()); // false

/*
Explanation:

We need to implement `String.prototype.hexNumber` (similar to `StringUtils.isHexNumber` in Java).

### Problem breakdown:

* A **hexadecimal number** can contain:

  * Digits `0-9`
  * Letters `A-F` or `a-f`
* It **may** start with `"0x"` or `"0X"` (optional prefix).
* It must have **at least one valid hex digit** after optional `0x`.

---

### Optimal Approach

The **cleanest and most efficient** way is to use a **regular expression**:

* `^` → start of string
* `(?:0x)?` → optional `0x` prefix (non-capturing group)
* `[0-9A-Fa-f]+` → one or more valid hex digits
* `$` → end of string

This ensures:

* No empty strings.
* `"0x"` alone is invalid.
* Works in O(n) time (regex engine scans once).

### code Explanation:

* `String.prototype.hexNumber` extends all strings with this function.
* `hexRegex`:

  * `^(?:0x)?` → match beginning with optional `0x` or `0X`.
  * `[0-9A-Fa-f]+` → ensures at least one digit follows.
  * `$` ensures no extra invalid characters.
* `.test(this)` runs regex against the string (`this` refers to the string instance).

**Time Complexity:** O(n)
**Space Complexity:** O(1)
*/
