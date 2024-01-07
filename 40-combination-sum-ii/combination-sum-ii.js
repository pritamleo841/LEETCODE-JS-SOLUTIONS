/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    //sort the candidates array so we can skip duplicates
    candidates.sort((a,b)=>a-b);
    let res=[];
    const backtrack=(sum,curr,idx)=>{
        //if sum equals target then push into res
        if(sum==target){
            res.push(curr.slice());
            return;
        }
        for(let i=idx;i<candidates.length;i++){
            //if duplicate values , continue;
            if(i!=idx && candidates[i]==candidates[i-1])continue;
            //if sum exceeds target return here
            if(sum>target)return;
            curr.push(candidates[i]);
            backtrack(sum+candidates[i],curr,i+1);
            curr.pop();
        }
    };
    backtrack(0,[],0);
    return res;
};