/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let [left,right]=[0,nums.length-1];
    while(left<right){
        let mid = left+Math.floor((right-left+1)/2);
        if(target<nums[mid]){
            right=mid-1;
        }
        else
            left=mid;
    }
    return nums[left]===target?left:-1;
};