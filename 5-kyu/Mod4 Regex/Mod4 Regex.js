const Mod4 = /\[\s*[\+\-]?0*(?:[048]|\d*[02468][048]|\d*[13579][26])\s*\]/;

// Test cases
const tests = [
  '[+05620]', // true
  '[+05621]', // false
  '[-55622]', // false
  '[005623]', // false
  '[005624]', // true
  '[-05628]', // true
  '[005632]', // true
  '[555636]', // true
  '[+05640]', // true
  '[005600]', // true
  'the beginning [0] ... [invalid] numb[3]rs ... the end', // true
  "No, [2014] isn't a multiple of 4...", // false ✅
  '...may be [+002016] will be.', // true
];

tests.forEach((t) => console.log(t, Mod4.test(t)));

/*
## **1. Understanding the problem**

We need a **regular expression** that matches if there’s **at least one** number inside square brackets `[...]` that is divisible by 4.

**Key constraints:**

* Numbers can have optional `+` or `-` signs.
* Leading zeros allowed but ignored (no octal rules).
* Numbers are integers only (ignore floats).
* Ignore anything outside the square brackets.
* If there’s **no valid divisible-by-4 number**, it must **not match**.

---

## **2. Mathematical property**

A number is divisible by 4 if **its last two digits** form a number divisible by 4.

* Example: `2016` → last two digits `16` → 16 % 4 = 0 → divisible.
* Example: `2014` → last two digits `14` → 14 % 4 = 2 → not divisible.
* Special case: Single-digit numbers divisible by 4 → `0, 4, 8`.

---

## **3. Bracket and sign handling**

From the problem:

* Number format is `[+05620]` or `[-05628]` or `[005624]`.
* So the regex must start with:

  ```
  \[
  ```

  and end with:

  ```
  \]
  ```
* Inside, before the number:

  ```
  \s*        # Allow optional spaces
  [\+\-]?    # Optional plus or minus sign
  0*         # Any number of leading zeros
  ```

---

## **4. Divisibility-by-4 patterns**

We now need a pattern that ensures the **last** one or two digits are valid:

**Valid last-two-digits patterns:**

* Single-digit divisible by 4: `[048]` → matches `0, 4, 8`
* Two-digit divisible by 4:

  * Tens digit even: `[02468]` + Ones digit `[048]`
    Examples: `20, 24, 28, 40, 44, 48, ...`
  * Tens digit odd: `[13579]` + Ones digit `[26]`
    Examples: `12, 16, 32, 36, 52, 56, ...`

So our core **mod-4 check** becomes:

```
[048]                     # Single digit case
| \d*[02468][048]         # Any number of preceding digits, last two digits even-0/4/8
| \d*[13579][26]          # Any number of preceding digits, last two digits odd-2/6
```

---

## **5. Full regex**

Putting it together:
```
const Mod4 = /\[\s*[\+\-]?0*(?:[048]|\d*[02468][048]|\d*[13579][26])\s*\]/;

```

**Breakdown:**

* `\[` → Match opening square bracket.
* `\s*` → Optional spaces.
* `[\+\-]?` → Optional plus or minus sign.
* `0*` → Leading zeros ignored.
* `(?: ... )` → Non-capturing group for mod-4 rule.

  * `[048]` → Single digit 0, 4, or 8.
  * `\d*[02468][048]` → Any digits, then even tens digit + ones digit 0/4/8.
  * `\d*[13579][26]` → Any digits, then odd tens digit + ones digit 2/6.
* `\s*\]` → Optional spaces, then closing bracket.

---

## **6. Efficiency**

* Runs in **O(1)** time relative to input length because regex checks sequentially without catastrophic backtracking.
* Uses **no lookaheads** or complex assertions.
* Matches only numbers inside `[]` and ignores everything else.
*/
