/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let mid,low=0,high=nums.length-1;
    let res=nums[0];
    //subsections of array are already sorted
    while(low<=high){
        //for a sorted subsection
        if(nums[low]<nums[high]){
            res = Math.min(res,nums[low]);
            break;
        }
        //must use Math.floor() for JS
        mid= Math.floor((low+high)/2);
        res=Math.min(res,nums[mid]);
        //Basic conditon of binary search using mid element
        if(nums[mid]>=nums[high]){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return res;
};