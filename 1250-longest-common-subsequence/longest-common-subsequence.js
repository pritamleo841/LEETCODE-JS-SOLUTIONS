/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    //DP - 2D solution bottom-up approach
    let m = text1.length;
    let n = text2.length;
    let dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0));
    // Two  possible scenarioes:
    // 1. the current char of text1 and text2 does not match
    // 2. the current char of text1 and text2 matches
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(text1[i-1]!=text2[j-1]){
                //check left and top for longer subsequence length
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
            }else{
                //check diagonal for prev longest subsequence length and add 1
                dp[i][j]=1+dp[i-1][j-1];
            }
        }
    }
    return dp[m][n];
};