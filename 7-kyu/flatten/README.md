# [Flatten](https://www.codewars.com/kata/5250a89b1625e5decd000413)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Arrays` `Functional Programming`

## Description

Write a function that flattens an `Array` of `Array` objects into a flat `Array`. Your function must only do one level of flattening.

```js
flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
```