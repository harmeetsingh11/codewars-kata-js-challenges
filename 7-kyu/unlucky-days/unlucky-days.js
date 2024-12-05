function unluckyDays(year) {
  // Initialize a counter for Friday the 13ths
  let count = 0;

  // Loop through all months of the given year
  for (let month = 0; month < 12; month++) {
    // Create a date object for the 13th day of the current month
    const date = new Date(year, month, 13);

    // Check if the day of the week is Friday (5 in JavaScript Date object)
    if (date.getDay() === 5) {
      count++;
    }
  }

  // Return the total count of Friday the 13ths
  return count;
}

// Examples:
console.log(unluckyDays(2015)); // Output: 3
console.log(unluckyDays(1986)); // Output: 1

/* 
Explanation:

Date Object Creation:
The new Date(year, month, day) constructor creates a date object. The month is zero-based (0 for January, 11 for December).
By specifying 13 as the day, we check the 13th of each month.

Day of the Week Check:
The getDay() method returns the day of the week as an integer (0 for Sunday, 1 for Monday, ..., 5 for Friday).
If getDay() returns 5, it means the 13th is a Friday.

Efficient Iteration:
We iterate through each month once, making this solution O(1) in complexity relative to the input size since there are always 12 months in a year.
*/
