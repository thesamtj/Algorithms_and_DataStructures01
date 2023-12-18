// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// --- Solutions

// Using a max tracker
// function maxChar(str) {
//   let charMap = {};
//   let max = 0;
//   let maxChar = "";

//   for (const c of str) {
//     if (charMap[c]) {
//         charMap[c]++;
//     } else {
//         charMap[c] = 1;
//     }
//   }

//   for (const char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// Using a max tracker (condensed)
// function maxChar(str) {
//   let charMap = {};
//   let max = 0;
//   let maxChar = "";

//   for (const c of str) {
//     charMap[c] = charMap[c] + 1 || 1;
//   }

//   for (const char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// Using a max tracker & hasOwnProperty
// function maxChar(str) {
//   let charMap = {};
//   let max = 0;
//   let maxChar = "";

//   for (const c of str) {
//     charMap.hasOwnProperty(c) ? (charMap[c] += 1) : (charMap[c] = 1);
//   }

//   for (const char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// Using a Array reduce method
// function maxChar(str) {
//   let charMap = {};

//   for (const c of str) {
//     charMap[c] = charMap[c] + 1 || 1;
//   }

//   return Object.keys(charMap).reduce((a, b) =>
//     charMap[a] > charMap[b] ? a : b
//   );
// }

// Using a Math max & filter function
// function maxChar(str) {
//   let charMap = {};

//   for (const c of str) {
//     charMap[c] = charMap[c] + 1 || 1;
//   }

//   let max = Math.max(...Object.values(charMap));

//   return Object.keys(charMap).filter((a) => charMap[a] === max)[0];
// }

// Using a Math max & find function
function maxChar(str) {
  let charMap = {};

  for (const c of str) {
    charMap[c] = charMap[c] + 1 || 1;
  }

  let max = Math.max(...Object.values(charMap));

  return Object.keys(charMap).find((a) => charMap[a] === max);
}

module.exports = maxChar;
