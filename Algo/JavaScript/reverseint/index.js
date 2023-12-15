// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// --- Solutions

// Using an if check
// function reverseInt(n) {
//   const reversed = n.toString().split("").reverse().join("");

//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   }

//   return parseInt(reversed);
// }

// Using Math.abs function
function reverseInt(n) {
  let reversed = n.toString().split('').reverse().join('');
  let num = parseInt(reversed);  

  return n < 0 ? num * -1 : num;
}


// Using Math.sign & parseInt -- The parse methods convert a string to a number piece by piece -- function
// function reverseInt(n) {
//   const reversed = n.toString().split("").reverse().join("");

//   return parseInt(reversed) * Math.sign(n);
// }

module.exports = reverseInt;
