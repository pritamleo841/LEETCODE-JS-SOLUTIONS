/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //with sorting : O(nlogn)
    // nums.sort((a,b)=>a-b);
    // return nums[nums.length-k];
    //with min heap : O(n+klogn), slightly better solution
    const q = new MinPriorityQueue();
    for (let i = 0; i < k; i++) {
        q.enqueue(nums[i]);
    }
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > q.front().element) {
            q.dequeue();
            q.enqueue(nums[i]);
        }
    }
    return q.front().element;
    //With quick select : O(n) in average case
};