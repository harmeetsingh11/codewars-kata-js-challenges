// Reflect across the anti-diagonal (bottom-left to top-right)
function diag2Sym(s) {
  const rows = s.split('\n');
  const n = rows.length;

  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => rows[n - 1 - j][n - 1 - i]).join('')
  ).join('\n');
}

// Rotate 90° counterclockwise
function rot90Counter(s) {
  const rows = s.split('\n');
  const n = rows.length;

  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => rows[j][n - 1 - i]).join('')
  ).join('\n');
}

// Combine: original | diag2Sym | rot90Counter
function selfieDiag2Counterclock(s) {
  const original = s.split('\n');
  const diag2 = diag2Sym(s).split('\n');
  const rot90 = rot90Counter(s).split('\n');

  return original
    .map((line, i) => `${line}|${diag2[i]}|${rot90[i]}`)
    .join('\n');
}

// Higher-order function
function oper(fct, s) {
  return fct(s);
}

/* 
## 🧠 PROBLEM OVERVIEW

You're given a **square of characters** (a string of `n` lines with `n` characters each). You need to implement 3 transformations:

1. `diag2Sym(s)` — Reflect the square across the **anti-diagonal** (bottom-left to top-right).
2. `rot90Counter(s)` — Rotate the square **90° counterclockwise**.
3. `selfieDiag2Counterclock(s)` — Concatenate the original with both transformations side-by-side.
4. A higher-order function `oper(fct, s)` that just applies the function.

---

### 1️⃣ `diag2Sym(s)` — Anti-diagonal Symmetry

#### 🧭 Intuition:
We want to reflect the characters **across the anti-diagonal**, which goes from the bottom-left corner to the top-right.

If the original square is:

```
abcd
efgh
ijkl
mnop
```

The anti-diagonal reflection gives us:

```
plhd
okgc
njfb
miea
```

#### 🔢 Pattern:
To get character `(i, j)` in the output, we need:
```js
result[i][j] = original[n - 1 - j][n - 1 - i]
```
So:  
- `i` controls the row of the result,  
- `j` controls the column of the result,  
- and we fetch from the "mirrored" position in the original.

This is the mirror image **across the anti-diagonal**, which reverses both row and column indices.

---

### 2️⃣ `rot90Counter(s)` — Rotate 90° Counterclockwise

#### 🧭 Intuition:
We rotate the square **left** (counterclockwise).  
Each column becomes a row — starting from the last column (rightmost) to the first.

From:
```
abcd
efgh
ijkl
mnop
```

To:
```
dhlp
cgko
bfjn
aeim
```

#### 🔢 Pattern:
```js
result[i][j] = original[j][n - 1 - i]
```
- We iterate over `i` (new rows) and `j` (new columns),
- Taking the `j`th row's `n - 1 - i`th character.

---

### 3️⃣ `selfieDiag2Counterclock(s)`

#### 🧭 Intuition:
We build a visual string of 3 versions **side-by-side**:

```
original   | diag2Sym     | rot90Counter
abcd       | plhd         | dhlp
efgh       | okgc         | cgko
ijkl       | njfb         | bfjn
mnop       | miea         | aeim
```

#### 🧱 Logic:
We:
1. Split the original string into lines.
2. Generate the `diag2Sym` and `rot90Counter` results.
3. Zip them line-by-line using `map` to form:  
   `original[i] | diag2[i] | rot[i]`.

---

### 4️⃣ `oper(fct, s)`

#### Intuition:
Just a functional utility — apply any of the transformations to the string `s`:
```js
oper(diag2Sym, s);
```

---

## Summary Table:

| Function              | Purpose                                       | Key Mapping Logic                        |
|-----------------------|-----------------------------------------------|-------------------------------------------|
| `diag2Sym(s)`         | Mirror across anti-diagonal                  | `(i, j) → [n-1-j][n-1-i]`                 |
| `rot90Counter(s)`     | Rotate 90° counterclockwise                  | `(i, j) → [j][n-1-i]`                     |
| `selfieDiag2Counterclock(s)` | Combine original + both transforms       | Line-wise string concatenation           |
| `oper(fct, s)`        | Apply any function to the input string       | `return fct(s)`                           |

---
*/
