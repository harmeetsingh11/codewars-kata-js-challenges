# [Use map() to double the values in an array](https://www.codewars.com/kata/53951fff369894e4f10007a9)

### Difficulty: `7 kyu`
 
### Tags: `Fundamentals` `Arrays` `Functional Programming`

## Description

Make the `double()` function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the `map()` function of the built-in javascript `Array` object. If you're not familiar with `map()`, reading over the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) may help.

```js
function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
}
```

For example:

```js
var someNumbers = [1,2,10,57];

double(someNumbers); // should return [2,4,20,114]
```