# [letters only, please!](https://www.codewars.com/kata/59be6bdc4f98a8a9c700007d)

### Difficulty: `7 kyu`

### Tags: `Regular Expressions` `Strings`

## Description

Let's assume we need "clean" strings. Clean means a string should only contain letters `a-z`, `A-Z` and spaces. We assume that there are no double spaces or line breaks.

Write a function that takes a string and returns a string without the unnecessary characters.

### Examples

```js
'.tree1'                     ==> 'tree'
"that's a pie$ce o_f p#ie!"  ==> 'thats a piece of pie'
'john.dope@dopington.com'    ==> 'johndopedopingtoncom'
'my_list = ["a","b","c"]'    ==> 'mylist  abc'
'1 + 1 = 2'                  ==> '    '
"0123456789.+,|[]{}=@/~;^$'<>?-!*&:#%_"  ==> ''
```