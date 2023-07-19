// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//--- Solutions

// --- Using classical For Loop
// function reverse(str) {
//     let reversedStr = "";
//     let strLength = str.length;

//     for (let index = strLength-1; index >= 0; index--) {
//         const element = str[index];
//         reversedStr += element;
//     }

//     return reversedStr;
// }


//--- Using  For...of Loop
// function reverse(str) {
//     let reversedStr = "";

//     for (let character of str) {
//         reversedStr = character + reversedStr;
//     }

//     return reversedStr;
// }


//--- Using  Array reduce method
// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }


//--- Using Arrary reverse method
function reverse(str) {
    return str.split('').reverse().join('');
}

module.exports = reverse;
