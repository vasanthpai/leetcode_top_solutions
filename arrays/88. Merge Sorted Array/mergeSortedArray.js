const mergeSortedArray = (num1, m, num2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (num1[i] > num2[j]) {
      num1[k] = num1[i];
      i--;
    } else {
      num1[k] = num2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    num1[k] = num2[j];
    j--;
    k--;
  }

  return num1;
};

console.log(mergeSortedArray([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
