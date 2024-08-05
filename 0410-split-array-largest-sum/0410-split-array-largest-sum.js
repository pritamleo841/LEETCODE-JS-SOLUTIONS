/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    //Binary Search Pattern
    const feasible=(capacity)=>{
        let total=0;
        let count=1;
        for(let num of nums){
            total+=num;
            if(total>capacity){
                total=num;
                count+=1;
                if(count>k){
                    return false;
                }
            }
        }
        return true;
    };

    let [left,right]=[Math.max(...nums),nums.reduce((a,c)=>a+c,0)];
    while(left<right){
        let mid = left+Math.floor((right-left)/2);
        if(feasible(mid)){ 
            right=mid;
        }
        else{
            left=mid+1;
        }
    }
    return left;
};