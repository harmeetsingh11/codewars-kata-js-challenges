# [Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark](https://www.codewars.com/kata/57fafb6d2b5314c839000195)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Strings` `Algorithms`

## Description

Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

### Examples

```
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
```