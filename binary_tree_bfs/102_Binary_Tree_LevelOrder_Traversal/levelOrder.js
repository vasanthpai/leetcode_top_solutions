const levelOrder = (root) => {
  if (!root) return [];
  const res = [];
  let q = [root];
  while (q.length) {
    let count = 0;
    const length = q.length,
      subarray = [];
    while (count < length) {
      const node = q.shift();
      subarray.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
      count++;
    }
    res.push(subarray);
  }
  return res;
};
