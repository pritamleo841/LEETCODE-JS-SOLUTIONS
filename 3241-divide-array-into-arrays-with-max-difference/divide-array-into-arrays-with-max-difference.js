/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    /***
    1. Divide the array into size 3 subarrays
    2. Each element in a subarray should have a diff of atleast k (<=k)
    */
    if(nums.length%3)return [];
    let output=[];
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i+=3){
        if(
            Math.abs(nums[i]-nums[i+1])<=k &&
            Math.abs(nums[i+1]-nums[i+2])<=k &&
            Math.abs(nums[i]-nums[i+2])<=k
        ){
            output.push([nums[i],nums[i+1],nums[i+2]]);
        }else{
            return [];
        }
    }
    return output;
};