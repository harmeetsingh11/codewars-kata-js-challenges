function fisHex(name) {
  // Convert to lowercase for consistency
  name = name.toLowerCase();

  // Keep only valid hex chars (a-f)
  const hexChars = [...name].filter((ch) => ch >= 'a' && ch <= 'f');

  // XOR their numeric values
  return hexChars.reduce((xor, ch) => xor ^ parseInt(ch, 16), 0);
}

// Example usage
console.log(fisHex('redlionfish')); // 12

/*
## Problem Restatement

You are given a string.

1. Extract only the **hexadecimal valid characters**: `a, b, c, d, e, f` (case-insensitive).
2. Convert each to its numeric value in hexadecimal.
3. XOR all of them together.
4. Return the result as an integer.

---

## Example

Input: `"redlionfish"`

* Extract hex chars → `e, d, f`
* Hex values → `14, 13, 15`
* XOR → `14 ^ 13 ^ 15 = 12`
* Output → `12`

---

## Explanation

1. Convert input string to lowercase → ensures uniform handling (`A` = `a`).
2. Extract only characters in range `a-f`.
3. Convert each char to its hex integer value using `parseInt(ch, 16)`.

   * `'a' → 10`, `'b' → 11`, …, `'f' → 15`.
4. Use `.reduce()` with XOR operator (`^`) to combine them.
5. Start with `0` as initial XOR identity.

This solution is:

* **Efficient** → single pass filter + reduce (`O(n)` time).
* **Concise** → no extra loops or storage.
* **Optimized** → works directly with string/array operations.
*/
