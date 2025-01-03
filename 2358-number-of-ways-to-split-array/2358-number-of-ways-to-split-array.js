/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let prefix = Array(nums.length).fill(0);
    let postfix = Array(nums.length).fill(0);

    for(let i=0;i<nums.length;i++){
        if(i==0)
            prefix[i]=nums[i];
        else
            prefix[i]=prefix[i-1]+nums[i];
    }

    for(let i=nums.length-1;i>=0;i--){
        if(i==nums.length-1)
            postfix[i]=nums[i];
        else
            postfix[i]=postfix[i+1]+nums[i];
    }

    let count=0;
    for(let i=0;i<nums.length;i++){
        if(i!=nums.length-1 && prefix[i]>=postfix[i+1])count++;
    }

    return count;
};