/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    /**
    Basically, take equal characters from start and end of the string
    Find out unique character between that start and end range
    Total No. of unique character for each [start,end] range is the output
    */
    let count=0;
    let set = new Set(s); //only unqiue character are required to avoid duplication
    for(const c of set){
        const start = s.indexOf(c);
        const end = s.lastIndexOf(c);

        if(start<end){
            let unq = new Set();
            for(let i=start+1;i<end;i++){
                unq.add(s[i]);
            }
            count+=unq.size;
        }
    }
    return count;

};