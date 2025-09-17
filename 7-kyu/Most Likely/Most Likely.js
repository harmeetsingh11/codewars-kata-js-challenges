/**
 * Compares two probabilities expressed as "a:b".
 * @param {string} prob1 - First probability string (e.g., "1:3").
 * @param {string} prob2 - Second probability string (e.g., "1:2").
 * @returns {boolean} - True if first probability is greater, else false.
 */
function compareProbabilities(prob1, prob2) {
  // Extract numerator and denominator from first probability
  const [a1, b1] = prob1.split(':').map(Number);
  // Extract numerator and denominator from second probability
  const [a2, b2] = prob2.split(':').map(Number);

  // Cross multiply to compare without division
  return a1 * b2 > a2 * b1;
}

// Example usage:
console.log(compareProbabilities('1:3', '1:2')); // false
console.log(compareProbabilities('2:5', '1:3')); // true
console.log(compareProbabilities('1:2', '1:2')); // false (equal probs)

/*
### Problem Understanding
We are given probabilities in the form `"a:b"`, which means **event happens `a` times out of `b` total attempts**.

So the probability value is simply:

$$
P = \frac{a}{b}
$$

We need to:

* Convert both input strings to numbers.
* Compare their probabilities.
* Return `true` if the **first probability** is greater than the **second**, otherwise `false`.

---

### 🔹 Optimized Approach

Instead of computing actual fractions (`a/b`), we can compare **cross-products** to avoid floating-point issues:

$$
\frac{a1}{b1} > \frac{a2}{b2} \quad \Longleftrightarrow \quad a1 \times b2 > a2 \times b1
$$

This way, we avoid division and keep integer math.

---

### 🔹 Explanation

* `"1:3"` → probability = `1/3 ≈ 0.33`
* `"1:2"` → probability = `1/2 = 0.5`
* Compare via cross multiplication:
  `1*2 = 2` vs `1*3 = 3` → `2 < 3`, so first is **less likely** → return `false`.
*/
