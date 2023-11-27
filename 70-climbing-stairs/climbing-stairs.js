/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //dp- bottom up approach
    //base cases : arr[n]=1,arr[n-1]=1
    let [first,second]=[1,1];
    //we shift n to n-1 and n-1 to n-2 ...so on
    for(let i=n-2;i>=0;i--){
        let temp = first;
        first = first+second;
        second = temp;
    }
    //when we reach to the 0th position, we return first
    return first;
};