function alphabetWar(fight) {
  // Define the power of letters for each side
  const leftPower = { w: 4, p: 3, b: 2, s: 1 };
  const rightPower = { m: 4, q: 3, d: 2, z: 1 };

  // Explode bombs and neutralize adjacent letters
  let battlefield = fight.replace(/.?\*+.?/g, '_'); // Replace a bomb (*) and its adjacent letters with '_'

  // Calculate the total power for each side
  let leftScore = 0,
    rightScore = 0;
  for (let char of battlefield) {
    if (leftPower[char]) leftScore += leftPower[char]; // Add left side power
    if (rightPower[char]) rightScore += rightPower[char]; // Add right side power
  }

  // Determine the winner
  if (leftScore > rightScore) return 'Left side wins!';
  if (rightScore > leftScore) return 'Right side wins!';
  return "Let's fight again!"; // If scores are tied
}

console.log(alphabetWar('s*zz')); // "Right side wins!"
console.log(alphabetWar('*zd*qm*wp*bs*')); // "Let's fight again!"
console.log(alphabetWar('zzzz*s*')); // "Right side wins!"
console.log(alphabetWar('www*www****z')); // "Left side wins!"

/* 
Explanation:

Power Mapping:
Two objects (leftPower and rightPower) define the power of each letter on the respective sides. This allows for quick lookup.

Bomb Explosion Simulation:
The replace(/.?\*+.?/g, '_') uses a regular expression to find any bomb (*) and its adjacent characters.
.? matches 0 or 1 character before the bomb.
*+ matches one or more consecutive bombs.
.? matches 0 or 1 character after the bomb.
The matched parts are replaced with underscores (_) to neutralize them.

Scoring:
Each character in the remaining battlefield is checked against the leftPower and rightPower objects, and scores are tallied accordingly.

Winner Determination:
Compare the scores and return the appropriate string based on which side has a higher score. If tied, return "Let's fight again!".
*/
