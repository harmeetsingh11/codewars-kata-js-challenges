# [Most Frequent Weekdays](https://www.codewars.com/kata/56eb16655250549e4b0013f4)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` 

## Description

What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. `['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']`). Week starts with Monday.

**Input:** Year as an **int**.

**Output:** The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

### Preconditions:

- Week starts on Monday.
- Year is between 1583 and 4000.
- Calendar is Gregorian.
  
### Examples (input -> output):
```js
* 2427 -> ['Friday']
* 2185 -> ['Saturday']
* 2860 -> ['Thursday', 'Friday']
```