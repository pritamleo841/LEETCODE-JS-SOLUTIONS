/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    //Simple two-pointers (opposite directional) as Sorted array is given
   let [left,right]=[0,numbers.length-1];
   while(left<right){
       let sum = numbers[left]+numbers[right];
       //if sum>target, it means we eliminate the present rightmost index
       if(sum>target){
           right-=1;
        //else we remove the present leftmost index
       }else if(sum<target){
           left+=1;
        //we have found the indexes so return it
       }else{
           return [left+1,right+1];
       }
   }
};