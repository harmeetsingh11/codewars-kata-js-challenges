# [Sort with a sorting array](https://www.codewars.com/kata/59dc8288fc3c49cc3f000039)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Arrays` `Strings`

## Description

Sort an array according to the indices in another array.
It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

```js
    sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
    
    sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
```