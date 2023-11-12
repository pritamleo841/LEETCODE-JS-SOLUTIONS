/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result=[];
    //first sort
    nums=nums.sort((a,b)=>a-b);
    //Loop through
    for(let i=0;i<nums.length-2;i++){
        //skip same elements
        if(i>0 && nums[i]==nums[i-1])continue;
        let target = 0-nums[i];
        let left = i+1;
        let right = nums.length-1;
        while(left<right){
            let sum = nums[left]+nums[right];
            if(sum==target){
                result.push([nums[i],nums[left],nums[right]]);
                //skip same elements
                while(left<right && nums[left]==nums[left+1])left++;
                //skip same elements
                while(left<right && nums[right]==nums[right-1])right--;
                left++;
                right--;
            }
            else if(sum>target)right--;
            else left++;
        }
    }
    return result;
};