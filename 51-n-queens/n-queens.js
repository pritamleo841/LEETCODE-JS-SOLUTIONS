/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    //create a 2D chessboard with . values
    let chessboard = new Array(n);
    for(let i=0;i<n;i++){
        chessboard[i]=new Array(n).fill(".");
    }
    let result=[];
    const isValidQueen=(row,col)=>{
        //check for spots above this column
        for(let i=0;i<row;i++){
            if(chessboard[i][col]=='Q')return false;
        }
        //check for up left
        for(let i=row-1,j=col-1;i>=0 && j>=0;i--,j--){
            if(chessboard[i][j]=='Q')return false;
        }
        //check for up right
        for(let i=row-1,j=col+1;i>=0 && j<=n-1;i--,j++){
            if(chessboard[i][j]=='Q')return false;
        }
        return true;
    };
    const backtrack=(row)=>{
        if(row==n){
            //push a chessboard copy
            result.push([...chessboard].map(row=>row.join('')));
            return;
        }
        for(let col=0;col<n;col++){
            //if valid then backtrack
            if(isValidQueen(row,col)){
                chessboard[row][col]='Q';
                backtrack(row+1);
                chessboard[row][col]='.';
            }
        }
    };
    backtrack(0);
    return result;
};