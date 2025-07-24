const isPalindrome=(s)=>{
    s=s.toLowerCase().replace(/[^a-z0-9]/g,'')
    let i=0,j=s.length-1
    while(i<j){
        if(s[i]!==s[j]){
            return false
        }
        i++
        j--
    }
    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))