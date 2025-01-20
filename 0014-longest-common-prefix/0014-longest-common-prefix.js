/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    if(strs.length===0)return prefix;

    for(let i=0;i<strs[0].length;i++){
        //check character by character of first word
        let char = strs[0][i];
        for(let j=0;j<strs.length;j++){
            //if at any point it doesn't match return prefix
            if(strs[j][i]!=char)return prefix;
        }
        prefix+=char;
    }
    return prefix;
};  