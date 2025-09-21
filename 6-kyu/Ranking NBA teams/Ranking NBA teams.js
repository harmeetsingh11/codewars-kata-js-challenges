function nbaCup(resultSheet, toFind) {
  if (!toFind) return ''; // if team name is empty, return empty string

  const matches = resultSheet.split(','); // split all matches by comma

  let stats = {
    W: 0,
    D: 0,
    L: 0,
    Scored: 0,
    Conceded: 0,
    Points: 0,
  };

  let found = false;

  for (let match of matches) {
    match = match.trim();
    if (!match) continue;

    // check for invalid float numbers in score
    if (/\d+\.\d+/.test(match)) {
      return `Error(float number):${match}`;
    }

    // extract team names and scores using regex
    const regex = /(.*) (\d+) (.*) (\d+)$/;
    const parts = match.match(regex);
    if (!parts) continue; // skip if no valid format

    const team1 = parts[1];
    const score1 = parseInt(parts[2]);
    const team2 = parts[3];
    const score2 = parseInt(parts[4]);

    if (team1 !== toFind && team2 !== toFind) continue; // not relevant match
    found = true;

    let teamScored, teamConceded;

    if (team1 === toFind) {
      teamScored = score1;
      teamConceded = score2;
    } else {
      teamScored = score2;
      teamConceded = score1;
    }

    // update stats
    stats.Scored += teamScored;
    stats.Conceded += teamConceded;

    if (teamScored > teamConceded) {
      stats.W++;
      stats.Points += 3;
    } else if (teamScored === teamConceded) {
      stats.D++;
      stats.Points += 1;
    } else {
      stats.L++;
    }
  }

  if (!found) {
    return `${toFind}:This team didn't play!`;
  }

  return `${toFind}:W=${stats.W};D=${stats.D};L=${stats.L};Scored=${stats.Scored};Conceded=${stats.Conceded};Points=${stats.Points}`;
}
/*

### 🔎 Explanation

1. **Empty team check** → If `toFind` is empty, return `""`.
2. **Split matches** → We split the results string by `,` to get each match.
3. **Float number validation** → If any score has a decimal (like `101.12`), return an error immediately.
4. **Regex parsing** → `/(.*) (\d+) (.*) (\d+)$/`

   * Captures: `team1 name`, `score1`, `team2 name`, `score2`.
   * Works for multi-word team names and ensures last two numbers are scores.
5. **Check if team participated** → If not present in both sides, skip.
6. **Update stats** → Add scores, check win/draw/loss, update points.
7. **If never found** → Return `"Team Name:This team didn't play!"`.
8. **Final result string** → Return in the required format.

---

✅ This solution is **efficient (O(n))**, concise, and handles **all edge cases** (empty team, invalid float, team not found, multiple matches).
*/
