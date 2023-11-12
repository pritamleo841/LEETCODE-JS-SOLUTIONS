/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //take set to store unique values
    let set = new Set();
    let left =0;
    let maxCount = 0;

    if(s.length<=1)
        return s.length;
    
    //sliding window towards end of s
    for(let right in s){
        //while set has duplicate characters from set
        while(set.has(s[right])){
            //update the left character forward by reducing the length
            set.delete(s[left]);
            left+=1;
        }
        //otherwise add the new characters into set
        set.add(s[right]);
        //update your count with each calculation
        maxCount=Math.max(maxCount,right-left+1);
    }
    return maxCount;
};