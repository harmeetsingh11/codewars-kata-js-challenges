function pattern(n) {
  // Generate the pattern by iterating from 1 to n
  return Array.from({ length: n }, (_, i) =>
    i === 0 ? '1' : `1${'*'.repeat(i)}${i + 1}`
  ).join('\n');
}

console.log(pattern(3));
// Output:
// 1
// 1*2
// 1**3

console.log(pattern(10));
// Output:
// 1
// 1*2
// 1**3
// 1***4
// 1****5
// 1*****6
// 1******7
// 1*******8
// 1********9
// 1*********10

/* 
Key Components:

Creating an Array:
Array.from({ length: n }, (_, i) => ...)
This creates an array of length n where i represents the index of each element (0-based index).
We use this array to generate the lines of the pattern.

Handling the First Line:
i === 0 ? '1'
When i = 0, the line is just "1". This ensures the first line matches the expected format.

Handling Subsequent Lines:
`1${'*'.repeat(i)}${i + 1}`
For all i > 0, the line is constructed as follows:
"1" is the fixed starting character.
'*'.repeat(i) adds i asterisks. For example:
If i = 1, this adds *.
If i = 2, this adds **.
i + 1 appends the current row number (1-based indexing).

Combining Lines:
.join('\n')
After all rows are generated, they are combined into a single string with \n as the separator.


EXAMPLE WALKTHROUGH:
For pattern(3):
Array indices: [0, 1, 2].
Mapping each index:
i = 0: The first line is "1".
i = 1: The second line is "1*2":
Start with "1".
Add '*'.repeat(1) → *.
Append 1 + 1 → 2.
i = 2: The third line is "1**3":
Start with "1".
Add '*'.repeat(2) → **.
Append 2 + 1 → 3.
Combine all rows with \n: "1\n1*2\n1**3".

Complexity:
Time Complexity:
Generating n rows: 
O(n^2), as '*'.repeat(i) takes O(i) and the sum of i from 1 to n is O(n^2).
Joining the rows: O(n).
Total: O(n^2).
Space Complexity:
O(n^2) for the resulting string.
*/
