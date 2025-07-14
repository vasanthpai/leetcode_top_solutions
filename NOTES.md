# 🧠 Logic Notes

This file is a **quick-reference summary** of problem-solving logic for problems you've completed. No code here — just logic patterns to refresh before solving, practicing, or interviewing.

---

## 📦 Array & Hashing


### ✅ 88. Merge Sorted Array
- Merge two sorted arrays (`nums1` and `nums2`) **into `nums1` in-place**.
- Use **three pointers**:
  - `i` → end of actual elements in `nums1` (`m - 1`)
  - `j` → end of `nums2` (`n - 1`)
  - `k` → end of total length (`m + n - 1`)
- Compare elements from the back:
  - If `nums1[i] > nums2[j]`, place `nums1[i]` at `k`
  - Else place `nums2[j]` at `k`
  - Move pointers accordingly
- After loop, copy any remaining `nums2` elements (if any) into `nums1`.

---

### ✅ 27. Remove Element
- Use **two pointers** to overwrite values equal to `val`.
- Maintain a `write index (index)` to store valid elements.
- For each element in `nums`:
  - If `nums[i] !== val`, assign `nums[index] = nums[i]` and increment `index`.
- Return `index` as the new length of the array.

---

### ✅ 26. Remove Duplicates from Sorted Array
- Use **two pointers** to remove duplicates in-place.
- `index` points to the position to write the next unique element.
- Traverse the array from left to right:
  - If `nums[i] !== nums[i - 1]`, assign `nums[index] = nums[i]`, and increment `index`.
- Return `index` as the new length.

---

## 🔍 Binary Search

### ✅ 35. Search Insert Position
- Use binary search to find the **index of the target**.
- If target exists in `nums`, return its index.
- If not found, return the index where it would be **inserted** to maintain order.
- Start with two pointers: `start = 0`, `end = nums.length - 1`
  - If `nums[mid] < target`, move `start = mid + 1`
  - If `nums[mid] > target`, move `end = mid - 1`
- Loop exits when `start > end`. The correct insert index is `start`.

---

### ✅ 268. Missing Number
- Find the missing number in `[0...n]` range.
- Use the formula:  
  \[
  \text{Expected sum} = \frac{n(n+1)}{2}
  \]
- Subtract the sum of elements in the array.
- Result is the missing number.

---

### ✅ 633. Sum of Square Numbers
- Check if `c = a^2 + b^2` for integers `a`, `b`.
- Use two pointers:  
  - `left = 0`, `right = floor(sqrt(c))`
  - If `sum == c` → return `true`
  - If `sum < c` → move `left++`
  - If `sum > c` → move `right--`
- Loop ends when `left > right`

---

### ✅ 153. Find Minimum in Rotated Sorted Array
- Use binary search to find the **inflection point** (min value).
- Check:
  - If `nums[mid] > nums[right]` → minimum is in right half.
  - Else → minimum is in left half (including `mid`).
- Loop until `left == right` → return `nums[left]`

---

## 🔙 Backtracking

### ✅ 39. Combination Sum
- Use **backtracking** to explore all unique combinations that sum to the target.
- Each candidate number can be used **unlimited times**.

- Recursive function `backtrack(start, path, sum)`:
  - `start`: index to begin exploration (ensures no reordering)
  - `path`: current combination being built
  - `sum`: current sum of elements in `path`

- Base Cases:
  - If `sum === target`, store a **copy** of `path` in results.
  - If `sum > target`, return (no need to continue).

- Loop from `start` to end of `candidates`:
  - Include `candidates[i]` in the path.
  - Recurse with updated `sum` and same `i` (since reuse is allowed).
  - After recursion, **backtrack** by removing last element from `path`.

---

### ✅ 40. Combination Sum II
- Use **backtracking** to find all unique combinations that sum to the target.
- Each number in `candidates` can be used **at most once**.
- Input array may contain **duplicates**, so combinations must be unique.

- Sort the `candidates` array:
  - This helps group duplicates together so they can be skipped.

- Recursive function `backtrack(start, path, sum)`:
  - `start`: index to begin exploring candidates.
  - `path`: current combination being built.
  - `sum`: running total of elements in `path`.

- Base Cases:
  - If `sum === target`, store a **copy** of `path` in results.
  - If `sum > target`, stop recursion (prune the path).

- Loop from `start` to end of candidates:
  - Skip duplicate elements at the same level using:
    - `if (i > start && candidates[i] === candidates[i - 1]) continue`
  - Include `candidates[i]` in the path.
  - Recurse with `i + 1` to ensure each number is used only once.
  - After recursion, **backtrack** by removing the last number (`path.pop()`).

---

## ✅ Tips for Review
- Review this file daily or weekly to build intuition.
- Try recalling code in your mind using these logic cues.
- Add comments for edge cases or mistakes you’ve made.

---

Happy learning 🚀
