/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res=[];

    const isPalindrome = (str) =>(str === str.split('').reverse().join(''));

    const backtrack=(str,partition,res)=>{
        //base case 1
        if(str.length==0){
            res.push(partition.slice());
            return;
        }
        //go through the str
        for(let i=1;i<=str.length;i++){
            let prefix=str.substring(0,i);
            let postfix=str.substring(i);
            //if palindrome then only backtrack
            if(isPalindrome(prefix)){
                partition.push(prefix);
                backtrack(postfix,partition,res);
                partition.pop();
            }
        }
    };
    backtrack(s,[],res);
    return res;
};