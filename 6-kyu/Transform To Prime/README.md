# [Transform To Prime](https://www.codewars.com/kata/5a946d9fba1bb5135100007c)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Array`

## Description

### Task

Given a list of positive integers, determine the minimum number that needs to be inserted so that the sum of all elements becomes the nearest prime number.

### Notes
- The list will always have at least 2 elements.
- All elements will be positive integers (n > 0).
- The list may contain duplicate values.
- The new sum must be the closest prime number.

### Examples

```js
minimumNumber({3, 1, 2})  // ➞ 1
```

### Explanation:
- The sum of [3, 1, 2] is 6.
- The closest prime number is 7.
- We need to insert 1 to reach 7.

```js
minimumNumber({2, 12, 8, 4, 6})  // ➞ 5
```

### Explanation:

- The sum of [2, 12, 8, 4, 6] is 32.
- The closest prime number is 37.
- We need to insert 5 to reach 37.


```js
minimumNumber({50, 39, 49, 6, 17, 28})  // ➞ 2
```

### Explanation:

- The sum of [50, 39, 49, 6, 17, 28] is 189.
- The closest prime number is 191.
- We need to insert 2 to reach 191.
