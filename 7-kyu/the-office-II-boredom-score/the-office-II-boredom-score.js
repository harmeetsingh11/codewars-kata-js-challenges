function boredomAssessment(staff) {
  // Define boredom scores for each department
  const scores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  };

  // Calculate the total boredom score
  const totalScore = Object.values(staff).reduce(
    (sum, department) => sum + (scores[department] || 0),
    0
  );

  // Determine sentiment based on total score
  if (totalScore <= 80) return 'kill me now';
  if (totalScore < 100) return 'i can handle this';
  return 'party time!!';
}

/* 
Explanation:

Define Scores: 
The scores object maps each department to its boredom assessment score.

Calculate Total Score:
Object.values(staff) extracts all department values from the staff object.
.reduce() iterates over these values, summing up the corresponding scores from the scores object. The || 0 ensures undefined departments contribute 0 to the score.

Determine Sentiment:
Use simple conditional checks to return the appropriate sentiment based on the total score.
*/
