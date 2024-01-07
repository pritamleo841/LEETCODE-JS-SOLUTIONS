/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res=[];
    //sort the array
    nums.sort((a,b)=>a-b);
    const backtrack=(i,subset)=>{
        if(i==nums.length){
            res.push(subset.slice());
            return;
        }
        //we include nums[i]
        subset.push(nums[i]);
        backtrack(i+1,subset);
        subset.pop();

        //we don't include num[i]
        //skip duplicate elements (array is sorted)
        while(i+1<nums.length && nums[i]==nums[i+1]){
            i+=1;
        }
        backtrack(i+1,subset);
    };
    backtrack(0,[]);
    return res;
};