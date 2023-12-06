/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //return nums.reduce((a,c,i)=>a+i+1-c,0);

    //Init the accumulator to nums.length
    //Then XOR (^) the current number with the index
    //Then XOR equals (^=) with the accumulator
    //(0^1^3)^(0^1^2^3)=>2
    let missingNumber = nums.length;
    for(let i=0;i<nums.length;i++) {
        const xor=(i^nums[i]);
        missingNumber^= xor;
    }
    return missingNumber;
    //return nums.reduce((acc, cur, i)=>acc^=i^cur,nums.length);

    
};