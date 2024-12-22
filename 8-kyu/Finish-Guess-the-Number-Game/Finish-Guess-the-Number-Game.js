class Guesser {
  constructor(number, lives) {
    this.number = number; // The correct number to guess
    this.lives = lives; // Total lives available to the user
  }

  guess(n) {
    // Check if the user has no lives left
    if (this.lives <= 0) {
      throw new Error('No lives left'); // Throw an error if no lives are left
    }

    // Check if the guessed number matches the correct number
    if (n === this.number) {
      return true; // Return true if the guess is correct
    } else {
      this.lives--; // Decrement lives if the guess is incorrect
      return false; // Return false for an incorrect guess
    }
  }
}

/* 
Explanation:

Constructor (constructor):
Initializes the number (correct number to guess) and lives (number of attempts the user has).

guess method:
First checks if the user has any lives left. If not, it throws an error (throw new Error('No lives left');).
If the guess matches the correct number (n === this.number), it returns true.
If the guess is incorrect, it decrements the lives property (this.lives--) and returns false.
*/
