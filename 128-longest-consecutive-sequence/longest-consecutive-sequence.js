/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //FIRST APPROCH WILL BE SORTING THE ARRAY AND FINDING 
    //CONSECUTIVE NUMBERS COUNT AND STORE LONGEST COUNT
    //TIME COMPLEXITY : O(N*LOG(N))

    let longest = 1;
    let set = new Set();
    //If size is 0, no longest consecutive sequence
    if(nums.length==0)return 0;
    //everything stored in set to avoid repeated numbers
    for(let i=0;i<nums.length;i++){
        set.add(nums[i]);
    }
    //loop through the array
    for(let i=0;i<nums.length;i++){
        let count=1;
        //if set already has nums[i]-1 element present then it's not
        //starting point of set so SKIP 
        if(!set.has(nums[i]-1))
        //Once we get starting point
        {
            let startPoint = nums[i];
            //loop through the nums[i],nums[i+1],...
            //to count longest consecutive sequence
            while(set.has(startPoint+1)){
                startPoint++;
                count++;
            }
            //update longest after each sequence 
            longest = Math.max(longest,count);
        }
    }
    return longest;
    //TIME COMPLEXITY : O(N)
    //SPACE COMPLEXITY : O(N) FOR USING SET DATA STRUCTURE
};