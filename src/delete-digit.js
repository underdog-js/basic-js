const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = String(n);
  let maxResult = 0;

  for (let i = 0; i < num.length; i++) {
    const deletedNum = Number(num.slice(0, i) + num.slice(i + 1));
    maxResult = Math.max(maxResult, deletedNum);
  }

  return maxResult;
}

module.exports = {
  deleteDigit
};
