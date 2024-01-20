/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    //sum of all numbers
    const sum = nums.reduce((a, b) => a + b);
    //if sum is odd, not possible to partition the array equally
    if (sum % 2 == 1) return false;
    //target sum for each subset
    const target = sum / 2;
    // Create an array to store the maximum sum that can be achieved 
    //for each possible sum up to the target
    const dp = new Array(target + 1).fill(0);
    // Iterate over each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Iterate backwards from the target sum to the current number
        for (let j = target; j >= nums[i]; j--) {
            // Update the maximum sum that can be achieved at the current sum
            // by either including or excluding the current number
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
    }
    // If the maximum sum at the target is equal to the target itself, 
    //it is possible to partition the array into two equal subsets
    return dp[target] === target;
};