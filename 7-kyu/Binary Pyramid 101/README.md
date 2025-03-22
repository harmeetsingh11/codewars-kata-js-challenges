# [Binary Pyramid 101](https://www.codewars.com/kata/5596700a386158e3aa000011)

### Difficulty: `7 kyu`

### Tags: `Mathematics` `Fundamentals`

## Description

Given two numbers `m` and `n`, such that `0` ≤ `m` ≤ `n` :

- convert all numbers from `m` to `n` (inclusive) to binary
- sum them as if they were in base 10
- convert the result to binary
- return as a string

### Example

```js
1, 4  -->  1111010

because:
    1  // 1 in binary is 1
+  10  // 2 in binary is 10
+  11  // 3 in binary is 11
+ 100  // 4 in binary is 100
-----
  122  // 122 in binary is 1111010
```