# [zero-balanced Array](https://www.codewars.com/kata/59c6fa6972851e8959000067)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Arrays`

## Description

An array is called *zero-balanced* if its elements sum to `0` and each element has its corresponding negative (i.e. if there are `x` elements `n`, then there must be `x` negatives `-n`). For example,

```
[1, -1, 2, -2] — zero-balanced, sum of elements is 0 + each element has its own negative;
[0, 1, -1] — zero-balanced, 0 is the negative of itself (0 == -0);

[3] — not zero-balanced; sum != 0;
[3, -2, -1] — not zero-balanced, sum == 0, but the array has 3 but not its negative, -3;
[1, 1, 1, 1, -1, 3, -3, -3] — despite having sum == 0 and all elements having their negatives, the latters must have the same amount as their originals, which doesn't comply here (four '1' and one '-1'), therefore, this array is not zero-balanced.
```

Write a function that returns `true` if its argument is *zero-balanced* array, else return `false`.

Note: an empty array will not sum to 0 since there are no elements in it, therefore, it should be treated as not zero-balanced.