/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const squareOfNum=(n)=>{
        let sum=0;
        while(n){
            let temp=n%10;
            sum+=temp*temp;
            n=Math.floor(n/10);
        }
        return sum;
    };
    //We use Floyd's Cycle detection algorithm here
    //We detect cycle and check if there is any 1 inside the cycle
    let slow,fast;
    slow=fast=n;
    do{
        slow=squareOfNum(slow);
        fast=squareOfNum(squareOfNum(fast));
    }while(slow!=fast);
    if(slow==1)return true;
    return false;
};