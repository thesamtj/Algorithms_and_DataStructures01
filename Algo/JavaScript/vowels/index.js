// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// --- Solutions

// --- Using iteration
function vowels(str) {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];

  for (const element of str.toLowerCase()) {
    if (checker.includes(element)) {
      count++;
    }
  }

  return count;
}

// --- Using regex
// function vowels(str) {
//   let matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

module.exports = vowels;
