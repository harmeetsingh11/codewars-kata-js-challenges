function uefaEuro2016(teams, scores) {
  // Destructure teams and scores for readability
  const [team1, team2] = teams;
  const [score1, score2] = scores;

  // Use template literals to construct the result based on match outcome
  return (
    `At match ${team1} - ${team2}, ` +
    (score1 > score2
      ? `${team1} won!`
      : score1 < score2
      ? `${team2} won!`
      : 'teams played draw.')
  );
}
