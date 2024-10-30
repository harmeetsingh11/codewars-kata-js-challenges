function rowWeights(weights) {
  // Initialize team weights to zero
  let team1 = 0,
    team2 = 0;

  // Loop through weights with index to alternate teams
  weights.forEach((weight, index) => {
    if (index % 2 === 0) {
      team1 += weight; // Add weight to team1 if index is even
    } else {
      team2 += weight; // Add weight to team2 if index is odd
    }
  });

  // Return an array with the total weights of both teams
  return [team1, team2];
}

/* 
Explanation:

Initialization:
We start with two variables, team1 and team2, to store the cumulative weights of each team.

Loop Through Weights:
We use forEach to iterate through the weights array. The index parameter helps determine which team the person belongs to:
If index % 2 === 0 (even index), the weight goes to team1.
If index % 2 !== 0 (odd index), the weight goes to team2.

Return Result:
After the loop, we return an array [team1, team2], where each element is the total weight of each team.

This approach is efficient, as it only requires a single pass through the array (O(n) time complexity), and it uses a minimal amount of additional space.
*/
