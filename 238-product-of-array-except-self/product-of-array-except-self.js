/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [];
    let right = [];
    let prod = [];
    let n = nums.length;
    left[0]=1,right[n-1]=1;
    for(let i=1;i<n;i++){
        left[i] = nums[i-1]*left[i-1];
    }
    for(let i=n-2;i>=0;i--){
        right[i]=nums[i+1]*right[i+1];
    }
    for(let i=0;i<n;i++){
        prod[i]=left[i]*right[i];
    }
    return prod;
};