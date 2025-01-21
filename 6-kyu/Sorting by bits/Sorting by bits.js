function sortByBits(arr) {
  // Sort the array in place using the custom sorting function
  arr.sort((a, b) => {
    // Count the number of 1 bits for both numbers
    const bitCountA = a.toString(2).replace(/0/g, '').length;
    const bitCountB = b.toString(2).replace(/0/g, '').length;

    // First compare by number of 1 bits; if equal, compare by numerical value
    return bitCountA === bitCountB ? a - b : bitCountA - bitCountB;
  });
  return arr;
}

const arr = [3, 8, 3, 6, 5, 7, 9, 1];
console.log(sortByBits(arr)); // Output: [1, 8, 3, 3, 5, 6, 9, 7]

/* 
Explanation:

Counting 1 bits:
For each number, convert it to its binary representation using .toString(2).
Replace all 0 bits with an empty string and calculate the length of the remaining string. This gives the count of 1 bits.

Sorting logic:
Use the Array.prototype.sort method with a custom comparator:
Compare numbers by their 1-bit count (bitCountA - bitCountB).
If two numbers have the same bit count, compare their actual values (a - b).

In-place sorting:
The sort method modifies the original array in place, satisfying the requirement.

This approach ensures clarity, conciseness, and efficiency. The time complexity is O(nlogn), primarily determined by the sorting operation.
*/
