# [Mobile Display Keystrokes](https://www.codewars.com/kata/59564a286e595346de000079)

### Difficulty: `7 kyu`

### Tags: `Fundamentals`

## Description

Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how many keystrokes you have to do for a specific word.

This is the layout:

![source: codewars](https://raw.githubusercontent.com/zruF/CodewarsData/master/Mobile_phone_keyboard.svg.png)

Given a string, return the number of keystrokes necessary to type it. You can assume that the input will entirely consist of characters included in the mobile layout (lowercase letters, digits, and the symbols `*` and `#`).

### Examples

```
"*#"       =>  2 (1 + 1)
"123"      =>  3 (1 + 1 + 1)
"abc"      =>  9 (2 + 3 + 4)
"codewars" => 26 (4 + 4 + 2 + 3 + 2 + 2 + 4 + 5)
```