const minSubArrayLen = (target, nums) => {
  let left = 0;
  let sum = 0;
  let min = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left += 1;
    }
  }

  return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));