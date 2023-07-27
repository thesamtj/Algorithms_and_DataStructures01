// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// --- Solutions

// Using Character Map
function anagrams(stringA, stringB) {
  let charMapA = buildCharMap(stringA);
  let charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (const key in charMapA) {
    if (charMapA[key] !== charMapB[key]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  let charMap = {};
  str.replace(/[^\w]/g, "").toLowerCase();

  for (const c of str) {
    charMap[c] = charMap[c] + 1 || 1;
  }

  return charMap;
}

// --- Using array sort and other methods
// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }

module.exports = anagrams;
