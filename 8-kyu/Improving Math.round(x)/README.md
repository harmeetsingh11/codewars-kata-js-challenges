# [Improving Math.round(x)](https://www.codewars.com/kata/56be025f9347a066c7000e4f)

### Difficulty: `8 kyu`

### Tags: `Object-oriented Programming` `Mathematics` `Logic` `Fundamentals` 

## Description

### Task:
Javascript has a handy built-in `Math.round(x)` method that rounds a number to the nearest integer:

```js
Math.round(3.14); // Returns 3
Math.round(17.43); // 17
Math.round(198.499); // 198
Math.round(200.5); // 201
Math.round(1784.76); // 1785
```

But that is sometimes not enough! What if we wanted to round `3.1415926535` to two decimal places? While some languages (such as PHP) has a `round()` function that supports rounding to a specified number of decimal places (e.g. `<?php round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. as specified) */ ?>`), **Javascript does not!**

### Task
Your task is to create a method, `Math.roundTo(number, precision)` which rounds a given `number` to `precision` decimal places.

You may find the following `Math` methods useful:

1. `Math.round(x)` (of course)
2. `Math.pow(x,y)` (returns x to the power of y - e.g. `Math.pow(3,4) == 81`)