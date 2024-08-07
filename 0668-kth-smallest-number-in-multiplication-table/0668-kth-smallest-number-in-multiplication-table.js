/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    
    /**
    Answer is the smallest number mid such that there are k numbers less than or equal to mid.
    For eg. m=2, n=3, k=3, then we have the values [1,2,2,3,4,6]. 2 has k numbers less or equal to itself. 
    Thus, 2 is answer in this case. If k=5, then we had 4 in the table which had k=5 numbers <= 4.
    */
    const feasible=(mid)=>{
        let add = 0;
        for(let i=1;i<=m;i++){
            add+=Math.min(Math.floor(mid/i),n);
        }
        return add>=k;
    }

    let [left,right]=[1,m*n];
    while(left<right){
        let mid = left+Math.floor((right-left)/2);
        if(feasible(mid)){
            right=mid;
        }else{
            left=mid+1;
        }
    }
    return left;
};