# [What comes after?](https://www.codewars.com/kata/590f5b4a7bbb3e246000007d)

### Difficulty: `7 kyu`

### Tags: `Fundamentals`

## Description

You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

If there is a number, punctuation or underscore following the letter, it should not be returned.

```
If letter = 'r':
"are you really learning Ruby?" # => "eenu"
"Katy Perry is on the radio!"   # => "rya"
"Pirates say arrrrrrrrr."       # => "arrrrrrrr"
"r8 your friend"                # => "i"
```

Return an empty string if there are no instances of letter in the given string.

Adapted from: [Ruby Kickstart](https://github.com/JoshCheek/ruby-kickstart/blob/master/session1/challenge/7_string.rb)