/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let res = [];
    for(let i=0;i<words.length;i++){
        for(let j=0;j<words.length;j++){
            if(words[j]!==words[i] && words[j].indexOf(words[i])!=-1){
                console.log(words[i],words[j]);
                res.push(words[i])
            }
        }
    }
    return [...new Set(res)];
};