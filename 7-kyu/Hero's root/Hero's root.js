function int_rac(n, guess) {
  const e = 1; // Error threshold
  let count = 1; // Count of approximations (we start with the initial guess)
  let prev = guess;

  while (true) {
    // Calculate the next approximation using Hero's method
    const next = Math.floor((prev + n / prev) / 2);

    // If the change is less than the error threshold, stop
    if (Math.abs(prev - next) < e) break;

    prev = next; // Update for next iteration
    count++; // Increment step count
  }

  return count;
}

console.log(int_rac(25, 1)); // 4
console.log(int_rac(125348, 300)); // 3
console.log(int_rac(125348981764, 356243)); // 3

/*
### Explanation:
- **Hero’s method formula**: `(x + n / x) / 2`
- **Math.floor()** ensures each guess is rounded down to an integer.
- The loop continues until the absolute difference between two consecutive guesses is less than 1 (i.e., converged).
- We count each approximation step, starting from the initial guess.
*/
