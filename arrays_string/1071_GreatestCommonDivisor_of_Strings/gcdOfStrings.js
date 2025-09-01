const gcdOfStrings = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) return ''

    const gcdLength = gcd(str1.length, str2.length)

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b)
    }

    return str1.substring(0, gcdLength)
}

console.log(gcdOfStrings("ABCABC", "ABC"));     // "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB"));    // "AB"
console.log(gcdOfStrings("LEET", "CODE"));      // ""
console.log(gcdOfStrings("AAAAAA", "AAA"));     // "AAA"