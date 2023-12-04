/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    //GREEDY SOLUTION
    //Traverse from the end index(goal), and if we reach first index -> return TRUE
    let goalPost = nums.length-1;
    for(let i=nums.length-1;i>=0;i--){
        //if index+value of index is less than goalPost value
        //shift the goalPost forward to index position
        if(i+nums[i]>=goalPost){
            goalPost=i;
        }
    }
    //if goalPost reaches start index,return true else false 
    return (goalPost==0)?true:false;
};