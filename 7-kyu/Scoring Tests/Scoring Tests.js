function scoreTest(answers, correctPts, omittedPts, incorrectPts) {
  return answers.reduce(
    (score, ans) =>
      score + (ans === 0 ? correctPts : ans === 1 ? omittedPts : -incorrectPts),
    0
  );
}

// Test cases
console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)); // 9
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)); // 3

/*
### Explanation:
- The `reduce` method is used to iterate through the `answers` array, accumulating the total score.
- The ternary condition checks:
  - If `ans === 0` (correct answer), add `correctPts`.
  - If `ans === 1` (omitted answer), add `omittedPts`.
  - If `ans === 2` (incorrect answer), subtract `incorrectPts` (hence `-incorrectPts`).
- The initial score is set to `0`, and the function efficiently computes the total score in a single pass over the array. 🚀*/
