/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftMin=0,leftMax=0;
    // open parentheses count in range [cmin, cmax]
    for(let c of s){
        if(c==='('){
            leftMin++;
            leftMax++;
        }
        else if(c===')'){
            leftMin--;
            leftMax--;
        }
        else{
            // if `*` become `(` then openCount++
            // if `*` become `)` then openCount--
            leftMin--;
            leftMax++;
            // if `*` become `` then nothing happens
            // So openCount will be in new range [cmin-1, cmax+1]
        }
        // Currently, don't have enough open parentheses to match close parentheses-> Invalid
        if(leftMax<0)return false;
        //// It's invalid if open parentheses count < 0 that's why cmin can't be negative
        if(leftMin<0)leftMin=0;
    }
    // Return true if can found `openCount == 0` in range [cmin, cmax]
    return leftMin===0;
};