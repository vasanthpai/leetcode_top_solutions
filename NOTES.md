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

## ✅ Tips for Review
- Review this file daily or weekly to build intuition.
- Try recalling code in your mind using these logic cues.
- Add comments for edge cases or mistakes you’ve made.

---

Happy learning 🚀
