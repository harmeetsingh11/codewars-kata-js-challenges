function loose_change(cents) {
  // Round down the input to handle floats, and ensure it's non-negative
  cents = Math.floor(Math.max(0, cents));

  // Define the coin denominations and initialize the result object
  const coins = { Quarters: 25, Dimes: 10, Nickels: 5, Pennies: 1 };
  const result = { Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 0 };

  // Calculate the least number of coins for each denomination
  for (const [coin, value] of Object.entries(coins)) {
    result[coin] = Math.floor(cents / value); // Number of this coin
    cents %= value; // Remaining cents
  }

  return result;
}

// Examples
console.log(loose_change(56)); // { Nickels: 1, Pennies: 1, Dimes: 0, Quarters: 2 }
console.log(loose_change(-435)); // { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 }
console.log(loose_change(4.935)); // { Nickels: 0, Pennies: 4, Dimes: 0, Quarters: 0 }

/* 
Explanation:

Input Sanitization:
Use Math.max(0, cents) to ensure the value is non-negative.
Use Math.floor to round down float values to integers.

Define Coin Values:
Create a coins object where the keys are coin names and values are their worth in cents.
Initialize result with all coin counts set to 0.

Calculate Coins:
Loop through each coin in coins.
Determine how many of each coin can be used (Math.floor(cents / value)).
Update cents to the remainder (cents %= value).

Output:
Return the result object with the calculated counts of each coin.
*/
