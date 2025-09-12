function wrap(height, width, length) {
  return 2 * (height + width + length + Math.min(height, width, length) + 10);
}

/*
### 🔎 Problem Restated

We need the ribbon length to:

1. Wrap around the **two smallest dimensions** (not the largest area explicitly).

   * Because the shortest way to wrap the box is always around the **smallest perimeter** rectangle.
   * This is equivalent to:
     `2 * (sum of all dimensions - largest dimension)`
     → or easier: `2 * (h + w + l - max(h,w,l))`.
     → another way: `2 * (h + w + l - largest) = 2 * (two smallest + ...)`.
   * Which simplifies to `2 * (h + w + l - max)` → or equivalently `2 * (h + w + l + min)` (just rearranged).
2. Add **20 cm** (extra for bow).

---

### ✨ Why Does This Work?

* `height + width + length` → sum of all sides.
* Adding `Math.min(height, width, length)` ensures we **skip the largest dimension**, effectively choosing the **two smallest sides** to wrap around.
* Multiply by 2 → because we need the **perimeter**.
* `+ 20` (inside the formula as `+ 10` since multiplied by 2) → extra ribbon for the bow.

---
### ✅ Example Walkthrough

`wrap(17, 32, 11)`

* Sum = `17 + 32 + 11 = 60`
* Smallest = `11`
* Formula: `2 * (60 + 11 + 10)` = `2 * 81` = **162** ✅

---

### 🎯 Intuition Recap

Instead of checking faces/areas:

* Just take **two smallest dimensions**, form the shortest loop → add bow.
* This is why the formula is elegant and optimal.
*/
