/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //Brute-Force DP formulae : output += Min(leftMax[i],rightMax[i]) - height[i]
    //where Find max height(prefix sum) of building travesing from left of array
    //and Find max height(prefix sum) of building travesing from right of array.

    /**
    Two Pointer method will be used for calculating water content at each height
    1.Find max height(prefix sum) of building travesing from left of array
    2.Find max height(prefix sum) of building travesing from right of array.
    3.Then for current index look for prefix sum from both arrays and 
        find the amount of water stored at that point.
    */
    let leftMax = 0;
    let rightMax = 0;
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    
    while(left<=right) {
        leftMax=Math.max(leftMax, height[left]);
        rightMax=Math.max(rightMax, height[right]);
        if(height[left]<height[right]) {
            result += leftMax-height[left++];
        } else {
            result += rightMax-height[right--];
        }
    }
    return result;
    
};