/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res=[];
    const dfs = (i,curr,total)=>{
        if(total==target){
            //make a copy of curr array,then push into res array
            return res.push([...curr]);
        }
        if(i>=candidates.length || total>=target){
            //base case 2
            return;
        }
        //backtracking solution
        //add current candidate to curr array
        curr.push(candidates[i]);
        //call dfs with curr value
        dfs(i,curr,total+candidates[i]);
        //now pop curr value
        curr.pop();
        //go to next index and call dfs without using curr value
        dfs(i+1,curr,total);
        //can also do this using loop
        // for(let i = index; i< candidates.length; i++){
        //       output.push(candidates[i]);
        //       dfs(sum-candidates[i], i);
        //       output.pop()
        //}
    };
    //initialize dfs
    dfs(0,[],0);
    return res;
};