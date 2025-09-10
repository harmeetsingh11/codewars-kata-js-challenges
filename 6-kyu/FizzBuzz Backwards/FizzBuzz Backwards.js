/**
 * Find the [n, m] used to generate the given FizzBuzz sequence.
 * @param {Array} seq - Sequence of numbers and/or "Fizz", "Buzz", "FizzBuzz"
 * @returns {[number, number]} - Pair [n, m]
 */
function reverseFizzBuzz(seq) {
  // Helper: generate FizzBuzz sequence for given n, m
  const generate = (n, m, length) => {
    return Array.from({ length }, (_, i) => {
      const num = i + 1;
      if (num % n === 0 && num % m === 0) return 'FizzBuzz';
      if (num % n === 0) return 'Fizz';
      if (num % m === 0) return 'Buzz';
      return num;
    });
  };

  // Try all possible pairs [n, m] between 1 and 50
  for (let n = 1; n <= 50; n++) {
    for (let m = 1; m <= 50; m++) {
      if (JSON.stringify(generate(n, m, seq.length)) === JSON.stringify(seq)) {
        return [n, m]; // Found the correct pair
      }
    }
  }
}

console.log(reverseFizzBuzz([1, 2, 'Fizz', 4, 'Buzz', 6]));
// [3, 5]

console.log(reverseFizzBuzz([1, 'Fizz', 'Buzz', 'Fizz', 5, 'FizzBuzz']));
// [2, 3]

console.log(reverseFizzBuzz([1, 'FizzBuzz', 3, 'FizzBuzz', 5, 'FizzBuzz']));
// [2, 2]

console.log(
  reverseFizzBuzz(['Fizz', 'Fizz', 'Fizz', 'Fizz', 'Fizz', 'FizzBuzz'])
);
// [1, 6]
/*
### 🔑 Core Idea

We need to reverse-engineer the FizzBuzz sequence:

* **"Fizz"** → number divisible by `n`
* **"Buzz"** → number divisible by `m`
* **"FizzBuzz"** → divisible by both `n` and `m`
* **Normal numbers** → not divisible by either

So, we just need to find integers `n` and `m` (1 ≤ n, m ≤ 50) that generate the given sequence correctly.

---

### 🧠 Approach

1. Iterate through all possible pairs `(n, m)` in range **1 to 50**.
2. Simulate FizzBuzz using that pair and compare with the given sequence.
3. If it matches, return `[n, m]`.

This brute-force is fine since the range is **small (50 × 50 = 2500 checks max, sequence ≤ 100)** → very efficient.
---

### 📖 Explanation

* We generate sequences for each `(n, m)` in range `[1, 50]`.
* Compare with the input sequence.
* Return the first matching pair `[n, m]`.
* Complexity:

  * At most **2500 pairs × 100 length = 250k checks** → easily efficient for constraints.
*/
