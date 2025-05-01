function proofread(str) {
  return (
    str
      // Step 1: Convert the entire string to lowercase to remove random capitalizations
      .toLowerCase()

      // Step 2: Replace all incorrect 'ie' with 'ei' (assumes virus swapped them in 'ei' words)
      .replace(/ie/g, 'ei')

      // Step 3: Capitalize the first letter of each sentence
      // The regex matches either the start of the string (^) or a period followed by a space (\. )
      // and captures the following letter (.) to capitalize it.
      .replace(/(^|\. )(.)/g, (_, a, b) => a + b.toUpperCase())
  );
}

console.log(proofread('He haD iEght ShOTs of CAffIEne.'));
// Output: "He had eight shots of caffeine."

/*
### **Thought Process / Intuition**:

1. **Normalize the Input**:  
   Since the virus randomly capitalized letters, we first lowercase everything with `.toLowerCase()` to clean up the case inconsistencies.

2. **Fix the 'ie' vs 'ei' Swaps**:  
   The virus is known to have swapped 'i' and 'e' in `'ei'` words (like "caffeine", "their"). So, we assume all 'ie' occurrences in such words should be 'ei'.  
   That’s why we replace all `'ie'` with `'ei'`.

3. **Fix Sentence Capitalization**:  
   Sentences are supposed to start with a capital letter. The regex `/(^|\. )(.)/g`:
   - Matches either the **start of the string** `^` or a **period and space** `\. `.
   - Then captures the **next letter** (.) which should be capitalized.
   - The callback reconstructs the sentence by keeping the matched part (`a`) and capitalizing the second character (`b`).
*/
