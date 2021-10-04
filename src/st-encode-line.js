import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  

  const result = [];
  let current = str[0];
  let countNam = 1;
  for (let i = 1; i <= str.length; ++i) {
    if (current == str[i]) {
      countNam = countNam + 1;
    } else {
      result.push(`${countNam > 1 ? countNam : ""}${current}`);
      current = str[i];
      countNam = 1;
    }
  }
  return result.join('');
}
