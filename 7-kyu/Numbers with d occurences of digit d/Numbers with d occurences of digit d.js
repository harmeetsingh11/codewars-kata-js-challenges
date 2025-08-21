/**
 * Checks if a number is a dd number.
 * A number is dd if some digit d (1-9) occurs exactly d times.
 *
 * @param {number} n - The input number (positive integer).
 * @returns {boolean} - True if dd number, false otherwise.
 */
function isDd(n) {
  // Convert number to string for digit processing
  const str = String(n);

  // Count occurrences of each digit (0–9)
  const freq = Array(10).fill(0);
  for (const ch of str) {
    freq[ch]++;
  }

  // Check if any digit d (1–9) occurs exactly d times
  for (let d = 1; d <= 9; d++) {
    if (freq[d] === d) {
      return true;
    }
  }

  return false;
}

// --------- Examples ---------
console.log(isDd(664444309)); // true (digit 4 occurs 4 times)
console.log(isDd(30313)); // true (digit 3 occurs 3 times)
console.log(isDd(122)); // true (digit 1 once, digit 2 twice)
console.log(isDd(123109)); // false
console.log(isDd(56542)); // false
console.log(isDd(0)); // false

/*
### 🔹 Core Idea:

1. Convert the number to a string so we can easily check digit occurrences.
2. Count how many times each digit (1–9) appears.
3. If **any digit `d` occurs exactly `d` times**, return `true`.
4. Otherwise, return `false`.

This approach is **efficient (O(n))** where `n` is the number of digits.

-------

### 🔹 Explanation:

* `664444309` → digit `4` occurs **4 times** → ✅
* `30313` → digit `3` occurs **3 times** → ✅
* `122` → digit `1` occurs once, digit `2` occurs twice → ✅
* `123109` → no digit `d` occurs `d` times → ❌
* `0` → digit `0` occurs once, but we only check `1–9` → ❌
*/
