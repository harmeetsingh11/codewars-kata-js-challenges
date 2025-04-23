# [Determine the date by the day number](https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Date Time` `Algorithms`

## Description

What date corresponds to the nth day of the year?
The answer depends on whether the year is a leap year or not.

Write a function that will help you determine the date if you know the number of the day in the year, as well as whether the year is a leap year or not.
The function accepts the day number and a boolean value isLeap as arguments, and returns the corresponding date of the year as a string "Month, day".
Only valid combinations of a day number and isLeap will be tested.

### Examples:

```
* With input `41, false` => return "February, 10"
* With input `60, false` => return "March, 1
* With input `60, true` => return "February, 29"
* With input `365, false` => return "December, 31"
* With input `366, true` => return "December, 31"
```

![calendar](https://github.com/LarisaOvchinnikova/markdown-examples/blob/master/calendar1.png?raw=true)

