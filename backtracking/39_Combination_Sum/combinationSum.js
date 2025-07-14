const combinationSum = (candidates, target) => {
  const results = [];

  function backtrack(start, path, sum) {
    if (sum === target) {
      results.push([...path]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, sum + candidates[i]);
      path.pop();
    }
  }

  backtrack(0, [], 0);
  return results;
};

console.log(combinationSum([2, 3, 6, 7], 7));
