function rockOffScore(alice, bob) {
  // Initialize the scores for Alice and Bob
  let aliceScore = 0,
    bobScore = 0;

  // Compare scores in each category and update the scores accordingly
  for (let i = 0; i < 3; i++) {
    if (alice[i] > bob[i]) aliceScore++; // Alice gets a point if her score is greater
    if (bob[i] > alice[i]) bobScore++; // Bob gets a point if his score is greater
  }

  // Determine the result message based on the scores
  const result =
    aliceScore === bobScore
      ? 'that looks like a "draw"! Rock on!'
      : aliceScore > bobScore
      ? 'Alice made "Kurt" proud!'
      : 'Bob made "Jeff" proud!';

  // Return the total score followed by the result message
  return `${aliceScore}, ${bobScore}: ${result}`;
}

console.log(rockOffScore([20, 32, 18], [48, 25, 40])); // Output: '1, 2: Bob made "Jeff" proud!'

/*Explanation:

1. **Initialize Scores**: We start by setting `aliceScore` and `bobScore` to 0.

2. **Comparison Loop**: A `for` loop iterates through the three categories (index 0, 1, and 2):
   - If Alice's score is greater in a category, we increment her score (`aliceScore++`).
   - If Bob's score is greater, we increment his score (`bobScore++`).
   - No points are awarded for equal scores.

3. **Determine Result**: After all comparisons, we check:
   - If both scores are equal, the result is a draw.
   - If Alice's score is higher, she wins, otherwise Bob wins.

4. **Return Result**: The function returns a string in the format `aliceScore, bobScore: resultMessage`.
*/
