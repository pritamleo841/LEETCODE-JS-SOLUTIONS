/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //DP - BOTTOM-UP APPROACH
    let dp = Array(amount+1).fill(Infinity);
    //base case 1: for 0 amount we need 0 coins
    dp[0]=0;
    //For each value from 1...amount
    for(let a=1;a<=amount;a++){
        //take coins one by one from coins array
        for(let c of coins){
            //Update minimum number of needed coins.
            if(a-c>=0){
                dp[a]=Math.min(dp[a],1+dp[a-c]);
            }
        }
    }
    //If the last element is Infinity, then we cannot make the amount
    return dp[amount]!=Infinity?dp[amount]:-1;
    

};