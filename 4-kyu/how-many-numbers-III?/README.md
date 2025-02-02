# [How many numbers III?](https://www.codewars.com/kata/5877e7d568909e5ff90017e6)

### Difficulty: `4 kyu`

### Tags: `Algorithms` `Mathematics` `Fundamentals` `Data Structures` `Logic`

## Description

We want to generate all the numbers of three digits where:

- the sum of their digits is equal to `10`
- their digits are in increasing order (the numbers may have two or more equal contiguous digits)
The numbers that fulfill these constraints are: `[118, 127, 136, 145, 226, 235, 244, 334]`. There're 8 numbers in total with 118 being the lowest and 334 being the greatest.

### Task
Implement a function which receives two arguments:
1. the sum of digits (`sum`)
2. the number of digits (`count`)

This function should return three values:
1. the total number of values which have `count` digits that add up to `sum` and are in increasing order
2. the lowest such value
3. the greatest such value

**Note:** if there're no values which satisfy these constaints, you should return an empty value (refer to the examples to see what exactly is expected).

### Examples

```js
findAll(10, 3)  =>  [8, "118", "334"]
findAll(27, 3)  =>  [1, "999", "999"]
findAll(84, 4)  =>  []
```

Features of the random tests:
- Number of tests: `112`
- Sum of digits value between `20` and `65`
- Amount of digits between `2` and `17`
