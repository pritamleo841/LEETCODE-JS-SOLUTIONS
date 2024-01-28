/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    //greedy way- simple bfs algorithm
    /**
    e.g.,[2,3,1,1,4]=>
    [[2],[3,1],[1,4]] where 4 is the target. 
    So to reach from 2 to 4 we need 2 jumps;
    */
    let jumps=0;
    let l=0,r=0;
    while(r<nums.length-1){
        let farthest=0;
        for(let i=l;i<=r;i++){
            //current jump = i+nums[i]
            farthest=Math.max(farthest,i+nums[i]);
        }
        //update left and right pointers
        l=r+1;
        r=farthest;
        jumps++;
    }
    return jumps;
};