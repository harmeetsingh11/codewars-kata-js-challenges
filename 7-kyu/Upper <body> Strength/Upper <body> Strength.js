/*
### ✅ Problem Summary:

* Alex can complete **10 kata per hour**, i.e. **1 kata = 6 minutes**.
* His **first mistake takes 5 minutes** of pushups.
* Each subsequent mistake takes **twice as long** as the previous one: 5, 10, 20, 40, …
* You’re given:

  * `kata`: number of kata he needs to finish.
  * `time`: total time in **minutes**.
* Goal: return **maximum number of mistakes** he can make without running out of time.
*/

/**
 * Calculates the maximum number of mistakes Alex can afford.
 * @param {number} kata - Total number of kata to complete.
 * @param {number} time - Total available time in minutes.
 * @returns {number} - Maximum number of mistakes Alex can afford.
 */
function alexMistakes(kata, time) {
  // Time taken to complete all kata (1 kata = 6 mins)
  const kataTime = kata * 6;

  // Remaining time available for pushups
  let remainingTime = time - kataTime;

  let mistakes = 0;
  let pushupTime = 5;

  // Each mistake doubles the pushup time (5, 10, 20, 40, ...)
  while (remainingTime >= pushupTime) {
    remainingTime -= pushupTime;
    mistakes++;
    pushupTime *= 2; // Next set takes twice as long
  }

  return mistakes;
}

alexMistakes(10, 70); // Output: 3
// kataTime = 10 * 6 = 60 mins
// remainingTime = 70 - 60 = 10 mins
// pushups: 5 + 10 (next is 20 but not enough time) → total: 2 mistakes

/*
### Explanation:

* **Step 1:** Calculate total time spent on kata: `kata * 6`.
* **Step 2:** Subtract that from the total `time` to get **available time for mistakes**.
* **Step 3:** Use a `while` loop to simulate the exponential pushup time: `5, 10, 20, …` until time runs out.
* **Step 4:** Keep counting how many mistakes can be done within the remaining time.


This solution runs in **O(log T)** time (since pushup times double), which is highly efficient for all practical inputs.
*/
