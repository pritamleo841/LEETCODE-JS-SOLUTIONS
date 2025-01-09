/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count=0;
    for(let elm of words){
        if(elm.startsWith(pref))count++;
    }
    return count;
};