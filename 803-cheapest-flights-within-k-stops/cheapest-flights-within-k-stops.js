/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    //we need bellman-ford algorithm here
    //updating the shorter price for k stops
    let prices = Array(n).fill(Infinity);
    prices[src]=0; //price for source destination
    //loop through k times to find cheapest price
    for(let i=0;i<=k;i++){
        //make a shallow copy of tempPrice
        let tempPrice = [...prices];
        for(let [s,d,p] of flights){
            if(prices[s]==Infinity)continue;
            //update the minimum price 
            tempPrice[d] = Math.min(tempPrice[d],prices[s]+p);
        }
        prices=[...tempPrice];
    }
    return (prices[dst]==Infinity?-1:prices[dst]);
};