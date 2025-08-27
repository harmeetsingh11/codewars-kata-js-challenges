# [Once](https://www.codewars.com/kata/5307ff5b588fe6d7000000a5)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Functional Programming`

## Description

You'll implement `once`, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return `undefined`).

For example:

```
logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
```