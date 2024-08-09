/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

   let low = 0, high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        //left part is sorted or not
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                // target is in the left
                high = mid - 1;
            } else {
            // target is in the right
                low = mid + 1;
            }
        }
        //right side sorted
        else {
            if (nums[mid] < target && target <= nums[high]) {
                // target is in the right
                low = mid + 1;
            } else {
                // target is in the left
                high = mid - 1;
            }
        }
    }

    return -1;
};