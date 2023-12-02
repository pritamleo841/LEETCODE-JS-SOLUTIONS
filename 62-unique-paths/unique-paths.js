/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //DP - Tabulation Problem
    let dp = new Array(m).fill(0).map(()=>new Array(n).fill(0));
    //Base cases : If we are in last row, i == m-1,
    //we only have the choice to move RIGHT,Hence number of moves will be 1.
    //If we are in last column, j == n-1,
    //we only have the choice to move DOWN,Hence number of moves will be 1.
    for(let i=0;i<m;i++){
        dp[i][0]=1;
    }
    for(let i=0;i<n;i++){
        dp[0][i]=1;
    }
    //A cell (i,j) can be reached either from (i−1,j) or (i,j−1),
    //and thus the number of unique paths to (i,j)
    //is the sum of the number of unique paths to these two cel
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j]=dp[i-1][j]+dp[i][j-1];
        }
    }

    return dp[m-1][n-1];

    /**
    # From start to destination, 
    we need (m-1) ↓ moves and (n-1) → moves
    # Thus, the number of unique paths is the number of permutations 
    of (m-1) down,  and (n-1) right
    # Number of unique paths = ( m-1 + n-1 ) ! / (m-1)! * (n-1)!
    */
};