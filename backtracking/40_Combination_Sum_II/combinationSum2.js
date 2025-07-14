const combinationSum2 = (candidates, target) => {
  const results = [];
  candidates.sort((a, b) => a - b);

  function backtrack(start, path, sum) {
    if (sum === target) {
      results.push([...path]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      path.push(candidates[i]);
      backtrack(i + 1, path, sum + candidates[i]);
      path.pop();
    }
  }

  backtrack(0, [], 0);
  return results;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
