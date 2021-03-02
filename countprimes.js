/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;

  if (n > 2) {
    count++;
  } else {
    return 0;
  }

  for (let i = 3; i < n; i++) {
    if (Prime(i)) {
      count++;
    }
  }

  return count;
};

function Prime(values) {
  for (let i = 2; i < Math.sqrt(values) + 1; i++) {
    if (values % i === 0) {
      return false;
    }
  }
  return true;
}
