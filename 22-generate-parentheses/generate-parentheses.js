/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    /**
    1. If open and close parenthesis count equals n, 
        we append stack elements(joined as string) to res array and stop backtracking
    2. If open count<n, it means we can add more open parenthesis
    3. If close count<open count, it means we can add more close parenthesis
    */
    let stack = [];
    let res = [];
    const backtracking = (open,close)=>{
        if(open == n && close == n){
            res.push(stack.join(""));
            return;
        }
        if(open<n){
            stack.push("(");
            backtracking(open+1,close);
            stack.pop();
        }
        if(close<open){
            stack.push(")");
            backtracking(open,close+1);
            stack.pop();
        }
    }
    backtracking(0,0);
    return res;
};