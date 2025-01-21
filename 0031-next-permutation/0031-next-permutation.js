/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    const len = nums.length;
    let index_1=-1;
    for(let i=len-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            index_1 = i;
            break;
        }
    }
    if(index_1===-1)return nums.reverse();

    for(let i=len-1;i>0;i--){
        if(nums[i]>nums[index_1]){
            [nums[index_1],nums[i]]=[nums[i],nums[index_1]];
            break;
        }
    }

    return nums.splice(index_1 + 1, len - index_1 - 1, ...nums.slice(index_1 + 1).reverse());
};
