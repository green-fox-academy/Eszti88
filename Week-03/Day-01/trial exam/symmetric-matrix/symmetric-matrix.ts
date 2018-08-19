'use strict';

// Create a function named `isSymmetric` that takes an n×n integer matrix (two dimensional array) as parameter
// and returns true, if is that matrix is symmetric (diagonally from top-left to bottom-right)
// or false if it is not
//
// example for symmetric matrix:
// 1 0 1
// 0 2 2
// 1 2 5
//
// example for not symmetric matrix
// 7 7 7
// 6 5 7
// 1 2 1

let symmetricMatrix: number[][] = [
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
]

function isSymmetric(matrix: number[][]): boolean {
  let rowNum = matrix.length;
  for (let row: number = 0; row < rowNum; row++) {
    let collumnNum = matrix[row].length;
    for (let collumn: number = row; collumn < collumnNum; collumn++) {
      if (matrix[row][collumn] !== matrix[collumn][row]) {
        return false;
      }
    } return true;
  }
} 

console.log(isSymmetric(symmetricMatrix)); // should print out true
