/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    //we use an offset to help us quickly 
    //calculate the number of 1's for i + 2^k based on i
    let dp = new Array(n+1).fill(0);
    let offset = 1;
    //Iterate from 1 to n .
    //Use an offset variable to keep track of 
    //the nearest lower power of 2. 
    //Update ans[i] = ans[i - offset] + 1
    for(let i=1;i<=n;i++){
        if(offset*2==i){
            offset=i;
        }
        dp[i]=1+dp[i-offset];
    }
    return dp;
    /**
    The idea here is to use the number of 1's in i >> 1 
    (i.e., i divided by 2) and the last bit in i 
    to find the number of 1's in i.
    
    const ans = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
     */
};