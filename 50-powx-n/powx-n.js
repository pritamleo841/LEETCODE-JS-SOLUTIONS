/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    //Using Binary Exponential Approach
    //7^11 =>(11=>1011)=>(7^8*7^2*7^1)
    //TC:O(logn+1)
    let pow=1;
    let t=true;
    if(n<0)t=false;
    if(n<0)n=-n;
    while(n!=0){
        //equivalent to if((n % 2) != 0) i.e. 
        //multiply only when the number is odd
        if((n&1)!=0){
            pow=pow*x;
        }
        x=x*x;
        //equivalent to n = n / 2; 
        //i.e. keep dividing the number by 2
        n=n>>>1;
    }
    return (!t)?1/pow:pow;
};