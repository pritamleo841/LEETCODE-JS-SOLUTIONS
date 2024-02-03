/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    /****
    
    1. Initialize a DP array: Initialize a DP array of length n+1 (n being the length of the input array) with all zeros. 
    This DP array will store the maximum sum achievable up to each index. 
    The reason for having n+1 elements is to conveniently handle the base case where no elements have been considered yet (i.e., dp[0] = 0).

    2. Iterating Through the Array: For each element in the array (from the first to the last), 
    determine the maximum sum achievable up to that point. 
    This involves considering all possible partition sizes up to k that could end at the current element.

    3. Considering All Partitions Up to Size k: For each element i, look back up to k elements to find the partition that maximizes the sum. 
    This step involves two sub-steps:

    4. Finding the maximum value in the current partition (max), 
    which will be used to update all elements in the partition to this value.

    5.Calculating the maximum sum for the current partition by adding the product of the maximum value (max) 
    and the partition size (j) to the maximum sum achievable before this partition started (dp[i-j]).

    6. Updating the DP Array: Update dp[i] with the maximum sum achievable by including the current element in a partition. This is done by comparing the sum calculated for each possible partition size and choosing the maximum.

    7. Result: After filling the DP array, the maximum sum after partitioning the array is found at dp[n], which accounts for the entire array.
    */
    let n = arr.length;
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        let max = 0;
        let maxSum = 0;
        for (let j = 1; j <= k && i - j >= 0; j++) {
            max = Math.max(max, arr[i - j]);
            maxSum = Math.max(maxSum, dp[i - j] + max * j);
        }
        dp[i] = maxSum;
    }
    return dp[n];
};