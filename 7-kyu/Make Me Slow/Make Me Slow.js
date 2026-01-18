function makeMeSlow() {
  const delay = 7000; // 7 seconds in milliseconds
  const start = performance.now();

  // Busy-wait loop until 7 seconds have passed
  while (performance.now() - start < delay) {
    // intentionally empty
  }
}

/* 
## Key idea

* A `for` loop is **unreliable** for timing (depends on CPU speed).
* The **only accurate way** to guarantee ≥ 7 seconds is to **measure real time**.
* We’ll use a **busy-wait loop with `performance.now()`** to block execution until 7 seconds have passed.

This keeps the function **synchronous**, just like your original function.


---

## 🧠 Explanation (Simple & Clear)

### Why this works

* `performance.now()` gives **high-resolution time** (more accurate than `Date.now()`).
* The `while` loop **blocks execution** until the time difference reaches 7 seconds.
* This guarantees:

  * ✔ At least **7 seconds**
  * ✔ Works on **any machine**
  * ✔ No reliance on CPU speed or magic numbers

---

*/
