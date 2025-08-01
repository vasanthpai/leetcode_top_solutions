const getRow = (rowIndex) => {
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      row[j] = row[j] + row[j - 1];
    }
  }
  return row;
};

console.log(getRow(3)); // Output: [1, 3, 3, 1]
console.log(getRow(4)); // Output: [1, 4, 6, 4, 1]
