var shuffle = function (nums, n) {
  const newArray = [];
  for (let i = n; i < nums.length; i++) {
    newArray.push(nums[i - n], nums[i]);
  }
  console.log(newArray);
  return newArray;
};
