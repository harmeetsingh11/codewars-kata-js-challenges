# [SillyCASE](https://www.codewars.com/kata/552ab0a4db0236ff1a00017a)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Strings`

## Description

Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

eg: foobar == fooBAR

If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

```
sillycase("brian")  
//         --^-- midpoint  
//         bri    first half (lower-cased)  
//            AN second half (upper-cased)  
```