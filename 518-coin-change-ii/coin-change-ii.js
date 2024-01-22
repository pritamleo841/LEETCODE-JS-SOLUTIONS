/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    /**
        To find the solution in an optimized manner, 
        we use a one-dimensional array, dp, of size amount + 1, 
        where dp[i] represents the number of ways to make up the amount i
        using the coins considered so far.

        1.Initialize dp with all zeros and set dp[0] to 1 
        since there's only one way to make up amount 0, 
        which is by not choosing any coin.

        2.For each coin in coins, 
        update the array dp from the coin value to the total amount.

        3.For each amount i from the coin value to the total amount, 
        increment dp[i] by dp[i - coin_value].

        4.The final answer will be dp[amount].
    
     */
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    
    for (let coin of coins) {
        for (let j = coin; j <= amount; j++) {
            dp[j] += dp[j - coin];
        }
    }        
    return dp[amount];
};