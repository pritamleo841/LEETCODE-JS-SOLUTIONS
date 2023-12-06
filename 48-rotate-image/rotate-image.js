/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //Transpose the matrix
    for(let i=0;i<matrix.length;i++){
        for(let j=i;j<matrix[0].length;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
        }
    }
    //Reverse each row
    // for(let i=0;i<matrix.length;i++){
    //     for(let j=0;j<matrix[0].length/2;j++){
    //         [matrix[i][j],matrix[i][matrix[0].length-j-1]]=[matrix[i][matrix[0].length-j-1],matrix[i][j]]
    //     }
    // }
    for(let row of matrix){
        row.reverse();
    }
};