# [Pure odd digits primes](https://www.codewars.com/kata/55e0a2af50adf50699000126)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Algorithms` `Mathematics` `Data Structures`  

## Description

Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

Create a function, only_oddDigPrimes(), that receive a positive integer n >= 3, and output a list with three values:

[number pure odd digit primes less than or equal to n, largest pure odd digit prime smaller than or equal to n, smallest pure odd digit prime larger than n]

Let's see some cases:

```js
only_oddDigPrimes(20) ----> [7, 19, 31]
///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
19, because is the nearest prime of this type to 20
31, is the first pure odd digit that we encounter after 20///

only_oddDigPrimes(40) ----> [9, 37, 53]
only_oddDigPrimes(13) ----> [5, 13, 17]
```

Happy coding!!

