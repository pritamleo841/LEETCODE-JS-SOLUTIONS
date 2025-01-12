/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const rbs = (nums,target)=>{
        let n=nums.length-1
        let low=0,high=n
        let ans=-1;
        while(low<=high){
            mid=low+Math.floor((high-low)/2)
            if(nums[mid]==target){
                ans=mid;
                high=mid-1;
            }
            else if(nums[mid]>target){
                high=mid-1
            }
            else{
                low=mid+1
            }
        }
        return ans;
    }

     const lbs = (nums,target)=>{
        let n=nums.length-1
        let low=0,high=n
        let ans=-1;
        while(low<=high){
            mid=low+Math.floor((high-low)/2)
            if(nums[mid]==target){
                ans=mid;
                low=mid+1;
            }
            else if(nums[mid]>target){
                high=mid-1
            }
            else{
                low=mid+1
            }
        }
        return ans;
    }

    return [rbs(nums,target),lbs(nums,target)];
};