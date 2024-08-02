/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let [left,right]=[0,x+1];
    while(left<right){
        let mid=left+Math.floor((right-left)/2);
        if(mid*mid>x){
            right=mid;
        }else{
            left=mid+1;
        }
    }
    return left-1;
};