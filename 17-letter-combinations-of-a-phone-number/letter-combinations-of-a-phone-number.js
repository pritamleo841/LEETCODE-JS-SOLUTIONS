/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res=[];
    const digitToChar={
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    };
    const backtrack=(i,currStr)=>{
        //if current string length equals digits array length
        if(currStr.length==digits.length){
            res.push(currStr);
            return;
        }
        //traverse each character of each digit
        for(let c of digitToChar[digits[i]]){
            backtrack(i+1,currStr+c);
        }
    }
    if(digits.length)
        backtrack(0,"");
    return res;
};