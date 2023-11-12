/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let left=0,right=1; //left->buy,right->sell
    while(right<prices.length){
        //check if there is any profit
        if(prices[left]<prices[right]){
            //store profit
            maxProfit = Math.max(maxProfit,prices[right]-prices[left]);
        }else{
            //reassign left to right
            left=right;
        }
        right++;
    }
    return maxProfit;
};