/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count=0;
    while(n){
        //Limit Time Exceeded Intuitive Solution[O(No. of bits)]
        //count+=n%2;
        //n=n>>1;

        //Works faster as n=n&(n-1) removes 1 bit in each iteration
        // n = 1000, n = n&(n-1)=> 1000&0111 =>0000
        //TC : O(No. of 1 bits)
        n=n&(n-1);
        count++
    }
    return count;
};