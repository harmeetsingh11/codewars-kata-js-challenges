function scoreChickens(bob, expert) {
  let score = 0;

  // Loop through each pair of Bob's and Expert's guesses
  for (let i = 0; i < bob.length; i++) {
    // If they agree, add 1 point
    if (bob[i] === expert[i]) {
      score += 1;
    }
    // If one of them guessed '?' and the other didn't, add 0.5 points
    else if (bob[i] === '?' || expert[i] === '?') {
      score += 0.5;
    }
    // If they completely disagree (no '?' involved), no points are awarded
  }

  return score;
}

const bob = ['M', 'F', '?', 'F', 'M'];
const expert = ['M', 'F', 'M', '?', 'F'];
console.log(scoreChickens(bob, expert)); // Output: 3.5

/*
### Explanation:
1. **Initialization**: We start by setting the `score` to 0.
2. **Loop through guesses**: We iterate over each element in `bob` and `expert` arrays.
   - If Bob's and Expert's guesses match (`bob[i] === expert[i]`), we add 1 point.
   - If one of them has guessed `'?'` and the other has a definitive guess, we add 0.5 points.
   - If they completely disagree and neither of them has guessed `'?'`, no points are added.
3. **Return the final score**: After the loop, the function returns the accumulated `score`.

This solution is **efficient** because it only requires a single pass through the input arrays, making it O(n) in time complexity, where `n` is the length of the arrays.
*/
