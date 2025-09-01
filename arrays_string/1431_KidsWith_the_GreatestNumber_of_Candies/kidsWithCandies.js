const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies)

    return candies.map(candy => candy + extraCandies >= max)
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
// Output: [true, true, true, false, true]

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
// Output: [true, false, false, false, false]