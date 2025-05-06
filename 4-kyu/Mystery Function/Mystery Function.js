// Function to convert a non-negative integer n to its corresponding Gray code
function mystery(n) {
  // Gray code is calculated as: n XOR (n >> 1)
  return n ^ (n >> 1);
}

// Function to find the original number (inverse of Gray code)
function mysteryInv(g) {
  // Initialize result with the Gray code
  let n = g;
  // XOR successive right shifts until we remove all the 1's influence
  while ((g >>= 1)) {
    n ^= g;
  }
  return n;
}

// Function to return the commonly known name of the mystery function
function nameOfMystery() {
  return 'Gray code';
}

/* 
## 🔍 Problem Recap

We’re given a recursive binary transformation called `T(m)` which:

* Starts at `T(1) = [0, 1]`
* Builds `T(m + 1)` by:

  * Taking `T(m)`
  * Appending a reversed `T(m)` but prepending `1`s
  * Prepending `0`s to the first half

This process gives us a **Gray code sequence** — a binary sequence where **only one bit changes** between consecutive entries.

For example:

```txt
T(2): [00, 01, 11, 10]  // Binary: 0, 1, 3, 2 (in decimal)
T(3): [000, 001, 011, 010, 110, 111, 101, 100]  // Binary: 0, 1, 3, 2, 6, 7, 5, 4
```

---

## 🧠 Intuition Behind Gray Code (`mystery(n)`)

### Goal:

Given an integer `n`, find its corresponding Gray code.

### Key Insight:

To ensure only **one bit changes** at a time between values, Gray code for a number `n` is calculated as:

```js
gray(n) = n ^ (n >> 1)
```

This works because:

* The XOR operation (`^`) identifies where bits change between two numbers.
* Shifting `n` right by 1 (`n >> 1`) aligns each bit with its previous bit in `n`.
* So `n ^ (n >> 1)` creates a number where **each bit indicates a change** from the previous bit, which is exactly what Gray code does.

---

### 🔄 Inverse Gray Code (`mysteryInv(g)`)

Given a Gray code `g`, how do we recover the original number `n`?

We use the reverse logic:

* The **most significant bit (MSB)** of `n` is the same as `g`
* For the remaining bits:
  Each bit of `n` is determined by **XORing the previous result with the next bit in `g`**

We can efficiently recover it by:

```js
n = g
while (g >>= 1) {
  n ^= g
}
```

Each shift and XOR operation "undoes" the effect of the previous XOR in the Gray code generation.

---

## 🚀 Summary

| Function          | Purpose                                | Formula                |
| ----------------- | -------------------------------------- | ---------------------- |
| `mystery(n)`      | Get the Gray code of number `n`        | `n ^ (n >> 1)`         |
| `mysteryInv(g)`   | Get the original number from Gray code | Loop: `n ^= (g >>= 1)` |
| `nameOfMystery()` | Reveals what this function is really   | Returns `"gray code"`  |

This approach is:

* Efficient (no recursion or array building)
* Bitwise (great for performance)
* Perfectly scales to 63-bit inputs

*/
