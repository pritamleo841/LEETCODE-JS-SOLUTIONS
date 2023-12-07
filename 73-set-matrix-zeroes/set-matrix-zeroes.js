/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var setZeroes = function(matrix) {
//     //SC : O(m+n) solution using two lists
//     const [rows,cols] = [matrix.length,matrix[0].length];
//     const [dummyRow,dummyCol] = [new Array(rows).fill(-1),new Array(cols).fill(-1)];
//     //if any index is 0, set row and col for that index to 0 as well
//     for(let r=0;r<rows;r++){
//         for(let c=0;c<cols;c++){
//             if(matrix[r][c]==0){
//                 [dummyRow[r],dummyCol[c]]=[0,0];
//             }
//         }
//     }
//     //update the matrix using the lists
//     for(let r=0;r<rows;r++){
//         for(let c=0;c<cols;c++){
//             if(dummyRow[r]==0 || dummyCol[c]==0){
//                 matrix[r][c]=0;
//             }
//         }
//     }
// };
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    //SC : O(1) solution using two variables 
    let m = matrix.length;
    let n = matrix[0].length;
    let firstRow = false;
    let firstCol = false;
    //if any row/col is 0, other than first row and first col => set to 0
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==0){
                if(i==0) firstRow = true;
                if(j==0) firstCol = true;
                matrix[0][j]=0;
                matrix[i][0]=0;
            }
        }
    }
    //for rows/cols other than first, update the matrix in place
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            if(matrix[i][0]==0 || matrix[0][j]==0){
                matrix[i][j]=0;
            }
        }
    }
    //if firstRow is true, update the first row of matrix
    if(firstRow){
        for(let j=0;j<n;j++){
            matrix[0][j] = 0;
        }
    }
    //if firstCol is true, update the first col of matrix
    if(firstCol) {
        for(let i=0;i<m;i++){
            matrix[i][0]= 0;
        }
    }
};