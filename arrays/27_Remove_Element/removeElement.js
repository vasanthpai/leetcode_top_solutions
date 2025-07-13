var removeElement = function (nums, val) {
  const n = nums.length;
  let index = 0;
  for (i = 0; i < n; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

console.log(removeElement([3, 2, 2, 3], 3));
