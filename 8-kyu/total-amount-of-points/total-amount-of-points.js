function points(games) {
  // Use reduce to iterate over the games array and accumulate total points
  return games.reduce((total, game) => {
    // Split the game string at ':' to get our team's score (x) and opponent's score (y) and convert the scores to numbers
    const [x, y] = game.split(':').map(Number);

    // Check the result of the match:
    // If x > y, our team won -> add 3 points
    // If x === y, it's a tie -> add 1 point
    // If x < y, our team lost -> add 0 points
    return total + (x > y ? 3 : x === y ? 1 : 0); // Add points based on match outcome
  }, 0); // Initialize the total points to 0 at the start
}
