/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    //DP with Memoization -> O(n*n)
    //The longest incresing subsequence at any position is atleast 1
    let dp = new Array(nums.length).fill(1);
    //For each value in nums
    for(let i=1;i<=nums.length;i++){
        //Check if there is any larger value that index position upto index i
        for(let j=0;j<i;j++){
            //The current value at i is greater than the previous value at j.
            //Update the LIS at i if the LIS at j plus 1 is greater than it.
            if(nums[i]>nums[j]){
                dp[i]=Math.max(dp[i],1+dp[j]);
            }
        }
    }
    //Now find the maximum value of dp array for LIS
    return Math.max(...dp);
};