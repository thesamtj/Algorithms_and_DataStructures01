// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// --- Solutions

// --- Using an extra variable
// function fizzBuzz(n) {
//   let result;

//   for (let i = 1; i <= n; i++) {
//     result = i;

//     if (i % 3 === 0) {
//       result = "fizz";
//     }

//     if (i % 5 === 0) {
//       result = "buzz";
//     }

//     if (i % 3 === 0 && i % 5 === 0) {
//       result = "fizzbuzz";
//     }

//     console.log(result);
//   }
// }

// Using classic If...Else
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// Using 15 - Multiples of 3 & 5 are also multiples of 15, cos 3 * 5 = 15
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

module.exports = fizzBuzz;
