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
};