/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xor=0;
    for(let i of nums){
        xor^=i;
    }
    return xor;
};