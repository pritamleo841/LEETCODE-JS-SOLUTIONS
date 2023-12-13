/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    /**
    Binary Search Algorithm :
        1. Compare the middle element of the search space with the key. 
        2. If the key is found at middle element, the process is terminated.
        3. If the key is not found at middle element, 
            choose which half will be used as the next search space.
                3A. If the key is smaller than the middle element, 
                    then the left side is used for next search.
                3B. If the key is larger than the middle element, 
                    then the right side is used for next search.
        This process is continued until the key is found or 
        the total search space is exhausted.  
    */
    let [left,mid,right] = [0,0,nums.length-1];
    while(left<=right){
        //Bit Manipulation : a/2 => a>>1
        mid = (left+right)>>1;
        if(target>nums[mid]){
            left = mid+1;
        }
        else if(nums[mid]>target){
            right = mid-1;
        }
        else{
            return mid;
        }
    }
    return -1;
};