/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    /**
    Greedy way of thinking :
    1. update position if current tank < 0
    2. check if total tank is < 0
    3. When total tank is positive, 
        it means we have enough gas to over all the previous path.
    */
    let [currTank,totalTank,start]=[0,0,0];
    for(let i=0;i<gas.length;i++){
        totalTank+=gas[i]-cost[i];
        currTank+=gas[i]-cost[i];
        if(currTank<0){ //update
            currTank=0;
            start=i+1;
        }
    }
    return totalTank<0?-1:start;
};