/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    
    const feasible = (day)=>{
        let flowers=0;
        let bouqets=0;
        for(let bloom of bloomDay){
            if(bloom>day){
                flowers=0;
            }else{
                bouqets+=Math.floor((flowers+1)/k);
                flowers=(flowers+1)%k;
            }
        }
        return bouqets>=m;
    };

    if(bloomDay.length<m*k)return -1;

    let [left,right]=[1,Math.max(...bloomDay)];

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