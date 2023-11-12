/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    for(let i=0;i<s.length;i++){
        if(s[i]=='(' || s[i]=='{' || s[i] == '['){
            stack.push(s[i]);
        }
        if(s[i]==')'){
            if(stack[stack.length-1]=='('){
                stack.pop();
            }else
                return false;
        }
        if(s[i]=='}'){
            if(stack[stack.length-1]=='{'){
                stack.pop();
            }else
                return false;
        }
        if(s[i]==']'){
            if(stack[stack.length-1]=='['){
                stack.pop();
            }else
                return false;
        }
    }
    return stack.length==0?true:false;
};