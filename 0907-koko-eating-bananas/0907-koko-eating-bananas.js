/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    
    const feasible=(speed)=>{
        let time=0;
        for(let pile of piles){
            time+=Math.ceil(pile/speed); //hour to eat all the piles with velocity=>speed
        }
        return (time<=h);
    };

    let [left,right]=[1,Math.max(...piles)];
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