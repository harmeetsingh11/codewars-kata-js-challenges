function doTurn() {
  // Roll the dice to determine movement
  rollDice();
  // Move the player based on the dice roll
  move();
  // Engage in combat if there's an encounter
  combat();
  // Collect coins after combat
  getCoins();
  // Purchase health with coins
  buyHealth();
  // Print the current status of the game
  printStatus();
}

/* 
Explanation:
rollDice(): Simulates rolling the dice to determine how far the player moves.
move(): Moves the player on the board based on the result of the dice roll.
combat(): Engages the player in a combat sequence if they encounter an enemy.
getCoins(): Collects coins as a reward for surviving combat or passing through certain areas.
buyHealth(): Uses collected coins to purchase health for the player.
printStatus(): Outputs the current state of the player and the game, helping players understand their progress.
*/
