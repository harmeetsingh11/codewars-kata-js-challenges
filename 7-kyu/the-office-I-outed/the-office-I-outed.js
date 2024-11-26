function assessHappiness(meet, boss) {
  // Calculate total score with the boss's score doubled
  const totalScore = Object.entries(meet).reduce(
    (sum, [name, score]) => sum + (name === boss ? score * 2 : score),
    0
  );

  // Calculate average score
  const averageScore = totalScore / Object.keys(meet).length;

  // Return the decision based on the average score
  return averageScore <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

/* 
Explanation:

Iterate Over Team Members:
Use Object.entries(meet) to get an array of [name, score] pairs.
Use reduce to calculate the total happiness score.

Double the Boss's Score:
Inside the reduce callback, check if the current name is the boss. If true, double their score.

Calculate Average:
Divide the total score by the number of people in the room (Object.keys(meet).length).

Return the Decision:
If the average happiness score is <= 5, return 'Get Out Now!'.
Otherwise, return 'Nice Work Champ!'.

This implementation is efficient with a time complexity of O(n), where n is the number of team members, as it processes the object in a single loop.
*/
