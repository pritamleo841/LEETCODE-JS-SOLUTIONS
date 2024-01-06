/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res=[];
    //creating the decision tree
    const dfs=(nums,curr,res)=>{
        //if set has three elements, add to res array
        if(curr.size==nums.length){
            res.push(Array.from(curr));
            return;
        }
        for(let i=0;i<nums.length;i++){
            //if already has nums[i] we don't add it
            if(curr.has(nums[i]))continue;
            //add curr element
            curr.add(nums[i]);
            dfs(nums,curr,res);
            //remove curr element
            curr.delete(nums[i]);
        }
    };
    //using set for unique characters
    dfs(nums,new Set(),res);
    return res;
};