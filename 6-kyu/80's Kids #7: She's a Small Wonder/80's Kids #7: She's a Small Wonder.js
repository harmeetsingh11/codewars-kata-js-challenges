function Robot() {
  // Vicky starts with a set of known words (case-insensitive, all lowercase)
  this.knownWords = new Set([
    'i',
    'me',
    'you',
    'for',
    'teaching',
    'thank',
    'already',
    'know',
    'understand',
  ]);
}

Robot.prototype.learnWord = function (word) {
  // Only accept alphabet characters
  if (!/^[a-zA-Z]+$/.test(word)) {
    return 'I do not understand the input';
  }

  const lowerWord = word.toLowerCase();

  // Return appropriate message based on knowledge
  if (this.knownWords.has(lowerWord)) {
    return `I already know the word ${word}`;
  }

  this.knownWords.add(lowerWord);
  return `Thank you for teaching me ${word}`;
};

/* 
## **Intuition**

Vicky is a robot learning human words, but:
1. She already knows some **default built-in words**.
2. She should **ignore invalid inputs** (like numbers, symbols).
3. She must **remember new words**, but only if they're not already known.
4. All **learning is case-insensitive** – "HELLO" and "hello" are the same word.
5. All **responses should match the casing of the input** – so "I" should stay "I", not "i".

---

## **Approach (Step-by-Step)**

### 1. **Store known words in lowercase**
We want Vicky to recognize a word regardless of its casing:
```js
this.knownWords = new Set(['i', 'me', 'you', ...]); // all in lowercase
```

Using a **Set** helps because:
- It ensures **uniqueness**
- Lookup (`.has()`) is **fast**: O(1)

---

### 2. **Validate input**
We use a **regular expression** to make sure the word only contains letters:
```js
if (!/^[a-zA-Z]+$/.test(word)) {
  return 'I do not understand the input';
}
```
This filters out things like `"123"`, `"wow!"`, `"hello?"`.

---

### 3. **Check if word is already known**
We check against the **lowercase version** of the word (for case-insensitive matching):
```js
const lowerWord = word.toLowerCase();

if (this.knownWords.has(lowerWord)) {
  return `I already know the word ${word}`; // keep original casing
}
```

---

### 4. **Learn new word if it's valid and unknown**
If the word isn't already in the known set:
- We store it in lowercase
- Respond politely using the original casing
```js
this.knownWords.add(lowerWord);
return `Thank you for teaching me ${word}`;
```

---

## Summary in One Line:

> Use a `Set` to store all known words in lowercase for case-insensitive matching, validate input with regex, and preserve the original casing for all user-facing responses.
*/
