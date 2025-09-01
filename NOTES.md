# 🧠 Logic Notes

This file is a **quick-reference summary** of problem-solving logic for problems you've completed. No code here — just logic patterns to refresh before solving, practicing, or interviewing.

---

## 📦 Array & String


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

### ✅ 169. Majority Element

- Use the **Boyer-Moore Voting Algorithm** to find the majority element in linear time and constant space.
- Maintain:
  - `majorityElement`: current candidate for the majority.
  - `count`: tracks how confident we are in the current candidate.
- Traverse the array:
  - If `count === 0`, assign `majorityElement = nums[i]` and set `count = 1`.
  - Else if `nums[i] === majorityElement`, increment `count`.
  - Else, decrement `count`.
- This works under the assumption that a majority element **always exists** (appears more than ⌊n/2⌋ times).

---

### ✅ 121. Best Time to Buy and Sell Stock

- Goal: Find the maximum profit from one buy-sell transaction.
- Key insight: Track the lowest price seen so far to calculate potential profit at each step.
- Maintain:
  - `minPrice`: the smallest price encountered so far.
  - `maxProfit`: the maximum profit achievable up to the current day.
- Traverse the price array:
  - Update `minPrice` if the current price is lower than the recorded `minPrice`.
  - Calculate the current profit as `currentPrice - minPrice`.
  - Update `maxProfit` if the current profit is greater than the recorded `maxProfit`.
- Return `maxProfit` after processing all prices.
- Time Complexity: O(n), Space Complexity: O(1).

---

### ✅ 189. Rotate Array

- Goal: Rotate an array to the right by `k` steps.
- Key insight: Rotating by `k` steps can be achieved by reversing parts of the array.
- Approach:
  - Compute `n = k % nums.length` to handle cases where `k` is larger than the array length.
  - Reverse the entire array.
  - Reverse the first `n` elements.
  - Reverse the remaining elements from `n` to the end.
- This sequence of reversals shifts the elements correctly to the right.
- Maintain:
  - An in-place `reverse` helper function to reverse elements between indices `start` and `end`.
- Steps breakdown:
  - Reverse full array: `[1,2,3,4,5,6,7]` → `[7,6,5,4,3,2,1]`
  - Reverse first `n` elements: `[7,6,5]` → `[5,6,7]` → `[5,6,7,4,3,2,1]`
  - Reverse remaining elements: `[4,3,2,1]` → `[1,2,3,4]` → `[5,6,7,1,2,3,4]`
- Time Complexity: O(n), Space Complexity: O(1) — in-place operations with no extra array.

---

### ✅ 151. Reverse Words in a String

- Goal: Reverse the order of words in a given string `s`.
- Key steps:
  - Trim leading and trailing whitespace using `trim()`.
  - Split the string into words using `split(/\s+/)`, which handles multiple spaces.
  - Reverse the array of words **in-place** using a two-pointer approach.
  - Join the reversed words back into a string separated by a single space.
- Details of reversing:
  - Use two pointers, `start` and `end`.
  - Swap the words at these indices and move pointers towards the center.
  - Continue until pointers meet or cross.
- Return the resulting string with reversed word order.
- Time Complexity: O(n), where n is the length of the string.
- Space Complexity: O(n) due to splitting the string into words.

---

### ✅ 12. Integer to Roman

- **Goal**: Convert an integer `num` (1–3999) to its Roman numeral form.

- **Approach**:
  - Use two arrays:  
    - `val`: Decimal values in descending order.  
    - `symbol`: Corresponding Roman numerals.
  - Loop through `val`:
    - While `num >= val[i]`, subtract and append `symbol[i]` to the result.

- **Example** (`3749`):  
  → `MMM` (3000) + `DCC` (700) + `XL` (40) + `IX` (9)  
  → `"MMMDCCXLIX"`

- **Time/Space Complexity**: O(1) — arrays are fixed size.

---

### ✅ 118. Pascal's Triangle
- Generate the first `numRows` of **Pascal's Triangle**.
- Use the **previous row** to build the current row:
  - First and last elements are `1`.
  - Other elements: `row[j] = previous_row[j-1] + previous_row[j]`.
  
#### Approach:
1. Initialize `results[]` to store rows.
2. For each row:
   - Create it with `1`s.
   - Update middle values using the formula above.
3. Return `results`.

---

### ✅ 119. Pascal's Triangle II
- Return the **rowIndex-th** row of Pascal’s Triangle.
- **Update in-place** to save space.

#### Approach:
1. Initialize `row[]` of size `rowIndex + 1`, with the first element as `1`.
2. Update values from right to left:
   - `row[j] = row[j] + row[j-1]`.
3. Return `row[]`.

---

### ✅ 3477. Fruits Into Baskets II (Topics - ["Greedy", "Greedy Assignment", "Resource Allocation", "Array Traversal"];)
- Given two arrays: `fruits` (quantities) and `baskets` (capacities).
- Goal: Place each fruit type into the **leftmost available basket** that can hold it.
- Maintain a boolean array `used` to track which baskets are already assigned.
- For each fruit in order:
  - Iterate over baskets from left to right.
  - If a basket is **not used** and its capacity is **≥ fruit quantity**, assign the fruit here:
    - Mark the basket as used.
    - Stop searching for this fruit (break).
  - If no suitable basket is found, increment `unplaced` count.
- Return the total count of `unplaced` fruits after all attempts.

---

### ✅ 345. Reverse Vowels of a String
- Goal: Reverse only the vowels in a given string `s`.
- Use two pointers (`i` from start, `j` from end).
- Store vowels in a `Set` for quick lookup.
- While `i < j`:
  - Move `i` forward until it finds a vowel.
  - Move `j` backward until it finds a vowel.
  - Swap the characters at `i` and `j`.
  - Move both pointers inward.
- Return the modified string as a result.

---

### ✅ 2348. Number of Zero-Filled Subarrays
- Use a **single pass** to count subarrays made up of only zeros.
- Maintain:
  - `consecutiveZeros` to track length of current zero streak.
  - `count` to accumulate total zero-filled subarrays.
- For each number in `nums`:
  - If it's `0`, increment `consecutiveZeros` and add it to `count`.
    - This accounts for all new subarrays ending at that zero.
  - If it's not `0`, reset `consecutiveZeros` to `0`.
- Return `count` as the total number of zero-filled subarrays.

---

### ✅ 1768. Merge Strings Alternately
- Use a **single loop** to iterate over both strings simultaneously.
- Initialize an empty string `merged` and an index `i = 0`.
- Loop while `i` is less than the length of either string.
  - If `i < word1.length`, append `word1[i]` to `merged`.
  - If `i < word2.length`, append `word2[i]` to `merged`.
  - Increment `i` after each iteration.
- Return the `merged` string as the result.

---

### ✅ 238. Product of Array Except Self
- Use **two passes** to compute products without using division.
- Initialize result array `res` with 1s.
- **First pass (left to right)**:
  - Maintain `leftProduct` and update `res[i] *= leftProduct`.
  - Multiply `leftProduct *= nums[i]` after each step.
- **Second pass (right to left)**:
  - Maintain `rightProduct` and update `res[i] *= rightProduct`.
  - Multiply `rightProduct *= nums[i]` after each step.
- Final `res[i]` contains product of all elements **except** `nums[i]`.

---

### ✅ 1071. Greatest Common Divisor of Strings
- Check if `str1 + str2 === str2 + str1` to ensure both strings share a common base pattern.
- If not equal, return an empty string (`""`) – no common divisor.
- Use **Euclidean algorithm** to find the GCD of `str1.length` and `str2.length`.
- Return `str1.substring(0, GCD)` as the greatest common divisor string.

---

### ✅ 1431. Kids With the Greatest Number of Candies
- Find the **maximum candies** any kid currently has using `Math.max`.
- Iterate through each kid's candies:
  - Check if `candies[i] + extraCandies >= max`.
  - If true, that kid **can have the greatest number** of candies.
- Return a boolean array representing whether each kid can reach or exceed the max.

---

## 🧭 Two Pointers 

### ✅ 125. Valid Palindrome
- Determine if a string is a **valid palindrome**, considering **only alphanumeric characters** and ignoring case.
- Use **two pointers**:
  - `i` → starts from the beginning of the cleaned string
  - `j` → starts from the end of the cleaned string
- Steps:
  1. Normalize the string:
     - Convert to lowercase
     - Remove all non-alphanumeric characters using regex: `/[^a-z0-9]/g`
  2. Initialize two pointers: `i = 0`, `j = s.length - 1`
  3. While `i < j`:
     - If `s[i] !== s[j]`, return `false` (not a palindrome)
     - Else, move inward: `i++`, `j--`
  4. If loop completes, return `true` (it is a palindrome)

---

### ✅ 392. Is Subsequence
- Check if string `s` is a **subsequence** of string `t`.
- A subsequence means all characters of `s` appear in `t` **in order**, but not necessarily contiguously.
- Use **two pointers**:
  - `i` → tracks characters in `s`
  - `j` → scans through `t`

- Steps:
  1. Initialize pointers: `i = 0`, `j = 0`
  2. While `i < s.length` and `j < t.length`:
     - If `s[i] === t[j]`, move both: `i++`, `j++`
     - Else, just move `j++` (skip unmatched char in `t`)
  3. If `i === s.length`, return `true` (all chars in `s` matched in order)
  4. Otherwise, return `false`

---

### ✅ 344. Reverse String
- Reverse a character array **in-place** using `O(1)` extra memory.
- A two-pointer approach efficiently swaps characters from both ends.

- Use **two pointers**:
  - `i` → starts at the beginning of the array
  - `j` → starts at the end of the array

- Steps:
  1. Initialize: `i = 0`, `j = s.length - 1`
  2. While `i < j`:
     - Swap `s[i]` and `s[j]`
     - Move inward: `i++`, `j--`
  3. When pointers meet or cross, the array is fully reversed

---

### ✅ 75. Sort Colors
- Sort an array `nums` containing only `0`, `1`, and `2` **in-place**.
- Must be done in **one pass** using **O(1)** space.

- Key Idea:
  - Use the **Dutch National Flag Algorithm** with three pointers:
    - `low` → position to place the next `0`
    - `mid` → current element being evaluated
    - `high` → position to place the next `2`

- Steps:
  1. Initialize: `low = 0`, `mid = 0`, `high = nums.length - 1`
  2. While `mid <= high`:
     - If `nums[mid] === 0`:
       - Swap `nums[low]` and `nums[mid]`
       - Increment both `low` and `mid`
     - Else if `nums[mid] === 1`:
       - Just increment `mid`
     - Else (`nums[mid] === 2`):
       - Swap `nums[mid]` and `nums[high]`
       - Decrement `high` (don't move `mid` yet)

---

### ✅ 167. Two Sum II - Input Array Is Sorted
- Use the **two-pointer** approach since the array is sorted in non-decreasing order.
- Initialize:
  - `left = 0` (start of array)
  - `right = nums.length - 1` (end of array)
- While `left < right`:
  - Compute `sum = nums[left] + nums[right]`
  - If `sum === target`, return `[left + 1, right + 1]` (convert to 1-based index)
  - If `sum < target`, increment `left` (move toward larger numbers)
  - If `sum > target`, decrement `right` (move toward smaller numbers)
- No need for a fallback return, since the problem guarantees one solution.

---

### ✅ 283. Move Zeroes
- Given an integer array `nums`, move all `0`'s to the end of it while maintaining the **relative order** of the non-zero elements.
- **Step 1:** Initialize a pointer `j = 0` to track the position where the next non-zero element should be placed.
- **Step 2:** Loop through the array with index `i`:
  - If `nums[i] !== 0`, swap `nums[i]` with `nums[j]`.
  - Increment `j` to move to the next available slot.
- **Step 3:** Continue this process to shift all non-zero elements to the front.
  - Zeroes are automatically pushed to the end due to the swaps.
- **Note:** The array is modified **in-place** with `O(n)` time and `O(1)` space complexity.

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

### ✅ 643. Maximum Average Subarray I
- Given an array `nums` and integer `k`, find the **maximum average** of any contiguous subarray of length `k`.
- **Step 1:** Compute the sum of the first `k` elements — this is the initial window.
- **Step 2:** Slide the window through the array:
  - Subtract the element leaving the window.
  - Add the new element entering the window.
  - Update the maximum sum seen so far.
- **Step 3:** Return `maxSum / k` as the maximum average.

---

### ✅ 904. Fruit Into Baskets

- Use the **Sliding Window** approach to find the longest subarray with at most **2 distinct fruit types**.
- Track:
  - `left`: window start
  - `basket`: Map of fruit counts
  - `maxLen`: longest valid window seen
- For each `right` index:
  - Add `fruits[right]` to the basket.
  - While `basket.size > 2`, shrink the window from the left.
- Update `maxLen` after each step.

---

### ✅ 1004. Max Consecutive Ones III
- Find the maximum number of consecutive 1s in the array if you can flip at most `k` 0s.
- Use a **sliding window** with two pointers: `left` and `right`.
- Iterate through the array with `right`, expanding the window.
- If the current number is `0`, increment the `zeros` counter (count of 0s in the window).
- While the number of zeros exceeds `k`:
  - Shrink the window from the left until it becomes valid (i.e., `zeros <= k`).
  - If `nums[left]` is `0`, decrement `zeros` as it’s leaving the window.
  - Move `left` pointer forward.
- After each iteration, calculate the current valid window size (`right - left + 1`) and update the maximum length found.
- Return the maximum valid window size found by the end of the array.

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

### ✅ 242. Valid Anagram
- Goal: Check if strings `s` and `t` are anagrams (same characters, same counts).
- If lengths differ, return `false`.
- Use a hash map to count character frequency in `s`.
- Loop through `t`:
  - If a character is missing or overused (count is 0), return `false`.
  - Otherwise, decrement the count.
- If all characters match in frequency, return `true`.

---

## 📏 Intervals

### ✅ 228. Summary Ranges
- Given a sorted array of unique integers, summarize consecutive numbers into **range strings**.
- Use two pointers: `start` marks the beginning of the current range.
- Loop through the array using `i`:
  - If it's the **last element** or `nums[i] + 1 !== nums[i + 1]`, the current range ends.
    - If `start === i`, it's a single number → push `nums[i]`
    - Otherwise, push the range `nums[start]->nums[i]`
  - Update `start = i + 1` to begin tracking the next range.
- Continue until the end of the array and return the resulting list of ranges.

---

### ✅ 56. Merge Intervals
- Given an array of intervals `[start, end]`, merge all overlapping intervals.
- **Step 1:** Sort the intervals based on their start time.
- **Step 2:** Initialize an empty array `merged` to store merged intervals.
- **Step 3:** Loop through each `interval` in the sorted array:
  - If `merged` is empty or the current `interval` does **not** overlap with the last interval in `merged` (i.e., `merged[-1][1] < interval[0]`), push the current `interval` to `merged`.
  - Otherwise, there is overlap. Merge the current `interval` with the last interval in `merged` by updating the end value to the maximum of both ends.
- **Step 4:** Continue until all intervals are processed.
- **Step 5:** Return the `merged` array containing the non-overlapping intervals.

---

### ✅ 57. Insert Interval
- Given a list of **non-overlapping, sorted intervals** and a new interval.
- The goal is to **insert the new interval** and **merge any overlapping intervals**.
- Initialize an empty result array and a pointer `i = 0`.

- Step 1: Add all intervals that come **before** the newInterval (no overlap).
  - While intervals[i].end < newInterval.start:
    - Add intervals[i] to the result.
    - Move to the next interval.

- Step 2: Merge all intervals that **overlap** with newInterval.
  - While intervals[i].start <= newInterval.end:
    - Update newInterval.start = min(newInterval.start, intervals[i].start)
    - Update newInterval.end = max(newInterval.end, intervals[i].end)
    - Move to the next interval.

- Step 3: Push the **merged newInterval** into the result.

- Step 4: Add all remaining intervals (those that come **after** newInterval).
  - While there are remaining intervals:
    - Add intervals[i] to the result.
    - Move to the next interval.

- Return the result array.

---

### ✅ 435. Non-overlapping Intervals
- Given an array of intervals `[start, end]`, return the **minimum number of intervals to remove** so the rest are **non-overlapping**.
- **Goal:** Keep as many non-overlapping intervals as possible (then subtract from total to get removals).
- **Strategy:**
  - **Sort** the intervals by their **end time** in ascending order — this helps us always pick the interval that finishes earliest (greedy).
  - Initialize:
    - `count = 0` → tracks how many intervals are removed.
    - `prevEnd = intervals[0][1]` → stores the end of the last kept interval.
- **Loop through** the remaining intervals:
  - For each `[start, end]`:
    - If `start < prevEnd`, it **overlaps** → increment `count`.
    - Else, it's non-overlapping → update `prevEnd = end`.
- After the loop, `count` holds the number of intervals we had to remove.
- Time complexity: `O(n log n)` due to sorting. Space: `O(1)`.

---

## 🧺 Stack

### ✅ 20. Valid Parentheses
- Determine if a string has **valid parentheses/bracket pairing**: `()`, `{}`, `[]`.
- Use a **stack** to track **opening brackets**.
- Use a **map (object)** to match **closing brackets** to their respective opening ones.

- Steps:
  1. Initialize an empty stack: `stack = []`
  2. Define bracket pairs:  
     ```js
     const pairs = { ')': '(', ']': '[', '}': '{' };
     ```
  3. Loop through each character in the string:
     - If it's a **closing bracket** (`)`, `]`, or `}`):
       - Check if the **top of the stack** matches the corresponding opening bracket
       - If not, return `false`
     - If it's an **opening bracket**, push it onto the stack
  4. After the loop:
     - If the stack is **empty**, all brackets matched → return `true`
     - If not, there are unmatched brackets → return `false`

---

### ✅ 1021. Remove Outermost Parentheses
- Goal: Remove the **outermost parentheses** from every **primitive** valid parentheses substring.
- A **primitive** is a smallest non-empty valid parentheses substring that cannot be split further.

- Use a **depth counter** to track the current level of nesting.

- Steps:
  1. Initialize an empty string to store the result.
  2. Set a `depth` variable to 0 to track how deep inside nested parentheses you are.
  3. Iterate through each character in the input string:
     - If the character is `'('`:
       - If `depth > 0`, it means it's **not outermost**, so include it in the result.
       - Increment the `depth` counter.
     - If the character is `')'`:
       - Decrement the `depth` counter first.
       - If `depth > 0` **after decrement**, it means it's **not outermost**, so include it in the result.
  4. Return the final string after the loop ends.

- Key idea:
  - The **outermost parentheses** of a primitive are the first `'('` when `depth == 0` and the matching `')'` when `depth == 1`. These are skipped.
  - All inner parentheses are preserved.

---

## 🔗 Linked List

### ✅ 206. Reverse Linked List
- Use **three pointers**: `prev`, `current`, and `next`.
- Initialize `prev = null`, `current = head`.
- While `current` is not null:
  - Store `current.next` in `next`.
  - Reverse the link: `current.next = prev`.
  - Move `prev` and `current` one step forward.
- Return `prev` as the new head of the reversed list.

---

### ✅ 92. Reverse Linked List II
- Use **pointers** to find the sublist between `left` and `right`.
- Track:
  - `start`: node before the sublist
  - `tail`: first node of the sublist (becomes tail after reverse)
  - `current`: node being processed
- Reverse the sublist by:
  - Iteratively moving `current.next` to the front of a new list (`newList`)
- Reconnect:
  - `start.next = newList`
  - `tail.next = current` (remaining list)
- Return `head`, or `newList` if `left === 1` (reversed from head)

```js
// Time: O(n)
// Space: O(1)
```
---

### ✅ 430. Flatten a Multilevel Doubly Linked List
- **Goal**: Flatten a multilevel doubly linked list so that all the nodes appear in a single-level doubly linked list in depth-first order.
- Use a `while` loop to traverse the list starting from the `head`.
- At each node:
  - If `child === null`, simply move to `next`.
  - If `child !== null`:
    - Find the **tail** of the child list (`tail.next === null`).
    - Connect `tail.next` to `currentNode.next` (if it exists).
    - If `currentNode.next` exists, update its `prev` to point to `tail`.
    - Set `currentNode.next` to `currentNode.child`.
    - Set `currentNode.child.prev` to `currentNode`.
    - Nullify `currentNode.child`.
    - Move `currentNode` forward to continue flattening.
- Repeat until all nodes are visited.
- Return the `head` of the flattened list.

---

### ✅ 142. Linked List Cycle II
- Use **Floyd’s Tortoise and Hare algorithm** to detect a cycle.
- Initialize two pointers: `slow` and `fast`, both at `head`.
- Move `slow` by 1 step and `fast` by 2 steps in a loop:
  - If `fast` or `fast.next` becomes `null`, there is **no cycle**.
  - If `slow === fast`, a **cycle is detected**.
- To find the **starting node** of the cycle:
  - Initialize two pointers: `p1 = head` and `p2 = meeting point (fast)`.
  - Move both `p1` and `p2` one step at a time.
  - The node where they meet is the **start of the cycle**.
- Return that node.

---

## 🌳 Binary Tree

### ✅ 104. Maximum Depth of Binary Tree
- Find the maximum depth of a binary tree using recursion.
- Steps:
  1. If the node is `null`, return 0.
  2. Recursively find the max depth of the left subtree.
  3. Recursively find the max depth of the right subtree.
  4. Return the maximum of the two depths plus 1.

---

### ✅ 199(a). Binary Tree Right Side View (BFS)
- Return the value of the rightmost node at each level of a binary tree.
- Use BFS traversal with a queue.
- Steps:
  1. Return [] if root is null.
  2. Push root to queue.
  3. While queue is not empty:
     - Track the number of nodes at the current level.
     - Traverse each node and enqueue its children.
     - The last node in the level is the rightmost one.
     - Push its value to result array.
  4. Return the result.

---

### ✅ 199(b). Binary Tree Right Side View (DFS)
- Capture the rightmost node at each level using DFS.
- Traverse right children before left.
- Steps:
  1. Define a helper `dfs(node, level, results)`.
  2. If node is null, return.
  3. If level equals results.length, push node.val.
  4. Recurse right, then recurse left.
  5. Return the results array.

---

### ✅ 222. Count Complete Tree Nodes
- Count the number of nodes in a **complete binary tree** efficiently using binary search.
- Time Complexity: `O(log² N)`
- Steps:
  1. If the root is `null`, return `0`.
  2. Compute the **height** of the tree by walking down the **leftmost path**.
     - If the height is `0`, return `1` (only the root exists).
  3. Compute the number of nodes in the full levels above the last using:
     - `upper = (2^height) - 1`
  4. Use **binary search** on the range `[0, upper]` to count nodes in the last level:
     - While `left <= right`:
       - Set `mid = floor((left + right) / 2)`
       - Use `nodeExist(mid, height, root)` to check if the node exists at that position:
         - Simulate binary path traversal from the root to the last level.
         - Decide direction (`left` or `right`) based on the index at each level.
         - Return `true` if the node exists at the position.
       - If it exists, search the **right half**: `left = mid + 1`
       - Else, search the **left half**: `right = mid - 1`
  5. Return `upper + left` as the total node count.
     - `left` will be the count of existing nodes on the last level.

---

### ✅ 98. Validate Binary Search Tree
- Use DFS with `min` and `max` bounds to validate the BST property.
- For each node, ensure: `min < node.val < max`.
- Steps:
  1. Define a helper `dfs(node, min, max)`.
  2. If node is null, return true.
  3. If `node.val <= min` or `node.val >= max`, return false.
  4. Recursively validate left subtree with updated max (`node.val`).
  5. Recursively validate right subtree with updated min (`node.val`).
  6. Return true if both subtrees are valid.

---

## 🌴 Binary Tree BFS

### ✅ 102. Binary Tree Level Order Traversal
- Traverse the binary tree level by level using BFS.
- Use a queue to process nodes level by level.
- Steps:
  1. Return [] if root is null.
  2. Push root into queue.
  3. While queue has nodes:
     - For each node at current level:
       - Dequeue it and store its value.
       - Enqueue its left and right children if they exist.
     - Push level values to result array.
  4. Return result.

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

### ✅ Find Peak Element
- Use **binary search** to efficiently locate any peak element.
- A **peak element** is one that is **greater than its neighbors**.
- Initialize two pointers: `left = 0`, `right = nums.length - 1`.
- While `left < right`:
  - Compute `mid = Math.floor((left + right) / 2)`.
  - If `nums[mid] > nums[mid + 1]`, then:
    - A peak lies on the **left side (including mid)** → set `right = mid`.
  - Else:
    - A peak lies on the **right side** → set `left = mid + 1`.
- When `left === right`, you've found a peak → return `left` (or `right`).
- Time complexity: **O(log n)** due to binary search.

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
