/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //x^0=x, x^x=1, x^y=y^x
    let xor=0;
    for(let i of nums){
        xor^=i;
    }
    return xor;
};