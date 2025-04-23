function spinningRings(innerMax, outerMax) {
  let inner = 0;
  let outer = 0;
  let moves = 0;

  while (true) {
    // After each move, check if both rings show the same number
    if (inner === outer && moves !== 0) return moves;

    moves++;

    // Simulate clockwise move for inner ring
    inner = (inner - 1 + (innerMax + 1)) % (innerMax + 1);

    // Simulate counter-clockwise move for outer ring
    outer = (outer + 1) % (outerMax + 1);
  }
}

console.log(spinningRings(2, 3)); // 5
console.log(spinningRings(3, 2)); // 2
console.log(spinningRings(1, 6)); // 1
console.log(spinningRings(6, 9)); // 12
console.log(spinningRings(11, 8)); // 20

/*
## Problem Summary
We have **two circular rings**:
- **Inner ring** goes from `0` to `innerMax` and spins **clockwise**, meaning it **decreases** by 1 per move (and wraps around).
- **Outer ring** goes from `0` to `outerMax` and spins **counter-clockwise**, so it **increases** by 1 per move (and wraps too).
- Initially, both are at `0`. We want to find the **first move count where both rings align on the same number again**.

---

## Intuition & Thought Process

### 1. **Understand the rotation behavior**
Let’s model how each ring moves over time:

| Move | Inner | Outer |
|------|-------|-------|
| 0    | 0     | 0     |
| 1    | innerMax | 1 |
| 2    | innerMax - 1 | 2 |
| ...  | ...   | ...   |

So:
- **Inner ring:** decreases by 1 each move → `(inner - 1) % (innerMax + 1)`
- **Outer ring:** increases by 1 each move → `(outer + 1) % (outerMax + 1)`

The modulo ensures the values wrap around when they go beyond their limits.

---

### 2. **Avoiding premature return at move 0**
At move 0, both are `0` — **but we don't want that**. We want the **first time after they've spun** and returned to the **same value** again. So we:
```js
if (inner === outer && moves !== 0)
```

---

### 3. **Simulate step by step**
- We initialize both positions at 0.
- Loop forever (or until match found).
- On each step:
  - Simulate the move for each ring using modular arithmetic.
  - Check if both are showing the same number.
- Return the move number when they align.

This approach is **guaranteed to work** since both rings are finite, and their states will eventually repeat.

---

### 4. **Why this approach is best**
- ❌ **Brute force array simulation** is overkill.
- ❌ **LCM logic** works *only* if we care about *same position*, not *same number shown*.
- ✅ This approach is:
  - **Simple** (just a loop)
  - **Accurate** (models both rings exactly)
  - **Efficient** for typical inputs (because values repeat in bounded time)
*/
