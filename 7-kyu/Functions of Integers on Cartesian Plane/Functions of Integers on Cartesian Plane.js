// Efficient O(1) solution using math formulas
// Works for very large n without looping

// Sum of min(x,y) over all (x,y) in [1..n]²
function sumin(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

// Sum of (x+y) over all (x,y) in [1..n]²
function sumsum(n) {
  return n * n * (n + 1);
}

// Sum of max(x,y) = sumsum - sumin
function sumax(n) {
  return sumsum(n) - sumin(n);
}

// Example usage:
console.log(sumin(6)); // 91
console.log(sumax(6)); // 161
console.log(sumsum(6)); // 252

/*
this problem looks heavy at first because it involves a double sum over an $n \times n$ grid, but with math we can derive closed-form formulas so it runs in **O(1)** time instead of looping over millions of pairs.
---

## Step 1: Functions

We need to compute:

1. **sumin(n) = sum of min(x,y)**

   $$
   \text{sumin}(n) = \sum_{x=1}^n \sum_{y=1}^n \min(x,y)
   $$

2. **sumax(n) = sum of max(x,y)**

   $$
   \text{sumax}(n) = \sum_{x=1}^n \sum_{y=1}^n \max(x,y)
   $$

3. **sumsum(n) = sum of (x+y)**

   $$
   \text{sumsum}(n) = \sum_{x=1}^n \sum_{y=1}^n (x+y)
   $$

---

## Step 2: Simplify mathematically

### (a) sumsum(n)

$$
\sum_{x=1}^n \sum_{y=1}^n (x+y) = 
\sum_{x=1}^n \sum_{y=1}^n x \;+\; \sum_{x=1}^n \sum_{y=1}^n y
$$

Each of $\sum_{x=1}^n x$ and $\sum_{y=1}^n y$ is $\frac{n(n+1)}{2}$.
Since each appears **n times**:

$$
= n \cdot \frac{n(n+1)}{2} + n \cdot \frac{n(n+1)}{2} = n^2 (n+1)
$$

---

### (b) sumin(n)

For each $k = 1..n$, the number of pairs $(x,y)$ with $\min(x,y)=k$ is:

* Either $x=k, y \ge k$ → $n-k+1$ pairs
* Or $y=k, x \ge k$ → $n-k+1$ pairs
* Subtract double count $(k,k)$

So count = $2(n-k+1) - 1$.
Thus:

$$
\text{sumin}(n) = \sum_{k=1}^n k \cdot (2(n-k+1)-1)
$$

Simplify:

$$
= \sum_{k=1}^n k \cdot (2n - 2k + 1)
= (2n+1)\sum_{k=1}^n k - 2\sum_{k=1}^n k^2
$$

Plug formulas:

$$
\sum k = \frac{n(n+1)}{2}, \quad \sum k^2 = \frac{n(n+1)(2n+1)}{6}
$$

So:

$$
\text{sumin}(n) = \frac{n(n+1)(2n+1)}{6}
$$

---

### (c) sumax(n)

We know:

$$
\min(x,y) + \max(x,y) = x+y
$$

So:

$$
\text{sumax}(n) = \text{sumsum}(n) - \text{sumin}(n)
$$

That avoids recomputation.

---

## Step 3: Final formulas

* $$
  $$

\text{sumin}(n) = \frac{n(n+1)(2n+1)}{6}
]

* $$
  $$

\text{sumsum}(n) = n^2 (n+1)
]

* $$
  $$

\text{sumax}(n) = \text{sumsum}(n) - \text{sumin}(n)
]


## Explanation in simple words

* Instead of iterating through every $(x,y)$ pair (which would be $O(n^2)$), we used **mathematical formulas** for sums of sequences.
* `sumin` comes from counting how many times each number appears as the minimum.
* `sumsum` is straightforward since it’s just splitting into sum of x’s and sum of y’s.
* `sumax` is derived using the identity:

  $$
  \max(x,y) = (x+y) - \min(x,y)
  $$
* Thus, all three functions run in **constant time** regardless of n.
*/
