# [File Path Operations](https://www.codewars.com/kata/5844e0890d3bedc5c5000e54)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Strings` `Restricted`

## Description

### Task:
This kata requires you to write an object that receives a file path and does operations on it. **NOTE FOR PYTHON USERS:** You cannot use modules os.path, glob, and re

**The purpose of this kata is to use string parsing, so you're not supposed to import external libraries. I could only enforce this in python.**

Testing:

Python:

```py
>>> master = FileMaster('/Users/person1/Pictures/house.png')
>>> master.extension()
'png'
>>> master.filename()
'house'
>>> master.dirpath()
'/Users/person1/Pictures/'
```

Ruby:

```rb
master = FileMaster.new('/Users/person1/Pictures/house.png')
master.extension
#--> png
master.filename
#--> house
master.dirpath
#--> /Users/person1/Pictures/
```

C#:

```cs
FileMaster FM = new FileMaster("/Users/person1/Pictures/house.png");
FM.extension(); // output: "png"
FM.filename(); // output: "house"
FM.dirpath(); // output: "/Users/person1/Pictures/"
```

JavaScript:

```js
const fm = new FileMaster('/Users/person1/Pictures/house.png');
fm.extension(); // output: 'png'
fm.filename(); // output: 'house'
fm.dirpath(); // output: '/Users/person1/Pictures/'
```

TypeScript:

```ts
const fm = new FileMaster('/Users/person1/Pictures/house.png');
fm.extension(); // output: 'png'
fm.filename(); // output: 'house'
fm.dirpath(); // output: '/Users/person1/Pictures/'
```

PHP:

```php
$fm = new FileMaster('/Users/person1/Pictures/house.png');
$fm.extension(); // 'png'
$fm.filename(); // 'house'
$fm.dirpath(); // '/Users/person1/Pictures'
```

### Notes:
- I have other kata that need to be tested. You may find them [here](https://www.codewars.com/kata/5866a58b9cbc02c4f8000cac) and [here](https://www.codewars.com/kata/58644e8ddf95f81a38001d8d)
- Please post any questions or suggestion in the discourse section. Thank you!
- Thank to all users who contributed to this kata! I appreciate your input!