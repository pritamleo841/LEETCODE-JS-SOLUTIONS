/**
 * @param {number[]} nums
 * @return {number}
 */
/**
The intuition is that we store the information about our previous maximum product, and as we iterate through the array, we keep using our previous maximum to calculate the new maximum product.
The tricky part of this problem is that negative numbers exist in the input array. This causes situations where the smallest previous product (a negative number) can become the largest product if the next number in line is also a negative number.
Since the minimum product may have a chance to become the maximum, we need to store the information about the previous minimum as well and take it into account when we are calculating our maximum product.
 */
var maxProduct = function(nums) {
   let max = nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        const options = [nums[i], nums[i] * prevMax, nums[i] * prevMin];
        prevMax = Math.max(...options);
        prevMin = Math.min(...options);
        
        max = Math.max(max, prevMax);
    }
    
    return max;
};