# [Doubleton number](https://www.codewars.com/kata/604287495a72ae00131685c7)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Sets`

## Description

We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, `23, 35, 100, 12121` are doubleton numbers, and 123 and 9980 are not.

For a given natural number `n` (from `1` to `1 000 000`), you need to find the next doubleton number. If `n` itself is a doubleton, return the next bigger than `n`.

### Examples:

```js
doubleton(120) === 121
doubleton(1234) === 1311
doubleton(10) === 12
```