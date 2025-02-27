# [Cut array into smaller parts](https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` 

## Description

Write a function that takes two arguments:

1. **An array:** The array to be split into smaller parts.
2. **Chunk size:** A positive integer, which is the size of each chunk.

This function should split the given array into parts with the given chunk size, and return the result as a nested array.

If the array cannot be evenly divided by the size, the last part may contain fewer elements.

If an array of size 123 is given and the chunk size is 10, the function will split the array into 13 smaller parts:
- The first 12 parts will each have a size of 10.
- The final part will contain the remaining 3 elements.

### Examples:

```
Array: [1, 2, 3]
Chunk size: 1
Expected solution --> [[1], [2], [3]]

Array: [1, 2, 3, 4, 5] 
Chunk size: 2
Expected solution --> [[1, 2], [3, 4], [5]]
```