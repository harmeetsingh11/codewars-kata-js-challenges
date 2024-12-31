function splitTheBill(group) {
  // Calculate the total spent and number of people in the group
  const totalSpent = Object.values(group).reduce(
    (sum, amount) => sum + amount,
    0
  );
  const averageSpent = totalSpent / Object.keys(group).length;

  // Calculate how much each person should pay or receive
  const result = {};
  for (const [person, amount] of Object.entries(group)) {
    result[person] = +(amount - averageSpent).toFixed(2); // Round to 2 decimal places
  }

  return result;
}

// Example
const group = {
  A: 20,
  B: 15,
  C: 10,
};

console.log(splitTheBill(group)); // Output: { A: 5, B: 0, C: -5 }

/* 
Explanation:

Total Spent Calculation:
Object.values(group) extracts all the values (amounts spent).
.reduce((sum, amount) => sum + amount, 0) calculates the total sum.

Average Spent Calculation:
totalSpent / Object.keys(group).length divides the total by the number of people to get the average amount spent.

Individual Balance Calculation:
Object.entries(group) gets key-value pairs (name and amount spent).
For each person, the difference between their spent amount and the average spent is calculated: amount - averageSpent.
toFixed(2) ensures the result is rounded to two decimal places, and + converts it back to a number.

Return Result:
The result object maps each person's name to their respective balance (positive if they should receive money, negative if they owe money).

This approach is efficient with a time complexity of O(n), where n is the number of group members, since we iterate over the group members a constant number of times.
*/
