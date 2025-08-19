const zeroFilledSubarray = (nums) => {
  let count = 0,
    contZeros = 0;
  for (let num of nums) {
    if (num === 0) {
      contZeros++;
      count += contZeros;
    } else {
      contZeros = 0;
    }
  }
  return count;
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4])); // Output: 6
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0])); // Output: 9