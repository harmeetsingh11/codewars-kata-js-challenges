# [Character Concatenation](https://www.codewars.com/kata/55147ff29cd40b43c600058b)

### Difficulty: `7 kyu`

### Tags: `Fundamentals`

## Description

Given a string, you progressively need to concatenate the first character from the left and the first character from the right and "1", then the second character from the left and the second character from the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

```js
"abcdef"  --> "af1be2cd3"
"abc!def" --> "af1be2cd3" // same result
```