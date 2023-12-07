/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    //SC : O(m+n) solution using two lists
    const [rows,cols] = [matrix.length,matrix[0].length];
    const [dummyRow,dummyCol] = [new Array(rows).fill(-1),new Array(cols).fill(-1)];
    //if any index is 0, set row and col for that index to 0 as well
    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(matrix[r][c]==0){
                [dummyRow[r],dummyCol[c]]=[0,0];
            }
        }
    }
    //update the matrix using the lists
    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(dummyRow[r]==0 || dummyCol[c]==0){
                matrix[r][c]=0;
            }
        }
    }
};