const numOfUnplacedFruits = (fruits, baskets) => {
  const n = fruits.length;
  let used = new Array(n).fill(false);
  let unplaced = 0;

  for (let i = 0; i < n; i++) {
    let placed = false;
    for (let j = 0; j < n; j++) {
      if (!used[j] && baskets[j] >= fruits[i]) {
        placed = true;
        used[j] = true;
        break;
      }
    }
    if (!placed) {
      unplaced++;
    }
  }
  return unplaced;
};

// Example usage:
console.log(numOfUnplacedFruits([4, 2, 5], [3, 5, 4])); // Output: 1
console.log(numOfUnplacedFruits([3, 6, 1], [6, 4, 7])); // Output: 0
