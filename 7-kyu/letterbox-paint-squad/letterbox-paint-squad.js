function paintLetterboxes(start, end) {
  // Initialize an array to count the frequency of each digit (0-9).
  const counts = Array(10).fill(0);

  // Iterate over the range of letterbox numbers from start to end.
  for (let i = start; i <= end; i++) {
    // Convert the current number to a string and iterate over its digits.
    String(i)
      .split('')
      .forEach((digit) => {
        counts[+digit]++; // Increment the corresponding digit count.
      });
  }

  return counts; // Return the array of digit frequencies.
}

/* 
Explanation:

Initialize Counts Array:
Create an array counts of size 10 filled with zeros to store the frequency of digits from 0 to 9.

Iterate Over Numbers:
Loop through each number from start to end (inclusive).

Extract Digits:
Convert the number to a string using String(i) to access individual digits. Split the string into an array of characters (digits).

Update Frequency:
Use forEach to iterate through the digits of the number. Convert each digit back to a number using +digit and increment the corresponding count in the counts array.

Return the Result:
After processing all numbers, return the counts array which now holds the frequency of each digit.

Example Run:

For start = 125 and end = 132:

Numbers are: 125, 126, 127, 128, 129, 130, 131, 132.

Breaking down digits:
Digits: 1, 2, 5
        1, 2, 6
        1, 2, 7
        1, 2, 8
        1, 2, 9
        1, 3, 0
        1, 3, 1
        1, 3, 2
Frequency of digits: [1, 9, 6, 3, 0, 1, 1, 1, 1, 1]

This is an efficient O(n⋅d) solution, where n is the range size (end - start + 1), and d is the number of digits in each number (usually a small constant). It’s clean, concise, and readable.
*/
