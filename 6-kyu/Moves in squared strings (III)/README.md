# [Moves in squared strings (III)](https://www.codewars.com/kata/56dbeec613c2f63be4000be6)

### Difficulty: `6 kyu`

### Tags: `Algorithms` `Strings`

## Description

You are given a string of `n` lines, each substring being `n` characters long: For example:

`s = "abcd\nefgh\nijkl\nmnop"`

We will study some transformations of this square of strings.

Let's now transform this string!

- Symmetry with respect to the main diagonal: diag_1_sym (or diag1Sym or diag-1-sym)

  ```
  diag_1_sym(s) => "aeim\nbfjn\ncgko\ndhlp"
  ```

- Clockwise rotation 90 degrees: rot_90_clock (or rot90Clock or rot-90-clock)

  ```
  rot_90_clock(s) => "miea\nnjfb\nokgc\nplhd"
  ```

- selfie_and_diag1(s) (or selfieAndDiag1 or selfie-and-diag1) It is initial string + string obtained by symmetry with respect to the main diagonal.

  ```
  s = "abcd\nefgh\nijkl\nmnop" --> 
  "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
  ```

or printed for the last:

  ```
  selfie_and_diag1
  abcd|aeim
  efgh|bfjn
  ijkl|cgko 
  mnop|dhlp
  ```

### Task:
- Write these functions `diag_1_sym`, `rot_90_clock`, `selfie_and_diag1`
and

- high-order function `oper(fct, s)` where

- fct is the function of one variable f to apply to the string `s` (fct will be one of `diag_1_sym`, `rot_90_clock`, `selfie_and_diag1`)

### Examples:

```
s = "abcd\nefgh\nijkl\nmnop"
oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"
oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"
oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
```

### Notes:
- The form of the parameter `fct` in oper changes according to the language. You can see each form according to the language in "Your test cases".

- It could be easier to take these katas from number (I) to number (IV)

- Bash Note: The output strings should be separated by \r instead of \n. See "Sample Tests".