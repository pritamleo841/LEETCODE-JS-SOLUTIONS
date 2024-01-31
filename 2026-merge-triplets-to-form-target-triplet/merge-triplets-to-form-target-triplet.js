/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
   const goodSet=new Set();
   for(let t in triplets){
       let triplet=triplets[t];
       //remove bad triplets, 
       //any triplet which has greater subvalue than target subvalues
       if(
           triplet[0]>target[0] || 
           triplet[1]>target[1] || 
           triplet[2]>target[2]
        )
        {
           continue;
        }
        //check for good triplets for obtaining target
       for(let i=0;i<triplet.length;i++){
           if(triplet[i]===target[i])
           {
               goodSet.add(i);
           }
       }
   }
   return goodSet.size==3;
};