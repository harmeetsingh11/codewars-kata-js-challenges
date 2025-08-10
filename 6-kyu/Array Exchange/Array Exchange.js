/**
 * Exchanges the elements of two arrays in-place
 * and reverses them in the process.
 * Works for arrays of different lengths.
 *
 * @param {Array} arr1 - First array to exchange
 * @param {Array} arr2 - Second array to exchange
 */
function exchange_arrays(arr1, arr2) {
  // Store copies of the original arrays
  const copy1 = [...arr1];
  const copy2 = [...arr2];

  // Replace arr1 content with reversed copy of arr2
  arr1.length = 0;
  arr1.push(...copy2.reverse());

  // Replace arr2 content with reversed copy of arr1's original
  arr2.length = 0;
  arr2.push(...copy1.reverse());
}

// example:
let my_array = ['a', 'b', 'c'];
let other_array = [1, 2, 3];

exchange_arrays(my_array, other_array);

console.log(my_array); // [3, 2, 1]
console.log(other_array); // ['c', 'b', 'a']

/*
## **1. Problem Restatement**

We have **two arrays** (`arr1` and `arr2`).
We need to:

1. **Swap their contents** so `arr1` gets what `arr2` had, and `arr2` gets what `arr1` had.
2. **Reverse the order** of elements during the swap.
3. Do it **in-place** (modifying the same arrays, not returning new ones).
4. Handle **unequal lengths** correctly.

---

## **2. Intuition**

If we try to directly swap elements **while reversing** in the same loop without saving originals,
we run into a **data loss problem**:

Example:

```
arr1 = ['a', 'b', 'c']
arr2 = [1, 2, 3]
```

If we start overwriting `arr1[0]` with `3`, we lose `'a'` forever —
but we still need `'a'` later to put into `arr2`.

So, the intuition is:

* Before modifying **either array**, make **copies** of their original state.
* Then, use these safe copies to overwrite the originals.

---

## **3. Approach**

1. **Copy both arrays**:

   ```js
   const copy1 = [...arr1]; // original arr1
   const copy2 = [...arr2]; // original arr2
   ```

2. **Replace arr1** with the reversed copy of arr2:

   ```js
   arr1.length = 0;        // clear existing arr1
   arr1.push(...copy2.reverse());
   ```

3. **Replace arr2** with the reversed copy of arr1’s original:

   ```js
   arr2.length = 0;        // clear existing arr2
   arr2.push(...copy1.reverse());
   ```

4. Since we’re clearing and pushing into the same array objects,
   we **don’t create new arrays for arr1/arr2** — references remain intact.

---

## **4. Complexity**

* **Time:**

  * Reversing each copy → `O(n)` where `n = max(arr1.length, arr2.length)`
  * Pushing elements → `O(n)`
  * Total: **O(n)**

* **Space:**

  * We store two copies, so **O(n)** extra memory.

---

## **5. Example Walkthrough**

**Before:**

```
arr1 = ['a', 'b', 'c']
arr2 = [1, 2, 3]
copy1 = ['a', 'b', 'c']
copy2 = [1, 2, 3]
```

**Step 1:**
`arr1 = reversed(copy2) → [3, 2, 1]`

**Step 2:**
`arr2 = reversed(copy1) → ['c', 'b', 'a']`

**After:**

```
arr1 = [3, 2, 1]
arr2 = ['c', 'b', 'a']
```
*/
