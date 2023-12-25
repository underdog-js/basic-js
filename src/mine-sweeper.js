const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],            [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) {
        for (const [dx, dy] of directions) {
          const ni = i + dx;
          const nj = j + dy;
          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
            result[ni][nj]++;
          }
        }
      }
    }
  }

  return result;
}


module.exports = {
  minesweeper
};
