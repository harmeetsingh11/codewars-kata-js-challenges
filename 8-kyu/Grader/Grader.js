/**
 * Returns a grade based on the score.
 * @param {number} score - A number between 0 and 1 (can exceed for edge cases).
 * @returns {string} Grade ("A", "B", "C", "D", "F").
 */
function grader(score) {
  // Anything greater than 1 or less than 0.6 → "F"
  if (score > 1 || score < 0.6) return 'F';
  if (score >= 0.9) return 'A';
  if (score >= 0.8) return 'B';
  if (score >= 0.7) return 'C';
  return 'D'; // Only possible case left (0.6 ≤ score < 0.7)
}

// Test cases
// `grader(0)` → `"F"`
// `grader(1.1)` → `"F"`
// `grader(0.9)` → `"A"`
// `grader(0.8)` → `"B"`
// `grader(0.7)` → `"C"`
// `grader(0.6)` → `"D"`

/*
### Explanation

1. **Boundary check first**:

   * If score > 1 or score < 0.6 → **always "F"**.

2. **Descending order check**:

   * Check from highest (`>= 0.9`) downwards.
   * This avoids overlapping conditions.

3. **Efficiency**:

   * Each score is checked **only once** until it matches.
   * Constant time complexity → **O(1)**.

4. **Conciseness**:

   * No unnecessary else statements (since return exits the function immediately).
   * Easy to read and beginner-friendly.
*/
