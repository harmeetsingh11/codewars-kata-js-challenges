function height(n) {
  // Base height of The Cat In The Hat (first and tallest cat)
  const baseHeight = 2000000;

  // Each cat underneath is 2.5 times smaller,
  // so the common ratio of the geometric series is 1 / 2.5 = 0.4
  const ratio = 0.4;

  /*
The cats form a geometric series:
baseHeight + baseHeightratio + baseHeightratio^2 + ... + baseHeight*ratio^n

Since counting starts from The Cat In The Hat,
total number of terms = n + 1

Geometric series sum formula:
S = a * (1 - r^(n+1)) / (1 - r)
*/
  const totalHeight = (baseHeight * (1 - Math.pow(ratio, n + 1))) / (1 - ratio);

  // Return the result fixed to exactly 3 decimal places
  return totalHeight.toFixed(3);
}

/* 
SHORT CODE WALKTHROUGH

1. baseHeight stores the height of The Cat In The Hat (2,000,000 units).

2. ratio represents how much smaller each next cat is.
   Since each cat is 2.5× smaller, the ratio is 0.4.

3. The total height is calculated using the geometric series sum formula,
   which efficiently adds all cat heights in one calculation.

4. Math.pow(ratio, n + 1) computes the size of the smallest cat.

5. The result is formatted using toFixed(3) to match the required precision.
*/

/* 
## EXPLANATION & APPROACH

Problem understanding:

* The Cat In The Hat is **2,000,000 cat units tall**
* Each cat underneath is **2.5 times smaller** than the one above it
* Cats are stacked vertically
* Counting **starts from The Cat In The Hat**
* We must calculate the **total height of all cats combined**
* Final answer must be **rounded to 3 decimal places**

---

Step 1: Identify the pattern in cat heights

Let:

* H = 2,000,000 (height of The Cat In The Hat)

Each cat underneath is divided by 2.5:

* Cat 0 (The Cat In The Hat): H
* Cat 1: H / 2.5
* Cat 2: H / 2.5²
* ...
* Cat n: H / 2.5ⁿ

This creates a **geometric sequence**.

---

Step 2: Define the geometric series

A geometric series has the form:

H + Hr + Hr² + ... + Hrⁿ

Where:

* H = first term = 2,000,000
* r = common ratio = 1 / 2.5 = 0.4
* Number of terms = n + 1 (because counting starts from The Cat In The Hat)

---

Step 3: Use the geometric series sum formula

The sum of the first (n + 1) terms of a geometric series is:

H × (1 − rⁿ⁺¹) / (1 − r)

Substituting values:

* H = 2,000,000
* r = 0.4

Gives:

2000000 × (1 − 0.4ⁿ⁺¹) / (1 − 0.4)

---

Step 4: Why this approach is optimal

* No loops are used
* Time complexity is O(1)
* Works efficiently even for very large n
* Uses direct mathematical computation
* Avoids floating-point accumulation errors from repeated addition

---

Step 5: Final code logic

The final line:

return (2000000 * (1 - Math.pow(0.4, n + 1)) / (1 - 0.4)).toFixed(3);

Does the following:

* Computes the total height using the geometric sum formula
* Raises 0.4 to the power (n + 1)
* Multiplies by the base height
* Divides by (1 - 0.4)
* Formats the output to exactly **3 decimal places**

---

Example:

For n = 10

Total height = 3,333,193.523

Which matches the expected output exactly.
*/
