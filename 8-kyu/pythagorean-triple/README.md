# [Pythagorean Triple](https://www.codewars.com/kata/5951d30ce99cf2467e000013)

### Difficulty: `8 kyu`

### Tags: `Fundamentals` `Algebra` `Mathematics`

## Description

Given an unsorted array of 3 positive integers `[ n1, n2, n3 ]`, determine if it is possible to form a [Pythagorean Triple](https://en.wikipedia.org/wiki/Pythagorean_triple) using those 3 integers.

A [Pythagorean Triple](https://en.wikipedia.org/wiki/Pythagorean_triple) consists of arranging 3 integers, such that:

**$a^2 + b^2 = c^2$**

### Examples
[5, 3, 4] : it **is possible** to form a Pythagorean Triple using these 3 integers: $3^2 + 4^2 = 5^2$

[3, 4, 5] : it **is possible** to form a Pythagorean Triple using these 3 integers: $3^2 + 4^2 = 5^2$

[13, 12, 5] : it **is possible** to form a Pythagorean Triple using these 3 integers: $5^2 + 12^2 = 13^2$

[100, 3, 999] : it is **NOT possible** to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation $a^2 + b^2 = c^2$

### Return Values
- For Python: return `True` or `False`
- For JavaScript: return `true` or `false`
- Other languages: return `1` or `0` or refer to Sample Tests.
