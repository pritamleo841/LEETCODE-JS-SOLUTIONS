/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {

    const feasibile = (capacity)=>{
        let day=1;
        let total=0;
        for(let weight of weights){
            total+=weight;
            if(total>capacity){ //if any weight is greater than capacity, wait for next day to ship it
                total=weight;    
                day+=1;
                if(day>days){ //cannot ship wihtin D days
                    return false;
                }
            }
        }
        return true;
    }
    let [left,right]=[Math.max(...weights),weights.reduce((a,c)=>a+c,0)];

    while(left<right){
        let mid = left+Math.floor((right-left)/2);
        if(feasibile(mid)){
            right=mid;
        }else{
            left=mid+1;
        }
    }
    return left;

};