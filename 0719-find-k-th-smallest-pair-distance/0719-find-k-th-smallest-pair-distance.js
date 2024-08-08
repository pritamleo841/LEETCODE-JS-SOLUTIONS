/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {

    nums.sort((a,b)=>a-b);
    let len = nums.length;

    const feasible=(distance)=>{
        let count=0,fast=0,slow=0;
        while(slow<len || fast<len){
            while(fast<len && nums[fast]-nums[slow]<=distance){
                fast++;
            }
            count+=fast-slow-1;
            slow++;
        }
        return count>=k;
    }

    let [left,right]=[0,nums[len-1]-nums[0]];
    while(left<right){
        let mid = left+Math.floor((right-left)/2);
        if(feasible(mid)){
            right=mid;
        }else{
            left=mid+1;
        }
    }
    return left;
};