/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res=[];
    let subset=[];
    const dfs=(i)=>{
        if(i>=nums.length){
            //save copy of subset to res array
            res.push(subset.slice());
            return;
        }
        //include the current element to subset
        subset.push(nums[i]);
        dfs(i+1);
        //not include(thats why pop) element to subset
        subset.pop();
        dfs(i+1);
    };
    dfs(0);
    return res;
    /***
    SHORT SOLUTION:
    if (nums.length === 0) return [ [] ];
    const first = nums[0];
    const remaining = nums.slice(1);
    const remainingSubsets = subsets(remaining);
    const firstSubsets = remainingSubsets.map(sub => [first, ...sub]) ;
    return [...firstSubsets, ...remainingSubsets];
    */
};