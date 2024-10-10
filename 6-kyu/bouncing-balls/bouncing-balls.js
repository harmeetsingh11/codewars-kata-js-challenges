function bouncingBall(h, bounce, window) {
  // Check if initial conditions are met for a valid experiment
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let count = 1; // Ball passes the window once when falling
  // Ball keeps bouncing until the bounce height is less than the window
  while ((h *= bounce) > window) {
    count += 2; // Each bounce has two passes (up and down) except the last fall
  }

  return count;
}

// Explanation:

// 1. Initial Conditions:

// We check if the initial height h is greater than 0, if the bounce ratio is between 0 and 1, and if the window height is less than the initial height. If any condition is violated, the function returns -1 to indicate an invalid experiment.

// 2. Counting Passes:

// We initialize the count as 1 because the mother sees the ball once when it falls from the initial height.
// In the while loop, we update the height of the ball after each bounce (h *= bounce), and the ball is visible twice (once going up, once going down) each time the height is still greater than the window. This adds 2 to the count for each bounce.

// 3. Return the Count:

// The loop continues until the ball's bounce height is less than or equal to the window height. Once the loop exits, the total number of passes is returned.

// This solution runs in O(log n) time because the height decreases exponentially with each bounce, making it efficient.
