function shortenDate(dateTime) {
  // Split the input string at the comma and return the first part, which is the desired format.
  return dateTime.split(',')[0];
}

/* 
Explanation:

Input Format: The input string is always in the format Weekday Month Day, time (e.g., "Friday May 2, 7pm").

Logic:
Use the .split(",") method to divide the string into two parts:
The first part contains the Weekday Month Day (before the comma).
The second part contains the time (after the comma).
We only need the first part, so we return it.

Efficiency:
The solution runs in O(n), where n is the length of the input string, as .split() processes the string once.
*/
