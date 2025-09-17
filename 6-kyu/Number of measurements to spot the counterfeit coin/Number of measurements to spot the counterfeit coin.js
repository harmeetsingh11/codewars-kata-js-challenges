/**
 * Minimum number of weighings to find the lighter odd coin among n coins
 * using a balance scale (worst case).
 *
 * @param {number} n - Number of coins
 * @returns {number} - Minimum weighings required
 */
function minWeighings(n) {
  if (n <= 1) return 0; // Only 1 coin, no weighing needed

  const val = Math.log(n) / Math.log(3); // log base 3
  const epsilon = 1e-10; // tiny tolerance for floating point errors

  // If val is very close to an integer, treat it as that integer
  return Math.abs(val - Math.round(val)) < epsilon
    ? Math.round(val)
    : Math.ceil(val);
}

// ✅ Tests
console.log(minWeighings(8)); // 2
console.log(minWeighings(9)); // 2
console.log(minWeighings(27)); // 3
console.log(minWeighings(81)); // 4 (correct now!)
console.log(minWeighings(1)); // 0

/* 
## Problem Restated

We have **n coins**, exactly one of them is fake (lighter).
We want to find the fake coin using the **minimum number of weighings in the worst case** on a balance scale (2 plates).

---

## ⚖️ Key Observations

1. **Three outcomes per weighing**
   When you place some coins on the left plate and the same number on the right plate:

   * Left side lighter → fake is on the left group
   * Right side lighter → fake is on the right group
   * Both equal → fake is among the remaining coins

   👉 So **each weighing gives us 3 possible outcomes**.

2. **Divide & Conquer logic**
   Because each weighing has 3 outcomes, one weighing can distinguish between 3 groups.
   This means:

   * In 1 weighing → we can test up to 3 coins.
   * In 2 weighings → we can test up to 3² = 9 coins.
   * In 3 weighings → up to 3³ = 27 coins.
   * In `k` weighings → up to 3ᵏ coins.

   So, if we want to guarantee finding the fake among `n` coins:

   ```
   3^k >= n
   ```

3. **Formula for k**
   Taking logs:

   ```
   k = ceil(log₃(n))
   ```

   That’s the minimum number of weighings needed in the worst case.

---

## 🧮 Examples

* `n = 8`

  * Need `ceil(log₃(8)) = ceil(1.89) = 2 weighings`.
* `n = 9`

  * Need `ceil(log₃(9)) = 2 weighings`.
* `n = 27`

  * Need `ceil(log₃(27)) = 3 weighings`.
* `n = 81`

  * Need `ceil(log₃(81)) = 4 weighings`.

---
## 🔑 Intuition Recap

* The balance scale gives **3-way information** per weighing.
* Each weighing reduces the search space by \~⅓ in the worst case.
* Therefore, the number of weighings grows like **log base 3 of n**.
* Taking the ceiling ensures we always cover the worst case.
*/
