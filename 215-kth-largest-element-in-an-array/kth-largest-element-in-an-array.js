/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //with sorting : O(nlogn)
    nums.sort((a,b)=>a-b);
    return nums[nums.length-k];
    //with max heap : O(n+klogn), slightly better solution
    //With quick select : O(n) in average case
};