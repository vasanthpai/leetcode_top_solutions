const rightSideView = (root) => {
  const results = [];
  dfs(root, 0, results);
  return results;
};

const dfs = (node, level, results) => {
  if (!node) return;

  if (level >= results.length) {
    results.push(node.val);
  }

  if (node.right) {
    dfs(node.right, level + 1, results);
  }
  if (node.left) {
    dfs(node.left, level + 1, results);
  }
};
