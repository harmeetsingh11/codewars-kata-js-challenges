# [Back and forth then Reverse!](https://www.codewars.com/kata/60cc93db4ab0ae0026761232)

### Difficulty: `6 kyu`

### Tags: `Algorithms` `Performance` `Arrays`

## Description

### Task
A list S will be given. You need to generate a list T from it by following the given process:

1. Remove the first and last element from the list S and add them to the list T.
2. Reverse the list S
3. Repeat the process until list S gets emptied.
The above process results in the depletion of the list S. Your task is to generate list T **without mutating** the input List S.

### Example

```
S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T
```

### Note
- size of S goes up to 10^6
- Keep the efficiency of your code in mind.
- Do not mutate the Input.