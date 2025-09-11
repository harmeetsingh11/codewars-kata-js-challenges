function deNico(key, message) {
  // Step 1: Generate numeric key mapping
  const order = [...key]
    .map((ch, i) => [ch, i])
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([, i], idx) => [i, idx + 1]);

  const numKey = Array(key.length);
  order.forEach(([origIdx, rank]) => (numKey[origIdx] = rank));

  // Step 2: Decode the message in chunks
  const chunkSize = key.length;
  let decoded = '';

  for (let i = 0; i < message.length; i += chunkSize) {
    const chunk = message.slice(i, i + chunkSize).split('');
    const rearranged = Array(chunk.length);

    // FIX: reverse mapping → place characters back in original order
    for (let j = 0; j < chunk.length; j++) {
      rearranged[j] = chunk[numKey[j] - 1];
    }

    decoded += rearranged.join('');
  }

  // Step 3: Remove trailing whitespace
  return decoded.trimEnd();
}

// test cases
console.log(deNico('crazy', 'cseerntiofarmit on  '));
// "secretinformation"

console.log(deNico('abc', 'abcd'));
// "abcd"

console.log(deNico('ba', '2143658709'));
// "1234567890"

console.log(deNico('key', 'eky'));
// "key"

console.log(deNico('gvxh', 'nyy46i6s1c5fo0br 3q'));
// "yyn4i66sc51f0bor3q"

/* 
# 🔑 Problem Recap

We need to **decode a message** that was encoded using a *columnar transposition cipher* (called **deNico** here).

Steps in encoding:

1. Take a **key** (string of unique letters/digits).
2. Sort the key alphabetically to determine the **column order**.
3. Write the message in rows (matrix), then rearrange each row based on the column order.

Our job: **reverse this process**.

---

# 💡 Intuition

The **key** decides the column permutation.
For decoding, we must **undo the permutation**.

Example with key `"crazy"`:

* Key sorted: `"acryz"`
* Position mapping:

  * c → 2
  * r → 3
  * a → 1
  * z → 5
  * y → 4
* Numeric key = `[2,3,1,5,4]`

This means:

* While encoding: column 1 gets 2nd char, column 2 gets 3rd char, etc.
* While decoding: we must place the characters **back into their original order**.

So the numeric key is like a "shuffle pattern", and decoding is just reversing that shuffle.

---

# 🛠️ Solution Approach

### Step 1: Build the numeric key

* Sort the key alphabetically.
* Assign rank `1,2,...n`.
* Map back to original index.
  This gives us an array telling us how each column was permuted.

Example `"crazy"` → `[2,3,1,5,4]`.

---

### Step 2: Split the message into chunks

* Since each row is of size = `key.length`, cut the message into equal chunks.
* Example message: `"cseerntiofarmit on  "`
  With key length 5 → chunks:

  ```
  c s e e r
  n t i o f
  a r m i t
    o n   
  ```

---

### Step 3: Reverse the permutation

* For each chunk:

  * Use the numeric key to **map characters back to their original order**.
  * Example: key `[2,3,1,5,4]`, chunk = `['c','s','e','e','r']`
    Decoding:

    * position 0 → take char at index (numKey\[0]-1 = 1) → `'s'`
    * position 1 → take char at index (numKey\[1]-1 = 2) → `'e'`
    * position 2 → take char at index (numKey\[2]-1 = 0) → `'c'`
    * position 3 → take char at index (numKey\[3]-1 = 4) → `'r'`
    * position 4 → take char at index (numKey\[4]-1 = 3) → `'e'`
      → `"secre"`

---

### Step 4: Trim trailing spaces

Since the encoding may add spaces at the end, we use `.trimEnd()`.

---

# 🔎 Complexity Analysis

* **Key preprocessing**: `O(k log k)` (sorting, where `k = key.length`).
* **Message decoding**: `O(n)` (linear in message length).
* **Overall**: `O(n + k log k)` → efficient.

---

# 🚀 Key Takeaway

* The trick is understanding that the **numeric key defines a permutation**.
* Encoding applies the permutation → Decoding **reverses** it.
* Once the mapping is set, decoding is just array reordering chunk by chunk.

*/
