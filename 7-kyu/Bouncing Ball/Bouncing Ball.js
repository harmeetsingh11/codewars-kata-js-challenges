/**
 * Calculates the number of bounces until the ball's height ≤ 1.
 * @param {number} initialHeight - Starting height (integer, 2–1000).
 * @param {number} bouncingProportion - Proportion of height after each bounce (0 ≤ p < 1).
 * @returns {number} - Number of bounces before stopping.
 */
function bouncingBall(initialHeight, bouncingProportion) {
  let height = initialHeight;
  let bounces = 0;

  // Keep bouncing until height drops to 1 or below
  while (true) {
    height *= bouncingProportion; // New height after bounce
    bounces++; // Count this bounce
    if (height <= 1) break; // Stop if ball won't bounce further
  }

  return bounces;
}

// Example usage:
console.log(bouncingBall(4, 0.5)); // Output: 2
console.log(bouncingBall(30, 0.3)); // Output: 3

/*
### **Problem Recap**

We drop a ball from a height, and after each bounce it comes back to a fixed proportion of its previous height.
We keep counting bounces until the ball’s bounce height becomes **1 or less**.

---

### **Logic Behind the Solution**

1. **Start with the initial height**
   We store it in a variable `height`.

2. **Simulate each bounce**

   * After a bounce, the height is:

     ```
     new height = current height × bouncingProportion
     ```
   * We immediately **increment the bounce counter** because each bounce counts, even the one that drops it to ≤ 1.

3. **Stop condition**

   * If the new height after a bounce is **≤ 1**, it means the ball can’t bounce high enough anymore.
   * We **break** out of the loop at that point.

4. **Return the count**

   * This count represents the total number of bounces before the ball stops moving.


* **Efficiency:**

  * The height decreases exponentially.
  * That means the number of iterations is proportional to **log(initialHeight)** base `1 / bouncingProportion`.
  * For example, if initialHeight = 1000 and proportion = 0.5, it takes at most \~10 iterations.

---

### **Example Walkthrough**

#### Example 1: `bouncingBall(4, 0.5)`

```
Start: height = 4, bounces = 0

Bounce 1: height = 4 × 0.5 = 2   → bounces = 1
Bounce 2: height = 2 × 0.5 = 1   → bounces = 2, stop (≤ 1)
```

**Result:** 2 bounces ✅

---

#### Example 2: `bouncingBall(30, 0.3)`

```
Start: height = 30, bounces = 0

Bounce 1: height = 30 × 0.3 = 9       → bounces = 1
Bounce 2: height = 9 × 0.3 = 2.7      → bounces = 2
Bounce 3: height = 2.7 × 0.3 = 0.81   → bounces = 3, stop (≤ 1)
```

**Result:** 3 bounces ✅
*/
