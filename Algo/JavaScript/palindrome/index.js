// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// --- Solutions:

// --- Using array reverse function
function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// --- Using array every function
// Not a very efficient solution cos it does twice more work
// function palindrome(str) {
//   return str.split("").every((val, i) => {
//     return val === str[str.length - i - 1];
//   });
// }

// --- Using array every function
// Reduce loop by half (to be further improved on)
// function palindrome(str) {
//   let strArray = str.split('');
//   let strLength = strArray.length;

//   for (const i in strArray) {
//     if (strArray[i] !== strArray[strLength - i - 1]) {
//         return false;
//     }

//     if (i => strLength - i - 1) {
//         return true;
//     }
//   }
// }

module.exports = palindrome;
