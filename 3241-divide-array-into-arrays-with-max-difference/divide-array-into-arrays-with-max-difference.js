/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    /**
    PROBLEM OF THE DAY : 01-02-24
     */
    //Trick it to sort the array first
    //Make subarray with consecutive elements
    //Then check each subarray of size 3 if elements diff <=k
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