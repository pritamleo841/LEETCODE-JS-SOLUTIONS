/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s,i=0,memo={}) {
    //base case 1
    if (i in memo) return memo[i];
    //base case 2 where a string starts with 0
    if (s[i] === '0') return 0;
    //base case 3 , if i exceeded string length
    if (i >= s.length - 1) return 1;
    //go for i+1 character always[10-19] whereas if s[i] + s[i + 1]<27 then only go for i+2 character[20-26]
    memo[i] = numDecodings(s, i + 1, memo) + (s[i] + s[i + 1] < 27 ? numDecodings(s, i + 2, memo) : 0);
    return memo[i];
};