/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let [n,m]=[board.length,board[0].length];

    //boundary dfs problem,run dfs on boundary values only
    const boundaryDfs = (r,c)=>{
        if((r<0 || c<0) || (r>=n || c>=m) || (['T','X'].includes(board[r][c]))){
            return;
        }
        board[r][c]='T';
        const dir=[[1,0],[-1,0],[0,1],[0,-1]];
        for(let [dr,dc] of dir){
            boundaryDfs(r+dr,c+dc);
        }
    };
    //run dfs on boundary values only
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(board[i][j]=='O' && (i==0 || i==n-1 || j==0 || j==m-1)){
                boundaryDfs(i,j);
            }
        }
    }
    //revert back the values, if T then O ;otherwise X
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(board[i][j]=='T')board[i][j]='O';
            else board[i][j]='X';
        }
    }
    return board;
};