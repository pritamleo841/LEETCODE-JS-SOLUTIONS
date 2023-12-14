/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    //The range of bananas that Koko can eat is k = 1 to Max(piles)
    let [left,right] = [1,Math.max(...piles)];
    while(left<=right){
        //mid is the count of bananas that koko decide to eat. 
        let mid = Math.floor(left+(right-left)/2);
        //So how many hours she will take to finish the piles?
        let hours = 0;
        for(let pile of piles){
            hours+=Math.ceil(pile/mid);
        }
        if(hours>h){
            //she will not be to finish the pile so we have 
            //to increase the bananas by moving start
            left=mid+1;
        }else{
            //she will be eating too fast so we can reduce the bananas 
            //so she eats slowly. So decrement end
            right=mid-1;
        }
    }
    //Because we want the minimum number of bananas she can eat in an hour
    return left;
};