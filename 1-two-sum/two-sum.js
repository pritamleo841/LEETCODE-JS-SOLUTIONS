/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = new Map();
    for(let i=0;i<nums.length;i++){
        let x = target-nums[i];
        if(hash.has(nums[i]))
            return [i,hash.get(nums[i])];
        hash.set(x,i);
    }

    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]+nums[j]==target)
    //             return [i,j];
    //     }
    // }
};