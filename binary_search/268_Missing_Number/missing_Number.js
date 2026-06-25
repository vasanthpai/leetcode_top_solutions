var missingNumber = function (nums) {
  const n = nums.length;
  const total = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  return total - sum;
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))