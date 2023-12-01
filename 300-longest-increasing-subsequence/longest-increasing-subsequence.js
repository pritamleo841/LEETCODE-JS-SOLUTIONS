/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // //DP with Memoization -> O(n*n)
    // //The longest incresing subsequence at any position is atleast 1
    // let dp = new Array(nums.length).fill(1);
    // //For each value in nums
    // for(let i=1;i<=nums.length;i++){
    //     //Check if there is any larger value that index position upto index i
    //     for(let j=0;j<i;j++){
    //         //The current value at i is greater than the previous value at j.
    //         //Update the LIS at i if the LIS at j plus 1 is greater than it.
    //         if(nums[i]>nums[j]){
    //             dp[i]=Math.max(dp[i],1+dp[j]);
    //         }
    //     }
    // }
    // //Now find the maximum value of dp array for LIS
    // return Math.max(...dp);

    /**
    BEAUTIFUL SOLUTION WITH Greedy with Binary Search -> O(nlogn)
    We need to keep different sub arrays (sub1, sub2..., subk) which causes poor performance.
    But we notice that we can just keep one sub array, when new number x is not greater than the last element of the subsequence sub,
    we do binary search to find the smallest element >= x in sub, and replace with number x.
*/
    const binarySearch = (array, currVal) => {
        let left = 0; 
        let right = array.length - 1; 
        while (left <= right){
            let mid = Math.floor((left+right)/2);
            if(array[mid] < currVal){
                left = mid+1;
            } else {
                right = mid -1
            }
        }
        return left;
    };
    const sub = [nums[0]];
    for(let i=1;i<nums.length;i++){
        const currVal=nums[i]; 
        if(currVal>sub[sub.length-1]){
            sub.push(currVal);
        } else {
            const j=binarySearch(sub, currVal);
            sub[j]=currVal;
        }
    }
    return sub.length;
};
/**
Let's run that example nums = [2, 6, 8, 3, 4, 5, 1] again:
    Let pick the first element, sub = [2].
    6 is greater than previous number, sub = [2, 6]
    8 is greater than previous number, sub = [2, 6, 8]
    3 is less than previous number, so we can't extend the subsequence sub. 
    We need to find the smallest number >= 3 in sub, it's 6. 
    Then we overwrite it, now sub = [2, 3, 8].
    4 is less than previous number, so we can't extend the subsequence sub. 
    We overwrite 8 by 4, so sub = [2, 3, 4].
    5 is greater than previous number, sub = [2, 3, 4, 5].
    1 is less than previous number, so we can't extend the subsequence sub.
    We overwrite 2 by 1, so sub = [1, 3, 4, 5].
    Finally, length of longest increase subsequence = len(sub) = 4.
*/