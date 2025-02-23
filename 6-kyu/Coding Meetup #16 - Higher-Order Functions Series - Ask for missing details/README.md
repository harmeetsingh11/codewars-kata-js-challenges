# [Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details](https://www.codewars.com/kata/583d972b8bbc0402cf000121)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Functional Programming` `Data Structures` `Arrays` `Algorithms` `Strings`

## Description

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

```js
var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
```

write a function that

1. adds the `question` property to each object in the input array where the developer has not provided the relevant details (marked with a `null` value in JavaScript, with the default value in COBOL). The value of the `question` property should be the following string:

`Hi, could you please provide your <property name>.`

2. and returns only the developers with missing details:

```js
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
```

### Notes:

- At most only one of the values will be null / empty.
- Preserve the order of the original list.
- Return an empty array [] if there is no developer with missing details.
- The input array will always be valid and formatted as in the example above.


This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: `forEach, filter, map, reduce, some, every, find, findIndex`. Other approaches to solving the katas are of course possible.