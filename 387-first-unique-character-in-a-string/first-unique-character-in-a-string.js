/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map=new Map();
    for(let char of s){
        map.set(char,(map.get(char) || 0 ) +1 );
    }
    for(let [key,val] of map.entries()){
        if(val==1)return s.indexOf(key);
    }
    return -1;
};