/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s,i=0,memo={}) {
    //DP MEMOIZATION SOLUTION USING RECURSION
    //base case 1
    if (i in memo) return memo[i];
    //base case 2 where a string starts with 0
    if (s[i] === '0') return 0;
    //base case 3 , if i exceeded string length
    if (i>=s.length-1) return 1;
    //go for i+1 character always[10-19] whereas 
    //if s[i] + s[i + 1]<27 then only go for i+2 character[20-26]
    memo[i] = numDecodings(s,i+1,memo) + (s[i]+s[i+1]<27?numDecodings(s,i+2,memo):0);
    return memo[i];

    // //DP SOLUTION USING LOOP
    // //Edge case 1
    // if (s == null || s.length === 0) return 0;
    // //Edge case 2
    // if (s[0] === '0') return 0;
    // //Create dp cache
    // const dp = new Array(s.length + 1).fill(0);
    // //Assign initial variables
    // dp[0] = 1;
    // dp[1] = 1;
    // //Loop through second character of string through string length
    // for (let i = 2; i <= s.length; i++) {
    //     const a = Number(s.slice(i - 1, i));  // last one digit
    //     if (a >= 1 && a <= 9) {
    //     dp[i] += dp[i - 1];
    //     }

    //     const b = Number(s.slice(i - 2, i));  // last two digits
    //     if (b >= 10 && b <= 26) {
    //     dp[i] += dp[i - 2];
    //     }
    // }
    // return dp[s.length];
};