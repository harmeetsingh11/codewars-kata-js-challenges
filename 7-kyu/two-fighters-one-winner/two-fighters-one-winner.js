// Solution 1 (Mathematical Calculation Approach): This solution directly calculates the number of attacks needed for each fighter to kill the other, using simple arithmetic without looping.
function declareWinner(fighter1, fighter2, firstAttacker) {
  // Calculate how many attacks Fighter 2 needs to defeat Fighter 1
  // This is done by dividing Fighter 1's health by Fighter 2's damage per attack
  // Math.ceil is used to round up, as a partial attack still results in damage
  const attacksToKillF1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);

  // Calculate how many attacks Fighter 1 needs to defeat Fighter 2
  // Similar to above, we divide Fighter 2's health by Fighter 1's damage per attack
  const attacksToKillF2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

  // Now we compare the number of attacks needed by each fighter to defeat the other
  // If Fighter 2 needs fewer attacks than Fighter 1, Fighter 2 wins
  return attacksToKillF1 < attacksToKillF2
    ? fighter2.name
    : // If Fighter 1 needs fewer attacks, Fighter 1 wins
    attacksToKillF1 > attacksToKillF2
    ? fighter1.name
    : // If both need the same number of attacks to defeat each other, the first attacker wins
      firstAttacker;
}

// Solution 2 (Iterative swap approach): This solution uses a turn-based approach, where each fighter alternates turns until one of their health reaches zero or less.
function declareWinner(fighter1, fighter2, firstAttacker) {
  // Determine which fighter attacks first
  // If the first attacker's name matches fighter1, set attacker to fighter1, otherwise set to fighter2
  let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
  // The other fighter will be the defender
  let defender = firstAttacker === fighter1.name ? fighter2 : fighter1;

  // The fight continues until one of the fighters' health is reduced to 0 or below
  while (fighter1.health > 0 && fighter2.health > 0) {
    // Attacker attacks defender, reducing the defender's health by attacker's damage
    defender.health -= attacker.damagePerAttack;

    // Check if the defender's health has reached 0 or less
    if (defender.health <= 0) {
      // If defender's health is 0 or less, the attacker wins, so return the attacker's name
      return attacker.name;
    }

    // Switch the roles of attacker and defender for the next turn
    // The current defender becomes the new attacker, and the current attacker becomes the new defender
    [attacker, defender] = [defender, attacker];
  }
}
