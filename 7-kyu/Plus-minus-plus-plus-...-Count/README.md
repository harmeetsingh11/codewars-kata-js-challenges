# [Plus - minus - plus - plus - ... - Count](https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca)

### Difficulty: `7 kyu`

### Tags: `Fundamentals`

## Description

Count how often sign changes in array.

### result

number from `0` to ... . Empty array returns `0`

### example

```js
const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/

catchSignChange(arr) == 2;
```