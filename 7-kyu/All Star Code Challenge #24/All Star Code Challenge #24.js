// Function to calculate hypotenuse using Pythagoras theorem: c = √(a² + b²)
function hypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}

// Function to calculate missing leg using Pythagoras theorem: a = √(c² - b²)
function leg(c, b) {
  return Math.sqrt(c * c - b * b);
}

// Examples
console.log(hypotenuse(3, 4)); // 5
console.log(leg(5, 3)); // 4

/*
### Explanation:

1. **Pythagorean Theorem**:
   In a right triangle,

   $$
   c^2 = a^2 + b^2
   $$

   where `c` is the hypotenuse, and `a`, `b` are the legs.

2. **Finding hypotenuse**:
   Just take the square root of the sum of the squares of the two legs:

   $$
   c = \sqrt{a^2 + b^2}
   $$

3. **Finding a missing leg**:
   Rearrange the formula:

   $$
   a = \sqrt{c^2 - b^2}
   $$

   where `c` is the hypotenuse and `b` is the known leg.

4. **Efficiency**:

   * Only basic arithmetic (`+`, `-`, `*`) and one square root operation.
   * Time complexity: **O(1)** (constant time).
   * Space complexity: **O(1)**.
*/
