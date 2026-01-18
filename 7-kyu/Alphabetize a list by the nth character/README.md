# [Alphabetize a list by the nth character](https://www.codewars.com/kata/54eea36b7f914221eb000e2f)

### Difficulty: `7 kyu`

### Tags: `Lists` `Strings` `Sorting` `Arrays` `Fundamentals`

## Description

Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.

The letters should be compared case-insensitive. If both letters are the same, order them normally (lexicographically), again, case-insensitive.

Example:

```js
function sortIt('bid, zag', 2) //=> 'zag, bid'
``` 
The length of all words provided in the list will be >= n. The format will be "x, x, x". In Haskell you'll get a list of `String`s instead.

