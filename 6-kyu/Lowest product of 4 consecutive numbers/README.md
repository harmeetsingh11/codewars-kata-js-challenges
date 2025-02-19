# [Lowest product of 4 consecutive numbers](https://www.codewars.com/kata/554e52e7232cdd05650000a0)

### Difficulty: `6 kyu`

### Tags: `Fundamentals`

## Description

Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

### Example

```js
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"
```