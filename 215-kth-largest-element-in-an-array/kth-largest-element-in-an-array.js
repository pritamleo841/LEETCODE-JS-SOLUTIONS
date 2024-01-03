/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //With sorting : O(nlogn)
    // nums.sort((a,b)=>a-b);
    // return nums[nums.length-k];

    //With min heap : O(n+klogn), slightly better solution
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
    // if (!nums.length) return nums;
    // // standard quick select algorithm
    // let random = (i, j) => Math.trunc(i + Math.random()*(j - i));
    // let quick_select = (_nums, k) => {
    //     if (!_nums.length) return false;
    //     let pivot = random(0, _nums.length);
    //     // divide
    //     let [left, right] = [[], []];
    //     for (let [i, e] of _nums.entries()) {
    //         if (i == pivot) continue;
    //         if (e < _nums[pivot]) left.push(e);
    //         else right.push(e);
    //     }
    //     // conquer
    //     if (left.length == k) return _nums[pivot];
    //     if (left.length > k) return quick_select(left, k);
    //     return quick_select(right, k - (left.length+1));
    // }
    // return quick_select(nums, nums.length - k);

};