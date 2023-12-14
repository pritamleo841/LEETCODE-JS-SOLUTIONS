/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    /**
    #Remeber two important properties :
        1. n*m matrix convert to an array := matrix[x][y] => a[x*m+y]
        2. An array convert to n*m matrix := a[x] => matrix[x/m][x%m];
    */
    let [ROWS,COLS] = [matrix.length,matrix[0].length];
    let [left,right] = [0,(ROWS*COLS)-1];
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        let midValue = matrix[Math.floor(mid/COLS)][mid%COLS];
        if(midValue == target){
            return true;
        }
        else if(midValue<target){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return false;
};