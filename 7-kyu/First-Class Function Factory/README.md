# [First-Class Function Factory](https://www.codewars.com/kata/563f879ecbb8fcab31000041)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Functional Programming` `Arrays`

## Description

Write a function, `factory`, that takes a number as its parameter and returns another function.

The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

In the example below, 5 is the number passed into the first function. So it returns a function that takes an array and multiplies all elements in it by five.

Translations and comments (and upvotes) welcome!

### Example

```js
var fives = factory(5);       // returns a function - fives
var myArray = [1, 2, 3];
fives(myArray);               //returns [5, 10, 15];
```