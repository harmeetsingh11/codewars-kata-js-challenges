# [Find within array](https://www.codewars.com/kata/51f082ba7297b8f07f000001)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Arrays` `Functional Programming`

## Description

We'll create a function that takes in two parameters:

- a sequence (length and types of items are irrelevant)
- a function (value, index) that will be called on members of the sequence and their index. The function will return either true or false.

Your function will iterate through the members of the sequence in order until the provided function returns true; at which point your function will return that item's index.

If the function given returns false for all members of the sequence, your function should return -1.

```js
var trueIfEven = function(value, index) { return (value % 2 === 0) };
findInArray([1,3,5,6,7], trueIfEven) // should === 3
```