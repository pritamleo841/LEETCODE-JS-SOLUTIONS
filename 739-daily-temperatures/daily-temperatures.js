/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    //Simple Monotonic Decreasing Stack Problem
    /** We keeping index into stack. Once we encountered temperature 
        which is greater than top of stack we just pop out stack and store in thee
        result as (t - index) to popped index.
    */
    let stack = [];
    let output = new Array(temperatures.length).fill(0);
    const stackTop=(stack)=>stack[stack.length-1];

    for(let t=0;t<temperatures.length;t++){
        //Monotonic condition
        while(stack.length && temperatures[stackTop(stack)]<temperatures[t]){
            const index = stack.pop();
            output[index] = t-index; //store no. of days difference
        }
        stack.push(t);
    }
    return output;
};