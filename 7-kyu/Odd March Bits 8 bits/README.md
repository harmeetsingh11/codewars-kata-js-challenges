# [Odd March Bits 8 bits](https://www.codewars.com/kata/58ee4db3e479611e6f000086)

### Difficulty: `7 kyu`

### Tags: `Bits` `Binary` `Arrays` `Fundamentals`

## Description

Odd bits are getting ready for [Bits Battles](https://www.codewars.com/kata/world-bits-war/).

Therefore the `n` bits march from right to left along an `8` bits path. Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of `8` integers.

Return an array of all the steps.

`1 <= n <= 8`

**NOTE:** `n != 0`, because n represents the number of `1`s.

### Examples

This resembles a simple 8 LED chaser:

```
n = 3

00000111
00001110
00011100
00111000
01110000
11100000
```

```
n = 7

01111111
11111110
```