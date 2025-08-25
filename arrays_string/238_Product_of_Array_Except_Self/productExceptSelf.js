const productExceptSelf = (nums) => {
  const n = nums.length;
  let leftProduct = 1;
  let rightProduct = 1;
  let res = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    res[i] *= leftProduct;
    leftProduct *= nums[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    res[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return res;
};

productExceptSelf([1, 2, 3, 4]);
// Output: [24, 12, 8, 6]