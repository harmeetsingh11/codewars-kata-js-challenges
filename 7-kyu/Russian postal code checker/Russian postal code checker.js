function isValidRussianPostcode(postcode) {
  // Check if the postcode is a string of exactly 6 digits and does not start with 0, 5, 7, 8, or 9
  return /^[12346]\d{5}$/.test(postcode);
}

// Test cases
console.log(isValidRussianPostcode('198328')); // true
console.log(isValidRussianPostcode('310003')); // true
console.log(isValidRussianPostcode('424000')); // true
console.log(isValidRussianPostcode('056879')); // false
console.log(isValidRussianPostcode('12A483')); // false
console.log(isValidRussianPostcode('1@63')); // false
console.log(isValidRussianPostcode('111')); // false
console.log(isValidRussianPostcode('987654')); // false

// ### Explanation:
// 1. The function uses a **regular expression** to validate the postcode format:
//    - `^[12346]` → Ensures the first digit is **1, 2, 3, 4, or 6** (valid starting digits).
//    - `\d{5}$` → Ensures exactly **5 more digits** follow (total 6 digits).
// 2. `.test(postcode)` returns `true` if the string matches the pattern, otherwise `false`.
// 3. The function is both **concise and efficient** as it performs a single regex check.
//
// This solution runs in **O(1) time complexity**, making it optimal for validation.
