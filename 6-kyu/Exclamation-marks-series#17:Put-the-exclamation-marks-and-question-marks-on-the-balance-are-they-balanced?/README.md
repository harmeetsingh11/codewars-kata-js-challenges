# [Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?](https://www.codewars.com/kata/57fb44a12b53146fe1000136)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` 

## Description

Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings `left` and `right` on the balance - are they balanced?

If the left side is more heavy, return `"Left"`; if the right side is more heavy, return `"Right"`; if they are balanced, return `"Balance"`.

### Examples

```js
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
```