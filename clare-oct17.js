/*
Where My Anagrams At?
Two words are anagrams of each other if they both contain the same letters.

Write a method that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array if
there are none.

P:
Write a function that will find all the strings in the second input array, that contain the same letters, with same frequency, as the first input string.

E:
- all elements of the array will be strings
- case-insensitive for the anagram check
- case should be retained for the output
- output an empty array if there are no anagrams
- - is there output order alphabetical or in the order of the input? Likely order of the input

D:
input: string and an array of strings
output: array of strings
Intermediate: Object that checks for frequencies, letters as the keys, frequencies have the value.  Test for same frequency as the input string and if so, it is an anagram.
Helper function:
  - to test for anagrams - sort the letters in alphabetical order

A: High-level strategies
- High-level strategies
  - Andy
    - Compare the sorted input word to the sorted words from the input array and filter to return only the matches.

  - Aziza
    - Sort the first input, iterate through iput array, check each sorted word with first sorted word and return the anagrams.

  - Clare
    - Create all possible anagrams of the first input, and then return all those that appear in the second input.

- Details
1. Initiate an empty array to store the final anagrams 
2. Sort the input string and store to a variable
- convert input string to an array of letters 
- convert sorted array back to a string
3.  For each string in the array, 
- iterate through each string  
- convert it to an array of letters, 
- sort then convert back to string 
- save the sorted strings to a new array 
4.  Create isAnagram helper function that returns a boolean
- 2 parameters: target word, word
- Compare the target word converted to lower case with word converted to lower case
  in the array 
- Return boolean: true or false
4. Use return boolean value of isAnagram to determine if it is an anagram
  - if yes, append the original string to the anagram array
5.  Return the anagram array


*/

function isAnagram(targetWord, word) {
  return targetWord === word;
}

function anagrams(word, wordArray) {
  let anagramsArray = [];

  let sortedTargetWord = word.toLowerCase().split("").sort().join("");
  let sortedWordArray = wordArray.map((word) => {
    return word.toLowerCase().split("").sort().join("");
  });

  for (let idx = 0; idx < sortedWordArray.length; idx++) {
    if (isAnagram(sortedTargetWord, sortedWordArray[idx])) {
      anagramsArray.push(wordArray[idx]);
    }
  }
  return anagramsArray;
}

// // JavaScript test cases
console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
// ['aabb', 'bbaa']

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));
// ['carer', 'racer']

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "Racer"]));
// ["carer", "Racer"];

console.log(anagrams("laser", ["lazing", "lazy", "lacer"]));
// [];

// console.log(isAnagram("racer", "Racer"));
