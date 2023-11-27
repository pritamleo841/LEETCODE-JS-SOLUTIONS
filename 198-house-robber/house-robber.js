/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //dp - [1,2,3,4]=>[r2,r1,n,n+1]
    //we can either rob r2 and n or r1 and n+1
    //rob(i) = Math.max( rob(i - 2) + currentHouseValue, rob(i - 1) )

    if(!nums.length){
        return 0;
    }
    // let [prev1,prev2]=[0,0];
    // for(let n of nums){
    //     //i can either rob current house and next to next to current house
    //     //or i can rob next to current house
    //     let temp = Math.max(n+prev1,prev2);
    //     prev1 = prev2;
    //     prev2 = temp;
    // }
    // //end house
    // return prev2;

    //we can also use state variable to use dp tabulation method
    let n = nums.length
    let state = new Array(n).fill(-1);
    //if there is only one house im just robbing that
    state[n-1] = nums[n-1]
    //if there are only 2 houses i would rob the one which gives me max
    state[n-2] = Math.max(nums[n-1], nums[n-2])
    for( let i = n-3; i >= 0; i--) {
        //else i would be having 2 chocies either to rob a house or skip it
        state[i] = Math.max(nums[i]+state[i+2], state[i+1])
    }
    return state[0];
};