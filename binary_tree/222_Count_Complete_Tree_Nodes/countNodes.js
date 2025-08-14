const countNodes = (root) => {
  if (!root) return 0;
  const height = getHeight(root);
  if (height === 0) return 1;
  const upper = Math.pow(2, height) - 1;
  let left = 0,
    right = upper;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nodeExist(mid, height, root)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return upper + left;
};

const getHeight = (node) => {
  let height = 0;
  while (node.left !== null) {
    node = node.left;
    height++;
  }
  return height;
};

const nodeExist = (index, height, root) => {
  let left = 0,
    right = Math.pow(2, height) - 1,
    count = 0;
  while (count < height) {
    const mid = Math.floor((left + right) / 2);
    if (index <= mid) {
      root = root.left;
      right = mid;
    } else {
      root = root.right;
      left = mid + 1;
    }
    count++;
  }
  return root !== null;
};
