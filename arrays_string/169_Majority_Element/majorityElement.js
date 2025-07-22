const majorityElement = (nums) => {
  let majorityElement = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majorityElement = nums[i];
      count = 1;
    } else if (majorityElement === nums[i]) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return majorityElement;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));