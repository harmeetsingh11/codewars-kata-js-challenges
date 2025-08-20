// Valid [mm-dd] for a non-leap year, found anywhere in the string.
// Months with 31 days: 01,03,05,07,08,10,12  → day 01–31
// Months with 30 days: 04,06,09,11          → day 01–30
// February: 02                              → day 01–28
const validDateRegex =
  /\[(?:(?:01|03|05|07|08|10|12)-(?:0[1-9]|[12][0-9]|3[01])|(?:04|06|09|11)-(?:0[1-9]|[12][0-9]|30)|02-(?:0[1-9]|1[0-9]|2[0-8]))\]/;

// Returns true if the string contains at least one valid [mm-dd]
function containsValidDate(str) {
  return validDateRegex.test(str);
}

// (Optional) Return all valid [mm-dd] matches
function extractValidDates(str) {
  return str.match(new RegExp(validDateRegex.source, 'g')) || [];
}

// Quick checks
console.log(containsValidDate('[01-23]')); // true
console.log(containsValidDate('[02-31]')); // false
console.log(containsValidDate('ignored [08-11] ignored')); // true
console.log(containsValidDate('[3] [12-04] [09-tenth]')); // true
console.log(containsValidDate('[ 6-03]')); // false

/* 
Here’s a line-by-line tour of the exact pattern we used:

```
\[(?:(?:01|03|05|07|08|10|12)-(?:0[1-9]|[12][0-9]|3[01])|(?:04|06|09|11)-(?:0[1-9]|[12][0-9]|30)|02-(?:0[1-9]|1[0-9]|2[0-8]))\]
```

### 1) Outer brackets

* `\[` … `\]`

  * `[` and `]` are regex metacharacters, so they’re escaped to match literal square brackets.
  * This forces the whole date to be in the **`[mm-dd]`** form.

### 2) Big alternation (choose a valid month block)

* `(?: A | B | C )` — a **non-capturing group** containing three alternatives:

  * **A:** 31-day months
  * **B:** 30-day months
  * **C:** February (28 days, non-leap year)

Non-capturing `(?:...)` is used because we don’t need to reference these groups later; it’s a tiny performance and clarity win (no unwanted capturing indices).

---

## A) 31-day months

```
(?:01|03|05|07|08|10|12)-(?:0[1-9]|[12][0-9]|3[01])
```

* `(?:01|03|05|07|08|10|12)` — **month must be two digits**, one of the listed 31-day months.
* `-` — the literal dash between month and day.
* `(?:0[1-9]|[12][0-9]|3[01])` — **day**:

  * `0[1-9]` ⇒ 01–09
  * `[12][0-9]` ⇒ 10–29
  * `3[01]` ⇒ 30–31

Together this allows `01–31` for those months.

---

## B) 30-day months

```
(?:04|06|09|11)-(?:0[1-9]|[12][0-9]|30)
```

* `(?:04|06|09|11)` — months with 30 days.
* Day part:

  * `0[1-9]` ⇒ 01–09
  * `[12][0-9]` ⇒ 10–29
  * `30` ⇒ 30
* **31 is intentionally not present**, so it can’t match.

---

## C) February (non-leap year)

```
02-(?:0[1-9]|1[0-9]|2[0-8])
```

* Month fixed to `02`.
* Day part:

  * `0[1-9]` ⇒ 01–09
  * `1[0-9]` ⇒ 10–19
  * `2[0-8]` ⇒ 20–28
* **29, 30, 31** are excluded.

---

## Why this structure works well

* **Exact formatting**: Months and days are strictly two digits (leading zero required), the dash is literal, and the pair is wrapped in square brackets.
* **Validity by construction**: Each month alternative only permits days valid for that month (non-leap year).
* **No lookaheads/backs**: Pure alternation keeps it fast and simple for JS engines.
* **Non-capturing groups**: Avoid unnecessary captures, keeping group numbering stable if you ever add your own capturing groups.

---

## Scope of the match

* As written, this regex **finds a valid date anywhere inside a longer string** (e.g., `"foo [08-11] bar"`).
* If you want the **entire string** to be exactly one valid date (and nothing else), add anchors:

  ```
  ^\[(?:(?:01|03|05|07|08|10|12)-(?:0[1-9]|[12][0-9]|3[01])|(?:04|06|09|11)-(?:0[1-9]|[12][0-9]|30)|02-(?:0[1-9]|1[0-9]|2[0-8]))\]$
  ```

---

## Common edge cases (and how the regex handles them)

* `[1-23]` ❌ — month is not two digits → fails.
* `[01-3]` ❌ — day is not two digits → fails.
* `[02-29]` ❌ — February 29 blocked (non-leap year) → fails.
* `[11-31]` ❌ — November only has 30 days → fails.
* `[ 6-03]` ❌ — space and missing leading zero → fails.
* `ignored [12-04] text` ✅ — valid date appears anywhere → matches.

---

## Practical tips in JS

* Use `.test(str)` to check if **at least one** valid `[mm-dd]` exists.
* To **extract all** valid dates, use a global version:

  ```js
  const re = /\[(?:(?:01|03|05|07|08|10|12)-(?:0[1-9]|[12][0-9]|3[01])|(?:04|06|09|11)-(?:0[1-9]|[12][0-9]|30)|02-(?:0[1-9]|1[0-9]|2[0-8]))\]/g;
  const all = str.match(re) || [];
  ```
* Avoid the `/x` (extended) flag or inline `//` comments inside the regex literal—**JS doesn’t support them**.
*/
