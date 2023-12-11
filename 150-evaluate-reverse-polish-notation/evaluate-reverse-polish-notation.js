/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    const operation = (a,b,symbol)=>{
        switch(symbol){
            case "+": return a+b;
            case "-": return b-a;
            case "*": return a*b;
            case "/": return Math.trunc(b/a);
        }
    };

    for(let char of tokens){
        if(!['+','-','*','/'].includes(char)){
            stack.push(char);
            console.log(stack);
        }
        else{
            stack.push(operation(+stack.pop(),+stack.pop(),char));
            console.log(stack);
        }
    }
    return stack.pop();
};