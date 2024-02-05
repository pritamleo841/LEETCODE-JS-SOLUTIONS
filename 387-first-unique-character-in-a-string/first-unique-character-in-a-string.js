/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //PROBLEM OF THE DAY-05-02-24
    let map=new Map(); //use map of array of chars
    for(let char of s){
        map.set(char,(map.get(char) || 0 ) +1 );
    }
    for(let [key,val] of map.entries()){
        if(val==1)return s.indexOf(key);
    }
    return -1;
};