function encodeStr(s, shift) {
  // Caesar shift helper
  const shiftChar = (ch, sh) => {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90)
      // A–Z
      return String.fromCharCode(((code - 65 + sh) % 26) + 65);
    if (code >= 97 && code <= 122)
      // a–z
      return String.fromCharCode(((code - 97 + sh) % 26) + 97);
    return ch;
  };

  // Prefix
  const firstLetter = s[0].toLowerCase();
  const prefix = firstLetter + shiftChar(firstLetter, shift);

  // Encoded string
  const encoded = [...s].map((ch) => shiftChar(ch, shift)).join('');
  const full = prefix + encoded;

  // Split into 5 parts: parts 1–4 should be >= part 5
  const n = full.length;
  const q = Math.ceil(n / 5); // length for parts 1–4 if possible
  const r = n - q * 4; // remainder for the 5th part

  const parts = [];
  let i = 0;

  for (let k = 0; k < 4; k++) {
    parts.push(full.slice(i, i + q));
    i += q;
  }
  if (r > 0) parts.push(full.slice(i));
  return parts;
}

function decode(arr) {
  const joined = arr.join('');
  const prefix = joined.slice(0, 2);
  const coded = joined.slice(2);

  // shift from prefix
  const shift = (prefix.charCodeAt(1) - prefix.charCodeAt(0) + 26) % 26;

  const unshiftChar = (ch, sh) => {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90)
      return String.fromCharCode(((code - 65 - sh + 26) % 26) + 65);
    if (code >= 97 && code <= 122)
      return String.fromCharCode(((code - 97 - sh + 26) % 26) + 97);
    return ch;
  };

  return [...coded].map((ch) => unshiftChar(ch, shift)).join('');
}

// Example
const msg =
  'I should have known that you would have a perfect answer for me!!!';
const coded = encodeStr(msg, 1);
console.log(coded);
// [ 'ijJ tipvme ibw', 'f lopxo uibu z', 'pv xpvme ibwf ', 'b qfsgfdu botx', 'fs gps nf!!!' ]

console.log(decode(coded));
// "I should have known that you would have a perfect answer for me!!!"

/* 
Explanation

## 1) Problem restated (in plain words)

* We apply a **Caesar cipher** on letters only (`A–Z`, `a–z`), keeping all other characters unchanged.
* A **2-char prefix** is prepended:

  * `prefix[0]` = the **first letter of the original message**, lowercased.
  * `prefix[1]` = `prefix[0]` shifted by the same Caesar shift.
  * From this pair, the receiver can recover the shift.
* Then we **split** the final string (prefix + encoded message) into at most **5 parts**:

  * If even split is possible, use 5 equal parts.
  * Otherwise, **parts 1–4 are longer**, part 5 is shorter (or empty).
  * If the last part is empty, **drop it**.
  * Among valid options, pick the one where **part 5 is as long as possible** while parts 1–4 remain ≥ part 5.

---

## 2) Intuition & key ideas

### Caesar shift

* Treat letters as indices on a circle of size 26.
* For uppercase use base `65` (`'A'`), for lowercase use base `97` (`'a'`).
* Encode: `((code - base + shift) % 26) + base`
* Decode: `((code - base - shift + 26) % 26) + base`
* Non-letters: return unchanged.

### Prefix encodes the shift

* Let `a = first original letter lowercased`, `b = a shifted by shift`.
* Then `shift = (b - a) mod 26`. This is recoverable on the receiver side without knowing the original text.

### Splitting rule (why `ceil` works)

We want parts 1–4 to be as long as possible and ≥ part 5. The clean way:

* Let `N = total length = len(prefix + encoded)`.
* Let `q = ceil(N / 5)` — the **max uniform length** that parts 1–4 can have while leaving ≤ `q` for the 5th.
* Build 4 parts of length `q` each.
* The remainder `r = N - 4*q` goes to part 5 (can be `0..q`).
* If `r == 0`, we **omit** the 5th part.
  This guarantees:
* Parts 1–4 are equal (even split among them).
* Each of parts 1–4 is **≥** part 5.
* Part 5 is **as long as allowed** under those constraints.

Examples of lengths by this rule:

* `N=16 → [4,4,4,4]`
* `N=17 → [4,4,4,4,1]`
* `N=18 → [4,4,4,4,2]`
* `N=19 → [4,4,4,4,3]`
* `N=20 → [4,4,4,4,4]`

---

## 3) Step-by-step approach

### A) `encodeStr(s, shift)`

1. **Prefix:**

   * Take `firstLetter = lowercased(s[0])`.
   * Compute `second = shift(firstLetter, shift)`.
   * `prefix = firstLetter + second`.

2. **Encode the message:**

   * For each char:

     * If in `A–Z`, apply uppercase shift.
     * If in `a–z`, apply lowercase shift.
     * Else keep as is.
   * Join to `encoded`.

3. **Concatenate:** `full = prefix + encoded`.

4. **Split into parts:**

   * `N = full.length`
   * `q = ceil(N / 5)`
   * Create parts 1–4: each `full.slice(i, i+q)`, advancing `i`.
   * Remainder for part 5: if any, push `full.slice(i)`.
   * If the remainder is empty, **don’t add** the 5th part.

**Complexity:** `O(N)` time, `O(N)` space.

---

### B) `decode(arr)`

1. **Join all parts:** `joined = arr.join("")`.
2. **Extract prefix:** `prefix = joined.slice(0,2)`, `coded = joined.slice(2)`.
3. **Recover shift:**
   `shift = (prefix.charCodeAt(1) - prefix.charCodeAt(0) + 26) % 26`
4. **Decode:** For each char in `coded`, apply the **reverse** shift on letters; keep non-letters as is.
5. **Return** the decoded string.

**Complexity:** `O(N)` time, `O(N)` space.

---

## 4) Correctness notes & edge cases

* **Non-letters** are never altered (both directions).
* **Any integer shift** works due to `% 26` (even negative or ≥ 26).
* The **first original character** is assumed to be a letter (per spec: “first letter of the uncoded message”). Codewars inputs follow this.
* Splitting is **deterministic** and matches the kata’s expectation:

  * Parts 1–4 equal and ≥ part 5.
  * Part 5 as long as possible under that constraint.
  * Omit empty last part.

---

*/

/* 
DRY RUN with example:

Message:

```
"I should have known that you would have a perfect answer for me!!!"
Shift = 1
```

---

### Step 1) Prefix

* First letter = `"I"` → lowercase `"i"`.
* Shift `"i"` by 1 → `"j"`.
* Prefix = `"ij"`.

---

### Step 2) Encode message with Caesar(shift=1)

```
Original: "I should have known that you would have a perfect answer for me!!!"
Encoded : "J tipvme ibwf lopxo uibu zpv xpvme ibwf b qfsgfdu botxfs gps nf!!!"
```

---

### Step 3) Full string (prefix + encoded)

```
Full = "ij" + "J tipvme ibwf lopxo uibu zpv xpvme ibwf b qfsgfdu botxfs gps nf!!!"

Length = 62 characters
```

---

### Step 4) Split into 5 parts

* N = 62
* q = ceil(62 / 5) = 13
* First 4 parts each = 13 chars
* Remaining = 62 - (4\*13) = 10 → goes into part 5

So lengths: `[13, 13, 13, 13, 10]`.

---

### Step 5) Cut positions (with indices)

```
Index range   | Part content
0–12          | "ijJ tipvme ibw"
13–25         | "f lopxo uibu z"
26–38         | "pv xpvme ibwf "
39–51         | "b qfsgfdu botx"
52–61         | "fs gps nf!!!"
```

---

### ✅ Final encoded array

```
[
  "ijJ tipvme ibw",
  "f lopxo uibu z",
  "pv xpvme ibwf ",
  "b qfsgfdu botx",
  "fs gps nf!!!"
]
```

---

### Step 6) Decoding

* Prefix = `"ij"` → shift = `"j"` - `"i"` = 1.
* Apply reverse Caesar(shift=1) → original message recovered.

---
 */
