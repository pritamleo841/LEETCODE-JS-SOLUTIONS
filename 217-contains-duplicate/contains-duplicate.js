/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let m = nums.length;
    for(let i=0;i<m;i++){
        let x = nums[i];
        for(let j=i+1;j<m;j++){
            if(nums[j]==x)
                return true;
        }
    }
    return false;
};