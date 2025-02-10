function pyramid(balls) {
  // Initialize levels and sum of balls used so far
  let levels = 0,
    sum = 0;

  // Increment levels and add required balls until sum exceeds input balls
  while (sum + (levels + 1) <= balls) {
    levels++;
    sum += levels;
  }

  return levels;
}

// Test cases
console.log(pyramid(1)); // 1
console.log(pyramid(3)); // 2
console.log(pyramid(6)); // 3
console.log(pyramid(10)); // 4
console.log(pyramid(15)); // 5

/*Explanation:

1. Start with `levels = 0` and `sum = 0`.
2. In a loop, increase the `levels` and add the required balls for that level (`levels` itself).
3. Stop when adding the next level would exceed the given number of `balls`.
4. Return the last valid `levels` count.

This approach runs in **O(√n) time complexity**, which is efficient for this problem since the sum of the first `n` natural numbers grows quadratically.
*/
