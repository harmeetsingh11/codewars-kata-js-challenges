var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    // If count is negative, return "<count><0"
    if (count < 0) return `${count}<0`;

    // If count is 0, return "0=0"
    if (count === 0) return '0=0';

    // Generate the sequence string and calculate the sum
    const sequence = Array.from({ length: count + 1 }, (_, i) => i).join('+');
    const sum = (count * (count + 1)) / 2; // Sum of the first 'count' numbers

    // Return the formatted result
    return `${sequence} = ${sum}`;
  };

  return SequenceSum;
})();

/* 
Explanation:

Handling Special Cases:
If count is negative, return "<count><0" to indicate the number is less than 0.
If count is 0, simply return "0=0" as there’s only one number (0) in the series.

Generating the Sequence:
We use Array.from to create an array of numbers from 0 up to count. The join('+') method then creates a string with numbers separated by +.

Calculating the Sum:
We use the formula (count * (count + 1)) / 2 to compute the sum of numbers from 0 to count efficiently.

Formatting the Result:
The result is formatted as "sequence = sum", where sequence is the generated series string and sum is the calculated sum.

This solution is efficient and avoids loops where possible, with O(n) time complexity for the Array.from creation and joining.
*/
