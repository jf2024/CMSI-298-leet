/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let maxAverage = -10000;
  let currentSum;

  for (let i = 0; i < nums.length; i++) {
    currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += nums[j];
    }

    if (currentSum / k > maxAverage) {
      maxAverage = currentSum / k;
    }
  }
  return maxAverage;
}
