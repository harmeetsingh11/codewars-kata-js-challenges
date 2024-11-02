function alphabetWar(fight) {
  // Define power values for left and right side letters
  const power = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };

  // Calculate total score based on letter powers
  const score = [...fight].reduce((acc, char) => acc + (power[char] || 0), 0);

  // Determine the result based on the score
  return score > 0
    ? 'Left side wins!'
    : score < 0
    ? 'Right side wins!'
    : "Let's fight again!";
}

/*
Explanation:

Power Map:
We create a power object to map the power values for each letter. Left-side letters have positive values, while right-side letters have negative values. This lets us calculate the score in one pass by summing values.

Score Calculation:
We convert fight to an array of characters using [...].
Using reduce, we iterate over each character in fight, adding the power of each letter to the acc accumulator. If a letter is not in the power object (a "victim" letter), its power defaults to 0.

Result Determination:
If score is positive, the left side wins.
If score is negative, the right side wins.
If score is 0, it's a draw, so we return "Let's fight again!".

This approach is efficient and concise, making only one pass through the input string and using constant space for the power object.
*/
