function calculateGolfScore(par, strokes) {
  let totalScore = 0; // Variable to store the total score difference

  // Iterate through each hole (18 holes)
  for (let i = 0; i < 18; i++) {
    // Convert the characters to numbers and calculate the difference between strokes and par
    totalScore += parseInt(strokes[i]) - parseInt(par[i]);
  }

  // Return the total score
  return totalScore;
}
// Example:
// If the par values are "543212345678123456", and the stroke values are "765432345678123456", the function will compute the score as follows:

let par = '543212345678123456';
let strokes = '765432345678123456';
let score = calculateGolfScore(par, strokes);
console.log(score); // Output will be the total score difference

/* 
Explanation:

totalScore: This variable keeps track of the accumulated score difference for all holes.

for loop: We loop through the 18 holes (from index 0 to 17). For each hole:
parseInt(strokes[i]): Convert the stroke score (string) to a number.
parseInt(par[i]): Convert the par score (string) to a number.
The difference between the stroke score and the par score is added to the total score.

Return value: After the loop completes, the function returns the total score, which is the sum of all individual score differences.
*/
