/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    
    const condition=(divisor)=>{
        const sum = nums.reduce((acc,num)=>acc+Math.ceil(num/divisor),0);
        return sum<=threshold;
    }

    let [left,right]=[1,Math.max(...nums)];
    while(left<right){
        let mid = left+Math.floor((right-left)/2);
        if(condition(mid))
            right=mid;
        else
            left=mid+1;
    }
    return left;
};