/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    const operation = (a,b,symbol)=>{
        switch(symbol){
            case "+": return b+a;
            case "-": return b-a;
            case "*": return b*a;
            case "/": return Math.trunc(b/a);
        }
    };
    for(let char of tokens){
        //when not operator, push into stack
        if(!['+','-','*','/'].includes(char)){
            stack.push(char);
        }
        //else,pop first two values and evaluate,then push result back into stack
        else{
            stack.push(operation(+stack.pop(),+stack.pop(),char));
        }
    }
    return stack[0];
};