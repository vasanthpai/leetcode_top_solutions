var combine = function (n, k) {
  const results = [];

  function backtrack(start, path) {
    if (path.length === k) {
      results.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(1, []);
  return results;
};

console.log(combine(4, 2));
