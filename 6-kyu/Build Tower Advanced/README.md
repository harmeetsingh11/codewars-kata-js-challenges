# [Build Tower Advanced](https://www.codewars.com/kata/57675f3dedc6f728ee000256)

### Difficulty: `6 kyu`

### Tags: `Strings` `ASCII Art` `Fundamentals`

## Description

Build Tower by the following given arguments:

- **number of floors** (integer and always greater than 0)
- **block size** (width, height) (integer pair and always greater than (0, 0))

Tower block unit is represented as `*`. Tower blocks of block size (2, 1) and (2, 3) would look like respectively:

```
  **
```
```
  **
  **
  **
```

for example, a tower of 3 floors with block size = (2, 3) looks like below

```
[
  '    **    ',
  '    **    ',
  '    **    ',
  '  ******  ',
  '  ******  ',
  '  ******  ',
  '**********',
  '**********',
  '**********'
]
```

and a tower of 6 floors with block size = (2, 1) looks like below

```
[
  '          **          ', 
  '        ******        ', 
  '      **********      ', 
  '    **************    ', 
  '  ******************  ', 
  '**********************'
]
```

Don't return a whole string containing line-endings but a list/array/vector of strings instead!

This kata might looks like a **5.5kyu** one. So challenge yourself!