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

## 📦 Sliding Window

### ✅ 209. Minimum Size Subarray Sum
- Find the minimal length of a contiguous subarray with sum ≥ `target`.
- Use **two pointers** `left` and `right` to represent a sliding window.
- Move `right` forward, adding `nums[right]` to the running `sum`.
- While `sum` is ≥ `target`:
  - Update minimum length with the current window size (`right - left + 1`).
  - Shrink the window from the left by subtracting `nums[left]` and incrementing `left`.
- If no valid subarray found, return `0`.

---

### ✅ 3. Longest Substring Without Repeating Characters
- Use **two pointers** `left` and `right` to represent a sliding window over the string.
- Use a Map to store the last index of each character encountered.
- Move `right` forward, adding characters to the window.
- If a character is already in the Map and its last index is ≥ `left`:
  - Move `left` to `map.get(char) + 1` to avoid duplicates.
- Update the Map with the current character’s latest index.
- Keep track of the maximum window size (`right - left + 1`).
- Return the maximum length found.

---

### ✅ 219. Contains Duplicate II
- Check if there are two **same elements** in the array such that the indices are at most `k` apart.
- Use a **Set as a sliding window** to track the last `k` elements.
- Iterate through the array:
  - If `nums[right]` is already in the Set → a duplicate is found within distance `k` → return `true`.
  - Otherwise, add `nums[right]` to the Set.
  - If the Set's size exceeds `k`, remove `nums[right - k]` to keep the window size at most `k`.
- If no such duplicate is found by the end, return `false`.

---

## 🔑 HashMap

### ✅ 383. Ransom Note
- Goal: Determine if you can construct `ransomNote` using letters from `magazine`.
- Each letter in `magazine` can be used **only once**.
- Use a hash map (object) to **count the frequency** of each character in `magazine`.
  - Loop through `magazine`, incrementing count for each character.
- Then loop through `ransomNote`:
  - If the character is **not in the map** or **count is 0**, return `false`.
  - Otherwise, decrement the character count.
- If all characters are found in sufficient quantity, return `true`.

---

### ✅ 290. Word Pattern
- Goal: Check if a string `s` follows the same **word pattern** as the given `pattern` string.
- Split the string `s` into an array of words.
- If the number of words doesn't match the length of `pattern`, return `false`.
- Use two hash maps:
  - `pattern → word` mapping
  - `word → pattern` mapping
- For each index `i`:
  - If a mapping exists, ensure it's consistent.
  - If no mapping exists, create a new entry in both maps.
- If all mappings are valid, return `true`.

---

### ✅ 1. Two Sum
- Goal: Find two indices `i` and `j` such that `nums[i] + nums[j] === target`.
- Use an object `{}` as a hash map to store numbers and their indices.
- Loop through each element in `nums`:
  - Calculate the difference: `diff = target - nums[i]`
  - If `diff` exists in the map:
    - Return `[map[diff], i]` — the index of the complement and current index.
  - Else, store `nums[i]` in the map with value `i`.
- Guarantees O(n) time by checking for complements in constant time.

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

### ✅ 17. Letter Combinations of a Phone Number
- Given a string of digits from 2 to 9, return all possible letter combinations 
  that the number could represent using the standard phone keypad.

- Use a **digit-to-letter map** to look up letters for each digit.

- Apply **backtracking** to build all possible combinations:
  - Start from index 0 and an empty `path`.
  - For each digit, try every corresponding letter.
  - Add the letter to the current path and recurse to the next digit.
  - Once the path length equals the number of digits, join and store it.
  - Backtrack by removing the last letter to explore other paths.

- Base Case:
  - If `index === digits.length`, a complete combination is found.

- Edge Case:
  - If the input is an empty string, return an empty array (`[]`).

---

### ✅ 77. Combinations
- Use **backtracking** to generate all combinations of `k` numbers from `1` to `n`.
- Each number is used **once**, and combinations are built in **ascending order** to avoid duplicates.

- Recursive function `backtrack(start, path)`:
  - `start`: current number to begin choosing from
  - `path`: current combination under construction

- Base Case:
  - When `path.length === k`, push a **copy** of `path` to results.

- Optimization (Pruning):
  - Loop from `start` to `n - (k - path.length) + 1`
    - Ensures there are enough remaining numbers to complete the combination.
    - Prevents unnecessary recursion.

- For each number `i` in the loop:
  - Add `i` to `path`.
  - Recursively call `backtrack(i + 1, path)` to continue building.
  - Remove the last element to **backtrack** and explore other possibilities.

---

## ✅ Tips for Review
- Review this file daily or weekly to build intuition.
- Try recalling code in your mind using these logic cues.
- Add comments for edge cases or mistakes you’ve made.

---

Happy learning 🚀
