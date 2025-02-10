# [Return a sorted list of objects](https://www.codewars.com/kata/52705ed65de62b733f000064)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Arrays` `Sorting`

## Description

### Welcome to the Codewars Bar!

You'll be passed an array of objects (`list`) - you must sort them in descending order based on the value of the specified property (`sortBy`).

### Example
When sorted by `"a"`, this:

```js
[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]
```

should return:

```js
[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]
```

The values will always be numbers, and the properties will always exist.