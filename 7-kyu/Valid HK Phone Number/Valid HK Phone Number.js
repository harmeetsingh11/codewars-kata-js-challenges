/**
 * Check if the entire string is a valid HK phone number
 * Format: xxxx xxxx (exactly 8 digits with 1 space in between)
 */
function isValidHKPhoneNumber(str) {
  // ^ = start of string, $ = end of string
  // \d{4} = exactly 4 digits
  // space must be exactly one " "
  const regex = /^\d{4} \d{4}$/;
  return regex.test(str);
}

/**
 * Check if the string contains a valid HK phone number anywhere inside
 */
function containsValidHKPhoneNumber(str) {
  // We do not anchor with ^ and $ since we want it *inside* any string
  const regex = /\d{4} \d{4}/;
  return regex.test(str);
}

// ✅ Examples
console.log(isValidHKPhoneNumber('1234 5678')); // true
console.log(isValidHKPhoneNumber('85748475')); // false
console.log(isValidHKPhoneNumber('3857  4756')); // false
console.log(isValidHKPhoneNumber('     1234 5678   ')); // false

console.log(containsValidHKPhoneNumber('     1234 5678   ')); // true
console.log(containsValidHKPhoneNumber('skldfjs9345 8234sdklf')); // true

/*
We need **two functions** in JavaScript:

1. **`isValidHKPhoneNumber(str)`** → checks if the whole string is a valid HK phone number.
2. **`containsValidHKPhoneNumber(str)`** → checks if the string contains a valid HK phone number anywhere inside.

---

## 📌 Key Points

* A valid HK number must strictly match `xxxx xxxx` (4 digits, a single space, 4 digits).
* No extra spaces before/after.
* For "contains", we just search the pattern inside the string, without requiring the whole string to match.

---

## 🔎 Explanation

* **Regex for exact match (`isValidHKPhoneNumber`)**
  `^\d{4} \d{4}$`

  * `^` → beginning of string
  * `\d{4}` → exactly 4 digits
  * `" "` → exactly one space
  * `\d{4}` → exactly 4 digits
  * `$` → end of string

* **Regex for search inside string (`containsValidHKPhoneNumber`)**
  `\d{4} \d{4}` → finds any occurrence of 4 digits + 1 space + 4 digits inside text.

---

This is the **most concise, efficient, and correct** way (O(n) regex scan, no manual loops).
*/
