function smallestPermutation(num) {
  if (Math.abs(num) < 10) return num;

  const isNegative = num < 0;
  let digits = Math.abs(num).toString().split('');
  digits.sort((a, b) => a - b);

  // Ensure no leading zero — find first non-zero digit and move it to the front
  if (digits[0] === '0') {
    for (let i = 1; i < digits.length; i++) {
      if (digits[i] !== '0') {
        [digits[0], digits[i]] = [digits[i], digits[0]];
        break;
      }
    }
  }

  const result = parseInt(digits.join(''), 10);
  return isNegative ? -result : result;
}

console.log(smallestPermutation(-20)); // -20
console.log(smallestPermutation(-32)); // -23
console.log(smallestPermutation(0)); // 0
console.log(smallestPermutation(10)); // 10
console.log(smallestPermutation(29394)); // 23499
console.log(smallestPermutation(-940780)); // -400789
console.log(smallestPermutation(-800880)); // -800088
console.log(smallestPermutation(-256857)); // -255678
console.log(smallestPermutation(-27889)); // -207889
console.log(smallestPermutation(-20)); // -20
console.log(smallestPermutation(-2)); // -20

/*  
## ❓ Problem Recap:

Given an integer (positive or negative), **rearrange its digits** to form a new number that has the **smallest absolute value**, but **no leading zeroes**. You must **return it as a number**, preserving the sign.

---

## 🧠 Intuition:

We want to **rearrange the digits** of the number to form the smallest possible number, without leading zeros.

But we need to handle two very different cases:

---

## ✅ Case 1: Positive Numbers

For example, `29394`

* **Goal**: Smallest number possible with those digits.
* **Approach**:

  1. Sort the digits in **ascending order** → gives smallest permutation.
  2. Fix **leading zero** if any (e.g., in `1023`, sorted digits give `0123`, which is invalid).

     * So we **find the first non-zero digit** and swap it with the zero.

✅ This gives the smallest valid number with those digits.

---

## ✅ Case 2: Negative Numbers

For example, `-29394`

* **Goal**: Smallest possible value **but still negative** — this means the number **closest to zero**.
* **Approach**:

  1. We want **minimum absolute value**, i.e., the digits form the **smallest positive number**.

     * Because `-23499` is greater than `-99432` (closer to zero).
  2. So again, we **sort digits in ascending order**, same as we do for positives.
  3. Fix **leading zero** the same way — zeros at front reduce the actual value incorrectly (e.g., `-027` becomes `-27`, not `-207`).

Finally, we apply the negative sign back.

---

## 🔄 Thought Process Summary:

1. **Get the digits** of the number (`Math.abs(num).toString().split('')`).
2. **Sort digits ascendingly** — works for both positive and negative cases.
3. **Fix leading zero**:

   * Find the **first non-zero digit** and swap it to the front.
4. **Convert to integer**, and apply `-` sign if needed.
5. Return the final number.

---

## 📌 Example Walkthrough:

### `-27889`

1. Digits: `["2", "7", "8", "8", "9"]`
2. Sorted: `["2", "7", "8", "8", "9"]`
3. No leading zero — so `27889`
4. Apply `-` → `-27889` ❌ **(Incorrect!)**

But if the original number was `-207889`, we’d have:

1. Digits: `["2", "0", "7", "8", "8", "9"]`
2. Sorted: `["0", "2", "7", "8", "8", "9"]`
3. Fix leading zero: swap `0` with `2` → `["2", "0", "7", "8", "8", "9"]`
4. Result: `207889` → `-207889` ✅

*/
