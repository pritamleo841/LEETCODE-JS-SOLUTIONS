/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //return nums.reduce((a,c,i)=>a+i+1-c,0);
    
    let missingNumber = nums.length;
    for(let i=0;i<nums.length;i++) {
        const xor=(i^nums[i]);
        missingNumber^= xor;
    }
    return missingNumber;
    
};