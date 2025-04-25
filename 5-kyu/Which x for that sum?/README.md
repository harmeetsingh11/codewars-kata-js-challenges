# [Which x for that sum?](https://www.codewars.com/kata/5b1cd19fcd206af728000056)

### Difficulty: `5 kyu`

### Tags: `Mathematics` `Fundamentals`

## Description

Usually given `x` we try to find `m`. Here we will try to find `x` (x real, 0 < x < 1) when `m` is given (m real, m > 0).

Let us call `solve` the function `solve(m)` which returns `x` such as U(n, x) goes to `m` when `n` goes to infinity.

### Examples:
`solve(2.0) returns 0.5` since `U(n, 0.5)` goes to `2` when `n` goes to infinity.

`solve(8.0) returns 0.7034648345913732` since `U(n, 0.7034648345913732)` goes to `8` when `n` goes to infinity.

### Note:
You pass the tests if `abs(actual - expected) <= 1e-12`

