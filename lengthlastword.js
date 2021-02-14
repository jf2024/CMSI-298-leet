/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && length != 0) {
      return length;
    } else if (s[i] !== " ") {
      length++;
    }
  }
  return length;
}
