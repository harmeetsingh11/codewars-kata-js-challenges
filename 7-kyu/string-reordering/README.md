# [String Reordering](https://www.codewars.com/kata/5b047875de4c7f9af800011b)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Strings` `Lists`

## Description

The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is `-999 < key < 999`. The dictionaries' keys & values will always be strings and will always not be empty.

### Example

```
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'
```
