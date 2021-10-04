import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  
    let array = String(n).split("");
    let countMin =  array.indexOf(String(Math.min(... array)));
    array.splice(countMin, 1);
    return Number(array.join(''));
  }
