/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    //go from reverse and store min values at each index
    cost.push(0); //push 0 at the out of bounds position
    for(let i=cost.length-3;i>=0;i--){
        //jump one or two steps, store cost of min cost jump
        cost[i]+=Math.min(cost[i+1],cost[i+2]);
    }
    //min cost of any of first two jumps
    return Math.min(cost[0],cost[1]);
    /**
    let oneAway = cost[1];
    let twoAway = cost[0];

    for (let i = 2; i < cost.length; i++) {
        let cur = Math.min(oneAway, twoAway) + cost[i];
        twoAway = oneAway;
        oneAway = cur;
    }

    return Math.min(oneAway, twoAway);
    
     */
};