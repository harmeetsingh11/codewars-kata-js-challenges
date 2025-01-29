# [Sorting Dictionaries](https://www.codewars.com/kata/53da6a7e112bd15cbc000012)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Lists` `Sorting`

## Description

Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

Create a function that returns a sorted list of (`key, value`) tuples (Javascript: arrays of 2 items).

The list must be sorted by the `value` and be sorted **largest to smallest**.

### Examples

```js
sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]
```