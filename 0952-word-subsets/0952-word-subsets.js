/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {

let req = {}; // To store the max frequency of each character

    // Calculate the maximum frequency needed for each character from words2
    for (let word of words2) {
        let cur = {};
        for (let c of word) {
            cur[c] = (cur[c] || 0) + 1;
            req[c] = Math.max(req[c] || 0, cur[c]);
        }
    }

    let result = [];

    // Check each word in words1
    for (let word of words1) {
        let cur = {};
        for (let c of word) {
            cur[c] = (cur[c] || 0) + 1;
        }

        let isUniversal = true;
        for (let [ch, frq] of Object.entries(req)) {
            if ((cur[ch] || 0) < frq) {
                isUniversal = false;
                break;
            }
        }

        if (isUniversal) result.push(word);
    }

    return result;
    // const checkForSameCount = (charCounts,map)=>{
    //         // Check if all characters in the map have the required count
    //         for(const [char, requiredCount] of map.entries()) {
    //             console.log(char,requiredCount);
    //             if(!charCounts.has(char)) {
    //                 return false;
    //             }
    //         }
    //         return true;
    // };

    // let res = [];
    // let map = new Map();
    // for(let elem of words2){
    //     map.set(elem,(map.get(elem) || 0)+1);
    // }

    // for(let elem of words1){
    //     const map2 = new Map();
    //     for (const char of elem) {
    //         map2.set(char,(map2.get(char) || 0)+1)
    //     }

    //     if(checkForSameCount(map2,map)){
    //         res.push(elem);
    //     }
        
    // }

    // return res;
};