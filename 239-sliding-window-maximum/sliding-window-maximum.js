/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    //Sliding window using monotonic decreasing queue
    //Logic: Before we push anything, we first pop everything smaller than it
    let queue = [];
    const output = [];
    //traverse through the nums array
    for(let i=0;i<nums.length;i++){
        //Before we push nums[i], we first pop everything smaller than it
        while(queue && nums[queue[queue.length-1]]<=nums[i]){
            queue.pop();
        }
        //push index into queue
        queue.push(i);
        //remove first index from front of queue, if it's outside window k
        if(queue[0]==i-k){
            queue.shift();
        }
        //if window has k elements, add maximum(front index) to output array
        if(i>=k-1){
            output.push(nums[queue[0]]);
        }
    }
    return output;
};