function alphabetWar(reinforces, airstrikes) {
  const battlefieldLength = reinforces[0].length;

  // Current battlefield as array for easy updates
  let battlefield = reinforces[0].split('');

  // For each position, track which reinforce row is next
  const reinforceIndex = Array(battlefieldLength).fill(1);

  for (const strike of airstrikes) {
    // Track positions destroyed in this airstrike
    const destroyed = Array(battlefieldLength).fill(false);

    // Mark destroyed positions
    for (let i = 0; i < strike.length; i++) {
      if (strike[i] === '*') {
        if (i < battlefieldLength) destroyed[i] = true;
        if (i - 1 >= 0) destroyed[i - 1] = true;
        if (i + 1 < battlefieldLength) destroyed[i + 1] = true;
      }
    }

    // Apply replacements after the airstrike
    for (let i = 0; i < battlefieldLength; i++) {
      if (destroyed[i]) {
        if (reinforceIndex[i] < reinforces.length) {
          battlefield[i] = reinforces[reinforceIndex[i]][i];
          reinforceIndex[i]++;
        } else {
          battlefield[i] = '_';
        }
      }
    }
  }

  return battlefield.join('');
}

/* 
## ✅ Key Ideas (High-level)

* The **first string** in `reinforces` is the initial battlefield.
* Each `*` in an airstrike kills:

  * the letter at the same index
  * the left neighbor
  * the right neighbor
* All bombs of **one airstrike act together**.
* After an airstrike finishes:

  * destroyed positions are replaced by letters from the **next reinforce row** at the same index
  * if no reinforce exists → replace with `_`
* Airstrikes always start from index `0`
* Airstrike length may be shorter than battlefield → ignore overflow

---

## 🧠 Efficient Strategy

1. Track battlefield as an array (mutable & fast).
2. Track which reinforce row should be used **per position**.
3. For each airstrike:

   * mark all positions to be destroyed
   * apply replacements in one pass
4. Return final battlefield string.

**Time Complexity:**
`O(R × (B + A))`

* `R` = airstrikes count
* `B` = battlefield length
* `A` = airstrike length

**Space Complexity:**
`O(B)`

---

## 🧪 Example

```js
alphabetWar(
  ["abcdefg", "hijklmn"],
  ["   *   ", "*  *   "]
);
// => "hi___fg"
```

```js
alphabetWar(
  ["g964xxxxxxxx",
   "myjinxin2015",
   "steffenvogel",
   "smile67xxxxx",
   "giacomosorbi",
   "freywarxxxxx",
   "bkaesxxxxxxx",
   "vadimbxxxxxx",
   "zozofouchtra",
   "colbydauphxx"],
  ["* *** ** ***",
   " ** * * * **",
   " * *** * ***",
   " **  * * ** ",
   "* ** *   ***",
   "***   ",
   "**",
   "*",
   "*"]
);
// => "codewarsxxxx"
```

---

## ⭐ Why This Solution Is Optimal

✔ Single pass per airstrike
✔ No unnecessary string rebuilding
✔ Handles edge cases cleanly
✔ Easy to read and debug


*/
