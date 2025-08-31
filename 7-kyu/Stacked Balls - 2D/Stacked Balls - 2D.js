/**
 * Calculate height of stacked pool balls as multiple of diameter.
 * @param {number} layers - Number of layers in the stack.
 * @returns {number} - Height in multiples of ball diameter.
 */
function stackHeight(layers) {
  if (layers === 0) return 0; // No layers, no height
  return 1 + ((layers - 1) * Math.sqrt(3)) / 2;
}

// ---- Example Usage ----
console.log(stackHeight(0)); // 0
console.log(stackHeight(1)); // 1
console.log(stackHeight(2)); // ~1.866
console.log(stackHeight(5)); // ~4.464

/*
### 📘 Explanation

* Each **pool ball** has a diameter = `1` (we measure height in multiples of diameter).
* For `0` layers → height = `0`.
* For `1` layer → just 1 ball → height = `1`.
* For multiple layers:

  * The first ball contributes **1 diameter**.
  * Each additional layer adds **√3/2 ≈ 0.866** (because balls sit in the gaps of the layer below, forming an equilateral triangle, height = `√3/2` times diameter).
* So the formula:

$$
\text{height}(n) = 
\begin{cases}
0 & \text{if } n = 0 \\
1 + (n-1) \times \frac{\sqrt{3}}{2} & \text{if } n \geq 1
\end{cases}
$$

---
### ⏱️ Time & Space Complexity

* **Time Complexity:** `O(1)` (just arithmetic).
* **Space Complexity:** `O(1)` (no extra space used).
*/
