/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let [left,right]=[0,nums.length-1];
    const feasible=(mid)=>{
        return nums[mid]<nums[right];
    }
    while(left<right){
        let mid=left+Math.floor((right-left)/2);
        if(feasible(mid))
            right=mid;
        else
            left=mid+1;
    }
    return nums[left];
};