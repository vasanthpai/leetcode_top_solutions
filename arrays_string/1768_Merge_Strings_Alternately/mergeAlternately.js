const mergeAlternately = (word1, word2) => {
    let merged = ''
    let i = 0
    while (i < word1.length || i < word2.length) {
        if (i < word1.length) merged += word1[i]
        if (i < word2.length) merged += word2[i]
        i++
    }
    return merged
}

console.log(mergeAlternately("abc", "pqr"));    // "apbqcr"
console.log(mergeAlternately("ab", "pqrs"));    // "apbqrs"
console.log(mergeAlternately("abcd", "pq"));    // "apbqcd"