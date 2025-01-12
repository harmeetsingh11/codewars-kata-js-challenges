function reverseList(list) {
  // Use the built-in reverse method for simplicity and efficiency.
  return list.reverse();
}

const myList = [1, 2, 3, 4, 5];
const reversedList = reverseList(myList);
console.log(reversedList); // Output: [5, 4, 3, 2, 1]

// MANUAL APPROACH
function reverseListManual(list) {
  const length = list.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    // Swap elements from start and end.
    [list[i], list[length - 1 - i]] = [list[length - 1 - i], list[i]];
  }
  return list;
}

const myList1 = [1, 2, 3, 4, 5];
const reversedListManual = reverseListManual(myList1);
console.log(reversedListManual); // Output: [5, 4, 3, 2, 1]

/* Explanation:

Swap Elements:
Use a loop to iterate over the first half of the array.
Swap the elements at the current index with their corresponding element from the end of the array.

In-place Modification:
This method also modifies the original array in place.

Complexity:
The time complexity is O(n), and the space complexity is O(1) since no additional data structures are used. */
