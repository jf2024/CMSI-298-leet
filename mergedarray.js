var merge = function (nums1, m, nums2, n) {
  let nums1array = nums1;
  let max1 = m;

  let nums2array = nums2;
  let max2 = n;

  let num3 = [];

  for (let i = 0; i < m; i++) {
    num3[i] = nums1[i];
  }

  for (let j = 0; j < n; j++) {
    num3[j + m] = nums2[j];
  }

  for (let i = 0; i < num3.length; i++) {
    let temp = 0;
    if (num3[i] > num3[i + 1]) {
      temp = num3[i + 1];
      num3[i + 1] = num3[i];
      num3[i] = temp;
    }
  }
  return num3;
};
