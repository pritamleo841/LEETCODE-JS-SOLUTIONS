/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //Classic Kadene's Algorithm to find max contigous subarray
    let currSum = maxSumSoFar = nums[0];
    for(let i=1;i<nums.length;i++){
        //Always pick the maximum number between currentSum and currentNumber
        currSum = Math.max(nums[i],currSum+nums[i]);
        //Set MaxSum when current max is > MaxSum
        maxSumSoFar = Math.max(maxSumSoFar,currSum);
    }
    return maxSumSoFar;

    /***
    -------SMART DP SOLUTION := DP[i] = max(DP[i-1] + arr[i] , arr[i] )-------
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        max = Math.max(nums[i], max);
    }
    return max;
    */
};