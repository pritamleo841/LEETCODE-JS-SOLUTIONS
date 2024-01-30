/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    // Must be divisible by groupSize to form all groups
    if((hand.length)%groupSize!=0)return false;
    //  Create a map countMap to count the frequency of each card in the hand.
    const countMap=new Map();
    for(let card of hand){
        countMap.set(card,(countMap.get(card)||0)+1);
    }
    //  Sort the hand in ascending order.
    hand.sort((a,b)=>a-b);
    /*  Iterate through the hand and for each card:
        a. If the frequency of the current card is 0, continue to the next card.
        b. For each number in a group of size groupSize starting from the current card:
            i.  If the frequency of the number is 0,
                return false as it is not possible to form the required group.
            ii. Decrement the frequency of the number in the countMap.
    */
    for(let i=0;i<hand.length;i++){
        if(countMap.get(hand[i])==0)continue;
        for(let j=0;j<groupSize;j++){
            let currCard=hand[i]+j;
            if(countMap.get(currCard)==undefined || countMap.get(currCard)==0){
                return false;
            }
            countMap.set(currCard,countMap.get(currCard)-1);
        }
    }
    //  If we have successfully formed all groups, return true.
    return true;
};