// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// --- Solutions

// --- Iterative solution
function pyramid(n) {
  let colLength = 2 * n - 1;
  let midPoint = Math.floor(colLength / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < colLength; column++) {
      if (midPoint - row <= column && midPoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

// --- Recursive solution
// function pyramid(n, row = 0, level = "") {
//   let levelLength = 2 * n - 1;
//   let midPoint = Math.floor(levelLength / 2);

//   if (n === row) {
//     return;
//   }

//   if (level.length === levelLength) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const add =
//     midPoint - row <= level.length && midPoint + row >= level.length
//       ? "#"
//       : " ";
//   pyramid(n, row, level + add);
// }

module.exports = pyramid;
