/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
   const set = new Set();
    for(let triplet of triplets){
        //check for bad triplets
        if(triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2]) continue;
        //save good triplets
        for(let i=0; i< triplet.length; i++){
            if(triplet[i] === target[i]) set.add(i);
        }
    }
    return set.size === target.length;
};