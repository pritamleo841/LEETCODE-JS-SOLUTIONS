/**
 * @param {number[]} nums
 * @return {number}
 */
/**
    As the last house is connected back to first house in a circular way,
    we cannot have a loot which involves both first house and last house.
    So, we can split the problem into 2 parts:
        1. To start from house1 and go till house n-1 (last house - 1)
        2. To start from house2 and go till house n (last house)
        and then take the maximum of the two loots and return.
*/
var rob = function(nums) {
    if(nums.length==1){
        //if only one house, then return that house
        return nums[0];
    }
    //nums.slice(1) -> returns an array without first element of array
    //nums.slice(0,-1) -> returns an array without last element of array
    return Math.max(houseRobber1(nums.slice(1)),houseRobber1(nums.slice(0,-1)));
};
var houseRobber1 = function(nums) {
    //dp - [1,2,3,4]=>[r2,r1,n,n+1]
    //we can either rob r2 and n or r1 and n+1
    //rob(i) = Math.max( rob(i - 2) + currentHouseValue, rob(i - 1) )
    if(!nums.length){
        return 0;
    }
    let [prev1,prev2]=[0,0];
    for(let n of nums){
        //i can either rob current house and next to next to current house
        //or i can rob next to current house
        let temp = Math.max(n+prev1,prev2);
        prev1 = prev2;
        prev2 = temp;
    }
    //end house
    return prev2;
}