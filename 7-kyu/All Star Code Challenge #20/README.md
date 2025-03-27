# [All Star Code Challenge #20](https://www.codewars.com/kata/5865a75da5f19147370000c7)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` 

## Description

Create a function called addArrays() that combines two arrays of equal length, summing each element of the first with the corresponding element in the second, returning the "combined" summed array.
Raise an error if input arguments are not of equal length.

```js
addArrays([1,2],[4,5]); // => [5,7]
addArrays([1,2,3],[4,5]); // => Error
```

Note:
Expect array input to either contain numbers or strings only
The function should also allow for concatenating string

```js
addArrays(["a"],["b"]) // => ["ab"]
```