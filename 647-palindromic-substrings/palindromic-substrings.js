/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    //Solution includes check for  odd length and even length 
    //palindromes and counting from start postion to end postion
    //by using EXAPANSION FROM MIDDLE Concept : O(n*n)
    let totalCount = 0;

    const countPalindromes = (l,r)=>{
        let res=0;
        while(l>=0 && r<=s.length && s[l]==s[r]){
            res++;
            l-=1;
            r+=1;
        }
        return res;
    };

    for(let i=0;i<s.length;i++){
        //odd length palindromes
        totalCount+=countPalindromes(i,i);
        //even length palindromes
        totalCount+=countPalindromes(i,i+1);
    }
    return totalCount;

    //LEARN MANACHER'S ALGORITHM to find solution in O(n) time
};