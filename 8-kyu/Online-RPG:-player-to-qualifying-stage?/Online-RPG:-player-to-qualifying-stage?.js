function checkQualifyingStage(score) {
  // Check if the player's score is at least 100
  if (score >= 100) {
    // If qualified, return the success message
    return 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.';
  }
  // If not qualified, return false
  return false;
}

// Example
console.log(checkQualifyingStage(120)); // Output: "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
console.log(checkQualifyingStage(80)); // Output: false

/* 
Explanation

Parameters and Input: The function takes a single input, score, which represents the player's current score.

Condition Check: The if statement evaluates whether the score is at least 100.

Qualified Case: If the condition is met, the function returns the specified success message.

Not Qualified Case: If the condition is not met, the function returns false.
*/
