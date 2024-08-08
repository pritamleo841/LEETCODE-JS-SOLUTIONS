/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
    
    const gcd=(a,b)=>b===0?a:gcd(b,a%b);
    const multiply=(a,b)=>(a/gcd(a,b))*b;
    const floor=(a,b)=>Math.floor(a/b);

    const [ab,bc,ca] = [multiply(a,b),multiply(b,c),multiply(c,a)];
    const abc = multiply(a,bc);
    
    const solution=(x)=>{
        let count = floor(x,a)+floor(x,b)+floor(x,c)-floor(x,ab)-floor(x,bc)-floor(x,ca)+floor(x,abc);
        return count>=n;
    }

    let [left,right]=[0,2*10**9];
    while(left<right){
        let mid=left+Math.floor((right-left)/2);
        if(solution(mid))
            right=mid;
        else
            left=mid+1;
    }
    return left;
};