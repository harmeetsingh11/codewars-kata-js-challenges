# [Possibilities of throwing a coin n times](https://www.codewars.com/kata/5ad6266b673f2f067b000004)

### Difficulty: `6 kyu`

### Tags: `Mathematics` `Statistics` `Permutations` `Performance`

## Description

In this kata you will be given an integer `n`, which is the number of times that a coin is thrown. You will have to return a sorted array of strings for all the possibilities ( heads is `'H'`, tails is `'T'` ).

### Examples

```
n = 1 should return {"H", "T"}
n = 2 should return {"HH", "HT", "TH", "TT"}
n = 3 should return {"HHH", "HHT", "HTH", "HTT", "THH", "THT", "TTH", "TTT"}
```

### Input
`0 < n < 18`

Careful with performance!! You'll have to pass 3 basic test (n = 1, n = 2, n = 3), many medium tests (3 < n <= 10) and many large tests (10 < n < 18)

