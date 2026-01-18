/**
 * Sums numbers given in different bases and returns the total in base 10
 * @param {Array<[string, number]>} arr - Array of [numberAsString, base]
 * @returns {number} - Sum of all numbers in base 10
 */
function sumDifferentBases(arr) {
  let sum = 0;

  for (const [numStr, base] of arr) {
    // Convert the number from given base to base 10
    sum += parseInt(numStr, base);
  }

  return sum;
}

/* 
## ✅ Key Idea

Each element in the array is:

```js
[numberAsString, base]
```

We need to:

1. Convert each number from its given base (2–36) into **base 10**
2. Sum all converted values
3. Return the final sum as an **integer**

---

## ✅ Explanation

### 🔹 How it Works

* `parseInt(value, base)` converts a string number from **any base between 2 and 36** into base 10
* We loop through the array
* Convert each number
* Accumulate the sum

### 🔹 Why This Is Optimal

* **Time Complexity:** `O(n)` (single pass through the array)
* **Space Complexity:** `O(1)` (no extra memory used)
* Uses **native JS parsing**, which is fast and reliable
* No manual base conversion needed

---

## ✅ Example Walkthrough

### Input

```js
[
  ["101", 16],
  ["7640", 8],
  ["1", 9]
]
```

### Conversion

* `"101"` (base 16) → `257`
* `"7640"` (base 8) → `4000`
* `"1"` (base 9) → `1`

### Output

```js
257 + 4000 + 1 = 4258
```

---

## ✅ More Examples

```js
sumDifferentBases([["101", 2], ["10", 8]]);
// → 13

sumDifferentBases([["ABC", 16], ["11", 2]]);
// → 2751
```

---

## ✅ Final Notes

* Handles **bases from 2 to 36**
* Supports **digits and letters (A–Z)**
* Clean, readable, production-ready solution

*/
